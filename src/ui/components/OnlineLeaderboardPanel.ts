import { getCourse } from '../../app/courses';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../config/collections';
import type { MissionResult } from '../../domain/models/Attempt';
import type { CourseId } from '../../domain/models/Course';
import { formatDuration, normalizeAcademicId, ONLINE_RANKING_QUESTION_COUNT,
  type OnlineLeaderboardEntry } from '../../domain/models/OnlineLeaderboard';
import { configuredOnlineLeaderboard } from '../../infrastructure/online/AppsScriptLeaderboardRepository';
import type { OnlineLeaderboardRepository } from '../../ports/OnlineLeaderboardRepository';
import { button, element } from './elements';

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

export function onlineLeaderboardPanel(course: CourseId, result?: MissionResult,
  repository: OnlineLeaderboardRepository | null = configuredOnlineLeaderboard()): HTMLElement {
  const panel = element('section', 'online-ranking-panel');
  panel.setAttribute('aria-labelledby', 'online-ranking-title');
  const title = element('h2', 'subsection-title', 'Ranking online · ' + getCourse(course).id);
  title.id = 'online-ranking-title';
  const privacy = element('p', 'privacy-notice', 'Ranking compartilhado entre dispositivos por Google Apps Script. O RA não é exibido nem gravado na planilha; ele é convertido em um código pseudônimo.');
  const status = element('p', 'helper');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  panel.append(title, privacy);
  if (!repository) {
    panel.append(element('p', 'helper', 'Ranking online ainda não configurado. O ranking local continua disponível.'));
    return panel;
  }
  const tableHost = element('div', 'online-ranking-results');
  const load = async (publicCode?: string): Promise<void> => {
    status.textContent = 'Carregando os 15 melhores resultados…';
    try {
      const list = await repository.ranking(course);
      tableHost.replaceChildren(onlineTable(list, publicCode));
      status.textContent = 'Ranking online atualizado.';
    } catch (error) {
      status.textContent = error instanceof Error ? error.message : 'Não foi possível carregar o ranking online.';
    }
  };
  panel.append(status, tableHost);
  if (result?.mode === 'provisional' && result.total === ONLINE_RANKING_QUESTION_COUNT && result.durationMs !== undefined) {
    const form = element('form', 'online-ranking-form');
    const label = element('label', 'field-label', 'RA para identificação pseudônima');
    label.htmlFor = 'online-ranking-ra';
    const input = element('input', 'text-input') as HTMLInputElement;
    input.id = 'online-ranking-ra';
    input.name = 'academicId';
    input.autocomplete = 'off';
    input.inputMode = 'text';
    input.setAttribute('autocapitalize', 'characters');
    input.minLength = 4;
    input.maxLength = 24;
    input.required = true;
    input.setAttribute('aria-describedby', 'online-ranking-ra-help');
    const help = element('p', 'helper', 'O RA será transmitido ao serviço Google apenas para gerar seu código. Ele não fica salvo neste navegador nem na planilha.');
    help.id = 'online-ranking-ra-help';
    const consentLabel = element('label', 'consent-field');
    const consent = element('input', '') as HTMLInputElement;
    consent.type = 'checkbox';
    consent.required = true;
    consentLabel.append(consent, document.createTextNode(' Autorizo o envio deste resultado e do RA para gerar a identificação pseudônima.'));
    const submit = button('Enviar resultado ao ranking online');
    submit.type = 'submit';
    form.append(label, input, help, consentLabel, submit);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      void (async () => {
        try {
          submit.disabled = true;
          status.textContent = 'Enviando resultado…';
          const academicId = normalizeAcademicId(input.value);
          const receipt = await repository.submit({ academicId, course: result.course, questionCount: 25,
            correctCount: result.correctCount, score: result.score, maxScore: 2500,
            durationMs: result.durationMs!, achievedAt: result.completedAt,
            collectionId: PROVISIONAL_PLAYABLE_COLLECTION.collectionId });
          input.value = '';
          status.textContent = receipt.bestUpdated ? 'Melhor resultado registrado como ' + receipt.publicCode + '.'
            : 'O resultado anterior de ' + receipt.publicCode + ' continua sendo o melhor.';
          tableHost.replaceChildren(onlineTable(receipt.entries, receipt.publicCode));
        } catch (error) {
          status.textContent = error instanceof Error ? error.message : 'Não foi possível enviar o resultado.';
        } finally { submit.disabled = false; }
      })();
    });
    panel.insertBefore(form, status);
  }
  void load();
  return panel;
}
