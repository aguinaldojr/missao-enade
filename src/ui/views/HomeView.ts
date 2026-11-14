import { gameConfig } from '../../config/game';
import type { SavedResult } from '../../domain/models/Attempt';
import type { SaveStatus } from '../../ports/ProgressRepository';
import { getCourse } from '../../app/courses';
import { button, element } from '../components/elements';
import type { PlayerProfile } from '../../domain/models/PlayerProfile';

export interface HomeActions {
  readonly start: () => void;
  readonly profile: () => void;
  readonly ranking: () => void;
}

export function homeView(actions: HomeActions, signal: AbortSignal, lastResult: SavedResult | null = null,
  saveStatus: SaveStatus = 'none', player: PlayerProfile | null = null): HTMLElement {
  const view = element('section', 'view home-view');
  view.append(element('p', 'eyebrow', gameConfig.copy.homeEyebrow));
  const title = element('h1', 'hero-title');
  title.tabIndex = -1;
  title.append(document.createTextNode(gameConfig.copy.heroStart), element('span', 'accent', gameConfig.copy.heroAccent));
  view.append(title, element('p', 'intro', gameConfig.copy.homeIntro));
  const start = button(gameConfig.copy.startMission);
  start.append(element('span', 'button-arrow', '↗'));
  start.addEventListener('click', actions.start, { signal });
  const secondaryActions = element('div', 'actions home-actions');
  const profile = button(player ? gameConfig.copy.changePlayer : gameConfig.copy.choosePlayer, true);
  profile.addEventListener('click', actions.profile, { signal });
  const ranking = button(gameConfig.copy.rankingTitle, true);
  ranking.addEventListener('click', actions.ranking, { signal });
  secondaryActions.append(profile, ranking);
  view.append(start, secondaryActions, element('p', 'helper', gameConfig.copy.homeHint));
  const steps = element('ol', 'journey');
  for (const [number, name, detail] of [
    ['01', gameConfig.copy.stepChoose, gameConfig.copy.stepCourse],
    ['02', gameConfig.copy.stepExplore, gameConfig.copy.stepCentral],
    ['03', gameConfig.copy.stepLearn, gameConfig.copy.stepChallenges],
  ]) {
    const item = element('li', 'journey-step');
    item.append(element('span', 'step-number', number), element('strong', '', name), element('span', 'step-detail', detail));
    steps.append(item);
  }
  view.append(steps);
  view.append(element('p', 'example-warning', gameConfig.copy.homeExample));
  if (lastResult) {
    const summary = element('section', 'last-result');
    summary.append(element('h2', '', saveStatus === 'saved' ? gameConfig.copy.lastSaved : gameConfig.copy.lastUnsaved),
      element('p', '', gameConfig.format.summary(getCourse(lastResult.course).name, lastResult.correctCount, lastResult.total, lastResult.score)));
    view.append(summary);
  } else if (saveStatus === 'invalid' || saveStatus === 'unavailable') {
    view.append(element('p', 'helper', saveStatus === 'invalid'
      ? gameConfig.copy.invalidLocal
      : gameConfig.copy.unavailableStorage));
  }
  return view;
}
