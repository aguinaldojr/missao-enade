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
    ...Object.values(question.feedbackByOption)].join(' ');
}

function puzzlePlayerText(puzzle: SequencePuzzle): string {
  return [puzzle.title, puzzle.narrative, ...puzzle.blocks.map((block) => block.text), ...puzzle.hints,
    puzzle.explanation].join(' ');
}

describe('conversão controlada dos 66 desafios para JSON', () => {
  it('mantém os JSON idênticos à projeção integral dos sete lotes', () => {
    const converted = convertedCatalogs(projectRoot);
    expect(questionJson).toEqual(converted.questions);
    expect(puzzleJson).toEqual(converted.puzzles);
    const documents = readEditorialDocuments(projectRoot);
    expect(documents.sections).toHaveLength(66);
    expect(documents.questions).toEqual(questions);
    expect(documents.puzzles).toEqual(puzzles);
  });

  it('corresponde exatamente aos 66 IDs únicos do plano', () => {
    const plan = readFileSync(resolve(projectRoot, 'docs/plano-colecao-enade-2026.md'), 'utf8');
    const plannedIds = [...new Set(plan.match(/E26-[QP]-(?:COM|CC|SI|TADS|TGTI|TRC)-\d{2}/g) ?? [])].sort();
    const convertedIds = [...questions, ...puzzles].map((item) => item.id).sort();
    expect(plannedIds).toHaveLength(66);
    expect(convertedIds).toHaveLength(66);
    expect(new Set(convertedIds).size).toBe(66);
    expect(convertedIds).toEqual(plannedIds);
    expect(questions).toHaveLength(60);
    expect(puzzles).toHaveLength(6);
  });

  it('preserva cursos, cotas e distribuição de dificuldades', () => {
    for (const course of COURSE_IDS) {
      const eligible = questions.filter((question) => question.courses.includes(course));
      const eligiblePuzzles = puzzles.filter((puzzle) => puzzle.courses.includes(course));
      expect(eligible).toHaveLength(20);
      expect(eligible.filter((question) => question.classification === 'COMUM')).toHaveLength(10);
      expect(eligible.filter((question) => question.classification === course)).toHaveLength(10);
      expect(eligible.filter((question) => question.difficulty === 'introductory')).toHaveLength(7);
      expect(eligible.filter((question) => question.difficulty === 'intermediate')).toHaveLength(9);
      expect(eligible.filter((question) => question.difficulty === 'advanced')).toHaveLength(4);
      expect(eligiblePuzzles).toHaveLength(2);
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

  it('preserva fontes, papéis e rastreabilidade sem aprovar conteúdo', () => {
    const items = [...questions, ...puzzles];
    expect(items.every((item) => item.validationStatus === 'provisional-pending-teacher-review')).toBe(true);
    expect(items.every((item) => item.sources.filter((source) => source.role === 'primary').length === 1)).toBe(true);
    expect(items.every((item) => item.traceability && item.traceability.title && item.traceability.objective &&
      item.traceability.locators.length > 0)).toBe(true);
    expect(items.flatMap((item) => item.sources).filter((source) => source.role === 'normative-complementary')).toHaveLength(16);
    expect(items.flatMap((item) => item.sources).filter((source) => source.role === 'technical')).toHaveLength(24);
    for (const id of ['E26-Q-COM-07', 'E26-Q-COM-08', 'E26-Q-COM-10', 'E26-P-COM-01']) {
      const item = items.find((candidate) => candidate.id === id)!;
      expect(item.sources.filter((source) => source.role === 'normative-complementary')).toHaveLength(4);
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
