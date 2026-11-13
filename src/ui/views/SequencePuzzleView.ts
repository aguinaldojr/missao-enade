import type { Command, SessionState } from '../../app/GameSession';
import { puzzleCopy } from '../../config/puzzles';
import { totalPuzzleXp, type SequencePuzzle } from '../../domain/puzzles/SequencePuzzle';
import { button, element } from '../components/elements';

export class SequencePuzzleView {
  readonly element = element('section', 'view puzzle-view');
  readonly puzzleId: string;
  private readonly puzzle: SequencePuzzle;
  private readonly list = element('ol', 'sequence-blocks');
  private readonly rows = new Map<string, HTMLLIElement>();
  private readonly feedback = element('p', 'puzzle-feedback');
  private readonly hintList = element('ol', 'puzzle-hints');
  private readonly hintsButton = button(puzzleCopy.hint, true);
  private readonly validateButton = button(puzzleCopy.validate);
  private readonly success = element('section', 'puzzle-success');
  private readonly explanation = element('p', 'puzzle-explanation');
  private readonly earned = element('p', 'puzzle-earned');
  private readonly xp = element('p', 'puzzle-xp');
  private readonly saved = element('p', 'puzzle-save');
  private readonly retry = button(puzzleCopy.retry, true);
  private readonly replayNotice = element('p', 'helper', puzzleCopy.replayReward);
  private readonly movement = element('p', 'sr-only');
  private previousOrder = '';
  private lastTouchMove = -Infinity;
  private wasSolved = false;
  private drag: { id: string; y: number; to: number; moved: boolean; handle: HTMLButtonElement } | null = null;

