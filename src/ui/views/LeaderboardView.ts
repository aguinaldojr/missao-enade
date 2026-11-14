import { courses } from '../../app/courses';
import type { Command, SessionState } from '../../app/GameSession';
import { gameConfig } from '../../config/game';
import { activePlayer } from '../../domain/models/PlayerProfile';
import { rankingFor, RANKING_QUESTION_COUNTS, type LeaderboardEntry } from '../../domain/models/Leaderboard';
import { button, element } from '../components/elements';

export function leaderboardTable(entries: readonly LeaderboardEntry[], currentPlayerId: string | null): HTMLElement {
  if (entries.length === 0) {
    const empty = element('p', 'empty-ranking', gameConfig.copy.emptyRanking);
    empty.setAttribute('role', 'status');
    return empty;
  }
  const wrapper = element('div', 'ranking-table-wrap');
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', 'Tabela do ranking com rolagem horizontal');
  const table = element('table', 'ranking-table');
  table.append(element('caption', 'sr-only', gameConfig.copy.rankingTableCaption));
  const head = element('thead', '');
  const headRow = element('tr', '');
  for (const label of ['Posição', 'Apelido', 'Desempenho', 'Acertos', 'Pontuação']) {
    headRow.append(element('th', '', label));
  }
  head.append(headRow);
  const body = element('tbody', '');
  entries.forEach((entry, index) => {
    const row = element('tr', entry.playerId === currentPlayerId ? 'current-ranking-player' : '');
    if (entry.playerId === currentPlayerId) row.setAttribute('aria-current', 'true');
    const nickname = element('td', '', entry.nickname);
    if (entry.playerId === currentPlayerId) nickname.append(element('span', 'current-marker', ' (você)'));
    row.append(element('td', '', String(index + 1) + 'º'), nickname,
      element('td', '', entry.rankingScore + ' / 1000'),
      element('td', '', entry.correctCount + ' de ' + entry.questionCount),
      element('td', '', entry.score + ' de ' + entry.maxScore));
    body.append(row);
  });
  table.append(head, body);
  wrapper.append(table);
  return wrapper;
}

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
  const sizeLabel = element('label', 'field-label', 'Tamanho da missão');
  sizeLabel.htmlFor = 'ranking-size';
  const size = element('select', 'select-input');
  size.id = 'ranking-size';
  for (const count of RANKING_QUESTION_COUNTS) {
    const option = element('option', '', count + ' desafios');
    option.value = String(count);
    option.selected = count === state.rankingQuestionCount;
    size.append(option);
  }
  size.addEventListener('change', () => dispatch({ type: 'select-ranking-size', questionCount: Number(size.value) }), { signal });
  filters.append(courseLabel, course, sizeLabel, size);
  view.append(filters, leaderboardTable(rankingFor(state.leaderboard, state.rankingCourse, state.rankingQuestionCount),
    activePlayer(state.profiles)?.id ?? null));

  if (state.leaderboardSaveStatus === 'failed' || state.leaderboardSaveStatus === 'unavailable') {
    view.append(element('p', 'profile-error', gameConfig.copy.rankingStorageFailed));
  }
  const remove = button(gameConfig.copy.deleteRanking, true);
  remove.disabled = state.leaderboard.entries.length === 0;
  remove.addEventListener('click', () => dispatch({ type: 'request-ranking-delete' }), { signal });
  view.append(remove);
  if (state.rankingDeletePending) {
    const dialog = element('section', 'delete-confirmation');
    dialog.setAttribute('role', 'alertdialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-labelledby', 'delete-ranking-title');
    const heading = element('h2', 'subsection-title', gameConfig.copy.deleteRankingTitle);
    heading.id = 'delete-ranking-title';
    heading.tabIndex = -1;
    const actions = element('div', 'actions');
    const confirm = button(gameConfig.copy.confirmDeleteRanking);
    confirm.addEventListener('click', () => dispatch({ type: 'confirm-ranking-delete' }), { signal });
    const cancel = button('Cancelar', true);
    cancel.addEventListener('click', () => dispatch({ type: 'cancel-ranking-delete' }), { signal });
    actions.append(confirm, cancel);
    dialog.append(heading, element('p', '', gameConfig.copy.deleteRankingMessage), actions);
    view.append(dialog);
  }
  return view;
}
