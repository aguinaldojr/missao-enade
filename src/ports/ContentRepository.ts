import type { CourseId } from '../domain/models/Course';
import type { Question } from '../domain/models/Question';

export interface ContentRepository {
  /** Banco completo elegível; seleção e tamanho pertencem à missão. */
  questionsForCourse(course: CourseId): readonly Question[];
}
