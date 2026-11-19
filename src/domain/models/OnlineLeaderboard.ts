import type { CourseId } from './Course';

export const ONLINE_RANKING_QUESTION_COUNT = 25 as const;
export const ONLINE_RANKING_LIMIT = 15 as const;

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

export interface OnlineResultSubmission {
  readonly academicId: string;
  readonly course: CourseId;
  readonly questionCount: typeof ONLINE_RANKING_QUESTION_COUNT;
  readonly correctCount: number;
  readonly score: number;
  readonly maxScore: 2500;
  readonly durationMs: number;
  readonly achievedAt: string;
  readonly collectionId: string;
}

export interface OnlineSubmissionReceipt {
  readonly publicCode: string;
  readonly bestUpdated: boolean;
  readonly entries: readonly OnlineLeaderboardEntry[];
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
