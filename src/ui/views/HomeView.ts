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
  readonly learningLab: () => void;
}

export function homeView(actions: HomeActions, signal: AbortSignal, lastResult: SavedResult | null = null,
  saveStatus: SaveStatus = 'none', player: PlayerProfile | null = null): HTMLElement {
  const view = element('section', 'view home-view');
  view.append(element('p', 'eyebrow', gameConfig.copy.homeEyebrow));
  const title = element('h1', 'hero-title');
  title.tabIndex = -1;
  title.append(document.createTextNode(gameConfig.copy.heroStart), element('span', 'accent', gameConfig.copy.heroAccent));
  view.append(title, element('p', 'intro', gameConfig.copy.homeIntro));

  const modes = element('section', 'game-mode-selector');
  modes.setAttribute('aria-labelledby', 'game-mode-title');
  const modesTitle = element('h2', 'game-mode-title', 'Escolha como jogar');
  modesTitle.id = 'game-mode-title';
  const modesIntro = element('p', 'game-mode-intro', 'São duas experiências diferentes. Escolha a que combina com o seu momento.');
  const modeGrid = element('div', 'game-mode-grid');

  const journeyMode = element('article', 'game-mode-card game-mode-card--journey');
  journeyMode.append(element('span', 'game-mode-tag', 'MODO AVALIAÇÃO'),
    element('h3', 'game-mode-name', 'Jornada N9'),
    element('p', 'game-mode-description', 'Uma aventura completa com 25 questões, cinco fases e quebra-cabeças tecnológicos.'),
    element('p', 'game-mode-meta', '25 questões · 5 fases · progresso e ranking'));
  const start = button('Jogar Jornada N9');
  start.classList.add('game-mode-action');
  start.addEventListener('click', actions.start, { signal });
  journeyMode.append(start);

  const verified = !!player?.verificationToken;
  const quickMode = element('article', 'game-mode-card game-mode-card--quick');
  quickMode.append(element('span', 'game-mode-tag', 'MODO RÁPIDO'),
    element('h3', 'game-mode-name', 'Desafio Rápido'),
    element('p', 'game-mode-description', 'Atividades curtas para treinar, acumular XP e participar da missão diária.'),
    element('p', 'game-mode-meta', 'Partidas curtas · XP · ranking diário'));
  const laboratory = button(verified ? 'Jogar Desafio Rápido' : 'Entrar para jogar');
  laboratory.classList.add('game-mode-action', 'learning-lab-entry');
  laboratory.addEventListener('click', verified ? actions.learningLab : actions.profile, { signal });
  quickMode.append(laboratory);
  modeGrid.append(journeyMode, quickMode);
  modes.append(modesTitle, modesIntro, modeGrid);
  view.append(modes);

  const access = element('section', 'player-access');
  access.setAttribute('aria-labelledby', 'player-access-title');
  const accessCopy = element('div', 'player-access-copy');
  const accessTitle = element('h2', 'player-access-title', 'Acesso do jogador');
  accessTitle.id = 'player-access-title';
  accessCopy.append(accessTitle, element('p', 'player-access-status', player
    ? 'Conectado como ' + player.nickname + (player.course ? ' · ' + player.course : '')
    : 'Identifique-se para salvar resultados e participar dos rankings.'));
  const secondaryActions = element('div', 'actions home-actions');
  const profile = button(player ? gameConfig.copy.changePlayer : gameConfig.copy.choosePlayer, true);
  profile.addEventListener('click', actions.profile, { signal });
  const ranking = button(gameConfig.copy.rankingTitle, true);
  ranking.addEventListener('click', actions.ranking, { signal });
  secondaryActions.append(profile, ranking);
  access.append(accessCopy, secondaryActions);
  view.append(access);
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
