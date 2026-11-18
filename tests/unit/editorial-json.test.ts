import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { COURSE_IDS } from '../../src/domain/models/Course';
import { isSequenceCorrect, type SequencePuzzle } from '../../src/domain/puzzles/SequencePuzzle';
import type { Question } from '../../src/domain/models/Question';
import { validateContent } from '../../src/infrastructure/content/validateContent';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import {
  convertedCatalogs,
  plain,
  PUZZLE_OUTPUT,
  QUESTION_OUTPUT,
  readEditorialDocuments,
  canonicalMissionRoutes,
} from '../../scripts/convert-editorial-content.ts';

const projectRoot = resolve(import.meta.dirname, '../..');
const questionJson: unknown = JSON.parse(readFileSync(resolve(projectRoot, QUESTION_OUTPUT), 'utf8'));
const puzzleJson: unknown = JSON.parse(readFileSync(resolve(projectRoot, PUZZLE_OUTPUT), 'utf8'));
const questions = validateContent(questionJson).questions;
const puzzles = new JsonPuzzleRepository(puzzleJson).all();

function permutations<T>(items: readonly T[]): readonly (readonly T[])[] {
  if (items.length < 2) return [[...items]];
  return items.flatMap((item, index) => permutations([...items.slice(0, index), ...items.slice(index + 1)])
    .map((tail) => [item, ...tail]));
}

function playerText(question: Question): string {
  return [question.context, question.prompt, ...question.options.map((option) => option.text), question.explanation,
    ...Object.values(question.feedbackByOption), JSON.stringify(question.presentation ?? '')].join(' ');
}

function puzzlePlayerText(puzzle: SequencePuzzle): string {
  return [puzzle.title, puzzle.narrative, ...puzzle.blocks.map((block) => block.text), ...puzzle.hints,
    puzzle.explanation].join(' ');
}

