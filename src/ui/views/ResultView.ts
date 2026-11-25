import { gameConfig } from '../../config/game';
import type { Command } from '../../app/GameSession';
import { getCourse } from '../../app/courses';
import type { SavedResult } from '../../domain/models/Attempt';
import type { SaveStatus } from '../../ports/ProgressRepository';
import { button, element } from '../components/elements';
import { onlineLeaderboardPanel } from '../components/OnlineLeaderboardPanel';
import type { PlayerProfile } from '../../domain/models/PlayerProfile';
import { journeyCharacterAssets, learningLabVisualAssets } from '../../config/visualAssets';
import type { RankingSubmissionUpdate } from '../components/OnlineLeaderboardPanel';

function resultNumber(label: string, value: string): HTMLElement {
  const group = element('div', 'journey-result-stat');
  group.append(element('dt', '', label), element('dd', '', value));
  return group;
}

function resultCard(title: string, text: string, className: string): { card: HTMLElement; text: HTMLElement } {
  const card = element('article', 'journey-benefit-card ' + className);
  const copy = element('p', '', text);
  card.append(element('h3', '', title), copy);
  return { card, text: copy };
}

export function resultView(result: SavedResult, status: SaveStatus,
  dispatch: (command: Command) => void, signal: AbortSignal, player?: PlayerProfile | null): HTMLElement {
  const view = element('section', 'view result-view');
  const isJourney = result.mode === 'provisional' && result.total === 25;
  if (isJourney) view.classList.add('journey-result-view');
  const percentage = Math.round(result.correctCount / result.total * 100);
  const hero = element(isJourney ? 'header' : 'div', isJourney ? 'journey-result-hero' : '');
  const heroCopy = element('div', isJourney ? 'journey-result-hero-copy' : '');
  heroCopy.append(element('p', 'eyebrow', isJourney ? 'ROTA COMPLETA · CINCO FASES CONCLUÍDAS' : gameConfig.copy.reportEyebrow));
  const title = element('h1', 'section-title', isJourney ? 'Missão concluída!' : gameConfig.copy.reportTitle);
  title.tabIndex = -1;
  heroCopy.append(title, element('p', 'intro intro--small', isJourney
    ? 'Você reativou os sistemas da Jornada N9 e concluiu os 25 desafios de ' + getCourse(result.course).name + '.'
    : getCourse(result.course).name));
  hero.append(heroCopy);
  if (isJourney) {
    const celebration = element('div', 'journey-result-celebration');
    const student = document.createElement('img');
    student.src = journeyCharacterAssets.correct; student.alt = '';
    const robot = document.createElement('img');
    robot.src = learningLabVisualAssets.moods.result.robot; robot.alt = '';
    celebration.setAttribute('aria-hidden', 'true');
    celebration.append(student, robot);
    const seal = element('strong', 'journey-result-seal', percentage + '%');
    celebration.append(seal);
    hero.append(celebration);
  }
  view.append(hero);
  const scores = element('dl', 'result-numbers');
  scores.append(resultNumber(gameConfig.copy.completedLabel, result.total + ' de ' + result.total),
    resultNumber(gameConfig.copy.correctCountLabel, result.correctCount + ' de ' + result.total),
    resultNumber('Aproveitamento', percentage + '%'),
    resultNumber(gameConfig.copy.scoreLabel, result.score + ' de ' + result.total * 100));
  view.append(scores);

  let submissionText: HTMLElement | undefined;
  if (isJourney) {
    const benefits = element('section', 'journey-benefits');
    benefits.setAttribute('aria-labelledby', 'journey-benefits-title');
    const benefitTitle = element('h2', 'subsection-title', 'Registro da partida');
    benefitTitle.id = 'journey-benefits-title';
    const submission = resultCard('Envio automático ao ranking', player?.rankingEligible === false
      ? 'Resultado de teste não enviado ao ranking.'
      : 'Preparando o envio automático ao ranking da avaliação…', 'is-ranking');
    submissionText = submission.text;
    const cards = element('div', 'journey-benefit-grid');
    cards.append(submission.card);
    benefits.append(benefitTitle, element('p', 'journey-benefits-intro',
      'Seu resultado e desempenho ficam disponíveis para consulta no ranking.'), cards);
    view.append(benefits);
  }
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
  if (isJourney) {
    const updateBenefits = (update: RankingSubmissionUpdate): void => {
      if (!submissionText) return;
      submissionText.textContent = update.message;
    };
    view.append(onlineLeaderboardPanel(result.course, result, undefined, player, updateBenefits));
  }
  const actions = element('div', 'journey-result-actions');
  const replay = button('Jogar novamente');
  replay.addEventListener('click', () => dispatch({ type: 'start' }), { signal });
  const openRanking = button('Ver ranking', true);
  openRanking.addEventListener('click', () => dispatch({ type: 'open-ranking' }), { signal });
  const home = button('Voltar ao início', true);
  home.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  if (isJourney) actions.append(replay, openRanking, home);
  else actions.append(openRanking, home);
  view.append(actions, element('p', 'helper', gameConfig.copy.saveLimit));
  return view;
}
