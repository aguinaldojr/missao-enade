import { describe, expect, it } from 'vitest';
import data from '../../src/content/puzzles/sequences.json';
import provisionalData from '../../src/content/puzzles/enade-2026-provisional-sequences.json';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { LocalStoragePuzzleRepository, PUZZLE_KEY } from '../../src/infrastructure/storage/LocalStoragePuzzleRepository';
import { LocalStorageExplorationRepository, EXPLORATION_KEY } from '../../src/infrastructure/storage/LocalStorageExplorationRepository';
import { emptyPuzzleProgress, isSequenceCorrect, moveBlock, shuffledOrder, totalPuzzleXp, mergePuzzleProgress, type PuzzleProgress } from '../../src/domain/puzzles/SequencePuzzle';
import { GameSession } from '../../src/app/GameSession';
import { createExploration } from '../../src/domain/exploration/World';
import { BASE_N9 } from '../../src/config/maps';

const catalog = new JsonPuzzleRepository(data);
const puzzle = catalog.all()[0]!;
const initial = createExploration(BASE_N9);
const entry = (completed = false) => ({ order: [...puzzle.correctOrder], attempts: completed ? 1 : 0, hintsUsed: 0, completed });
function storage(initialValue?: PuzzleProgress) {
  const values = new Map<string, string>();
  if (initialValue) values.set(PUZZLE_KEY, JSON.stringify(initialValue));
  const adapter = { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } };
  return { values, adapter, repository: new LocalStoragePuzzleRepository(catalog, () => adapter) };
}
function setup() {
  const store = storage();
  let world = { ...initial, position: { x: 376, y: 200 } };
  const start = () => {
    const session = new GameSession(undefined, undefined, undefined, undefined, {
      load: () => ({ state: world, status: 'saved' }), save: (state) => { world = state; return true; },
    }, store.repository, catalog);
    session.dispatch({ type: 'start' });
    session.dispatch({ type: 'select-course', course: 'TRC' });
    session.dispatch({ type: 'enter-central' });
    session.dispatch({ type: 'interact' });
    return session;
  };
  return { ...store, start };
}
function solve(session: GameSession, id = puzzle.id) {
  const definition = catalog.get(id)!;
  for (const [index, blockId] of definition.correctOrder.entries()) session.dispatch({ type: 'reorder-puzzle', puzzleId: id, blockId, to: index });
  session.dispatch({ type: 'validate-puzzle', puzzleId: id });
}

describe('regras de Sequência Lógica', () => {
  it('inicia desordenado e valida permutação completa', () => {
    expect(isSequenceCorrect(shuffledOrder(puzzle, () => 0.999), puzzle)).toBe(false);
    expect(isSequenceCorrect(puzzle.correctOrder, puzzle)).toBe(true);
    expect(isSequenceCorrect([...puzzle.correctOrder, 'missing'], puzzle)).toBe(false);
    const order = shuffledOrder(puzzle, () => 0);
    expect(moveBlock(order, 'missing', 0)).toBe(order);
    expect(moveBlock(order, order[0]!, -1)).toBe(order);
    expect(moveBlock(order, order[0]!, 1.5)).toBe(order);
    expect(moveBlock(order, order[0]!, 2)[2]).toBe(order[0]);
  });
  it('não concede XP por erro e libera dicas gradualmente sem mostrar solução', () => {
    const { start } = setup();
    const session = start();
    session.dispatch({ type: 'validate-puzzle', puzzleId: puzzle.id });
    expect(session.snapshot.puzzleAttempt?.feedback).toBe('incorrect');
    expect(session.snapshot.puzzleProgress.entries[puzzle.id]?.hintsUsed).toBe(1);
    expect(session.puzzleXp).toBe(0);
    expect(session.snapshot.exploration.doorUnlocked).toBe(false);
    session.dispatch({ type: 'validate-puzzle', puzzleId: puzzle.id });
    expect(session.snapshot.puzzleProgress.entries[puzzle.id]?.hintsUsed).toBe(1);
    for (let i = 0; i < 5; i++) session.dispatch({ type: 'hint-puzzle', puzzleId: puzzle.id });
    expect(session.snapshot.puzzleProgress.entries[puzzle.id]?.hintsUsed).toBe(puzzle.hints.length);
    expect(session.snapshot.puzzleAttempt?.solved).toBe(false);
  });
  it('concede XP uma única vez, mantém missão de desafios e retorna à mesma posição', () => {
    const { start, values } = setup();
    const session = start();
    const position = session.snapshot.exploration.position;
    solve(session);
    expect(session.snapshot.puzzleAttempt).toMatchObject({ solved: true, earnedXp: 100 });
    expect(session.puzzleXp).toBe(100);
    expect(session.snapshot.exploration).toMatchObject({ position, doorUnlocked: true, missionStatus: 'available' });
    session.dispatch({ type: 'validate-puzzle', puzzleId: puzzle.id });
    expect(session.puzzleXp).toBe(100);
    session.dispatch({ type: 'replay-puzzle', puzzleId: puzzle.id });
    expect(session.snapshot.puzzleAttempt?.solved).toBe(false);
    solve(session);
    expect(session.snapshot.puzzleAttempt?.earnedXp).toBe(0);
    expect(session.puzzleXp).toBe(100);
    session.dispatch({ type: 'exit-puzzle' });
    expect(session.snapshot.screen).toBe('map');
    expect(session.snapshot.exploration.position).toEqual(position);
    expect(JSON.parse(values.get(PUZZLE_KEY)!).entries[puzzle.id].completed).toBe(true);
    const reloaded = start();
    expect(reloaded.puzzleXp).toBe(100);
    solve(reloaded);
    expect(reloaded.snapshot.puzzleAttempt?.earnedXp).toBe(0);
  });
  it('salva ordem e dicas de tentativa incompleta e concede cada conteúdo apenas uma vez', () => {
    const { start } = setup();
    const session = start();
    session.dispatch({ type: 'reorder-puzzle', puzzleId: puzzle.id, blockId: puzzle.blocks[0]!.id, to: 3 });
    session.dispatch({ type: 'hint-puzzle', puzzleId: puzzle.id });
    const progress = session.snapshot.puzzleProgress;
    expect(start().snapshot.puzzleProgress).toEqual(progress);
    for (const definition of catalog.all()) {
      session.dispatch({ type: 'select-puzzle', id: definition.id });
      solve(session, definition.id);
    }
    expect(session.puzzleXp).toBe(300);
    expect(totalPuzzleXp(start().snapshot.puzzleProgress, catalog.all())).toBe(300);
  });
  it('ignora comandos obsoletos, movimento no puzzle e validação fora da tela', () => {
    const session = setup().start();
    const position = session.snapshot.exploration.position;
    session.dispatch({ type: 'move-player', x: 1, y: 0, seconds: 0.05 });
    expect(session.snapshot.exploration.position).toBe(position);
    session.dispatch({ type: 'select-puzzle', id: 'missing' });
    expect(session.snapshot.puzzleAttempt?.puzzleId).toBe(puzzle.id);
    session.dispatch({ type: 'validate-puzzle', puzzleId: 'missing' });
    expect(session.puzzleXp).toBe(0);
    session.dispatch({ type: 'exit-puzzle' });
    solve(session);
    expect(session.puzzleXp).toBe(0);
  });
});

