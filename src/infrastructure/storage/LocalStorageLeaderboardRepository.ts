import Ajv from 'ajv';
import schema from '../../schemas/leaderboard.schema.json';
import { rankingScore, type Leaderboard } from '../../domain/models/Leaderboard';
import type { LeaderboardLoad, LeaderboardRepository } from '../../ports/LeaderboardRepository';

export const LEADERBOARD_KEY = 'n9:leaderboard:v1';
const validate = new Ajv().compile<Leaderboard>(schema);

export function isValidLeaderboard(value: unknown): value is Leaderboard {
  if (!validate(value)) return false;
  const combinations = new Set<string>();
  return value.entries.every((entry) => {
    const key = [entry.playerId, entry.course, entry.questionCount].join(':');
    if (combinations.has(key)) return false;
    combinations.add(key);
    return entry.maxScore === entry.questionCount * 100 && entry.score === entry.correctCount * 100 &&
      entry.correctCount <= entry.questionCount && entry.rankingScore === rankingScore(entry.score, entry.maxScore) &&
      Number.isFinite(Date.parse(entry.achievedAt));
  });
}

export class LocalStorageLeaderboardRepository implements LeaderboardRepository {
  constructor(private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> = () => window.localStorage) {}

  load(): LeaderboardLoad {
    try {
      const raw = this.getStorage().getItem(LEADERBOARD_KEY);
      if (raw === null) return { leaderboard: null, status: 'none' };
      const value: unknown = JSON.parse(raw);
      return isValidLeaderboard(value) ? { leaderboard: Object.freeze(value), status: 'saved' }
        : { leaderboard: null, status: 'invalid' };
    } catch (error) {
      return { leaderboard: null, status: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
    }
  }

  save(leaderboard: Leaderboard): boolean {
    if (!isValidLeaderboard(leaderboard)) return false;
    try {
      const storage = this.getStorage();
      const raw = storage.getItem(LEADERBOARD_KEY);
      if (raw) {
        try {
          const previous: unknown = JSON.parse(raw);
          if (typeof previous === 'object' && previous !== null && 'schemaVersion' in previous &&
              typeof previous.schemaVersion === 'number' && previous.schemaVersion > 1) return false;
        } catch { /* Uma conclusão explícita pode substituir um ranking corrompido da versão atual. */ }
      }
      storage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
      return true;
    } catch { return false; }
  }

  clear(): boolean {
    try {
      this.getStorage().removeItem(LEADERBOARD_KEY);
      return true;
    } catch { return false; }
  }
}
