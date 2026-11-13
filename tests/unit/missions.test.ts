import { describe, expect, it } from 'vitest';
import catalog from '../../src/content/questions/central-nexo.json';
import puzzles from '../../src/content/puzzles/sequences.json';
import { makeQuestionBank } from '../fixtures/questionBanks';
import { COURSE_IDS, type CourseId } from '../../src/domain/models/Course';
import type { Question } from '../../src/domain/models/Question';
import { QUESTION_MISSIONS, LEGACY_EXAMPLE_MISSION, EXAMPLE_QUESTION_COLLECTION } from '../../src/config/missions';
import { getMissionAvailability, InsufficientMissionContentError, selectMissionQuestions, assertMissionQuestionSet } from '../../src/domain/QuestionSelection';
import type { QuestionMissionConfig } from '../../src/domain/models/QuestionMission';
import { validateMissionConfig } from '../../src/infrastructure/content/validateMissionConfig';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { createAttempt, selectOption, confirmAnswer, accessFeedback, currentQuestion, isComplete } from '../../src/domain/progression';
import { calculateScore } from '../../src/domain/scoring';
import { GameSession } from '../../src/app/GameSession';

const request = (mission: QuestionMissionConfig = QUESTION_MISSIONS.quick, course: CourseId = 'CC') =>
  ({ course, collectionId: EXAMPLE_QUESTION_COLLECTION, mission });

