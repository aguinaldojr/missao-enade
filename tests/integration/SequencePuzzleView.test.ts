import { afterEach, describe, expect, it } from 'vitest';
import { GameSession, type Command } from '../../src/app/GameSession';
import { createExploration } from '../../src/domain/exploration/World';
import { BASE_N9 } from '../../src/config/maps';
import { SequencePuzzleView } from '../../src/ui/views/SequencePuzzleView';
import provisionalPuzzles from '../../src/content/puzzles/enade-2026-provisional-sequences.json';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../src/config/collections';

let cleanup: () => void;
afterEach(() => { cleanup?.(); document.body.replaceChildren(); });
function setup() {
  const session = new GameSession(undefined, undefined, undefined, undefined, {
    load: () => ({ state: { ...createExploration(BASE_N9), position: { x: 376, y: 200 } }, status: 'saved' }), save: () => true,
  }, undefined, new JsonPuzzleRepository(provisionalPuzzles), PROVISIONAL_PLAYABLE_COLLECTION);
  session.dispatch({ type: 'start' });
  session.dispatch({ type: 'select-course', course: 'CC' });
  session.dispatch({ type: 'enter-central' });
  session.dispatch({ type: 'interact' });
  const listeners = new AbortController();
  const dispatch = (command: Command) => { session.dispatch(command); view.update(session.snapshot); };
  const view = new SequencePuzzleView(session.snapshot, dispatch, listeners.signal);
  document.body.append(view.element);
  cleanup = () => listeners.abort();
  const order = () => [...view.element.querySelectorAll<HTMLElement>('[data-block-id]')].map((row) => row.dataset.blockId);
  return { session, view, dispatch, order };
}
describe('interface de sequências', () => {
  it('apresenta o puzzle comum como terminal operacional sem expor a solução', () => {
    const { session, view, dispatch } = setup();
    expect(view.element.querySelector('.common-terminal')).not.toBeNull();
    expect(view.element.querySelector('.puzzle-sequence-console')?.getAttribute('aria-label'))
      .toBe('Fila de recuperação para ordenar');
    expect(view.element.querySelector('.common-briefing')?.getAttribute('aria-label'))
      .toBe('Briefing completo da ocorrência');
    expect(view.element.querySelector('.common-briefing')?.textContent).toContain(session.snapshot.puzzles[0]!.narrative);
    expect(view.element.querySelectorAll('.common-terminal-item')).toHaveLength(4);
    expect([...view.element.querySelectorAll('.block-command')].map((node) => node.textContent))
      .toEqual(expect.arrayContaining(['RECUPERAR', 'VERIFICAR', 'MONTAR', 'TESTAR', 'ATIVAR']));
    expect(view.element.querySelector('.common-terminal')?.getAttribute('data-state')).toBe('recovering');
    const puzzle = session.snapshot.puzzles.find((candidate) => candidate.id === session.snapshot.puzzleAttempt!.puzzleId)!;
    for (const [to, blockId] of puzzle.correctOrder.entries()) dispatch({ type: 'reorder-puzzle', puzzleId: puzzle.id, blockId, to });
    dispatch({ type: 'validate-puzzle', puzzleId: puzzle.id });
    expect(view.element.querySelector('.common-terminal')?.getAttribute('data-state')).toBe('recovered');
    expect(view.element.querySelector('.common-terminal-value:last-child')?.textContent).not.toBe('LIBERADA');
    expect([...view.element.querySelectorAll('.common-terminal-value')].at(-1)?.textContent).toBe('LIBERADA');
    expect(view.element.querySelector('.sequence-blocks')?.classList.contains('sequence-complete')).toBe(true);
  });
  it('não inclui explicação antes de resolver e mostra dicas uma por vez', () => {
    const { session, view, dispatch } = setup();
    expect(view.element.textContent).not.toContain(session.snapshot.puzzles[0]!.explanation);
    expect(view.element.textContent).not.toMatch(/experimental|revisão editorial/i);
    const id = session.snapshot.puzzleAttempt!.puzzleId;
    dispatch({ type: 'validate-puzzle', puzzleId: id });
    expect(view.element.querySelectorAll('.puzzle-hints li')).toHaveLength(1);
    dispatch({ type: 'validate-puzzle', puzzleId: id });
    expect(view.element.querySelectorAll('.puzzle-hints li')).toHaveLength(1);
    dispatch({ type: 'hint-puzzle', puzzleId: id });
    expect(view.element.querySelectorAll('.puzzle-hints li')).toHaveLength(2);
  });
  it('mantém foco ao mover pelo teclado e não permite ultrapassar extremos', () => {
    const { view, order } = setup();
    const handle = view.element.querySelectorAll<HTMLButtonElement>('.block-handle')[1]!;
    const id = order()[1];
    handle.focus();
    handle.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    expect(order()[0]).toBe(id);
    expect(document.activeElement).toBe(handle);
    handle.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    expect(order()[0]).toBe(id);
    expect(view.element.querySelector<HTMLButtonElement>('[data-offset="-1"]')!.disabled).toBe(true);
  });
  it('trata toque uma vez mesmo quando o click compatível atinge outro bloco após reordenar', () => {
    const { view, order } = setup();
    const id = order()[2];
    const row = view.element.querySelectorAll('.sequence-block')[2]!;
    const up = row.querySelector<HTMLButtonElement>('[data-offset="-1"]')!;
    const touch = new MouseEvent('pointerup', { bubbles: true, cancelable: true });
    Object.defineProperty(touch, 'pointerType', { value: 'touch' });
    up.dispatchEvent(touch);
    expect(order()[1]).toBe(id);
    const after = order();
    view.element.querySelectorAll<HTMLButtonElement>('[data-offset="-1"]')[2]!
      .dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
    expect(order()).toEqual(after);
    // Ativação por teclado (detail 0) permanece disponível após o toque.
    up.click();
    expect(order()[0]).toBe(id);
  });
});
