import { isCourseId, type CourseId } from '../../domain/models/Course';
import { isEligible } from '../../domain/eligibility';
import type { Question } from '../../domain/models/Question';
import type { ContentRepository } from '../../ports/ContentRepository';
import type { CollectionRepository } from '../../ports/CollectionRepository';
import { learningCollections } from './JsonCollectionRepository';
import { validateContent } from './validateContent';

export class JsonContentRepository implements ContentRepository {
  private questions?: readonly Question[];
  constructor(private readonly data: unknown, private readonly collections: CollectionRepository = learningCollections) {}

  questionsForCourse(course: CourseId): readonly Question[] {
    if (!isCourseId(course)) throw new Error('Curso desconhecido.');
    if (!this.questions) {
      const catalog = validateContent(this.data, this.collections);
      this.questions = Object.freeze(catalog.questions.map((question) => Object.freeze({
        ...question, courses: Object.freeze([...question.courses]),
        competencies: Object.freeze([...question.competencies]), source: Object.freeze({ ...question.source }),
        options: Object.freeze(question.options.map((option) => Object.freeze({ ...option }))),
        feedbackByOption: Object.freeze({ ...question.feedbackByOption }),
      })));
    }
    const questions = this.questions.filter((question) => isEligible(question, course));
    // O contrato editorial é geral; a fase jogável atual continua exigindo dez.
    if (questions.length !== 10) throw new Error('O catálogo precisa fornecer exatamente dez questões para ' + course + '.');
    return Object.freeze(questions);
  }
}