  constructor(state: SessionState, private readonly dispatch: (command: Command) => void, signal: AbortSignal) {
    this.puzzleId = state.puzzleAttempt!.puzzleId;
    this.puzzle = state.puzzles.find((puzzle) => puzzle.id === this.puzzleId)!;
    const heading = element('h1', 'section-title', puzzleCopy.title);
    heading.tabIndex = -1;
    const choices = element('div', 'puzzle-choices');
    choices.setAttribute('role', 'group');
    choices.setAttribute('aria-label', 'Exercícios de Sequência Lógica');
    for (const puzzle of state.puzzles) {
      const choose = button(puzzle.title, true);
      choose.setAttribute('aria-pressed', String(puzzle.id === this.puzzleId));
      choose.addEventListener('click', () => dispatch({ type: 'select-puzzle', id: puzzle.id }), { signal });
      choices.append(choose);
    }
    this.element.append(element('p', 'eyebrow', 'TERMINAL TECNOLÓGICO'), heading,
      element('p', 'example-warning', puzzleCopy.provisional), element('p', 'intro intro--small', puzzleCopy.intro),
      choices, element('h2', 'puzzle-title', this.puzzle.title), element('p', 'puzzle-narrative', this.puzzle.narrative),
      this.xp, this.replayNotice, element('p', 'helper', puzzleCopy.controls));
    this.list.setAttribute('aria-label', 'Comandos em ordem');
    for (const block of this.puzzle.blocks) {
      const row = element('li', 'sequence-block');
      row.dataset.blockId = block.id;
      const label = element('span', 'block-text', block.text);
      const number = element('span', 'block-position');
      const handle = button('↕', true);
      handle.classList.add('block-handle');
      handle.dataset.focusKey = block.id + ':handle';
      handle.setAttribute('aria-label', 'Mover bloco: ' + block.text);
      handle.setAttribute('aria-describedby', 'sequence-instructions');
      handle.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
        event.preventDefault();
        const index = [...this.list.children].indexOf(row);
        this.move(block.id, index + (event.key === 'ArrowUp' ? -1 : 1));
      }, { signal });
      handle.addEventListener('pointerdown', (event) => {
        if (event.button !== 0 || handle.disabled) return;
        handle.setPointerCapture(event.pointerId);
        this.drag = { id: block.id, y: event.clientY, to: [...this.list.children].indexOf(row), moved: false, handle };
      }, { signal });
      handle.addEventListener('pointermove', (event) => {
        if (!this.drag || this.drag.id !== block.id) return;
        if (Math.abs(event.clientY - this.drag.y) < 8 && !this.drag.moved) return;
        this.drag.moved = true;
        let closest = Infinity;
        for (const [index, child] of [...this.list.children].entries()) {
          const box = child.getBoundingClientRect();
          const distance = Math.abs(event.clientY - (box.top + box.height / 2));
          if (distance < closest) { closest = distance; this.drag.to = index; }
        }
        for (const [index, child] of [...this.list.children].entries()) child.classList.toggle('drop-target', index === this.drag.to);
      }, { signal });
      const cancel = () => {
        this.drag = null;
        for (const child of this.list.children) child.classList.remove('drop-target');
      };
      handle.addEventListener('pointerup', (event) => {
        const drag = this.drag;
        cancel();
        if (drag?.moved) {
          if (event.pointerType === 'touch') this.lastTouchMove = performance.now();
          this.move(drag.id, drag.to); handle.focus({ preventScroll: true });
        }
      }, { signal });
      handle.addEventListener('pointercancel', cancel, { signal });
      handle.addEventListener('lostpointercapture', cancel, { signal });
      const actions = element('div', 'block-actions');
      for (const [text, offset] of [['Subir', -1], ['Descer', 1]] as const) {
        const move = button(text, true);
        move.dataset.offset = String(offset);
        move.dataset.focusKey = block.id + ':' + offset;
        move.setAttribute('aria-label', text + ': ' + block.text);
        const activate = () => this.move(block.id, [...this.list.children].indexOf(row) + offset);
        move.addEventListener('pointerup', (event) => {
          if (event.pointerType !== 'touch' || move.disabled) return;
          event.preventDefault();
          this.lastTouchMove = performance.now();
          activate();
        }, { signal });
        // Após um arraste, alguns navegadores suprimem o click de toque.
        // O pointerup trata esse caso; ignoramos seu click compatível para mover uma única vez.
        move.addEventListener('click', (event) => {
          if (event.detail === 0 || performance.now() - this.lastTouchMove > 700) activate();
        }, { signal });
        actions.append(move);
      }
      row.append(number, handle, label, actions);
      this.rows.set(block.id, row);
      this.list.append(row);
    }
    const instructions = element('p', 'sr-only', 'Use as setas para cima e para baixo para mover este bloco uma posição.');
    instructions.id = 'sequence-instructions';
    this.movement.setAttribute('role', 'status');
    this.feedback.setAttribute('role', 'status');
    this.hintsButton.addEventListener('click', () => dispatch({ type: 'hint-puzzle', puzzleId: this.puzzleId }), { signal });
    this.validateButton.addEventListener('click', () => dispatch({ type: 'validate-puzzle', puzzleId: this.puzzleId }), { signal });
    const actions = element('div', 'actions puzzle-actions');
    actions.append(this.validateButton, this.hintsButton);
    const successHeading = element('h2', '', puzzleCopy.success);
    successHeading.tabIndex = -1;
    const returnMap = button(puzzleCopy.returnMap);
    returnMap.addEventListener('click', () => dispatch({ type: 'exit-puzzle' }), { signal });
    const replay = button(puzzleCopy.replay, true);
    replay.addEventListener('click', () => dispatch({ type: 'replay-puzzle', puzzleId: this.puzzleId }), { signal });
    this.success.append(successHeading, this.explanation, this.earned, returnMap, replay);
    this.saved.setAttribute('role', 'status');
    this.retry.addEventListener('click', () => dispatch({ type: 'save-puzzles' }), { signal });
    const exit = button(puzzleCopy.exit, true);
    exit.addEventListener('click', () => dispatch({ type: 'exit-puzzle' }), { signal });
    this.element.append(instructions, this.list, this.movement, actions, this.feedback,
      this.hintList, this.success, this.saved, this.retry, exit);
    this.update(state);
  }

  private move(blockId: string, to: number): void {
    this.dispatch({ type: 'reorder-puzzle', puzzleId: this.puzzleId, blockId, to });
  }

  update(state: SessionState): void {
    const attempt = state.puzzleAttempt!;
    const entry = state.puzzleProgress.entries[this.puzzleId]!;
    const key = entry.order.join('|');
    if (key !== this.previousOrder) {
      const active = document.activeElement instanceof HTMLElement ? document.activeElement.dataset.focusKey : undefined;
      for (const id of entry.order) this.list.append(this.rows.get(id)!);
      if (active) {
        const focus = [...this.element.querySelectorAll<HTMLButtonElement>('[data-focus-key]')].find((node) => node.dataset.focusKey === active);
        focus?.focus({ preventScroll: true });
        if (this.previousOrder) this.movement.textContent = 'Ordem atualizada. ' + entry.order.map((id, index) =>
          (index + 1) + ': ' + this.puzzle.blocks.find((block) => block.id === id)!.text).join(' ');
      }
      this.previousOrder = key;
    }
    for (const [index, id] of entry.order.entries()) {
      const row = this.rows.get(id)!;
      row.querySelector('.block-position')!.textContent = String(index + 1);
      row.querySelector<HTMLButtonElement>('.block-handle')!.disabled = attempt.solved;
      for (const control of row.querySelectorAll<HTMLButtonElement>('[data-offset]')) {
        const offset = Number(control.dataset.offset);
        control.disabled = attempt.solved || index + offset < 0 || index + offset >= entry.order.length;
      }
    }
    const feedback = attempt.feedback === 'incorrect' ? puzzleCopy.incorrect : '';
    if (this.feedback.textContent !== feedback) this.feedback.textContent = feedback;
    this.hintList.replaceChildren(...this.puzzle.hints.slice(0, entry.hintsUsed).map((hint) => element('li', '', hint)));
    this.hintsButton.disabled = attempt.solved || entry.hintsUsed === this.puzzle.hints.length;
    this.hintsButton.textContent = entry.hintsUsed === this.puzzle.hints.length ? puzzleCopy.noMoreHints : puzzleCopy.hint;
    this.validateButton.disabled = attempt.solved;
    this.replayNotice.hidden = !entry.completed || attempt.solved;
    this.success.hidden = !attempt.solved;
    // A explicação só entra no DOM após resolver.
    this.explanation.textContent = attempt.solved ? this.puzzle.explanation : '';
    this.earned.textContent = attempt.solved
      ? (attempt.earnedXp ? '+' + attempt.earnedXp + ' XP. Conclusão registrada; passagem liberada.' : 'Conclusão registrada. Sem XP adicional; passagem liberada.') : '';
    this.xp.textContent = puzzleCopy.totalXp(totalPuzzleXp(state.puzzleProgress, state.puzzles));
    this.saved.textContent = state.puzzleSaveStatus === 'saved' ? puzzleCopy.saved
      : state.puzzleSaveStatus === 'invalid' ? puzzleCopy.invalid
        : ['failed', 'unavailable'].includes(state.puzzleSaveStatus) ? puzzleCopy.failed : '';
    this.retry.hidden = !['failed', 'invalid', 'unavailable'].includes(state.puzzleSaveStatus);
    if (attempt.solved && !this.wasSolved) this.success.querySelector<HTMLElement>('h2')!.focus();
    if (!attempt.solved && this.wasSolved) this.element.querySelector<HTMLElement>('h1')!.focus();
    this.wasSolved = attempt.solved;
  }
}
