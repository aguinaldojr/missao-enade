import type { CourseId } from './models/Course';
import type { Question } from './models/Question';

/** A classificação COMUM não concede elegibilidade: cursos são explícitos. */
export function isEligible(question: Question, course: CourseId): boolean {
  return question.courses.includes(course);
}
