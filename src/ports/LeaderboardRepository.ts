import type { Leaderboard } from '../domain/models/Leaderboard';
import type { SaveStatus } from './ProgressRepository';

export interface LeaderboardLoad {
  readonly leaderboard: Leaderboard | null;
  readonly status: SaveStatus;
}

export interface LeaderboardRepository {
  load(): LeaderboardLoad;
  save(leaderboard: Leaderboard): boolean;
  clear(): boolean;
}
