import { COURSE_IDS, type CourseId } from '../../domain/models/Course';
import type { MissionRouteRepository } from '../../ports/MissionRouteRepository';

export const MISSION_ROUTE_KEY = 'n9:mission-route-progress:v1';

type RouteProgress = Partial<Record<CourseId, number>>;

export class LocalStorageMissionRouteRepository implements MissionRouteRepository {
  constructor(private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem'> = () => window.localStorage) {}

  completedCount(course: CourseId): number {
    try {
      const value = this.read()[course];
      return Number.isSafeInteger(value) && (value ?? -1) >= 0 ? value! : 0;
    } catch { return 0; }
  }

  recordCompletion(course: CourseId): boolean {
    try {
      const storage = this.getStorage();
      const progress = this.read();
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
