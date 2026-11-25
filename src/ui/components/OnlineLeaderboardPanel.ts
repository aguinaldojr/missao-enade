import { getCourse } from '../../app/courses';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../config/collections';
import type { MissionResult } from '../../domain/models/Attempt';
import type { CourseId } from '../../domain/models/Course';
import { formatDuration, ONLINE_RANKING_QUESTION_COUNT,
  type OnlineLeaderboardEntry, type OnlineDailyLeaderboardEntry,
  type OnlineGeneralLeaderboardEntry, type OnlineRankingType,
  type OnlineSubmissionReceipt } from '../../domain/models/OnlineLeaderboard';
import { configuredOnlineLeaderboard } from '../../infrastructure/online/AppsScriptLeaderboardRepository';
import type { OnlineLeaderboardRepository } from '../../ports/OnlineLeaderboardRepository';
import type { PlayerProfile } from '../../domain/models/PlayerProfile';
import { button, element } from './elements';

const automaticallySubmittedAttempts = new Map<string, OnlineSubmissionReceipt>();

export type RankingSubmissionUpdate =
  | { readonly state: 'sending'; readonly message: string }
  | { readonly state: 'sent'; readonly message: string; readonly receipt: OnlineSubmissionReceipt }
  | { readonly state: 'failed'; readonly message: string };

function onlineTable(entries: readonly OnlineLeaderboardEntry[], publicCode?: string): HTMLElement {
  if (entries.length === 0) return element('p', 'empty-ranking', 'Ainda não há resultados online para este curso.');
  const wrap = element('div', 'ranking-table-wrap');
  wrap.tabIndex = 0;
  wrap.setAttribute('role', 'region');
  wrap.setAttribute('aria-label', 'Quinze melhores resultados online');
  const table = element('table', 'ranking-table online-ranking-table');
  table.append(element('caption', 'sr-only', 'Ranking online de 25 desafios por curso'));
  const head = element('thead', '');
  const row = element('tr', '');
  for (const label of ['Posição', 'Código', 'Desempenho', 'Acertos', 'Pontuação', 'Tempo']) row.append(element('th', '', label));
  head.append(row);
  const body = element('tbody', '');
  entries.forEach((entry, index) => {
    const item = element('tr', entry.publicCode === publicCode ? 'current-ranking-player' : '');
    if (entry.publicCode === publicCode) item.setAttribute('aria-current', 'true');
    const code = element('td', '', entry.publicCode);
    if (entry.publicCode === publicCode) code.append(element('span', 'current-marker', ' (você)'));
    item.append(element('td', '', String(index + 1) + 'º'), code,
      element('td', '', entry.rankingScore + ' / 1000'), element('td', '', entry.correctCount + ' de 25'),
      element('td', '', entry.score + ' de 2500'), element('td', '', formatDuration(entry.durationMs)));
    body.append(item);
  });
  table.append(head, body);
  wrap.append(table);
  return wrap;
}

function dailyTable(entries: readonly OnlineDailyLeaderboardEntry[], publicCode?: string): HTMLElement {
  if (entries.length === 0) return element('p', 'empty-ranking', 'Ainda não há classificação diária para hoje.');
  const wrap = element('div', 'ranking-table-wrap');
  wrap.tabIndex = 0;
  wrap.setAttribute('role', 'region');
  wrap.setAttribute('aria-label', 'Dez melhores resultados do dia');
  const table = element('table', 'ranking-table online-ranking-table');
  const head = element('thead', '');
  const row = element('tr', '');
  for (const label of ['Posição', 'Código', 'Modo Rápido', 'Avaliação', 'Total diário']) row.append(element('th', '', label));
  head.append(row);
  const body = element('tbody', '');
  entries.forEach((entry) => {
    const item = element('tr', entry.publicCode === publicCode ? 'current-ranking-player' : '');
    const code = element('td', '', entry.publicCode);
    if (entry.publicCode === publicCode) code.append(element('span', 'current-marker', ' (você)'));
    item.append(element('td', '', entry.position + 'º'), code,
      element('td', '', String(entry.quickScore)), element('td', '', String(entry.evaluationScore)),
      element('td', '', String(entry.dailyScore)));
    body.append(item);
  });
  table.append(head, body); wrap.append(table); return wrap;
}

