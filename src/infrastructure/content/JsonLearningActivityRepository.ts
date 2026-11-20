import { isCourseId, type CourseId } from '../../domain/models/Course';
import type { CatalogLearningActivity, LearningMechanic } from '../../domain/models/LearningActivityCatalog';
import type { LearningActivityRepository } from '../../ports/LearningActivityRepository';
import { validateLearningActivities } from './validateLearningActivities';

function freeze<T>(value: T): T {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const nested of Object.values(value)) freeze(nested);
  }
  return value;
}

export class JsonLearningActivityRepository implements LearningActivityRepository {
  private activities?: readonly CatalogLearningActivity[];
  constructor(private readonly data: unknown) {}

  all(): readonly CatalogLearningActivity[] {
    if (!this.activities) {
      const catalog = validateLearningActivities(this.data);
      this.activities = freeze(structuredClone(catalog.activities));
    }
    return this.activities;
  }

  forCourse(course: CourseId): readonly CatalogLearningActivity[] {
    if (!isCourseId(course)) throw new Error('Curso desconhecido.');
    return Object.freeze(this.all().filter((activity) => activity.courses.includes(course)));
  }

  byMechanic(mechanic: LearningMechanic): readonly CatalogLearningActivity[] {
    return Object.freeze(this.all().filter((activity) => activity.mechanic === mechanic));
  }
}

