import { describe, expect, it } from 'vitest';
import { BASE_N9 } from '../../src/config/maps';
import { createExploration, isWalkable, movePlayer, nearbyObject } from '../../src/domain/exploration/World';
import { LocalStorageExplorationRepository, EXPLORATION_KEY } from '../../src/infrastructure/storage/LocalStorageExplorationRepository';
import { GameSession } from '../../src/app/GameSession';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import catalog from '../../src/content/questions/central-nexo.json';
import { currentQuestion } from '../../src/domain/progression';

const initial = createExploration(BASE_N9);
describe('exploração e colisões', () => {
  it('move nas quatro direções, normaliza diagonal e limita passos longos', () => {
    for (const direction of [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 1 }]) {
      const next = movePlayer(initial, BASE_N9, direction, 5);
      expect(Math.hypot(next.position.x - initial.position.x, next.position.y - initial.position.y)).toBeCloseTo(7.2);
    }
    expect(movePlayer(initial, BASE_N9, { x: NaN, y: 0 }, 1)).toBe(initial);
    expect(movePlayer(initial, BASE_N9, { x: 0, y: 0 }, 1)).toBe(initial);
  });
  it('bloqueia limites, parede, computador, NPC e terminal', () => {
    for (const position of [{ x: 30, y: 80 }, { x: 610, y: 80 }, { x: 100, y: 30 }, { x: 100, y: 370 },
      { x: 300, y: 150 }, { x: 150, y: 120 }, { x: 240, y: 290 }, { x: 530, y: 130 }]) {
      expect(isWalkable(position, BASE_N9, false)).toBe(false);
    }
    let state = initial;
    for (let i = 0; i < 200; i++) state = movePlayer(state, BASE_N9, { x: -1, y: 0 }, 0.05);
    expect(state.position.x).toBeGreaterThanOrEqual(42);
    expect(isWalkable(state.position, BASE_N9, false)).toBe(true);
    expect(isWalkable({ x: 428, y: 272 }, BASE_N9, false)).toBe(false);
    expect(isWalkable({ x: 428, y: 272 }, BASE_N9, true)).toBe(true);
  });
  it('detecta apenas objetos próximos', () => {
    expect(nearbyObject(initial, BASE_N9)?.kind).toBe('computer');
    expect(nearbyObject({ ...initial, position: { x: 60, y: 350 } }, BASE_N9)).toBeNull();
  });
});

describe('save independente da exploração', () => {
  it('restaura posição/missão/porta sem alterar o resultado legado', () => {
    const data = new Map([['missao-enade:example-result:v1', 'preservar']]);
    const repository = new LocalStorageExplorationRepository(() => ({
      getItem: (key) => data.get(key) ?? null, setItem: (key, value) => { data.set(key, value); },
    }));
    expect(repository.load().status).toBe('none');
    const world = { ...initial, missionStatus: 'completed' as const, doorUnlocked: true, position: { x: 460, y: 270 } };
    expect(repository.save(world)).toBe(true);
    expect(repository.load().state).toEqual(world);
    expect(data.get('missao-enade:example-result:v1')).toBe('preservar');
    data.set(EXPLORATION_KEY, JSON.stringify({ ...initial, schemaVersion: 2 }));
    expect(repository.save(initial)).toBe(false);
    expect(repository.load().status).toBe('invalid');
  });
  it('recusa dados inválidos e mantém registros corrompidos', () => {
    for (const raw of ['{', '{}', JSON.stringify({ ...initial, position: { x: 0, y: 0 } }), JSON.stringify({ ...initial, doorUnlocked: true })]) {
      let stored = raw;
      const repository = new LocalStorageExplorationRepository(() => ({ getItem: () => stored, setItem: (_key, value) => { stored = value; } }));
      expect(repository.load().status).toBe('invalid');
      expect(stored).toBe(raw);
    }
    const repository = new LocalStorageExplorationRepository(() => { throw new Error('SecurityError'); });
    expect(repository.load().status).toBe('unavailable');
    expect(repository.save(initial)).toBe(false);
  });
});

describe('missão na Base N9', () => {
  function sessionAt(position = initial.position) {
    let saved = { ...initial, position };
    const session = new GameSession(new JsonContentRepository(catalog), undefined, undefined, undefined, {
      load: () => ({ state: saved, status: 'saved' }), save: (world) => { saved = world; return true; },
    });
    session.dispatch({ type: 'start' });
    session.dispatch({ type: 'select-course', course: 'CC' });
    session.dispatch({ type: 'enter-central' });
    return { session, saved: () => saved };
  }
  it('NPC apresenta missão e pausa movimento durante diálogo', () => {
    const { session, saved } = sessionAt({ x: 240, y: 236 });
    session.dispatch({ type: 'interact' });
    expect(session.snapshot.worldDialog?.title).toContain('Lia');
    expect(saved().missionStatus).toBe('active');
    session.dispatch({ type: 'move-player', x: 1, y: 0, seconds: 0.05 });
    expect(session.snapshot.exploration.position).toEqual({ x: 240, y: 236 });
    session.dispatch({ type: 'close-dialog' });
    session.dispatch({ type: 'start-phase' });
    expect(session.snapshot.screen).toBe('map');
  });
  it('porta permanece bloqueada até completar dez desafios; zero pontos também libera', () => {
    const { session, saved } = sessionAt();
    const position = session.snapshot.exploration.position;
    session.dispatch({ type: 'interact' });
    expect(session.snapshot.screen).toBe('question');
    for (let i = 0; i < 10; i++) {
      const question = currentQuestion(session.snapshot.attempt!);
      const wrong = question.options.find((option) => option.id !== question.correctOptionId)!.id;
      session.dispatch({ type: 'select-option', questionId: question.id, option: wrong });
      session.dispatch({ type: 'confirm-answer', questionId: question.id });
      session.dispatch({ type: 'feedback-accessed', questionId: question.id });
      session.dispatch({ type: 'next-question', questionId: question.id });
      if (i < 9) expect(session.snapshot.exploration.doorUnlocked).toBe(false);
    }
    expect(session.snapshot.lastResult?.score).toBe(0);
    expect(saved()).toMatchObject({ position, missionStatus: 'completed', doorUnlocked: true });
    session.dispatch({ type: 'return-map' });
    expect(session.snapshot.screen).toBe('map');
    expect(session.snapshot.exploration.position).toEqual(position);
  });
  it('interromper fase não conclui missão; porta e terminal têm diálogos', () => {
    const { session } = sessionAt();
    session.dispatch({ type: 'start-phase' });
    session.dispatch({ type: 'home' });
    expect(session.snapshot.exploration.doorUnlocked).toBe(false);
    const door = sessionAt({ x: 380, y: 272 }).session;
    door.dispatch({ type: 'interact' });
    expect(door.snapshot.worldDialog?.title).toBe('Porta bloqueada');
    const terminal = sessionAt({ x: 536, y: 200 }).session;
    terminal.dispatch({ type: 'interact' });
    expect(terminal.snapshot.worldDialog?.title).toBe('Terminal tecnológico');
  });
});
