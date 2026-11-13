import type { LearningCollection } from '../domain/models/EditorialMetadata';

export interface CollectionRepository {
  all(): readonly LearningCollection[];
  get(id: string): LearningCollection | undefined;
}
