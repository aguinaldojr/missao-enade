import { COURSE_IDS, isCourseId, type CourseId } from '../../domain/models/Course';
import { isEligible } from '../../domain/eligibility';
import type { Question } from '../../domain/models/Question';
import type { ContentRepository } from '../../ports/ContentRepository';
import { validateContent } from './validateContent';

export class JsonContentRepository implements ContentRepository {
  private questions?: readonly Question[];

  constructor(private readonly data: unknown) {}

  questionsForCourse(course: CourseId): readonly Question[] {
    if (!isCourseId(course)) throw new Error('Curso desconhecido.');
    if (!this.questions) {
      const catalog = validateContent(this.data);
      const questions = catalog.questions.map((question) => Object.freeze({
        ...question, courses: Object.freeze([...question.courses]),
        options: Object.freeze(question.options.map((option) => Object.freeze({ ...option }))),
        feedbackByOption: Object.freeze({ ...question.feedbackByOption }),
      }));
      // Nunca completar uma fase com conteúdo inelegível ou truncar silenciosamente.
      for (const id of COURSE_IDS) {
        if (questions.filter((question) => isEligible(question, id)).length !== 10) {
          throw new Error('O catálogo precisa fornecer exatamente dez exemplos para ' + id + '.');
        }
      }
      this.questions = Object.freeze(questions);
    }
    return Object.freeze(this.questions.filter((question) => isEligible(question, course)));
  }
}
