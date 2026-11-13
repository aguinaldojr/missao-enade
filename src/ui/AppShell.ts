import type { Command, SessionState } from '../app/GameSession';
import { getCourse } from '../app/courses';
import { announce } from './announcements';
import { element } from './components/elements';
import { focusHeading } from './focus';
import { courseSelectView } from './views/CourseSelectView';
import { homeView } from './views/HomeView';
import { mapView } from './views/MapView';
import { questionView } from './views/QuestionView';
import { resultView } from './views/ResultView';
import { currentQuestion } from '../domain/progression';

export class AppShell {
  readonly canvasHost = element('div', 'canvas-host');
  private readonly content = element('main', 'content');
  private readonly status = element('p', 'sr-only');
  private readonly graphicStatus = element('p', 'graphic-status');
  private readonly courseTag = element('span', 'panel-tag', 'CIDADE DIGITAL');
  private listeners = new AbortController();
  private renderKey = '';

  constructor(root: HTMLElement) {
    const skip = element('a', 'skip-link', 'Pular para o conteúdo');
    skip.href = '#conteudo';
    this.content.id = 'conteudo';
    this.status.setAttribute('role', 'status');
    this.status.setAttribute('aria-live', 'polite');
    this.graphicStatus.setAttribute('role', 'status');
    const header = element('header', 'site-header');
    const brand = element('div', 'brand');
    const mark = element('span', 'brand-mark', 'N');
    mark.setAttribute('aria-hidden', 'true');
    const wordmark = element('span', 'wordmark');
    wordmark.append(element('strong', '', 'MISSÃO ENADE'), element('span', '', 'CONECTE. COMPREENDA. TRANSFORME.'));
    brand.append(mark, wordmark);
    header.append(brand, element('span', 'version-tag', 'EXEMPLOS · 02'));
    const stage = element('div', 'stage');
    const visual = element('aside', 'visual-panel');
    visual.setAttribute('aria-label', 'Ambientação da cidade digital Nexo');
    const panelHeader = element('div', 'panel-header');
    panelHeader.append(element('span', 'panel-coordinate', 'NEXO / 001'), this.courseTag);
    this.canvasHost.setAttribute('aria-hidden', 'true');
    const caption = element('div', 'panel-caption');
    caption.append(element('span', 'eyebrow', 'CENTRAL DE OPERAÇÕES'), element('h2', '', 'Tudo começa com uma conexão.'), element('p', '', 'Uma cidade digital. Conhecimentos compartilhados.'));
    visual.append(panelHeader, this.canvasHost, caption, this.graphicStatus);
    stage.append(this.content, visual);
    const footer = element('footer', 'site-footer');
    footer.append(element('p', '', 'Projeto educacional independente, sem vínculo ou chancela do Inep.'), element('p', '', 'Demonstração · Questões fictícias'));
    const frame = element('div', 'app-frame');
    frame.append(header, stage, footer, this.status);
    root.replaceChildren(skip, frame);
  }

  render(state: SessionState, dispatch: (command: Command) => void): void {
    this.courseTag.textContent = state.selectedCourse ? 'PERCURSO / ' + state.selectedCourse : 'CIDADE DIGITAL';
    const key = [state.screen, state.attempt?.index, state.attempt?.answers.length, state.saveStatus, state.contentError].join(':');
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
    let view: HTMLElement;
    switch (state.screen) {
      case 'home':
        view = homeView(() => dispatch({ type: 'start' }), signal, state.lastResult, state.saveStatus);
        break;
      case 'course-select':
        view = courseSelectView(state.selectedCourse, {
          select: (course) => dispatch({ type: 'select-course', course }),
          confirm: () => dispatch({ type: 'enter-central' }),
          back: () => dispatch({ type: 'home' }),
        }, signal);
        break;
      case 'map':
        view = mapView(state, dispatch, signal);
        break;
      case 'question':
        if (!state.attempt) throw new Error('Partida necessária.');
        view = questionView(state.attempt, dispatch, signal);
        break;
      case 'result':
        if (!state.lastResult) throw new Error('Resultado necessário.');
        view = resultView(state.lastResult, state.saveStatus, dispatch, signal);
        break;
    }
    this.renderKey = key;
    this.content.replaceChildren(view);
    this.content.closest('.stage')?.classList.toggle('stage--playing', state.screen === 'question' || state.screen === 'result');
    const feedback = this.content.querySelector<HTMLElement>('.feedback-heading');
    if (feedback) {
      feedback.focus();
      announce(this.status, feedback.textContent ?? '');
      dispatch({ type: 'feedback-accessed', questionId: currentQuestion(state.attempt!).id });
    } else {
      focusHeading(this.content);
      announce(this.status, state.screen === 'map' ? 'Central Nexo aberta. Curso: ' + getCourse(state.selectedCourse!).name : '');
    }
    document.title = state.screen === 'home' ? 'Missão ENADE · Central Nexo'
      : state.screen === 'course-select' ? 'Escolha seu curso · Missão ENADE'
      : state.screen === 'question' ? 'Questão ' + (state.attempt!.index + 1) + ' de 10 · Exemplos'
      : state.screen === 'result' ? 'Resultado de exemplo · Missão ENADE' : 'Central Nexo · Missão ENADE';
  }

  private updateCourse(state: SessionState): void {
    const confirm = this.content.querySelector<HTMLButtonElement>('[data-action="confirm-course"]');
    if (confirm) confirm.disabled = state.selectedCourse === null;
    for (const radio of this.content.querySelectorAll<HTMLInputElement>('input[name="course"]')) {
      radio.checked = radio.value === state.selectedCourse;
    }
    if (state.selectedCourse) announce(this.status, 'Curso selecionado: ' + getCourse(state.selectedCourse).name);
  }

  showGraphicUnavailable(): void {
    this.canvasHost.replaceChildren();
    this.graphicStatus.textContent = 'Ambientação indisponível. Você pode continuar pelos controles da página.';
  }

  destroy(): void {
    this.listeners.abort();
  }
}

