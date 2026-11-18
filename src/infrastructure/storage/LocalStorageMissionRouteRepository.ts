import { COURSE_IDS, type CourseId } from '../../domain/models/Course';
import type { MissionRouteRepository } from '../../ports/MissionRouteRepository';

export const MISSION_ROUTE_KEY = 'n9:mission-route-progress:v1';
export const MISSION_RECENT_QUESTIONS_KEY = 'n9:mission-recent-questions:v1';

type RouteProgress = Partial<Record<CourseId, number>>;

export class LocalStorageMissionRouteRepository implements MissionRouteRepository {
  constructor(private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem'> = () => window.localStorage) {}

  completedCount(course: CourseId): number {
    try {
      const value = this.read()[course];
      return Number.isSafeInteger(value) && (value ?? -1) >= 0 ? value! : 0;
    } catch { return 0; }
  }

  recentQuestionIds(course: CourseId): readonly string[] {
    try {
      const raw = this.getStorage().getItem(MISSION_RECENT_QUESTIONS_KEY);
      if (!raw) return Object.freeze([]);
      const value: unknown = JSON.parse(raw);
      const ids = value && typeof value === 'object' && !Array.isArray(value)
        ? (value as Record<string, unknown>)[course] : undefined;
      if (!Array.isArray(ids) || ids.length > 25 || ids.some((id) => typeof id !== 'string') ||
          new Set(ids).size !== ids.length) return Object.freeze([]);
      return Object.freeze([...ids]);
    } catch { return Object.freeze([]); }
  }

  recordCompletion(course: CourseId, questionIds: readonly string[] = []): boolean {
    try {
      const storage = this.getStorage();
      const progress = this.read();
      const recentRaw = storage.getItem(MISSION_RECENT_QUESTIONS_KEY);
      let recent: Record<string, unknown> = {};
      if (recentRaw) {
        const parsed: unknown = JSON.parse(recentRaw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) recent = parsed as Record<string, unknown>;
      }
      const validIds = questionIds.length <= 25 && questionIds.every((id) => typeof id === 'string') &&
        new Set(questionIds).size === questionIds.length ? [...questionIds] : [];
      storage.setItem(MISSION_RECENT_QUESTIONS_KEY, JSON.stringify({ ...recent, [course]: validIds }));
      storage.setItem(MISSION_ROUTE_KEY, JSON.stringify({ ...progress, [course]: this.completedCount(course) + 1 }));
      return true;
    } catch { return false; }
  }

  private read(): RouteProgress {
    const raw = this.getStorage().getItem(MISSION_ROUTE_KEY);
    if (!raw) return {};
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    return Object.fromEntries(COURSE_IDS.flatMap((course) => {
      const count = (value as Record<string, unknown>)[course];
      return Number.isSafeInteger(count) && Number(count) >= 0 ? [[course, Number(count)]] : [];
    }));
  }
}
