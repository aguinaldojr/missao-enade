import { describe, expect, it } from 'vitest';
import { SI_LEARNING_LAB } from '../../src/content/learning-lab';

describe('laboratório de mecânicas compartilhadas', () => {
  it('carrega os cinco lotes e cobre as nove mecânicas', () => {
    expect(SI_LEARNING_LAB).toHaveLength(100);
    expect(new Set(SI_LEARNING_LAB.map((activity) => activity.type))).toEqual(new Set([
      'choice', 'binary-choice', 'multiple-select', 'order', 'match', 'categorize', 'complete-code',
      'hotspot', 'decision-dialogue',
    ]));
    expect(new Set(SI_LEARNING_LAB.map((activity) => activity.id)).size).toBe(100);
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
        expect(activity.tokens.every((token) => token.feedback.length > 10)).toBe(true);
      } else if (activity.type === 'hotspot') {
        expect(activity.nodes.filter((node) => node.id === activity.correctNodeId)).toHaveLength(1);
      } else {
        expect(activity.steps).toHaveLength(3);
        expect(activity.steps.every((step) => step.choices.filter((choice) => choice.correct).length === 1)).toBe(true);
      }
    }
  });

  it('preserva os trechos funcionais de C e SQL do segundo lote', () => {
    const c = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-036');
    expect(c?.type).toBe('complete-code');
    if (c?.type === 'complete-code') {
      expect(c.codeBefore).toContain('int pop(Pilha *p, int *saida)');
      expect(c.tokens.find((token) => token.id === c.correctTokenId)?.text)
        .toBe('*saida = p->dados[p->topo--];');
    }
    const sql = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-037');
    expect(sql?.type).toBe('complete-code');
    if (sql?.type === 'complete-code') {
      expect(sql.tokens.find((token) => token.id === sql.correctTokenId)?.text)
        .toBe('WHERE E.ID_ALUNO IS NULL');
    }
  });

  it('preserva os trechos funcionais de Python e JavaScript do terceiro lote', () => {
    const python = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-056');
    expect(python?.type).toBe('complete-code');
    if (python?.type === 'complete-code') {
      expect(python.tokens.find((token) => token.id === python.correctTokenId)?.text)
        .toBe('contagem.get(categoria, 0) + 1');
    }
    const javascript = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-057');
    expect(javascript?.type).toBe('complete-code');
    if (javascript?.type === 'complete-code') {
      expect(javascript.codeBefore + javascript.tokens[0]?.text + javascript.codeAfter)
        .toContain('avisos.filter(item => !item.lido)');
    }
  });

  it('preserva os trechos funcionais de SQL e Python do quarto lote', () => {
    const sql = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-076');
    expect(sql?.type).toBe('complete-code');
    if (sql?.type === 'complete-code') {
      expect(sql.tokens.find((token) => token.id === sql.correctTokenId)?.text).toBe('NOT EXISTS');
    }
    const python = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-077');
    expect(python?.type).toBe('complete-code');
    if (python?.type === 'complete-code') {
      expect(python.codeBefore + python.tokens[0]?.text + python.codeAfter).toContain('atual = fila.popleft()');
    }
  });

  it('preserva os trechos funcionais de C e Python do quinto lote', () => {
    const c = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-096');
    expect(c?.type).toBe('complete-code');
    if (c?.type === 'complete-code') {
      expect(c.tokens.find((token) => token.id === c.correctTokenId)?.text).toBe('*(ptr + i)');
    }
    const python = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-097');
    expect(python?.type).toBe('complete-code');
    if (python?.type === 'complete-code') {
      expect(python.tokens.find((token) => token.id === python.correctTokenId)?.text).toBe('inicio = meio + 1');
    }
  });
});

