import type { CourseId } from './Course';
import type { MissionResult } from './Attempt';
import type { PlayerProfile } from './PlayerProfile';

export const RANKING_QUESTION_COUNTS = [3, 5, 10, 20, 25] as const;
export type RankingQuestionCount = (typeof RANKING_QUESTION_COUNTS)[number];

export interface LeaderboardEntry {
  readonly playerId: string;
  readonly nickname: string;
  readonly course: CourseId;
  readonly questionCount: RankingQuestionCount;
  readonly correctCount: number;
  readonly score: number;
  readonly maxScore: number;
  readonly rankingScore: number;
  readonly durationMs?: number;
  readonly achievedAt: string;
  readonly collectionId: string;
}

export interface Leaderboard {
  readonly schemaVersion: 1;
  readonly entries: readonly LeaderboardEntry[];
}

export function emptyLeaderboard(): Leaderboard {
  return Object.freeze({ schemaVersion: 1, entries: Object.freeze([]) });
}

export function isRankingQuestionCount(value: number): value is RankingQuestionCount {
  return RANKING_QUESTION_COUNTS.includes(value as RankingQuestionCount);
}

export function rankingScore(score: number, maxScore: number): number {
  if (!Number.isFinite(score) || !Number.isFinite(maxScore) || maxScore <= 0) throw new Error('Pontuação inválida para o ranking.');
  return Math.max(0, Math.min(1000, Math.round((score / maxScore) * 1000)));
}

export function entryFromResult(result: MissionResult, player: PlayerProfile, collectionId: string,
  durationMs?: number): LeaderboardEntry {
  if (!isRankingQuestionCount(result.total)) throw new Error('Tamanho de missão incompatível com o ranking local.');
  const maxScore = result.total * 100;
  return Object.freeze({
    playerId: player.id, nickname: player.nickname, course: result.course, questionCount: result.total,
    correctCount: result.correctCount, score: result.score, maxScore,
    rankingScore: rankingScore(result.score, maxScore),
    ...(durationMs !== undefined ? { durationMs } : {}),
    achievedAt: result.completedAt, collectionId,
  });
}

/** Retorna valor negativo quando a entrada A deve aparecer antes de B. */
export function compareLeaderboardEntries(a: LeaderboardEntry, b: LeaderboardEntry): number {
  if (a.rankingScore !== b.rankingScore) return b.rankingScore - a.rankingScore;
  if (a.correctCount !== b.correctCount) return b.correctCount - a.correctCount;
  if (a.durationMs !== undefined && b.durationMs !== undefined && a.durationMs !== b.durationMs) {
    return a.durationMs - b.durationMs;
  }
  return Date.parse(a.achievedAt) - Date.parse(b.achievedAt) || a.playerId.localeCompare(b.playerId);
}

export function recordBestResult(board: Leaderboard, candidate: LeaderboardEntry): Leaderboard {
  const sameRanking = (entry: LeaderboardEntry) => entry.playerId === candidate.playerId &&
    entry.course === candidate.course && entry.questionCount === candidate.questionCount;
  const previous = board.entries.find(sameRanking);
  if (previous && compareLeaderboardEntries(candidate, previous) >= 0) return board;
  return Object.freeze({ schemaVersion: 1,
    entries: Object.freeze([...board.entries.filter((entry) => !sameRanking(entry)), candidate]) });
}

export function rankingFor(board: Leaderboard, course: CourseId,
  questionCount: RankingQuestionCount): readonly LeaderboardEntry[] {
  return Object.freeze(board.entries.filter((entry) => entry.course === course && entry.questionCount === questionCount)
    .sort(compareLeaderboardEntries));
}
