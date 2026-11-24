import { isCourseId, type CourseId } from '../../domain/models/Course';
import { ONLINE_RANKING_LIMIT, ONLINE_RANKING_QUESTION_COUNT, normalizeAcademicId,
  type OnlineLeaderboardEntry, type OnlineResultSubmission,
  type OnlineSubmissionReceipt, type OnlineDailyLeaderboardEntry,
  type OnlineGeneralLeaderboardEntry, type OnlineRankingType,
  type EvaluationBenefitReceipt } from '../../domain/models/OnlineLeaderboard';
import type { OnlineLeaderboardRepository } from '../../ports/OnlineLeaderboardRepository';
import type { Modality } from '../../domain/models/StudentIdentity';

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

function validDailyEntry(value: unknown): value is OnlineDailyLeaderboardEntry {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return typeof item.date === 'string' && isCourseId(item.course) &&
    ['PRESENCIAL', 'EAD'].includes(String(item.modality)) && Number.isInteger(item.position) &&
    typeof item.publicCode === 'string' && Number.isInteger(item.quickScore) &&
    Number.isInteger(item.evaluationScore) && Number.isInteger(item.dailyScore);
}

function validGeneralEntry(value: unknown): value is OnlineGeneralLeaderboardEntry {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return typeof item.weekId === 'string' && isCourseId(item.course) &&
    ['PRESENCIAL', 'EAD'].includes(String(item.modality)) && Number.isInteger(item.position) &&
    typeof item.publicCode === 'string' && Number.isInteger(item.activeDays) &&
    Number.isInteger(item.dailyScoreTotal);
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

function benefit(data: Record<string, unknown>): EvaluationBenefitReceipt | undefined {
  if (data.benefit === undefined || data.benefit === null) return undefined;
  if (typeof data.benefit !== 'object') throw new Error('O comprovante de benefícios é inválido.');
  const item = data.benefit as Record<string, unknown>;
  if (typeof item.qualified !== 'boolean' || typeof item.recorded !== 'boolean' ||
      !Number.isInteger(item.hoursEarned) || !Number.isInteger(item.totalHours) ||
      typeof item.bonusEarned !== 'number' || typeof item.evaluationBonusTotal !== 'number' ||
      !Number.isInteger(item.qualifyingBonusAttempts)) {
    throw new Error('O comprovante de benefícios é inválido.');
  }
  return Object.freeze({ qualified: item.qualified, recorded: item.recorded,
    hoursEarned: item.hoursEarned as number, totalHours: item.totalHours as number,
    bonusEarned: item.bonusEarned, evaluationBonusTotal: item.evaluationBonusTotal,
    qualifyingBonusAttempts: item.qualifyingBonusAttempts as number });
}

export class AppsScriptLeaderboardRepository implements OnlineLeaderboardRepository {
  constructor(private readonly endpoint: string,
    private readonly fetcher: Fetch = (input, init) => globalThis.fetch(input, init)) {
    if (!/^https:\/\//.test(endpoint)) throw new Error('O endereço do ranking online deve usar HTTPS.');
  }

  async ranking(course: CourseId, modality?: Modality): Promise<readonly OnlineLeaderboardEntry[]> {
    const url = new URL(this.endpoint);
    url.searchParams.set('action', 'ranking');
    url.searchParams.set('course', course);
    if (modality) {
      url.searchParams.set('type', 'evaluation');
      url.searchParams.set('modality', modality);
    }
    return entries(await json(await this.fetcher(url, { method: 'GET', redirect: 'follow' })));
  }

  async operationalRanking(type: OnlineRankingType, course: CourseId, modality: Modality):
  Promise<readonly OnlineLeaderboardEntry[] | readonly OnlineDailyLeaderboardEntry[] |
    readonly OnlineGeneralLeaderboardEntry[]> {
    const url = new URL(this.endpoint);
    url.searchParams.set('action', 'ranking');
    url.searchParams.set('type', type);
    url.searchParams.set('course', course);
    url.searchParams.set('modality', modality);
    const data = await json(await this.fetcher(url, { method: 'GET', redirect: 'follow' }));
    const values = data.entries;
    const valid = type === 'daily' ? validDailyEntry : type === 'general' ? validGeneralEntry : validEntry;
    if (!Array.isArray(values) || !values.every(valid)) throw new Error('O ranking online retornou dados inválidos.');
    const limit = type === 'daily' ? 10 : ONLINE_RANKING_LIMIT;
    return Object.freeze(values.slice(0, limit));
  }

  async submit(result: OnlineResultSubmission): Promise<OnlineSubmissionReceipt> {
    const identity = result.verificationToken ? { verificationToken: result.verificationToken }
      : result.academicId ? { academicId: normalizeAcademicId(result.academicId) } : null;
    if (!identity) throw new Error('É necessário um perfil acadêmico validado.');
    const response = await this.fetcher(this.endpoint, {
      method: 'POST', redirect: 'follow',
      // text/plain mantém a chamada simples entre o GitHub Pages e o Apps Script.
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({ action: 'submit', ...result, academicId: undefined, ...identity }),
    });
    const data = await json(response);
    if (typeof data.publicCode !== 'string' || typeof data.bestUpdated !== 'boolean') {
      throw new Error('O comprovante do ranking online é inválido.');
    }
    const benefitReceipt = benefit(data);
    return Object.freeze({ publicCode: data.publicCode, bestUpdated: data.bestUpdated, entries: entries(data),
      ...(benefitReceipt ? { benefit: benefitReceipt } : {}) });
  }
}

export function configuredOnlineLeaderboard(): OnlineLeaderboardRepository | null {
  if (import.meta.env.MODE === 'test') return null;
  const endpoint = import.meta.env.VITE_RANKING_API_URL?.trim();
  return endpoint ? new AppsScriptLeaderboardRepository(endpoint) : null;
}
