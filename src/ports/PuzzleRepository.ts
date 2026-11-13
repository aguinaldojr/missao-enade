import type { CourseId } from '../domain/models/Course';
import type { PuzzleProgress, SequencePuzzle } from '../domain/puzzles/SequencePuzzle';
import type { SaveStatus } from './ProgressRepository';

export interface PuzzleContentRepository {
  all(): readonly SequencePuzzle[];
  forCourse(course: CourseId): readonly SequencePuzzle[];
  get(id: string): SequencePuzzle | undefined;
}
export interface PuzzleProgressRepository {
  load(): { progress: PuzzleProgress | null; status: SaveStatus };
  save(progress: PuzzleProgress): { progress: PuzzleProgress; status: SaveStatus };
}