describe('missões configuráveis — banco e seleção separados', () => {
  it.each(Object.values(QUESTION_MISSIONS))('seleciona $questionCount com a distribuição configurada', (mission) => {
    const bank = makeQuestionBank();
    const selected = selectMissionQuestions(bank, request(mission));
    expect(selected).toHaveLength(mission.questionCount);
    expect(selected.filter((q) => q.classification === 'COMUM')).toHaveLength(mission.commonQuestionCount);
    expect(selected.filter((q) => q.classification === 'CC')).toHaveLength(mission.specificQuestionCount);
    expect(new Set(selected.map((q) => q.id)).size).toBe(mission.questionCount);
    expect(getMissionAvailability(bank, request(mission)).available).toBe(true);
    expect(validateMissionConfig(mission)).toEqual(mission);
  });
  it('repositório retorna vinte elegíveis de um banco sintético de sessenta', () => {
    const repository = new JsonContentRepository({ ...catalog, questions: makeQuestionBank() });
    for (const course of COURSE_IDS) {
      const bank = repository.questionsForCourse(course);
      expect(bank).toHaveLength(20);
      expect(selectMissionQuestions(bank, request(QUESTION_MISSIONS.quick, course))).toHaveLength(3);
    }
  });
  it('aceita banco exatamente suficiente e banco maior sem modificar nem truncar o banco', () => {
    const exact = makeQuestionBank(1, 2);
    expect(selectMissionQuestions(exact, request())).toHaveLength(3);
    const large = makeQuestionBank(20, 20);
    const before = structuredClone(large);
    const selection = selectMissionQuestions(large, request());
    expect(selection.map((q) => q.id)).toEqual(['FIX-COM-1', 'FIX-CC-1', 'FIX-CC-2']);
    expect(large).toEqual(before);
    expect(selection).not.toBe(large);
  });
  it.each(COURSE_IDS)('filtra comuns explícitos e específicas de %s', (course) => {
    const bank = makeQuestionBank();
    const selected = selectMissionQuestions(bank, request(QUESTION_MISSIONS.normal, course));
    expect(selected.every((q) => q.courses.includes(course))).toBe(true);
    expect(selected.every((q) => q.classification === 'COMUM' || q.classification === course)).toBe(true);
  });
  it('não interpreta COMUM como elegibilidade universal nem usa específica de outro curso', () => {
    const bank = makeQuestionBank(1, 2).map((q) => q.classification === 'COMUM' ? { ...q, courses: ['CC'] as CourseId[] } : q);
    expect(getMissionAvailability(bank, request(QUESTION_MISSIONS.quick, 'SI')).available).toBe(false);
    expect(() => selectMissionQuestions(bank, request(QUESTION_MISSIONS.quick, 'SI'))).toThrow('0 comuns');
    const wrongSpecific = makeQuestionBank(1, 0).concat(
      makeQuestionBank(0, 2).filter((q) => q.classification === 'CC').map((q) => ({ ...q, courses: ['SI'] as CourseId[] })));
    expect(() => selectMissionQuestions(wrongSpecific, request(QUESTION_MISSIONS.quick, 'SI'))).toThrow('0 específicas');
  });
  it('banco insuficiente informa quantidades sem repetir nem completar com outro curso', () => {
    const bank = new JsonContentRepository(catalog).questionsForCourse('CC');
    const status = getMissionAvailability(bank, request());
    expect(status).toMatchObject({ available: false, required: { questionCount: 3, commonQuestionCount: 1, specificQuestionCount: 2 },
      availableCounts: { questionCount: 10, commonQuestionCount: 9, specificQuestionCount: 1 }, missing: { questionCount: 1, specificQuestionCount: 1 } });
    expect(() => selectMissionQuestions(bank, request())).toThrow(InsufficientMissionContentError);
    expect(() => selectMissionQuestions(bank, request())).toThrow('necessárias 3 questões');
    expect(() => selectMissionQuestions(bank, request())).toThrow('disponíveis 10');
    expect(() => selectMissionQuestions([], request())).toThrow('disponíveis 0');
  });
  it('não mistura coleções para preencher cotas faltantes', () => {
    const current = new JsonContentRepository(catalog).questionsForCourse('CC');
    const other = makeQuestionBank().map((q) => ({ ...q, id: 'OTHER-' + q.id, collectionId: 'n9-provisional-sequences-v1' }));
    expect(() => selectMissionQuestions([...current, ...other], request())).toThrow('1 específica');
    const selected = selectMissionQuestions([...makeQuestionBank(), ...other], request(QUESTION_MISSIONS.arena));
    expect(selected.every((q) => q.collectionId === EXAMPLE_QUESTION_COLLECTION)).toBe(true);
    expect(() => selectMissionQuestions(makeQuestionBank(), { ...request(), collectionId: '' })).toThrow('coleção');
  });
  it('curso inválido é rejeitado por repositório, disponibilidade e seleção', () => {
    const course = 'OUTRO' as CourseId;
    expect(() => new JsonContentRepository(catalog).questionsForCourse(course)).toThrow('Curso desconhecido');
    expect(() => getMissionAvailability(makeQuestionBank(), request(QUESTION_MISSIONS.quick, course))).toThrow('Curso desconhecido');
    expect(() => selectMissionQuestions(makeQuestionBank(), request(QUESTION_MISSIONS.quick, course))).toThrow('Curso desconhecido');
  });
  it.each([
    { questionCount: 4 }, { questionCount: 0, commonQuestionCount: 0, specificQuestionCount: 0 },
    { commonQuestionCount: -1, specificQuestionCount: 4 }, { questionCount: 3.5 },
    { specificQuestionCount: 1.5 }, { questionCount: Infinity }, { questionCount: Number.MAX_SAFE_INTEGER + 1 },
    { id: ' ' }, { internalTitle: '' },
  ])('rejeita configuração inválida: %j', (changes) => {
    const config = { ...QUESTION_MISSIONS.quick, ...changes };
    expect(() => validateMissionConfig(config)).toThrow('Configuração de missão inválida');
    expect(() => selectMissionQuestions(makeQuestionBank(), request(config))).toThrow('Configuração de missão inválida');
  });
  it('schema estrito não aceita campos desconhecidos e permite cotas zeradas com total positivo', () => {
    expect(() => validateMissionConfig({ ...QUESTION_MISSIONS.quick, extra: true })).toThrow();
    const config = validateMissionConfig({ id: 'only-common', internalTitle: 'Somente comuns', questionCount: 3, commonQuestionCount: 3, specificQuestionCount: 0 });
    expect(selectMissionQuestions(makeQuestionBank(3, 0), request(config))).toHaveLength(3);
  });
  it('rejeita IDs duplicados em vez de contar cópias como disponibilidade', () => {
    const bank = makeQuestionBank();
    expect(() => selectMissionQuestions([...bank, bank[0]!], request())).toThrow('ID duplicado');
    expect(() => new JsonContentRepository({ ...catalog, questions: [...bank, bank[0]!] }).questionsForCourse('CC')).toThrow('duplicado');
  });
  it('estratégia injetada é previsível e não pode substituir, omitir ou repetir questões', () => {
    const bank = makeQuestionBank(4, 4);
    const reverse = (pool: readonly Question[]) => [...pool].reverse();
    const selected = selectMissionQuestions(bank, request(), reverse);
    expect(selected.map((q) => q.id)).toEqual(['FIX-COM-4', 'FIX-CC-4', 'FIX-CC-3']);
    expect(selectMissionQuestions(bank, request(), reverse)).toEqual(selected);
    expect(() => selectMissionQuestions(bank, request(), (pool) => [pool[0]!, ...pool.slice(1).map(() => pool[0]!)])).toThrow('Estratégia inválida');
    expect(() => selectMissionQuestions(bank, request(), (pool) => pool.slice(1))).toThrow('Estratégia inválida');
    expect(() => selectMissionQuestions(bank, request(), (pool) => pool.map((q) => ({ ...q })))).toThrow('Estratégia inválida');
  });
  it('aceita exclusões explícitas para futura origem de histórico sem reaproveitar excluídas', () => {
    const bank = makeQuestionBank(2, 3);
    const selected = selectMissionQuestions(bank, { ...request(), excludedQuestionIds: ['FIX-COM-1', 'FIX-CC-1'] });
    expect(selected.map((q) => q.id)).toEqual(['FIX-COM-2', 'FIX-CC-2', 'FIX-CC-3']);
    expect(() => selectMissionQuestions(bank, { ...request(), excludedQuestionIds: ['FIX-CC-1', 'FIX-CC-2', 'FIX-CC-3'] })).toThrow('0 específicas');
  });
  it('puzzles não são questões e não suprem disponibilidade da missão', () => {
    const invalidBank = [...makeQuestionBank(1, 0), puzzles[0] as unknown as Question];
    expect(() => selectMissionQuestions(invalidBank, request())).toThrow('puzzles');
    expect(() => new JsonContentRepository({ ...catalog, questions: invalidBank }).questionsForCourse('CC')).toThrow();
    expect(getMissionAvailability(makeQuestionBank(1, 0), request()).available).toBe(false);
  });
  it.each(COURSE_IDS)('preserva a fase atual e bloqueia os quatro novos modos no catálogo provisório: %s', (course) => {
    const bank = new JsonContentRepository(catalog).questionsForCourse(course);
    const selected = selectMissionQuestions(bank, request(LEGACY_EXAMPLE_MISSION, course));
    expect(selected).toEqual(bank);
    expect(selected).toHaveLength(10);
    expect(selected[9]?.id).toBe('EX-' + course + '-01');
    for (const config of Object.values(QUESTION_MISSIONS)) expect(getMissionAvailability(bank, request(config, course)).available).toBe(false);
  });
  it('Arena fica indisponível com 19 elegíveis e disponível com vinte bem distribuídas', () => {
    expect(getMissionAvailability(makeQuestionBank(10, 9), request(QUESTION_MISSIONS.arena))).toMatchObject({ available: false,
      availableCounts: { questionCount: 19 } });
    expect(getMissionAvailability(makeQuestionBank(10, 10), request(QUESTION_MISSIONS.arena))).toMatchObject({ available: true,
      availableCounts: { questionCount: 20 } });
    expect(getMissionAvailability(makeQuestionBank(15, 5), request(QUESTION_MISSIONS.arena)).available).toBe(false);
  });
});

