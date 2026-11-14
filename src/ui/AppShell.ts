import { gameConfig, gamePageTitle } from '../config/game';
import type { Command, SessionState } from '../app/GameSession';
import { getCourse } from '../app/courses';
import { announce } from './announcements';
import { element } from './components/elements';
import { focusHeading } from './focus';
import { courseSelectView } from './views/CourseSelectView';
import { homeView } from './views/HomeView';
import type { MovementControls } from './ExplorationControls';
import { explorationCopy } from '../config/exploration';
import { mapView, updateMapView } from './views/MapView';
import { questionView } from './views/QuestionView';
import { SequencePuzzleView } from './views/SequencePuzzleView';
import { resultView } from './views/ResultView';
import { currentQuestion } from '../domain/progression';
import { activePlayer } from '../domain/models/PlayerProfile';
import { playerProfileView } from './views/PlayerProfileView';
import { leaderboardView } from './views/LeaderboardView';

export class AppShell {
  readonly canvasHost = element('div', 'canvas-host');
  private readonly content = element('main', 'content');
  private readonly status = element('p', 'sr-only');
  private readonly graphicStatus = element('p', 'graphic-status');
  private readonly courseTag = element('span', 'panel-tag', gameConfig.copy.cityTag);
  private listeners = new AbortController();
  private renderKey = '';

  private canvasHome!: HTMLElement;
  private mapElement: HTMLElement | undefined;
  private sequenceView: SequencePuzzleView | undefined;

  constructor(root: HTMLElement, private readonly controls?: MovementControls) {
    const skip = element('a', 'skip-link', gameConfig.copy.skip);
    skip.href = '#conteudo';
    this.content.id = 'conteudo';
    this.content.tabIndex = -1;
    this.status.setAttribute('role', 'status');
    this.status.setAttribute('aria-live', 'polite');
    this.graphicStatus.setAttribute('role', 'status');
    const header = element('header', 'site-header');
    const brand = element('div', 'brand');
    const mark = element('span', 'brand-mark', gameConfig.shortName);
    mark.setAttribute('aria-hidden', 'true');
    const wordmark = element('span', 'wordmark');
    wordmark.append(element('strong', '', gameConfig.name));
    brand.append(mark, wordmark);
    header.append(brand, element('span', 'version-tag', gameConfig.copy.version));
    const stage = element('div', 'stage');
    const visual = element('aside', 'visual-panel');
    this.canvasHome = visual;
    visual.setAttribute('aria-label', gameConfig.copy.cityLabel);
    const panelHeader = element('div', 'panel-header');
    panelHeader.append(element('span', 'panel-coordinate', gameConfig.copy.cityCoordinate), this.courseTag);
    this.canvasHost.setAttribute('aria-hidden', 'true');
    const caption = element('div', 'panel-caption');
    caption.append(element('span', 'eyebrow', gameConfig.copy.centralCaption), element('h2', '', gameConfig.copy.cityHeadline), element('p', '', gameConfig.copy.cityDescription));
    visual.append(panelHeader, this.canvasHost, caption, this.graphicStatus);
    stage.append(this.content, visual);
    const footer = element('footer', 'site-footer');
    footer.append(element('p', '', gameConfig.copy.footerPurpose), element('p', '', gameConfig.copy.footerDemo));
    const frame = element('div', 'app-frame');
    frame.append(header, stage, footer, this.status);
    root.replaceChildren(skip, frame);
  }

