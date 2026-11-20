import { describe, expect, it } from 'vitest';
import { SI_LEARNING_LAB } from '../../src/content/learning-lab';

describe('laboratório de mecânicas de SI', () => {
  it('oferece exatamente uma atividade válida de cada mecânica', () => {
    expect(SI_LEARNING_LAB).toHaveLength(9);
    expect(new Set(SI_LEARNING_LAB.map((activity) => activity.type))).toEqual(new Set([
      'choice', 'binary-choice', 'multiple-select', 'order', 'match', 'categorize', 'complete-code',
      'hotspot', 'decision-dialogue',
    ]));
    expect(new Set(SI_LEARNING_LAB.map((activity) => activity.id)).size).toBe(9);
    expect(SI_LEARNING_LAB.every((activity) => activity.xp > 0 && activity.explanation.length > 40)).toBe(true);
  });

  it('mantém respostas únicas e exemplos técnicos completos', () => {
    for (const activity of SI_LEARNING_LAB) {
      if (activity.type === 'choice') {
        expect(activity.options).toHaveLength(5);
        expect(activity.options.filter((option) => option.id === activity.correctId)).toHaveLength(1);
      } else if (activity.type === 'binary-choice') {
        expect(typeof activity.correctValue).toBe('boolean');
      } else if (activity.type === 'multiple-select') {
        expect(activity.options.filter((option) => option.correct)).toHaveLength(activity.requiredCount);
      } else if (activity.type === 'order') {
        expect(new Set(activity.correctOrder)).toEqual(new Set(activity.blocks.map((block) => block.id)));
      } else if (activity.type === 'match') {
        expect(new Set(activity.pairs.map((pair) => pair.id)).size).toBe(activity.pairs.length);
      } else if (activity.type === 'categorize') {
        const categories = new Set(activity.categories.map((category) => category.id));
        expect(activity.items.every((item) => categories.has(item.categoryId))).toBe(true);
      } else if (activity.type === 'complete-code') {
        expect(activity.tokens.filter((token) => token.id === activity.correctTokenId)).toHaveLength(1);
        expect(activity.codeBefore).toContain('GROUP BY');
      } else if (activity.type === 'hotspot') {
        expect(activity.nodes.filter((node) => node.id === activity.correctNodeId)).toHaveLength(1);
      } else {
        expect(activity.steps).toHaveLength(3);
        expect(activity.steps.every((step) => step.choices.filter((choice) => choice.correct).length === 1)).toBe(true);
      }
    }
  });
});