describe('conversão controlada da coleção ampliada para JSON', () => {
  it('mantém os JSON idênticos à projeção integral dos lotes de autoria', () => {
    const converted = convertedCatalogs(projectRoot);
    expect(questionJson).toEqual(converted.questions);
    expect(puzzleJson).toEqual(converted.puzzles);
    const documents = readEditorialDocuments(projectRoot);
    expect(documents.sections).toHaveLength(213);
    expect(documents.questions).toEqual(questions);
    expect(documents.puzzles).toEqual(puzzles);
  });

  it('corresponde aos 205 IDs do inventário consolidado e aos oito puzzles executáveis', () => {
    const convertedIds = [...questions, ...puzzles].map((item) => item.id).sort();
    expect(new Set(questions.map((item) => item.id)).size).toBe(205);
    expect(convertedIds).toHaveLength(213);
    expect(new Set(convertedIds).size).toBe(213);
    expect(questions).toHaveLength(205);
    expect(puzzles).toHaveLength(8);
  });

  it('preserva elegibilidade e cotas de cada roteiro canônico de 25', () => {
    const routes = canonicalMissionRoutes(projectRoot);
    for (const course of COURSE_IDS) {
      const eligible = new Map(questions.filter((question) => question.courses.includes(course)).map((question) => [question.id, question]));
      const eligiblePuzzles = puzzles.filter((puzzle) => puzzle.courses.includes(course));
      expect(routes[course]).toHaveLength(course === 'SI' ? 4 : 3);
      for (const route of routes[course]!) {
        const items = route.map((id) => eligible.get(id));
        expect(items.every(Boolean)).toBe(true);
        expect(new Set(route).size).toBe(25);
        expect(items.filter((question) => question?.classification === 'COMUM')).toHaveLength(5);
        expect(items.filter((question) => question?.classification !== 'COMUM')).toHaveLength(20);
        expect(items.filter((question) => question?.difficulty === 'advanced').length).toBeLessThanOrEqual(3);
      }
      expect(eligiblePuzzles.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('preserva gabaritos, ordem das alternativas e feedbacks documentais', () => {
    const documented = readEditorialDocuments(projectRoot).questions as readonly unknown[];
    expect(questions).toEqual(documented);
    for (const question of questions) {
      expect(question.options.map((option) => option.id)).toEqual(['A', 'B', 'C', 'D', 'E']);
      expect(question.options.some((option) => option.id === question.correctOptionId)).toBe(true);
      expect(Object.keys(question.feedbackByOption)).toEqual(['A', 'B', 'C', 'D', 'E']);
      expect(Object.values(question.feedbackByOption).every((feedback) => plain(feedback).length > 0)).toBe(true);
    }
  });

  it('preserva fontes, papéis e rastreabilidade sem liberar conteúdo', () => {
    const items = [...questions, ...puzzles];
    expect(questions.filter((item) => item.validationStatus === 'ready-for-pilot').map((item) => item.id))
      .toEqual(['E26-Q-SI-02', 'E26-Q-SI-05']);
    expect(questions.filter((item) => item.validationStatus === 'under-ai-review')).toHaveLength(203);
    expect(puzzles.every((item) => item.validationStatus === 'under-ai-review')).toBe(true);
    expect(items.every((item) => item.sources.filter((source) => source.role === 'primary').length === 1)).toBe(true);
    expect(items.every((item) => item.traceability && item.traceability.title && item.traceability.objective &&
      item.traceability.locators.length > 0)).toBe(true);
    expect(items.flatMap((item) => item.sources).some((source) => source.role === 'normative-complementary')).toBe(true);
    expect(items.flatMap((item) => item.sources).some((source) => source.role === 'technical')).toBe(true);
    for (const id of ['E26-Q-COM-07', 'E26-Q-COM-08', 'E26-Q-COM-10', 'E26-P-COM-01']) {
      const item = items.find((candidate) => candidate.id === id)!;
      expect(item.sources.filter((source) => source.role === 'normative-complementary')).toHaveLength(4);
    }
  });

  it('preserva as melhorias visuais autorizadas e os puzzles existentes', () => {
    const rawQuestions = (questionJson as { questions: Record<string, unknown>[] }).questions;
    const rawPuzzles = puzzleJson as Record<string, unknown>[];
    expect(rawQuestions).toHaveLength(205);
    expect(rawPuzzles).toHaveLength(8);
    const siPuzzle = puzzles.find((puzzle) => puzzle.id === 'E26-P-SI-01')!;
    expect(siPuzzle).toMatchObject({
      title: 'Liberar o Laboratório Aurora', difficulty: 'intermediate', courses: ['SI'],
      area: 'Sistemas de informação e processos de negócio', reward: { xp: 100 },
      validationStatus: 'under-ai-review',
    });
    expect(siPuzzle.correctOrder).toEqual(['validar-solicitacao', 'consultar-disponibilidade',
      'criar-reserva', 'autorizar-acesso', 'sincronizar-acesso']);
    const codePuzzle = puzzles.find((puzzle) => puzzle.id === 'E26-P-SI-02')!;
    expect(codePuzzle).toMatchObject({ title: 'Montar o classificador de prioridade', courses: ['SI'],
      difficulty: 'introductory', reward: { xp: 100 }, validationStatus: 'under-ai-review' });
    expect(codePuzzle.blocks.find((block) => block.id === 'abrir-funcao')?.text)
      .toContain('classificar_prioridade');
    expect(codePuzzle.blocks.find((block) => block.id === 'calcular-pontuacao')?.text)
      .toContain('impacto * urgencia');
    const monitorPuzzle = puzzles.find((puzzle) => puzzle.id === 'E26-P-SI-03')!;
    expect(monitorPuzzle).toMatchObject({ title: 'Montar o monitor de alertas', courses: ['SI'],
      difficulty: 'intermediate', reward: { xp: 100 }, validationStatus: 'under-ai-review' });
    expect(monitorPuzzle.blocks.find((block) => block.id === 'preparar-programa')?.text)
      .toContain('#include <stdio.h>');
    expect(monitorPuzzle.blocks.find((block) => block.id === 'atualizar-contador')?.text)
      .toContain('(*contador)++');
    const si02 = questions.find((question) => question.id === 'E26-Q-SI-02')!;
    const si05 = questions.find((question) => question.id === 'E26-Q-SI-05')!;
    expect(si02).toMatchObject({ version: 2, correctOptionId: 'C', validationStatus: 'ready-for-pilot' });
    expect(si02.presentation?.blocks.map((block) => block.type)).toEqual(['code', 'table', 'code']);
    expect(si05).toMatchObject({ version: 2, correctOptionId: 'B', validationStatus: 'ready-for-pilot' });
    expect(si05.presentation?.blocks.map((block) => block.type)).toEqual(['diagram']);
    const expected = {
      'E26-Q-SI-01': { version: 2, answer: 'C', blocks: ['diagram'] },
      'E26-Q-SI-03': { version: 2, answer: 'B', blocks: ['table', 'diagram'] },
      'E26-Q-SI-04': { version: 2, answer: 'A', blocks: ['diagram'] },
      'E26-Q-SI-06': { version: 2, answer: 'A', blocks: ['table'] },
      'E26-Q-SI-07': { version: 2, answer: 'C', blocks: ['image'] },
      'E26-Q-SI-08': { version: 2, answer: 'E', blocks: ['table'] },
      'E26-Q-SI-09': { version: 2, answer: 'E', blocks: ['table', 'table'] },
      'E26-Q-SI-10': { version: 3, answer: 'B', blocks: ['diagram'] },
    } as const;
    for (const [id, expectation] of Object.entries(expected)) {
      const question = questions.find((candidate) => candidate.id === id)!;
      expect(question.version).toBe(expectation.version);
      expect(question.correctOptionId).toBe(expectation.answer);
      expect(question.presentation?.blocks.map((block) => block.type)).toEqual(expectation.blocks);
      expect(question.validationStatus).toBe('under-ai-review');
    }
    const expectedSiM03 = {
      'E26-Q-SI-11': { answer: 'C', blocks: ['diagram'] },
      'E26-Q-SI-12': { answer: 'A', blocks: ['table'] },
      'E26-Q-SI-13': { answer: 'E', blocks: ['diagram', 'code'] },
      'E26-Q-SI-14': { answer: 'B', blocks: ['table'] },
      'E26-Q-SI-15': { answer: 'D', blocks: ['table', 'code'] },
      'E26-Q-SI-16': { answer: 'C', blocks: ['diagram', 'table'] },
    } as const;
    for (const [id, expectation] of Object.entries(expectedSiM03)) {
      const question = questions.find((candidate) => candidate.id === id)!;
      expect(question.version).toBe(1);
      expect(question.correctOptionId).toBe(expectation.answer);
      expect(question.presentation?.blocks.map((block) => block.type)).toEqual(expectation.blocks);
      expect(question.sources.slice(0, 2).map((source) => source.role)).toEqual(['primary', 'technical']);
      expect(question.validationStatus).toBe('under-ai-review');
    }
    const expectedCommon = {
      'E26-Q-COM-01': { version: 2, answer: 'C', blocks: ['image'] },
      'E26-Q-COM-02': { version: 2, answer: 'A', blocks: ['diagram'] },
      'E26-Q-COM-03': { version: 2, answer: 'E', blocks: ['image'] },
      'E26-Q-COM-04': { version: 2, answer: 'B', blocks: ['diagram'] },
      'E26-Q-COM-05': { version: 2, answer: 'D', blocks: ['table'] },
      'E26-Q-COM-06': { version: 2, answer: 'B', blocks: ['table', 'diagram'] },
      'E26-Q-COM-07': { version: 2, answer: 'D', blocks: ['code', 'code'] },
      'E26-Q-COM-08': { version: 2, answer: 'D', blocks: ['image'] },
      'E26-Q-COM-09': { version: 3, answer: 'A', blocks: ['diagram', 'table'] },
      'E26-Q-COM-10': { version: 3, answer: 'C', blocks: ['table'] },
    } as const;
    for (const [id, expectation] of Object.entries(expectedCommon)) {
      const question = questions.find((candidate) => candidate.id === id)!;
      expect(question.version).toBe(expectation.version);
      expect(question.correctOptionId).toBe(expectation.answer);
      expect(question.presentation?.blocks.map((block) => block.type)).toEqual(expectation.blocks);
      expect(question.validationStatus).toBe('under-ai-review');
    }
  });

  it('mantém uma única solução estrutural para cada puzzle', () => {
    for (const puzzle of puzzles) {
      const candidates = permutations(puzzle.blocks.map((block) => block.id));
      expect(candidates).toHaveLength(120);
      expect(candidates.filter((candidate) => isSequenceCorrect(candidate, puzzle))).toEqual([puzzle.correctOrder]);
      expect(puzzle.hints).toHaveLength(3);
      expect(puzzle.reward.xp).toBe(100);
    }
  });

  it('não expõe a origem pedagógica reservada em campos do jogador', () => {
    expect(questions.some((question) => /enade/i.test(playerText(question)))).toBe(false);
    expect(puzzles.some((puzzle) => /enade/i.test(puzzlePlayerText(puzzle)))).toBe(false);
  });
});
