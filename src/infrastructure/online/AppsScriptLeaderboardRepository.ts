import { isCourseId, type CourseId } from '../../domain/models/Course';
import { ONLINE_RANKING_LIMIT, ONLINE_RANKING_QUESTION_COUNT, normalizeAcademicId,
  type OnlineLeaderboardEntry, type OnlineResultSubmission,
  type OnlineSubmissionReceipt } from '../../domain/models/OnlineLeaderboard';
import type { OnlineLeaderboardRepository } from '../../ports/OnlineLeaderboardRepository';

type Fetch = typeof fetch;

function validEntry(value: unknown): value is OnlineLeaderboardEntry {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return typeof item.publicCode === 'string' && isCourseId(item.course) &&
    item.questionCount === ONLINE_RANKING_QUESTION_COUNT && Number.isInteger(item.correctCount) &&
    Number.isInteger(item.score) && item.maxScore === 2500 && Number.isInteger(item.rankingScore) &&
    Number.isInteger(item.durationMs) && typeof item.achievedAt === 'string' &&
    typeof item.collectionId === 'string';
}

async function json(response: Response): Promise<Record<string, unknown>> {
  if (!response.ok) throw new Error('O serviço de ranking não respondeu corretamente.');
  const value: unknown = await response.json();
  if (!value || typeof value !== 'object') throw new Error('Resposta inválida do ranking online.');
  const data = value as Record<string, unknown>;
  if (data.ok !== true) throw new Error(typeof data.error === 'string' ? data.error : 'Não foi possível acessar o ranking online.');
  return data;
}

function entries(data: Record<string, unknown>): readonly OnlineLeaderboardEntry[] {
  if (!Array.isArray(data.entries) || !data.entries.every(validEntry)) {
    throw new Error('O ranking online retornou dados inválidos.');
  }
  return Object.freeze(data.entries.slice(0, ONLINE_RANKING_LIMIT));
}

export class AppsScriptLeaderboardRepository implements OnlineLeaderboardRepository {
  constructor(private readonly endpoint: string, private readonly fetcher: Fetch = fetch) {
    if (!/^https:\/\//.test(endpoint)) throw new Error('O endereço do ranking online deve usar HTTPS.');
  }

  async ranking(course: CourseId): Promise<readonly OnlineLeaderboardEntry[]> {
    const url = new URL(this.endpoint);
    url.searchParams.set('action', 'ranking');
    url.searchParams.set('course', course);
    return entries(await json(await this.fetcher(url, { method: 'GET', redirect: 'follow' })));
  }

  async submit(result: OnlineResultSubmission): Promise<OnlineSubmissionReceipt> {
    const academicId = normalizeAcademicId(result.academicId);
    const response = await this.fetcher(this.endpoint, {
      method: 'POST', redirect: 'follow',
      // text/plain mantém a chamada simples entre o GitHub Pages e o Apps Script.
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({ action: 'submit', ...result, academicId }),
    });
    const data = await json(response);
    if (typeof data.publicCode !== 'string' || typeof data.bestUpdated !== 'boolean') {
      throw new Error('O comprovante do ranking online é inválido.');
    }
    return Object.freeze({ publicCode: data.publicCode, bestUpdated: data.bestUpdated, entries: entries(data) });
  }
}

export function configuredOnlineLeaderboard(): OnlineLeaderboardRepository | null {
  if (import.meta.env.MODE === 'test') return null;
  const endpoint = import.meta.env.VITE_RANKING_API_URL?.trim();
  return endpoint ? new AppsScriptLeaderboardRepository(endpoint) : null;
}
