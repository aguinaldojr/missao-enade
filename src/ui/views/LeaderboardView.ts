import { courses } from '../../app/courses';
import type { Command, SessionState } from '../../app/GameSession';
import { gameConfig } from '../../config/game';
import { button, element } from '../components/elements';
import { onlineLeaderboardPanel } from '../components/OnlineLeaderboardPanel';

export function leaderboardView(state: SessionState, dispatch: (command: Command) => void,
  signal: AbortSignal): HTMLElement {
  const view = element('section', 'view leaderboard-view');
  const back = button('← Voltar', true);
  back.classList.add('back-button');
  back.addEventListener('click', () => dispatch({ type: 'close-ranking' }), { signal });
  const title = element('h1', 'section-title', gameConfig.copy.rankingTitle);
  title.tabIndex = -1;
  view.append(back, element('p', 'eyebrow', gameConfig.copy.rankingEyebrow), title,
    element('p', 'privacy-notice', gameConfig.copy.rankingPrivacy));

  const filters = element('div', 'ranking-filters');
  const courseLabel = element('label', 'field-label', 'Curso');
  courseLabel.htmlFor = 'ranking-course';
  const course = element('select', 'select-input');
  course.id = 'ranking-course';
  for (const item of courses) {
    const option = element('option', '', item.id + ' — ' + item.name);
    option.value = item.id;
    option.selected = item.id === state.rankingCourse;
    course.append(option);
  }
  course.addEventListener('change', () => dispatch({ type: 'select-ranking-course', course: course.value }), { signal });
  filters.append(courseLabel, course);
  view.append(filters, onlineLeaderboardPanel(state.rankingCourse));
  return view;
}
