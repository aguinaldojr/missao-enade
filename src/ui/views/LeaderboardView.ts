import { courses } from '../../app/courses';
import type { Command, SessionState } from '../../app/GameSession';
import { gameConfig } from '../../config/game';
import { button, element } from '../components/elements';
import { onlineLeaderboardPanel } from '../components/OnlineLeaderboardPanel';
import { activePlayer } from '../../domain/models/PlayerProfile';
import { achievementVisualAssets } from '../../config/visualAssets';

function achievementCard(imageUrl: string, title: string, criterion: string, earned: boolean): HTMLElement {
  const card = element('article', 'achievement-card' + (earned ? ' achievement-card--earned' : ' achievement-card--locked'));
  const image = document.createElement('img');
  image.className = 'achievement-badge';
  image.src = imageUrl;
  image.alt = '';
  const copy = element('div', 'achievement-copy');
  copy.append(element('h3', 'achievement-name', title), element('p', 'achievement-criterion', criterion),
    element('span', 'achievement-status', earned ? 'Conquistada' : 'Em progresso'));
  card.append(image, copy);
  return card;
}

export function leaderboardView(state: SessionState, dispatch: (command: Command) => void,
  signal: AbortSignal): HTMLElement {
  const view = element('section', 'view leaderboard-view');
  const back = button('Voltar', true);
  back.classList.add('back-button');
  back.addEventListener('click', () => dispatch({ type: 'close-ranking' }), { signal });
  const hero = element('header', 'leaderboard-hero');
  const title = element('h1', 'section-title', 'Central de rankings');
  title.tabIndex = -1;
  const player = activePlayer(state.profiles);
  const identity = element('p', 'leaderboard-identity', player
    ? player.nickname + (player.course ? ' · ' + player.course : '') + (player.modality ? ' · ' + player.modality : '')
    : 'Entre com seu cadastro para acompanhar sua posição e suas conquistas.');
  hero.append(element('p', 'eyebrow', gameConfig.copy.rankingEyebrow), title, identity,
    element('p', 'leaderboard-privacy', gameConfig.copy.rankingPrivacy));
  view.append(back, hero);

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
  const last = state.lastResult?.mode === 'provisional' ? state.lastResult : null;
  const completedJourney = !!last && last.total === 25;
  const reachedSixty = completedJourney && last.correctCount / last.total >= .6;
  const perfect = completedJourney && last.correctCount === last.total;
  const fast = completedJourney && last.durationMs !== undefined && last.durationMs <= 20 * 60 * 1000;
  const achievements = element('section', 'achievement-panel');
  achievements.setAttribute('aria-labelledby', 'achievement-title');
  const achievementTitle = element('h2', 'subsection-title', 'Suas conquistas');
  achievementTitle.id = 'achievement-title';
  const achievementIntro = element('p', 'achievement-intro', 'As insígnias usam resultados já registrados. Conquistas de ranking são confirmadas no fechamento correspondente.');
  const achievementGrid = element('div', 'achievement-grid');
  achievementGrid.append(
    achievementCard(achievementVisualAssets.pioneer, 'Primeira jornada', 'Concluir uma Jornada N9 com 25 questões.', completedJourney),
    achievementCard(achievementVisualAssets.review, 'Meta 60%', 'Alcançar pelo menos 60% em uma Jornada N9.', reachedSixty),
    achievementCard(achievementVisualAssets.precision, 'Precisão máxima', 'Acertar as 25 questões de uma jornada.', perfect),
    achievementCard(achievementVisualAssets.turbo, 'Modo turbo', 'Concluir uma jornada em até 20 minutos.', fast),
    achievementCard(achievementVisualAssets.daily, 'Destaque diário', 'Fechar o dia entre os dez primeiros.', false),
    achievementCard(achievementVisualAssets.week, 'Destaque da semana', 'Fechar o ciclo entre os quinze primeiros.', false),
  );
  achievements.append(achievementTitle, achievementIntro, achievementGrid);
  view.append(filters, achievements, onlineLeaderboardPanel(state.rankingCourse, undefined, undefined, player));
  const regulation = element('a', 'footer-link', 'Consultar regulamento de pontos, bônus e horas');
  regulation.href = '#/regulamento';
  view.append(regulation);
  return view;
}
