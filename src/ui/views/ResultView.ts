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

function benefitCard(title: string, text: string, className: string): { card: HTMLElement; text: HTMLElement } {
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
  const qualified = percentage >= 60;
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

  let bonusText: HTMLElement | undefined;
  let hoursText: HTMLElement | undefined;
  let submissionText: HTMLElement | undefined;
  if (isJourney) {
    const benefits = element('section', 'journey-benefits');
    benefits.setAttribute('aria-labelledby', 'journey-benefits-title');
    const benefitTitle = element('h2', 'subsection-title', 'Conquistas desta partida');
    benefitTitle.id = 'journey-benefits-title';
    const target = player?.modality === 'EAD' ? 'nas duas disciplinas com menores notas'
      : player?.modality === 'PRESENCIAL' ? 'na Avaliação Integrada AV2' : 'conforme sua modalidade';
    const bonus = benefitCard('Bônus acadêmico', player?.role === 'teacher'
      ? 'Perfil de professor: esta partida não gera bônus.'
      : qualified ? 'Meta de 60% atingida. Confirmando o registro de 0,5 ponto ' + target + '…'
        : 'Meta ainda não atingida: são necessários pelo menos 15 acertos para conquistar 0,5 ponto.', 'is-bonus');
    const hours = benefitCard('Atividades complementares', player?.role === 'teacher'
      ? 'Perfil de professor: esta partida não gera horas complementares.'
      : qualified ? 'Meta atingida. Confirmando o registro de 1 hora complementar…'
        : 'Esta partida não gera hora complementar porque ficou abaixo de 60% de acertos.', 'is-hours');
    const submission = benefitCard('Envio automático', player?.rankingEligible === false
      ? 'Resultado de teste não enviado ao ranking.'
      : 'Preparando o envio automático ao ranking da avaliação…', 'is-ranking');
    bonusText = bonus.text; hoursText = hours.text; submissionText = submission.text;
    const cards = element('div', 'journey-benefit-grid');
    cards.append(bonus.card, hours.card, submission.card);
    benefits.append(benefitTitle, element('p', 'journey-benefits-intro', qualified
      ? 'Você alcançou o mínimo de 60% nesta partida.'
      : 'Continue treinando: uma nova partida pode liberar os benefícios acadêmicos.'), cards);
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
      if (update.state === 'failed' && qualified && bonusText && hoursText) {
        bonusText.textContent = 'Meta de 60% atingida. O bônus será registrado quando o envio automático for concluído.';
        hoursText.textContent = 'Meta de 60% atingida. A hora complementar será registrada quando o envio for concluído.';
        return;
      }
      if (update.state !== 'sent' || !qualified || !bonusText || !hoursText) return;
      const benefit = update.receipt.benefit;
      if (!benefit) {
        bonusText.textContent = 'Resultado elegível enviado. O registro do bônus será confirmado na apuração institucional.';
        hoursText.textContent = 'Resultado elegível enviado. O registro da hora será confirmado na apuração institucional.';
        return;
      }
      if (benefit.bonusEarned > 0) {
        bonusText.textContent = benefit.qualifyingBonusAttempts >= 2
          ? 'Mais 0,5 ponto conquistado. Você completou 1,0 ponto por duas partidas válidas neste ciclo.'
          : '0,5 ponto conquistado. Progresso: 1 de 2 partidas válidas; outra partida com pelo menos 60% completa 1,0 ponto.';
      } else {
        bonusText.textContent = benefit.evaluationBonusTotal >= 1
          ? 'Você já alcançou o limite de 1,0 ponto por partidas válidas neste ciclo.'
          : 'Partida registrada sem novo bônus nesta categoria.';
      }
      hoursText.textContent = benefit.hoursEarned > 0
        ? '1 hora complementar registrada. Total acumulado: ' + benefit.totalHours + ' de 10 horas.'
        : 'Partida registrada. Você já alcançou o limite de 10 horas complementares.';
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
