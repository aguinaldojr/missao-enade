import { getCourse } from '../../app/courses';
import type { SessionState, Command } from '../../app/GameSession';
import { button, element } from '../components/elements';

export function mapView(state: SessionState, dispatch: (command: Command) => void, signal: AbortSignal): HTMLElement {
  if (!state.selectedCourse) throw new Error('Curso necessário.');
  const course = getCourse(state.selectedCourse);
  const view = element('section', 'view central-view');
  view.append(element('p', 'eyebrow', 'CONEXÃO ESTABELECIDA'));
  const title = element('h1', 'section-title', 'Boas-vindas à Central Nexo.');
  title.tabIndex = -1;
  view.append(title, element('p', 'intro intro--small', 'Experimente uma fase de dez questões e acompanhe a explicação de cada resposta.'));
  const card = element('div', 'selected-course');
  card.append(element('span', 'course-emblem', course.id), element('p', 'selected-label', 'CURSO SELECIONADO'), element('strong', 'selected-name', course.name));
  view.append(card);
  const notice = element('div', 'notice');
  notice.append(element('span', 'tag', 'FASE DE EXEMPLO'), element('h2', '', 'Dez decisões para conhecer o jogo.'), element('p', '', 'Questões fictícias para demonstração. Não são questões oficiais do ENADE nem conteúdo validado por docentes. As trilhas de estudo seguem planejadas.'));
  view.append(notice);
  if (state.contentError) {
    const error = element('p', 'content-error', state.contentError);
    error.setAttribute('role', 'alert');
    view.append(error);
  }
  const actions = element('div', 'actions');
  for (const [text, type, secondary] of [
    ['Jogar fase de exemplo', 'start-phase', false],
    ['Trocar curso', 'change-course', true],
    ['Voltar ao menu', 'home', true],
  ] as const) {
    const control = button(text, secondary);
    control.addEventListener('click', () => dispatch({ type }), { signal });
    actions.append(control);
  }
  view.append(actions, element('p', 'helper', '100 pontos por acerto, sem desconto por erro e sem limite de tempo. Somente o último resultado concluído é salvo neste navegador.'));
  return view;
}
