import schema from '../../schemas/collections.schema.json';
import data from '../../content/collections.json';
import type { LearningCollection } from '../../domain/models/EditorialMetadata';
import type { CollectionRepository } from '../../ports/CollectionRepository';
import { createEditorialAjv } from './editorialValidation';

const validate = createEditorialAjv().compile<LearningCollection[]>(schema);
export class JsonCollectionRepository implements CollectionRepository {
  private readonly collections: readonly LearningCollection[];
  constructor(input: unknown) {
    if (!validate(input) || new Set(input.map((item) => item.id)).size !== input.length) {
      throw new Error('Catálogo de coleções inválido ou com ID duplicado.');
    }
    this.collections = Object.freeze(input.map((item) => Object.freeze({ ...item })));
  }
  all(): readonly LearningCollection[] { return this.collections; }
  get(id: string): LearningCollection | undefined { return this.collections.find((item) => item.id === id); }
}
export const learningCollections = new JsonCollectionRepository(data);
