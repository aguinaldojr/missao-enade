import schema from '../../schemas/puzzles.schema.json';
import { MAPS } from '../../config/maps';
import type { CourseId } from '../../domain/models/Course';
import { isPermutation, type SequencePuzzle } from '../../domain/puzzles/SequencePuzzle';
import type { PuzzleContentRepository } from '../../ports/PuzzleRepository';
import type { CollectionRepository } from '../../ports/CollectionRepository';
import { createEditorialAjv, validateEditorialReferences } from './editorialValidation';
import { learningCollections } from './JsonCollectionRepository';
import { normalizePuzzleInput } from './legacyEditorial';

const validate = createEditorialAjv().compile<SequencePuzzle[]>(schema);
export class JsonPuzzleRepository implements PuzzleContentRepository {
  private readonly puzzles: readonly SequencePuzzle[];
  constructor(data: unknown, collections: CollectionRepository = learningCollections) {
    const candidate: unknown = Array.isArray(data) ? data.map(normalizePuzzleInput) : data;
    if (!validate(candidate)) throw new Error('Catálogo de sequências inválido.');
    if (new Set(candidate.map((puzzle) => puzzle.id)).size !== candidate.length ||
        candidate.some((puzzle) => new Set(puzzle.blocks.map((block) => block.id)).size !== puzzle.blocks.length ||
          !isPermutation(puzzle.correctOrder, puzzle) ||
          !MAPS[puzzle.unlocks.mapId]?.objects.some((object) => object.id === puzzle.unlocks.objectId && object.kind === 'door'))) {
      throw new Error('Relações do catálogo de sequências inválidas.');
    }
    for (const puzzle of candidate) validateEditorialReferences(puzzle, collections);
    this.puzzles = structuredClone(candidate);
  }
  all(): readonly SequencePuzzle[] { return this.puzzles; }
  forCourse(course: CourseId): readonly SequencePuzzle[] { return this.puzzles.filter((puzzle) => puzzle.courses.includes(course)); }
  get(id: string): SequencePuzzle | undefined { return this.puzzles.find((puzzle) => puzzle.id === id); }
}
