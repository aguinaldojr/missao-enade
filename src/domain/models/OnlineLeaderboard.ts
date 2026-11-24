import type { CourseId } from './Course';
import type { Modality } from './StudentIdentity';

export const ONLINE_RANKING_QUESTION_COUNT = 25 as const;
export const ONLINE_RANKING_LIMIT = 15 as const;
export type OnlineRankingType = 'daily' | 'evaluation' | 'general';

export interface OnlineLeaderboardEntry {
  readonly publicCode: string;
  readonly course: CourseId;
  readonly questionCount: typeof ONLINE_RANKING_QUESTION_COUNT;
  readonly correctCount: number;
  readonly score: number;
  readonly maxScore: 2500;
  readonly rankingScore: number;
  readonly durationMs: number;
  readonly achievedAt: string;
  readonly collectionId: string;
}

export interface OnlineDailyLeaderboardEntry {
  readonly date: string;
  readonly course: CourseId;
  readonly modality: Modality;
  readonly position: number;
  readonly publicCode: string;
  readonly quickScore: number;
  readonly evaluationScore: number;
  readonly dailyScore: number;
}

export interface OnlineGeneralLeaderboardEntry {
  readonly weekId: string;
  readonly course: CourseId;
  readonly modality: Modality;
  readonly position: number;
  readonly publicCode: string;
  readonly activeDays: number;
  readonly dailyScoreTotal: number;
}

export interface OnlineResultSubmission {
  readonly academicId?: string;
  readonly verificationToken?: string;
  readonly attemptId: string;
  readonly mode?: 'evaluation' | 'quick';
  readonly course: CourseId;
  readonly questionCount: number;
  readonly correctCount: number;
  readonly score: number;
  readonly maxScore: number;
  readonly durationMs: number;
  readonly achievedAt: string;
  readonly collectionId: string;
}

export interface OnlineSubmissionReceipt {
  readonly publicCode: string;
  readonly bestUpdated: boolean;
  readonly entries: readonly OnlineLeaderboardEntry[];
  readonly benefit?: EvaluationBenefitReceipt;
}

export interface EvaluationBenefitReceipt {
  readonly qualified: boolean;
  readonly recorded: boolean;
  readonly hoursEarned: number;
  readonly totalHours: number;
  readonly bonusEarned: number;
  readonly evaluationBonusTotal: number;
  readonly qualifyingBonusAttempts: number;
}

export function normalizeAcademicId(value: string): string {
  const normalized = value.toUpperCase().replace(/[\s.-]+/g, '');
  if (!/^[A-Z0-9]{4,20}$/.test(normalized)) {
    throw new Error('Informe um RA de 4 a 20 letras ou números.');
  }
  return normalized;
}

export function formatDuration(durationMs: number): string {
  const totalSeconds = Math.max(0, Math.round(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes + ':' + String(seconds).padStart(2, '0');
}
