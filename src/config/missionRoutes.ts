import routesJson from '../content/mission-routes.json';
import type { CourseId } from '../domain/models/Course';
import type { QuestionOrderingStrategy } from '../domain/models/QuestionMission';

const routes = routesJson as Readonly<Record<CourseId, readonly (readonly string[])[]>>;

export function missionRouteCount(course: CourseId): number {
  return routes[course].length;
}

export function missionRoute(course: CourseId, completedCount: number): readonly string[] {
  const courseRoutes = routes[course];
  const index = Math.max(0, Math.trunc(completedCount)) % courseRoutes.length;
  return courseRoutes[index]!;
}

export function routeOrdering(route: readonly string[]): QuestionOrderingStrategy {
  const positions = new Map(route.map((id, index) => [id, index]));
  return (questions) => [...questions].sort((a, b) =>
    (positions.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (positions.get(b.id) ?? Number.MAX_SAFE_INTEGER));
}
