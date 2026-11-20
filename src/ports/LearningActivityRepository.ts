import type { CourseId } from '../domain/models/Course';
import type { CatalogLearningActivity, LearningMechanic } from '../domain/models/LearningActivityCatalog';

export interface LearningActivityRepository {
  all(): readonly CatalogLearningActivity[];
  forCourse(course: CourseId): readonly CatalogLearningActivity[];
  byMechanic(mechanic: LearningMechanic): readonly CatalogLearningActivity[];
}

