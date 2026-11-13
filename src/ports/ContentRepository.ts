import type { CourseId } from '../domain/models/Course';
import type { Question } from '../domain/models/Question';

export interface ContentRepository {
  questionsForCourse(course: CourseId): readonly Question[];
}