function generalTable(entries: readonly OnlineGeneralLeaderboardEntry[], publicCode?: string): HTMLElement {
  if (entries.length === 0) return element('p', 'empty-ranking', 'Ainda não há classificação geral neste ciclo.');
  const wrap = element('div', 'ranking-table-wrap');
  wrap.tabIndex = 0;
  wrap.setAttribute('role', 'region');
  wrap.setAttribute('aria-label', 'Quinze melhores resultados gerais do ciclo');
  const table = element('table', 'ranking-table online-ranking-table');
  const head = element('thead', '');
  const row = element('tr', '');
  for (const label of ['Posição', 'Código', 'Dias ativos', 'Pontuação acumulada']) row.append(element('th', '', label));
  head.append(row);
  const body = element('tbody', '');
  entries.forEach((entry) => {
    const item = element('tr', entry.publicCode === publicCode ? 'current-ranking-player' : '');
    const code = element('td', '', entry.publicCode);
    if (entry.publicCode === publicCode) code.append(element('span', 'current-marker', ' (você)'));
    item.append(element('td', '', entry.position + 'º'), code,
      element('td', '', String(entry.activeDays)), element('td', '', String(entry.dailyScoreTotal)));
    body.append(item);
  });
  table.append(head, body); wrap.append(table); return wrap;
}

const rankingHelp: Record<OnlineRankingType, string> = {
  daily: 'Top 10 do dia, separado por curso e modalidade.',
  evaluation: 'Top 15 dos melhores resultados de 25 questões no ciclo.',
  general: 'Top 15 do ciclo semanal, calculado a partir das participações diárias.',
};

