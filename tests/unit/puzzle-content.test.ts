import { describe, expect, it } from 'vitest';
import data from '../../src/content/puzzles/sequences.json';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { COURSE_IDS } from '../../src/domain/models/Course';

describe('catálogo provisório de Sequência Lógica', () => {
  it('contém exatamente três exemplos completos e elegíveis para os cinco cursos', () => {
    const repository = new JsonPuzzleRepository(data);
    expect(repository.all()).toHaveLength(3);
    for (const course of COURSE_IDS) expect(repository.forCourse(course)).toHaveLength(3);
    for (const puzzle of repository.all()) {
      expect(puzzle.blocks.length).toBeGreaterThanOrEqual(4);
      expect(puzzle.blocks.length).toBeLessThanOrEqual(7);
      expect(puzzle.validationStatus).toBe('provisional-pending-teacher-review');
      expect(puzzle.source.type).toBe('fictional');
      expect(puzzle.hints.length).toBeGreaterThanOrEqual(3);
      expect(puzzle.correctOrder).toHaveLength(puzzle.blocks.length);
    }
  });
  it.each(['duplicate', 'missing', 'invalid-course', 'invalid-door', 'too-few-blocks'])('rejeita catálogo inconsistente: %s', (kind) => {
    const broken = structuredClone(data);
    const first = broken[0]!;
    if (kind === 'duplicate') broken.push(first);
    if (kind === 'missing') first.correctOrder[0] = 'absent';
    if (kind === 'invalid-course') first.courses = ['OUTRO'];
    if (kind === 'invalid-door') first.unlocks.objectId = 'absent';
    if (kind === 'too-few-blocks') first.blocks = first.blocks.slice(0, 3);
    expect(() => new JsonPuzzleRepository(broken)).toThrow();
  });
});
