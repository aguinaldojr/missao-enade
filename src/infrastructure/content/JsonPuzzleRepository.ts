import Ajv from 'ajv';
import schema from '../../schemas/puzzles.schema.json';
import { MAPS } from '../../config/maps';
import type { CourseId } from '../../domain/models/Course';
import { isPermutation, type SequencePuzzle } from '../../domain/puzzles/SequencePuzzle';
import type { PuzzleContentRepository } from '../../ports/PuzzleRepository';

const validate = new Ajv().compile<SequencePuzzle[]>(schema);
export class JsonPuzzleRepository implements PuzzleContentRepository {
  private readonly puzzles: readonly SequencePuzzle[];
  constructor(data: unknown) {
    if (!validate(data)) throw new Error('Catálogo de sequências inválido.');
    if (new Set(data.map((puzzle) => puzzle.id)).size !== data.length ||
        data.some((puzzle) => new Set(puzzle.blocks.map((block) => block.id)).size !== puzzle.blocks.length ||
          !isPermutation(puzzle.correctOrder, puzzle) ||
          !MAPS[puzzle.unlocks.mapId]?.objects.some((object) => object.id === puzzle.unlocks.objectId && object.kind === 'door'))) {
      throw new Error('Relações do catálogo de sequências inválidas.');
    }
    this.puzzles = structuredClone(data);
  }
  all(): readonly SequencePuzzle[] { return this.puzzles; }
  forCourse(course: CourseId): readonly SequencePuzzle[] { return this.puzzles.filter((puzzle) => puzzle.courses.includes(course)); }
  get(id: string): SequencePuzzle | undefined { return this.puzzles.find((puzzle) => puzzle.id === id); }
}
