import type { CourseId } from '../domain/models/Course';

export interface MissionRouteRepository {
  completedCount(course: CourseId): number;
  recentQuestionIds(course: CourseId): readonly string[];
  recordCompletion(course: CourseId, questionIds?: readonly string[]): boolean;
}
