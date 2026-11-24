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
import { learningLabVisualAssets } from '../../config/visualAssets';
import { ROOM_SIZE } from '../../config/evaluationRooms';
import { activePlayer } from '../../domain/models/PlayerProfile';

export function mapView(state: SessionState, dispatch: (command: Command) => void, signal: AbortSignal, controls?: MovementControls): HTMLElement {
  if (!state.selectedCourse) throw new Error('Curso necessário.');
  const view = element('section', 'view exploration-view');
  view.dataset.mapId = state.exploration.mapId;
  const title = element('h1', 'section-title', explorationCopy.title);
  title.tabIndex = -1;
  view.append(title, element('p', 'helper', explorationCopy.intro));
  const course = element('p', 'selected-name', getCourse(state.selectedCourse).name);
  const mission = state.missions.find((candidate) => candidate.id === state.selectedMissionId)!;
  view.append(course, element('p', 'selected-mission', mission.internalTitle + ' · ' + mission.questionCount + ' desafios'));
  const grid = element('div', 'exploration-grid');
  const area = element('div', 'world-area');
  area.append(element('div', 'world-slot'), element('p', 'world-instructions', explorationCopy.controls), element('p', 'world-legend', explorationCopy.legend));
  const position = element('p', 'sr-only world-position');
  area.append(position);
  const panel = element('div', 'exploration-panel');
  panel.append(element('span', 'tag', gameConfig.copy.exampleTag), element('p', 'world-mission'), element('p', 'world-door'));
  const journeyProgress = element('div', 'journey-phase-progress');
  journeyProgress.hidden = true;
  journeyProgress.setAttribute('role', 'list');
  journeyProgress.setAttribute('aria-label', 'Progresso nas cinco fases da Jornada N9');
  panel.append(journeyProgress);
  const journeyGuide = element('section', 'journey-guide');
  journeyGuide.hidden = true;
  journeyGuide.setAttribute('aria-label', 'Orientação da Jornada N9');
  const journeyCharacter = document.createElement('img');
  journeyCharacter.className = 'journey-guide-character';
  const journeyGuideCopy = element('div', 'journey-guide-copy');
  journeyGuideCopy.append(element('span', 'journey-guide-label'), element('h2', ''), element('p', ''));
  const roomProgress = element('div', 'journey-room-progress');
  roomProgress.setAttribute('role', 'list');
  roomProgress.setAttribute('aria-label', 'Progresso nos cinco postos desta fase');
  journeyGuideCopy.append(roomProgress);
  journeyGuide.append(journeyCharacter, journeyGuideCopy);
  panel.append(journeyGuide);
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
  const dialogScene = element('div', 'world-dialog-scene');
  const portrait = document.createElement('img');
  portrait.className = 'world-dialog-character';
  portrait.src = learningLabVisualAssets.moods.thinking.lia;
  portrait.alt = 'Lia explicando';
  const dialogCopy = element('div', 'world-dialog-copy');
  dialogCopy.append(heading, message, close);
  dialogScene.append(portrait, dialogCopy);
  dialog.append(dialogScene);
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
  const profileHasCourse = !!activePlayer(state.profiles)?.course;
  const availableActions: readonly (readonly [string, 'change-course' | 'home'])[] = profileHasCourse
    ? [[gameConfig.copy.menu, 'home']] : [[gameConfig.copy.changeCourse, 'change-course'], [gameConfig.copy.menu, 'home']];
  for (const [text, type] of availableActions) {
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
  view.dataset.mapId = world.mapId;
  view.querySelector('.world-puzzle-xp')!.textContent = puzzleCopy.totalXp(totalPuzzleXp(state.puzzleProgress, state.puzzles));
  const target = nearbyObject(world, MAPS[world.mapId]!);
  const route = world.mapId === 'avaliacao-rota' && state.attempt;
  const journey = /^avaliacao-\d+$/.test(world.mapId) && state.attempt;
  if (route) {
    view.querySelector('h1')!.textContent = 'Rota da Jornada N9';
    view.querySelector('.helper')!.textContent = state.evaluationGate === 'entrada'
      ? 'Encontre o robô de acesso e interaja para ativar o tutorial.'
      : state.evaluationGate ? 'Siga até o desafio destacado para liberar a próxima fase.'
        : 'Caminhe até a fase liberada e interaja para entrar.';
    view.querySelector('.world-legend')!.textContent = 'A rota acende conforme você conclui cada grupo de cinco questões.';
  } else if (journey) {
    view.querySelector('h1')!.textContent = 'Fase ' + (Math.floor(journey.index / 5) + 1) + ' de 5 · ' + MAPS[world.mapId]!.name;
    view.querySelector('.helper')!.textContent = 'Caminhe até o posto ' + (journey.index % 5 + 1) + ' e interaja para responder.';
    view.querySelector('.world-legend')!.textContent = 'Os postos estão numerados da esquerda para a direita.';
  }
  const position = view.querySelector<HTMLElement>('.world-position')!;
  position.dataset.x = String(world.position.x);
  position.dataset.y = String(world.position.y);
  position.textContent = 'Posição no mapa: ' + Math.round(world.position.x) + ', ' + Math.round(world.position.y);
  const evaluation = route || journey;
  view.querySelector('.world-mission')!.textContent = evaluation ? 'Progresso: ' + state.attempt!.index + ' de 25 questões concluídas' : explorationCopy.mission[world.missionStatus];
  const journeyProgress = view.querySelector<HTMLElement>('.journey-phase-progress')!;
  journeyProgress.hidden = !evaluation;
  if (evaluation) {
    const completedQuestions = state.attempt!.index;
    const currentPhase = Math.min(4, Math.floor(completedQuestions / 5));
    journeyProgress.replaceChildren(...Array.from({ length: 5 }, (_, index) => {
      const phase = element('div', 'journey-phase-step');
      phase.setAttribute('role', 'listitem');
      const completed = completedQuestions >= (index + 1) * 5;
      const active = !completed && index === currentPhase;
      phase.dataset.state = completed ? 'complete' : active ? 'active' : 'locked';
      phase.append(element('span', 'journey-phase-number', completed ? '✓' : String(index + 1)),
        element('strong', '', 'Fase ' + (index + 1)), element('small', '', completed ? 'Concluída' : active ? 'Em andamento' : 'Bloqueada'));
      return phase;
    }));
  }
  const journeyGuide = view.querySelector<HTMLElement>('.journey-guide')!;
  journeyGuide.hidden = !evaluation;
  if (evaluation) {
    const character = journeyGuide.querySelector<HTMLImageElement>('.journey-guide-character')!;
    const label = journeyGuide.querySelector<HTMLElement>('.journey-guide-label')!;
    const heading = journeyGuide.querySelector<HTMLElement>('h2')!;
    const message = journeyGuide.querySelector<HTMLElement>('p')!;
    const roomProgress = journeyGuide.querySelector<HTMLElement>('.journey-room-progress')!;
    const index = state.attempt!.index;
    const phase = Math.floor(index / ROOM_SIZE) + 1;
    if (route) {
      character.src = index > 0 ? learningLabVisualAssets.moods.success.robot : learningLabVisualAssets.moods.thinking.robot;
      character.alt = 'Robô N9 orientando a rota';
      label.textContent = state.evaluationGate ? 'DESAFIO DE PASSAGEM' : 'PRÓXIMO DESTINO';
      heading.textContent = index === 0 ? 'Ative o Robô N9' : 'Fase ' + Math.max(1, phase - 1) + ' concluída!';
      message.textContent = state.evaluationGate === 'entrada'
        ? 'Interaja com o robô para concluir o tutorial obrigatório e abrir a primeira sala.'
        : state.evaluationGate === 'intervalo'
          ? 'Você completou 10 questões. Recupere o nó de rede para abrir a Fase 3.'
          : state.evaluationGate === 'final'
            ? 'Você completou 20 questões. Reative o núcleo de energia para chegar à fase final.'
            : 'O próximo trecho está liberado. Caminhe até a Fase ' + phase + ' e entre na sala.';
      roomProgress.hidden = true;
    } else {
      const station = index % ROOM_SIZE;
      character.src = learningLabVisualAssets.moods.thinking.lia;
      character.alt = 'Lia orientando a fase atual';
      label.textContent = 'ORIENTAÇÃO DA FASE ' + phase;
      heading.textContent = 'Lia · ' + MAPS[world.mapId]!.name;
      message.textContent = 'Siga até o Posto ' + (station + 1) + '. Cada posto abre uma questão; ao concluir os cinco, você retorna automaticamente à rota.';
      roomProgress.hidden = false;
      roomProgress.replaceChildren(...Array.from({ length: ROOM_SIZE }, (_, stationIndex) => {
        const item = element('span', 'journey-room-step', stationIndex < station ? '✓' : String(stationIndex + 1));
        item.setAttribute('role', 'listitem');
        item.dataset.state = stationIndex < station ? 'complete' : stationIndex === station ? 'active' : 'locked';
        item.setAttribute('aria-label', 'Posto ' + (stationIndex + 1) + ': ' + (stationIndex < station ? 'concluído' : stationIndex === station ? 'atual' : 'bloqueado'));
        return item;
      }));
    }
  }
  view.querySelector('.world-door')!.textContent = evaluation ? '' : world.doorUnlocked ? 'Porta: liberada' : 'Porta: bloqueada';
  const hint = view.querySelector<HTMLElement>('.world-nearby')!;
  const hintText = target ? 'Perto de: ' + target.name + '. Use E, Espaço ou o botão para interagir.' : explorationCopy.noNearby;
  if (hint.textContent !== hintText) hint.textContent = hintText;
  const interact = view.querySelector<HTMLButtonElement>('.world-interact')!;
  interact.disabled = !target || state.worldDialog !== null;
  interact.textContent = evaluation && target ? 'Acessar ' + target.name : target?.kind === 'computer' ? gameConfig.copy.playMission
    : target?.kind === 'npc' ? 'Conversar com Lia' : explorationCopy.interact;
  for (const control of view.querySelectorAll<HTMLButtonElement>('[data-direction]')) control.disabled = state.worldDialog !== null;
  const dialog = view.querySelector<HTMLElement>('.world-dialog')!;
  const opening = dialog.hidden && state.worldDialog !== null;
  const closing = !dialog.hidden && state.worldDialog === null;
  dialog.hidden = state.worldDialog === null;
  if (state.worldDialog) {
    dialog.querySelector('h2')!.textContent = state.worldDialog.title;
    dialog.querySelector('p')!.textContent = state.worldDialog.message;
    const character = dialog.querySelector<HTMLImageElement>('.world-dialog-character')!;
    const routeGuide = world.mapId === 'avaliacao-rota';
    character.src = routeGuide ? learningLabVisualAssets.moods.thinking.robot : learningLabVisualAssets.moods.thinking.lia;
    character.alt = routeGuide ? 'Robô N9 orientando a rota' : 'Lia explicando';
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
