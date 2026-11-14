import { totalPuzzleXp } from '../../domain/puzzles/SequencePuzzle';
import { puzzleCopy } from '../../config/puzzles';
import { gameConfig } from '../../config/game';
import { explorationCopy } from '../../config/exploration';
import { MAPS } from '../../config/maps';
import { nearbyObject } from '../../domain/exploration/World';
import { getCourse } from '../../app/courses';
import type { SessionState, Command } from '../../app/GameSession';
import type { MovementControls, Direction } from '../ExplorationControls';
import { button, element } from '../components/elements';

export function mapView(state: SessionState, dispatch: (command: Command) => void, signal: AbortSignal, controls?: MovementControls): HTMLElement {
  if (!state.selectedCourse) throw new Error('Curso necessário.');
  const view = element('section', 'view exploration-view');
  const title = element('h1', 'section-title', explorationCopy.title);
  title.tabIndex = -1;
  view.append(title, element('p', 'helper', explorationCopy.intro));
  const course = element('p', 'selected-name', getCourse(state.selectedCourse).name);
  const mission = state.missions.find((candidate) => candidate.id === state.selectedMissionId)!;
  view.append(course, element('p', 'selected-mission', mission.internalTitle + ' · ' + mission.questionCount + ' desafios'),
    element('p', 'example-warning', state.validationNotice));
  const grid = element('div', 'exploration-grid');
  const area = element('div', 'world-area');
  area.append(element('div', 'world-slot'), element('p', 'world-instructions', explorationCopy.controls), element('p', 'world-legend', explorationCopy.legend));
  const position = element('p', 'sr-only world-position');
  area.append(position);
  const panel = element('div', 'exploration-panel');
  panel.append(element('span', 'tag', gameConfig.copy.exampleTag), element('p', 'world-mission'), element('p', 'world-door'));
  const nearby = element('p', 'world-nearby');
  nearby.setAttribute('role', 'status');
  panel.append(nearby, element('p', 'world-puzzle-xp'));
  const interact = button(explorationCopy.interact);
  interact.classList.add('world-interact');
  interact.addEventListener('click', () => dispatch({ type: 'interact' }), { signal });
  panel.append(interact);
  const pad = element('div', 'direction-pad');
  pad.setAttribute('role', 'group');
  pad.setAttribute('aria-label', 'Controles de movimento');
  for (const [direction, label, glyph] of [
    ['up', 'Mover para cima', '↑'], ['left', 'Mover para esquerda', '←'],
    ['down', 'Mover para baixo', '↓'], ['right', 'Mover para direita', '→'],
  ] as const) {
    const control = button(glyph, true);
    control.dataset.direction = direction;
    control.setAttribute('aria-label', label);
    control.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      control.setPointerCapture(event.pointerId);
      controls?.press(direction);
    }, { signal });
    const release = () => controls?.release(direction);
    control.addEventListener('pointerup', release, { signal });
    control.addEventListener('pointercancel', release, { signal });
    control.addEventListener('lostpointercapture', release, { signal });
    control.addEventListener('click', (event) => {
      if (event.detail === 0) {
        const vectors: Record<Direction, { x: number; y: number }> = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } };
        dispatch({ type: 'move-player', ...vectors[direction], seconds: 0.05 });
        dispatch({ type: 'save-exploration' });
      }
    }, { signal });
    pad.append(control);
  }
  area.insertBefore(pad, area.children[1] ?? null);
  const dialog = element('section', 'world-dialog');
  dialog.hidden = true;
  dialog.setAttribute('aria-labelledby', 'world-dialog-title');
  const heading = element('h2', '', '');
  heading.id = 'world-dialog-title';
  heading.tabIndex = -1;
  const message = element('p', 'world-dialog-message');
  const close = button(explorationCopy.close, true);
  close.addEventListener('click', () => dispatch({ type: 'close-dialog' }), { signal });
  dialog.append(heading, message, close);
  panel.append(dialog);
  const save = element('p', 'world-save');
  save.setAttribute('role', 'status');
  const retry = button(explorationCopy.saveRetry, true);
  retry.classList.add('world-save-retry');
  retry.addEventListener('click', () => dispatch({ type: 'save-exploration' }), { signal });
  panel.append(save, retry);
  const error = element('p', 'content-error');
  error.setAttribute('role', 'alert');
  panel.append(error);
  const actions = element('div', 'actions');
  for (const [text, type] of [[gameConfig.copy.changeCourse, 'change-course'], [gameConfig.copy.menu, 'home']] as const) {
    const action = button(text, true);
    action.addEventListener('click', () => dispatch({ type }), { signal });
    actions.append(action);
  }
  panel.append(actions, element('p', 'helper', gameConfig.copy.missionRules));
  grid.append(area, panel);
  view.append(grid);
  updateMapView(view, state);
  return view;
}

