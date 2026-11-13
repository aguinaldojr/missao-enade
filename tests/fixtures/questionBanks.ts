import catalog from '../../src/content/questions/central-nexo.json';
import { COURSE_IDS } from '../../src/domain/models/Course';
import type { Question } from '../../src/domain/models/Question';
import { validateContent } from '../../src/infrastructure/content/validateContent';

/** Fixtures sintéticos derivados de exemplo fictício; não integram o conteúdo distribuído. */
export function makeQuestionBank(commonCount = 10, specificCount = 10): readonly Question[] {
  const template = validateContent(catalog).questions[0]!;
  return [
    ...Array.from({ length: commonCount }, (_, i): Question => ({ ...template, id: 'FIX-COM-' + (i + 1), classification: 'COMUM', courses: [...COURSE_IDS] })),
    ...COURSE_IDS.flatMap((course) => Array.from({ length: specificCount }, (_, i): Question => ({
      ...template, id: 'FIX-' + course + '-' + (i + 1), classification: course, courses: [course],
    }))),
  ];
}
