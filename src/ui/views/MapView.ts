import { gameConfig } from '../../config/game';
import { getCourse } from '../../app/courses';
import type { SessionState, Command } from '../../app/GameSession';
import { button, element } from '../components/elements';

export function mapView(state: SessionState, dispatch: (command: Command) => void, signal: AbortSignal): HTMLElement {
  if (!state.selectedCourse) throw new Error('Curso necessário.');
  const course = getCourse(state.selectedCourse);
  const view = element('section', 'view central-view');
  view.append(element('p', 'eyebrow', gameConfig.copy.centralEyebrow));
  const title = element('h1', 'section-title', gameConfig.copy.centralTitle);
  title.tabIndex = -1;
  view.append(title, element('p', 'intro intro--small', gameConfig.copy.centralIntro));
  const card = element('div', 'selected-course');
  card.append(element('span', 'course-emblem', course.id), element('p', 'selected-label', gameConfig.copy.courseSelected), element('strong', 'selected-name', course.name));
  view.append(card);
  const notice = element('div', 'notice');
  notice.append(element('span', 'tag', gameConfig.copy.exampleTag), element('h2', '', gameConfig.copy.missionIntroTitle), element('p', '', gameConfig.copy.missionExample));
  view.append(notice);
  if (state.contentError) {
    const error = element('p', 'content-error', state.contentError);
    error.setAttribute('role', 'alert');
    view.append(error);
  }
  const actions = element('div', 'actions');
  for (const [text, type, secondary] of [
    [gameConfig.copy.playExample, 'start-phase', false],
    [gameConfig.copy.changeCourse, 'change-course', true],
    [gameConfig.copy.menu, 'home', true],
  ] as const) {
    const control = button(text, secondary);
    control.addEventListener('click', () => dispatch({ type }), { signal });
    actions.append(control);
  }
  view.append(actions, element('p', 'helper', gameConfig.copy.missionRules));
  return view;
}