describe('progressão com quantidade configurada e integração de compatibilidade', () => {
  it.each(Object.values(QUESTION_MISSIONS))('só conclui após $questionCount confirmações e feedbacks', (mission) => {
    const selected = selectMissionQuestions(makeQuestionBank(), request(mission));
    let attempt = createAttempt('fixture-attempt', 'CC', selected, mission);
    expect(attempt.mission.questionCount).toBe(mission.questionCount);
    for (let i = 0; i < mission.questionCount; i++) {
      const question = currentQuestion(attempt);
      attempt = selectOption(attempt, question.id, question.correctOptionId);
      attempt = confirmAnswer(attempt, question.id);
      expect(isComplete(attempt)).toBe(false);
      attempt = accessFeedback(attempt, question.id);
      expect(isComplete(attempt)).toBe(i === mission.questionCount - 1);
      if (i < mission.questionCount - 1) attempt = { ...attempt, index: i + 1, selectedOptionId: null };
    }
    expect(calculateScore(attempt.answers)).toBe(mission.questionCount * 100);
  });
  it('tentativa não aceita composição incorreta nem mistura de coleção após a seleção', () => {
    const selected = selectMissionQuestions(makeQuestionBank(), request());
    expect(() => assertMissionQuestionSet(selected.slice(1), 'CC', QUESTION_MISSIONS.quick)).toThrow('3 questões');
    expect(() => createAttempt('fixture', 'CC', selected.map((q, i) => i === 0 ? { ...q, collectionId: 'other' } : q), QUESTION_MISSIONS.quick)).toThrow('mesma coleção');
  });
  it('GameSession seleciona dez de um banco maior e mantém relatório de demonstração', () => {
    const session = new GameSession(new JsonContentRepository({ ...catalog, questions: makeQuestionBank(12, 12) }));
    session.dispatch({ type: 'start' }); session.dispatch({ type: 'select-course', course: 'CC' });
    session.dispatch({ type: 'enter-central' }); session.dispatch({ type: 'start-phase' });
    expect(session.snapshot.attempt?.questions).toHaveLength(10);
    expect(session.snapshot.attempt?.mission).toEqual(LEGACY_EXAMPLE_MISSION);
    for (let i = 0; i < 10; i++) {
      const q = currentQuestion(session.snapshot.attempt!);
      session.dispatch({ type: 'select-option', questionId: q.id, option: q.correctOptionId });
      session.dispatch({ type: 'confirm-answer', questionId: q.id });
      session.dispatch({ type: 'feedback-accessed', questionId: q.id });
      session.dispatch({ type: 'next-question', questionId: q.id });
    }
    expect(session.snapshot.screen).toBe('result');
    expect(session.snapshot.lastResult).toMatchObject({ total: 10, score: 1000, mode: 'example', phaseId: 'FASE-EXEMPLO-01' });
  });
  it('GameSession expõe quantidades quando não pode preencher a fase antiga', () => {
    const session = new GameSession(new JsonContentRepository({ ...catalog, questions: makeQuestionBank(8, 1) }));
    session.dispatch({ type: 'start' }); session.dispatch({ type: 'select-course', course: 'CC' });
    session.dispatch({ type: 'enter-central' }); session.dispatch({ type: 'start-phase' });
    expect(session.snapshot.screen).toBe('map');
    expect(session.snapshot.attempt).toBeNull();
    expect(session.snapshot.contentError).toContain('necessárias 10');
    expect(session.snapshot.contentError).toContain('disponíveis 9');
  });
});