export function updateMapView(view: HTMLElement, state: SessionState): void {
  const world = state.exploration;
  view.querySelector('.world-puzzle-xp')!.textContent = puzzleCopy.totalXp(totalPuzzleXp(state.puzzleProgress, state.puzzles));
  const target = nearbyObject(world, MAPS[world.mapId]!);
  const position = view.querySelector<HTMLElement>('.world-position')!;
  position.dataset.x = String(world.position.x);
  position.dataset.y = String(world.position.y);
  position.textContent = 'Posição no mapa: ' + Math.round(world.position.x) + ', ' + Math.round(world.position.y);
  view.querySelector('.world-mission')!.textContent = explorationCopy.mission[world.missionStatus];
  view.querySelector('.world-door')!.textContent = world.doorUnlocked ? 'Porta: liberada' : 'Porta: bloqueada';
  const hint = view.querySelector<HTMLElement>('.world-nearby')!;
  const hintText = target ? 'Perto de: ' + target.name + '. Use E, Espaço ou o botão para interagir.' : explorationCopy.noNearby;
  if (hint.textContent !== hintText) hint.textContent = hintText;
  const interact = view.querySelector<HTMLButtonElement>('.world-interact')!;
  interact.disabled = !target || state.worldDialog !== null;
  interact.textContent = target?.kind === 'computer' ? gameConfig.copy.playMission
    : target?.kind === 'npc' ? 'Conversar com Lia' : explorationCopy.interact;
  for (const control of view.querySelectorAll<HTMLButtonElement>('[data-direction]')) control.disabled = state.worldDialog !== null;
  const dialog = view.querySelector<HTMLElement>('.world-dialog')!;
  const opening = dialog.hidden && state.worldDialog !== null;
  const closing = !dialog.hidden && state.worldDialog === null;
  dialog.hidden = state.worldDialog === null;
  if (state.worldDialog) {
    dialog.querySelector('h2')!.textContent = state.worldDialog.title;
    dialog.querySelector('p')!.textContent = state.worldDialog.message;
    if (opening) dialog.querySelector<HTMLElement>('h2')!.focus();
  } else if (closing) interact.focus();
  const status = view.querySelector<HTMLElement>('.world-save')!;
  const message = state.explorationSaveStatus === 'failed' || state.explorationSaveStatus === 'unavailable'
    ? explorationCopy.saveFailed : state.explorationSaveStatus === 'invalid' ? explorationCopy.saveInvalid
      : state.explorationSaveStatus === 'saved' ? explorationCopy.saveSuccess : '';
  if (status.textContent !== message) status.textContent = message;
  view.querySelector<HTMLElement>('.world-save-retry')!.hidden = !['failed', 'invalid', 'unavailable'].includes(state.explorationSaveStatus);
  const error = view.querySelector<HTMLElement>('.content-error')!;
  error.textContent = state.contentError ?? '';
  error.hidden = !state.contentError;
}
