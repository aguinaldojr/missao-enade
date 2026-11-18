import type { CourseId } from '../domain/models/Course';

export interface MissionRouteRepository {
  completedCount(course: CourseId): number;
  recordCompletion(course: CourseId): boolean;
}