describe('persistência e recibos por ID', () => {
  it('migra em memória a tentativa e o recibo da versão anterior do puzzle de SI', () => {
    const provisionalCatalog = new JsonPuzzleRepository(provisionalData);
    const values = new Map<string, string>();
    const legacyOrder = ['registrar-custeio', 'confirmar-relato', 'autorizar-demonstrativo',
      'conciliar-trechos', 'calcular-demonstrativo'];
    const stored = { schemaVersion: 1, entries: { 'E26-P-SI-01': {
      order: legacyOrder, attempts: 2, hintsUsed: 1, completed: true,
    } } };
    values.set(PUZZLE_KEY, JSON.stringify(stored));
    const adapter = { getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => { values.set(key, value); } };
    const repository = new LocalStoragePuzzleRepository(provisionalCatalog, () => adapter);
    const loaded = repository.load();
    expect(loaded.status).toBe('saved');
    expect(loaded.progress?.entries['E26-P-SI-01']).toEqual({
      order: ['sincronizar-acesso', 'validar-solicitacao', 'autorizar-acesso',
        'consultar-disponibilidade', 'criar-reserva'],
      attempts: 2, hintsUsed: 1, completed: true,
    });
    expect(values.get(PUZZLE_KEY)).toBe(JSON.stringify(stored));
    expect(repository.save(loaded.progress!).status).toBe('saved');
    expect(JSON.parse(values.get(PUZZLE_KEY)!).entries['E26-P-SI-01'].completed).toBe(true);
  });
  it('mescla conclusões de abas sem duplicar XP ou apagar recibos', () => {
    const { repository, values } = storage();
    const completed = { schemaVersion: 1 as const, entries: { [puzzle.id]: entry(true) } };
    expect(repository.save(completed).status).toBe('saved');
    const stale = { schemaVersion: 1 as const, entries: { [puzzle.id]: entry(false) } };
    const result = repository.save(stale);
    expect(result.progress.entries[puzzle.id]?.completed).toBe(true);
    expect(totalPuzzleXp(result.progress, catalog.all())).toBe(100);
    expect(mergePuzzleProgress(completed, stale).entries[puzzle.id]?.completed).toBe(true);
    expect(values.size).toBe(1);
  });
  it.each(['{', '{}', '{"schemaVersion":2,"entries":{}}', '{"schemaVersion":1,"entries":{"missing":{}}}'])('preserva registro inválido ao ler: %s', (raw) => {
    const { repository, values } = storage();
    values.set(PUZZLE_KEY, raw);
    expect(repository.load().status).toBe('invalid');
    expect(values.get(PUZZLE_KEY)).toBe(raw);
    if (raw.includes('"schemaVersion":2')) {
      expect(repository.save(emptyPuzzleProgress()).status).toBe('failed');
      expect(values.get(PUZZLE_KEY)).toBe(raw);
    }
  });
  it('captura armazenamento bloqueado e quota sem travar', () => {
    const blocked = new LocalStoragePuzzleRepository(catalog, () => { throw new Error('SecurityError'); });
    expect(blocked.load().status).toBe('unavailable');
    expect(blocked.save(emptyPuzzleProgress()).status).toBe('failed');
    const full = new LocalStoragePuzzleRepository(catalog, () => ({ getItem: () => null, setItem: () => { throw new Error('QuotaExceededError'); } }));
    expect(full.save(emptyPuzzleProgress()).status).toBe('failed');
  });
  it('preserva missão de desafios ao reposicionar save ocupado pelo novo terminal', () => {
    const { adapter, values } = storage();
    values.set(EXPLORATION_KEY, JSON.stringify({ ...initial, position: { x: 376, y: 130 }, missionStatus: 'completed', doorUnlocked: true }));
    const repository = new LocalStorageExplorationRepository(() => adapter);
    expect(repository.load().state).toMatchObject({ position: initial.position, missionStatus: 'completed', doorUnlocked: true });
    expect(JSON.parse(values.get(EXPLORATION_KEY)!).position).toEqual({ x: 376, y: 130 });
    expect(repository.save({ ...initial, doorUnlocked: true })).toBe(true);
    expect(repository.load().state?.doorUnlocked).toBe(true);
  });
});
