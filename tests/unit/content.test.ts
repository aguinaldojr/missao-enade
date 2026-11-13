import { describe, expect, it } from 'vitest';
import catalog from '../../src/content/questions/central-nexo.json';
import { CLASSIFICATIONS, type QuestionCatalog } from '../../src/domain/models/Question';
import { COURSE_IDS } from '../../src/domain/models/Course';
import { isEligible } from '../../src/domain/eligibility';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { validateContent } from '../../src/infrastructure/content/validateContent';

describe('catálogo local de exemplos', () => {
  it('carrega dez exemplos distintos por curso, com nove compartilhados e um específico', () => {
    const repository = new JsonContentRepository(catalog);
    for (const course of COURSE_IDS) {
      const phase = repository.questionsForCourse(course);
      expect(phase).toHaveLength(10);
      expect(new Set(phase.map((question) => question.id)).size).toBe(10);
      expect(phase.filter((question) => question.classification === 'COMUM')).toHaveLength(9);
      expect(phase[9]?.classification).toBe(course);
      expect(phase.every((question) => question.example && question.editorialStatus === 'example' && question.courses.includes(course))).toBe(true);
    }
  });

  it.each(CLASSIFICATIONS)('aceita a classificação %s', (classification) => {
    const data = structuredClone(catalog);
    data.questions[0]!.classification = classification;
    expect(validateContent(data).questions[0]?.classification).toBe(classification);
  });

  it('usa a lista de cursos, sem liberar COMUM automaticamente nem limitar pelo rótulo da classificação', () => {
    const question = validateContent(catalog).questions[0]!;
    expect(isEligible({ ...question, courses: ['CC', 'SI'] }, 'CC')).toBe(true);
    expect(isEligible({ ...question, courses: ['CC', 'SI'] }, 'TRC')).toBe(false);
    expect(isEligible({ ...question, classification: 'CC', courses: ['CC', 'SI'] }, 'SI')).toBe(true);
  });

  it.each([
    ['classificação desconhecida', (data: typeof catalog) => { data.questions[0]!.classification = 'OUTRA'; }],
    ['curso desconhecido', (data: typeof catalog) => { data.questions[0]!.courses = ['OUTRO']; }],
    ['cursos vazios', (data: typeof catalog) => { data.questions[0]!.courses = []; }],
    ['cursos duplicados', (data: typeof catalog) => { data.questions[0]!.courses = ['CC', 'CC']; }],
    ['quatro alternativas', (data: typeof catalog) => { data.questions[0]!.options.pop(); }],
    ['alternativas repetidas', (data: typeof catalog) => { data.questions[0]!.options[1]!.id = 'A'; }],
    ['gabarito inexistente', (data: typeof catalog) => { data.questions[0]!.correctOptionId = 'Z'; }],
    ['sem explicação', (data: typeof catalog) => { data.questions[0]!.explanation = ' '; }],
    ['sem feedback E', (data: typeof catalog) => { data.questions[0]!.feedbackByOption.E = ''; }],
    ['ID duplicado', (data: typeof catalog) => { data.questions[1]!.id = data.questions[0]!.id; }],
    ['competência vazia', (data: typeof catalog) => { data.questions[0]!.competencies = [' ']; }],
    ['status editorial desconhecido', (data: typeof catalog) => { data.questions[0]!.editorialStatus = 'INVALID'; }],
  ])('rejeita %s', (_label, change) => {
    const data = structuredClone(catalog);
    change(data);
    expect(() => validateContent(data)).toThrow();
  });

  it.each([9, 11])('não inicia fases de %i questões nem completa com outro curso', (size) => {
    const data: QuestionCatalog = validateContent(catalog);
    const questions = size === 9
      ? data.questions.filter((question) => question.id !== 'EX-CC-01')
      : [...data.questions, { ...data.questions[9]!, id: 'EX-CC-EXTRA' }];
    const repository = new JsonContentRepository({ ...data, questions });
    expect(() => repository.questionsForCourse('CC')).toThrow('exatamente dez');
  });
});
