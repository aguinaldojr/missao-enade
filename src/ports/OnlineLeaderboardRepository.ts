import type { CourseId } from '../domain/models/Course';
import type { OnlineLeaderboardEntry, OnlineResultSubmission,
  OnlineSubmissionReceipt } from '../domain/models/OnlineLeaderboard';

export interface OnlineLeaderboardRepository {
  ranking(course: CourseId): Promise<readonly OnlineLeaderboardEntry[]>;
  submit(result: OnlineResultSubmission): Promise<OnlineSubmissionReceipt>;
}
