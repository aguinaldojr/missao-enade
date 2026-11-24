import type { CourseId } from '../domain/models/Course';
import type { Modality } from '../domain/models/StudentIdentity';
import type { OnlineLeaderboardEntry, OnlineResultSubmission,
  OnlineSubmissionReceipt, OnlineDailyLeaderboardEntry, OnlineGeneralLeaderboardEntry,
  OnlineRankingType } from '../domain/models/OnlineLeaderboard';

export interface OnlineLeaderboardRepository {
  ranking(course: CourseId, modality?: Modality): Promise<readonly OnlineLeaderboardEntry[]>;
  operationalRanking?(type: OnlineRankingType, course: CourseId, modality: Modality):
    Promise<readonly OnlineLeaderboardEntry[] | readonly OnlineDailyLeaderboardEntry[] |
      readonly OnlineGeneralLeaderboardEntry[]>;
  submit(result: OnlineResultSubmission): Promise<OnlineSubmissionReceipt>;
}
