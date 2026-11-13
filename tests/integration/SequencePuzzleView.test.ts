import { afterEach, describe, expect, it } from 'vitest';
import { GameSession, type Command } from '../../src/app/GameSession';
import { createExploration } from '../../src/domain/exploration/World';
import { BASE_N9 } from '../../src/config/maps';
import { SequencePuzzleView } from '../../src/ui/views/SequencePuzzleView';

let cleanup: () => void;
afterEach(() => { cleanup?.(); document.body.replaceChildren(); });
function setup() {
  const session = new GameSession(undefined, undefined, undefined, undefined, {
    load: () => ({ state: { ...createExploration(BASE_N9), position: { x: 376, y: 200 } }, status: 'saved' }), save: () => true,
  });
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
  it('não inclui explicação antes de resolver e mostra dicas uma por vez', () => {
    const { session, view, dispatch } = setup();
    expect(view.element.textContent).not.toContain(session.snapshot.puzzles[0]!.explanation);
    expect(view.element.textContent).toContain('PENDENTE DE REVISÃO DOCENTE');
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