export function onlineLeaderboardPanel(course: CourseId, result?: MissionResult,
  repository: OnlineLeaderboardRepository | null | undefined = configuredOnlineLeaderboard(),
  player?: PlayerProfile | null, onSubmissionUpdate?: (update: RankingSubmissionUpdate) => void): HTMLElement {
  const panel = element('section', 'online-ranking-panel');
  panel.setAttribute('aria-labelledby', 'online-ranking-title');
  const title = element('h2', 'subsection-title', 'Rankings · ' + getCourse(course).id +
    (player?.modality ? ' · ' + player.modality : ''));
  title.id = 'online-ranking-title';
  const privacy = element('p', 'privacy-notice', 'Ranking compartilhado entre dispositivos por Google Apps Script. A classificação exibe somente o código pseudônimo do cadastro validado.');
  const status = element('p', 'helper');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  panel.append(title, privacy);
  if (!repository) {
    const message = 'Ranking online temporariamente indisponível. Tente novamente mais tarde.';
    panel.append(element('p', 'helper', message));
    onSubmissionUpdate?.({ state: 'failed', message });
    return panel;
  }
  const tableHost = element('div', 'online-ranking-results');
  const rankingDescription = element('p', 'helper', rankingHelp.evaluation);
  let activeType: OnlineRankingType = 'evaluation';
  const tabs = element('div', 'ranking-tabs');
  const tabButtons = new Map<OnlineRankingType, HTMLButtonElement>();
  const syncTabs = (): void => tabButtons.forEach((item, type) => item.setAttribute('aria-pressed', String(type === activeType)));
  const renderEntries = (type: OnlineRankingType, list: readonly OnlineLeaderboardEntry[] |
    readonly OnlineDailyLeaderboardEntry[] | readonly OnlineGeneralLeaderboardEntry[], publicCode?: string): void => {
    if (type === 'daily') tableHost.replaceChildren(dailyTable(list as readonly OnlineDailyLeaderboardEntry[], publicCode));
    else if (type === 'general') tableHost.replaceChildren(generalTable(list as readonly OnlineGeneralLeaderboardEntry[], publicCode));
    else tableHost.replaceChildren(onlineTable(list as readonly OnlineLeaderboardEntry[], publicCode));
  };
  const load = async (publicCode = player?.publicCode): Promise<void> => {
    status.textContent = 'Carregando classificação…';
    try {
      const list = player?.modality && repository.operationalRanking
        ? await repository.operationalRanking(activeType, course, player.modality)
        : await repository.ranking(course, player?.modality);
      renderEntries(activeType, list, publicCode);
      status.textContent = 'Ranking online atualizado.';
    } catch (error) {
      status.textContent = error instanceof Error ? error.message : 'Não foi possível carregar o ranking online.';
    }
  };
  if (player?.modality && repository.operationalRanking) {
    for (const [type, label] of [['daily', 'Diário'], ['evaluation', 'Avaliação'], ['general', 'Geral']] as const) {
      const tab = button(label, true);
      tab.setAttribute('aria-pressed', String(type === activeType));
      tab.addEventListener('click', () => {
        activeType = type; syncTabs(); rankingDescription.textContent = rankingHelp[type]; void load();
      });
      tabButtons.set(type, tab); tabs.append(tab);
    }
    panel.append(tabs, rankingDescription);
  }
  panel.append(status, tableHost);
  if (result?.mode === 'provisional' && result.total === ONLINE_RANKING_QUESTION_COUNT && result.durationMs !== undefined) {
    if (!player?.verificationToken || player.course !== course) {
      const message = 'Valide seu cadastro acadêmico no perfil para enviar resultados ao ranking.';
      panel.append(element('p', 'helper', message));
      onSubmissionUpdate?.({ state: 'failed', message });
      void load();
      return panel;
    }
    if (!player.rankingEligible) {
      const message = 'Perfil de professor: resultados de teste não entram no ranking.';
      panel.append(element('p', 'helper', message));
      onSubmissionUpdate?.({ state: 'failed', message });
      void load();
      return panel;
    }
    const identity = element('p', 'current-player', 'Resultado identificado como ' + player.publicCode + '.');
    const retry = button('Tentar enviar novamente');
    retry.hidden = true;
    let sending = false;
    const send = async (): Promise<void> => {
      if (sending || automaticallySubmittedAttempts.has(result.attemptId)) return;
      sending = true; retry.hidden = true; retry.disabled = true;
      status.textContent = 'Enviando resultado automaticamente ao ranking da avaliação…';
      onSubmissionUpdate?.({ state: 'sending', message: status.textContent });
      try {
        const receipt = await repository.submit({ verificationToken: player.verificationToken,
          attemptId: result.attemptId, mode: 'evaluation', course: result.course, questionCount: 25,
          correctCount: result.correctCount, score: result.score, maxScore: 2500,
          durationMs: result.durationMs!, achievedAt: result.completedAt,
          collectionId: PROVISIONAL_PLAYABLE_COLLECTION.collectionId });
        automaticallySubmittedAttempts.set(result.attemptId, receipt);
        status.textContent = 'Resultado incluído automaticamente no ranking da avaliação como ' + receipt.publicCode + '.';
        onSubmissionUpdate?.({ state: 'sent', message: status.textContent, receipt });
        activeType = 'evaluation'; syncTabs(); rankingDescription.textContent = rankingHelp.evaluation;
        renderEntries('evaluation', receipt.entries, receipt.publicCode);
      } catch (error) {
        status.textContent = error instanceof Error ? error.message : 'Não foi possível enviar o resultado.';
        onSubmissionUpdate?.({ state: 'failed', message: status.textContent });
        retry.hidden = false; retry.disabled = false;
      } finally { sending = false; }
    };
    retry.addEventListener('click', () => { void send(); });
    const automatic = element('div', 'online-ranking-form'); automatic.append(identity, retry);
    panel.insertBefore(automatic, status);
    if (automaticallySubmittedAttempts.has(result.attemptId)) {
      status.textContent = 'Este resultado já foi enviado automaticamente ao ranking da avaliação.';
      onSubmissionUpdate?.({ state: 'sent', message: status.textContent,
        receipt: automaticallySubmittedAttempts.get(result.attemptId)! });
      void load(player.publicCode);
    } else {
      queueMicrotask(() => { void send(); });
    }
    return panel;
  }
  void load();
  return panel;
}
