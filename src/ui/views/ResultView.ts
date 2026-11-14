import { explorationCopy } from '../../config/exploration';
import { gameConfig } from '../../config/game';
import type { Command } from '../../app/GameSession';
import { getCourse } from '../../app/courses';
import type { SavedResult } from '../../domain/models/Attempt';
import type { SaveStatus } from '../../ports/ProgressRepository';
import { button, element } from '../components/elements';
import type { Leaderboard } from '../../domain/models/Leaderboard';
import { rankingFor, isRankingQuestionCount } from '../../domain/models/Leaderboard';
import type { PlayerProfile } from '../../domain/models/PlayerProfile';
import { leaderboardTable } from './LeaderboardView';

export function resultView(result: SavedResult, status: SaveStatus, leaderboard: Leaderboard,
  player: PlayerProfile | null, dispatch: (command: Command) => void, signal: AbortSignal): HTMLElement {
  const view = element('section', 'view result-view');
  view.append(element('p', 'eyebrow', gameConfig.copy.reportEyebrow));
  const title = element('h1', 'section-title', gameConfig.copy.reportTitle);
  title.tabIndex = -1;
  view.append(title, element('p', 'example-warning', gameConfig.copy.reportExample), element('p', 'intro intro--small', getCourse(result.course).name));
  const scores = element('dl', 'result-numbers');
  for (const [label, value] of [[gameConfig.copy.correctCountLabel, result.correctCount + ' de ' + result.total],
    [gameConfig.copy.scoreLabel, result.score + ' de ' + result.total * 100],
    [gameConfig.copy.completedLabel, result.total + ' de ' + result.total]]) {
    const group = element('div', '');
    group.append(element('dt', '', label), element('dd', '', value));
    scores.append(group);
  }
  view.append(scores);
  const saved = element('p', 'save-message', status === 'saved'
    ? gameConfig.copy.saveSuccess
    : gameConfig.copy.saveFailed);
  saved.setAttribute('role', 'status');
  view.append(saved);
  if (status !== 'saved') {
    const retry = button(gameConfig.copy.saveRetry, true);
    retry.addEventListener('click', () => dispatch({ type: 'retry-save' }), { signal });
    view.append(retry);
  }
  if (isRankingQuestionCount(result.total)) {
    const rankingTitle = element('h2', 'subsection-title', gameConfig.copy.missionRanking);
    view.append(rankingTitle, element('p', 'helper', gameConfig.copy.rankingPrivacy),
      leaderboardTable(rankingFor(leaderboard, result.course, result.total), player?.id ?? null));
  }
  const openRanking = button(gameConfig.copy.rankingTitle, true);
  openRanking.addEventListener('click', () => dispatch({ type: 'open-ranking' }), { signal });
  const home = button(gameConfig.copy.menu);
  home.classList.add('menu-button');
  home.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  const returnMap = button(explorationCopy.returnMap);
  returnMap.addEventListener('click', () => dispatch({ type: 'return-map' }), { signal });
  view.append(openRanking, returnMap, home, element('p', 'helper', gameConfig.copy.saveLimit));
  return view;
}