  render(state: SessionState, dispatch: (command: Command) => void): void {
    this.courseTag.textContent = state.selectedCourse ? gameConfig.format.courseTag(state.selectedCourse) : gameConfig.copy.cityTag;
    if (state.screen === 'map' && this.mapElement) { updateMapView(this.mapElement, state); return; }
    if (state.screen === 'puzzle' && this.sequenceView?.puzzleId === state.puzzleAttempt?.puzzleId) {
      this.sequenceView!.update(state); return;
    }
    const key = [state.puzzleAttempt?.puzzleId, state.screen, state.attempt?.index, state.attempt?.answers.length,
      state.saveStatus, state.contentError, state.profiles.activePlayerId, state.profiles.players.length,
      state.profileError, state.profileSaveStatus, state.leaderboard.entries.length, state.leaderboardSaveStatus,
      state.rankingCourse, state.rankingQuestionCount, state.rankingDeletePending].join(':');
    if (this.renderKey === key) {
      if (state.screen === 'course-select') this.updateCourse(state);
      if (state.screen === 'question' && state.attempt) {
        const confirm = this.content.querySelector<HTMLButtonElement>('[data-action="confirm-answer"]');
        if (confirm) confirm.disabled = state.attempt.selectedOptionId === null;
        for (const radio of this.content.querySelectorAll<HTMLInputElement>('input[name="answer"]')) {
          radio.checked = radio.value === state.attempt.selectedOptionId;
        }
      }
      return;
    }
    this.listeners.abort();
    this.listeners = new AbortController();
    const signal = this.listeners.signal;
    this.canvasHome.insertBefore(this.canvasHost, this.canvasHome.children[1] ?? null);
    this.mapElement = undefined;
    this.sequenceView = undefined;
    let view: HTMLElement;
    switch (state.screen) {
      case 'home':
        view = homeView({
          start: () => dispatch({ type: 'start' }),
          profile: () => dispatch({ type: 'open-profile' }),
          ranking: () => dispatch({ type: 'open-ranking' }),
        }, signal, state.lastResult, state.saveStatus, activePlayer(state.profiles));
        break;
      case 'profile':
        view = playerProfileView(state, dispatch, signal);
        break;
      case 'leaderboard':
        view = leaderboardView(state, dispatch, signal);
        break;
      case 'course-select':
        view = courseSelectView(state.selectedCourse, state.selectedMissionId, state.missions,
          state.collectionName, state.validationNotice, {
          select: (course) => dispatch({ type: 'select-course', course }),
          selectMission: (missionId) => dispatch({ type: 'select-mission', missionId }),
          confirm: () => dispatch({ type: 'enter-central' }),
          back: () => dispatch({ type: 'home' }),
          changePlayer: () => dispatch({ type: 'open-profile' }),
        }, signal);
        break;
      case 'map':
        view = mapView(state, dispatch, signal, this.controls);
        this.mapElement = view;
        break;
      case 'puzzle':
        this.sequenceView = new SequencePuzzleView(state, dispatch, signal);
        view = this.sequenceView.element;
        break;
      case 'question':
        if (!state.attempt) throw new Error('Partida necessária.');
        view = questionView(state.attempt, dispatch, signal);
        break;
      case 'result':
        if (!state.lastResult) throw new Error('Resultado necessário.');
        view = resultView(state.lastResult, state.saveStatus, state.leaderboard,
          activePlayer(state.profiles), dispatch, signal);
        break;
    }
    const player = activePlayer(state.profiles);
    if (player && state.screen !== 'profile') {
      view.prepend(element('p', 'player-indicator', gameConfig.copy.currentPlayer + ': ' + player.nickname));
    }
    this.renderKey = key;
    this.content.replaceChildren(view);
    this.content.closest('.stage')?.classList.toggle('stage--puzzle', state.screen === 'puzzle');
    const exploring = state.screen === 'map';
    this.content.closest('.stage')?.classList.toggle('stage--exploring', exploring);
    this.canvasHost.classList.toggle('world-map', exploring);
    this.canvasHost.setAttribute('aria-hidden', exploring ? 'false' : 'true');
    if (exploring) {
      view.querySelector('.world-slot')!.append(this.canvasHost);
      this.canvasHost.tabIndex = 0;
      this.canvasHost.setAttribute('role', 'group');
      this.canvasHost.setAttribute('aria-label', explorationCopy.viewportLabel);
    } else {
      this.canvasHost.removeAttribute('tabindex');
      this.canvasHost.removeAttribute('role');
      this.canvasHost.removeAttribute('aria-label');
    }
    this.content.closest('.stage')?.classList.toggle('stage--playing', state.screen === 'question' || state.screen === 'result');
    const confirmation = this.content.querySelector<HTMLElement>('[role="alertdialog"] h2');
    const feedback = this.content.querySelector<HTMLElement>('.feedback-heading');
    if (confirmation) {
      confirmation.focus();
      announce(this.status, confirmation.textContent ?? '');
    } else if (feedback) {
      feedback.focus();
      announce(this.status, feedback.textContent ?? '');
      dispatch({ type: 'feedback-accessed', questionId: currentQuestion(state.attempt!).id });
    } else {
      focusHeading(this.content);
      announce(this.status, state.screen === 'map' ? gameConfig.format.centralAnnouncement(getCourse(state.selectedCourse!).name) : '');
    }
    document.title = gamePageTitle(state.screen, (state.attempt?.index ?? 0) + 1,
      state.attempt?.mission.questionCount ?? 10);
  }

  private updateCourse(state: SessionState): void {
    const confirm = this.content.querySelector<HTMLButtonElement>('[data-action="confirm-course"]');
    if (confirm) confirm.disabled = state.selectedCourse === null;
    for (const radio of this.content.querySelectorAll<HTMLInputElement>('input[name="course"]')) {
      radio.checked = radio.value === state.selectedCourse;
    }
    for (const radio of this.content.querySelectorAll<HTMLInputElement>('input[name="mission"]')) {
      radio.checked = radio.value === state.selectedMissionId;
    }
    if (state.selectedCourse) announce(this.status, gameConfig.format.courseAnnouncement(getCourse(state.selectedCourse).name));
  }

  showGraphicUnavailable(): void {
    this.canvasHost.replaceChildren();
    this.graphicStatus.textContent = gameConfig.copy.graphicUnavailable;
  }

  destroy(): void {
    this.listeners.abort();
  }
}
