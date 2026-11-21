import { describe, expect, it } from 'vitest';
import { learningActivitiesForCourse, N9_SHARED_LEARNING_LAB, SI_LEARNING_LAB } from '../../src/content/learning-lab';

describe('laboratório de mecânicas compartilhadas', () => {
  it('carrega os lotes compartilhados e específicos e cobre as nove mecânicas', () => {
    expect(SI_LEARNING_LAB).toHaveLength(160);
    expect(N9_SHARED_LEARNING_LAB).toHaveLength(120);
    expect(new Set(SI_LEARNING_LAB.map((activity) => activity.type))).toEqual(new Set([
      'choice', 'binary-choice', 'multiple-select', 'order', 'match', 'categorize', 'complete-code',
      'hotspot', 'decision-dialogue',
    ]));
    expect(new Set(SI_LEARNING_LAB.map((activity) => activity.id)).size).toBe(160);
    expect(SI_LEARNING_LAB.every((activity) => activity.xp > 0 && activity.explanation.length > 40)).toBe(true);
  });

  it('habilita para TRC somente as atividades auditadas como diretamente compatíveis', () => {
    const trc = learningActivitiesForCourse('TRC');
    expect(trc).toHaveLength(83);
    expect(trc.map((activity) => activity.id)).toEqual([
      'N9-COM-001', 'N9-COM-004', 'N9-COM-007', 'N9-COM-009', 'N9-COM-011', 'N9-COM-012',
      'N9-COM-019', 'N9-COM-020', 'N9-COM-026', 'N9-COM-032', 'N9-COM-035', 'N9-COM-046',
      'N9-COM-048', 'N9-COM-051', 'N9-COM-052', 'N9-COM-053', 'N9-COM-055', 'N9-COM-060',
      'N9-COM-061', 'N9-COM-063', 'N9-COM-065', 'N9-COM-066', 'N9-COM-067', 'N9-COM-068',
      'N9-COM-069', 'N9-COM-070', 'N9-COM-071', 'N9-COM-072', 'N9-COM-075', 'N9-COM-077',
      'N9-COM-079', 'N9-COM-080', 'N9-COM-085', 'N9-COM-088', 'N9-COM-090', 'N9-COM-093',
      'N9-COM-100', 'N9-COM-106', 'N9-COM-107', 'N9-COM-108', 'N9-COM-110', 'N9-COM-114',
      'N9-COM-119',
      'N9-TRC-001', 'N9-TRC-002', 'N9-TRC-003', 'N9-TRC-004', 'N9-TRC-005',
      'N9-TRC-006', 'N9-TRC-007', 'N9-TRC-008', 'N9-TRC-009', 'N9-TRC-010',
      'N9-TRC-011', 'N9-TRC-012', 'N9-TRC-013', 'N9-TRC-014', 'N9-TRC-015',
      'N9-TRC-016', 'N9-TRC-017', 'N9-TRC-018', 'N9-TRC-019', 'N9-TRC-020',
      'N9-TRC-021', 'N9-TRC-022', 'N9-TRC-023', 'N9-TRC-024', 'N9-TRC-025',
      'N9-TRC-026', 'N9-TRC-027', 'N9-TRC-028', 'N9-TRC-029', 'N9-TRC-030',
      'N9-TRC-031', 'N9-TRC-032', 'N9-TRC-033', 'N9-TRC-034', 'N9-TRC-035',
      'N9-TRC-036', 'N9-TRC-037', 'N9-TRC-038', 'N9-TRC-039', 'N9-TRC-040',
    ]);
  });

  it('compartilha conceitos de redes previstos nas matrizes sem expor a infraestrutura física especializada', () => {
    expect(Object.fromEntries((['CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const)
      .map((course) => [course, learningActivitiesForCourse(course).length]))).toEqual({
      CC: 128, SI: 151, TADS: 145, TGTI: 104, TRC: 83,
    });
    const exclusive = ['N9-TRC-006', 'N9-TRC-007', 'N9-TRC-026', 'N9-TRC-027',
      'N9-TRC-028', 'N9-TRC-029', 'N9-TRC-030'];
    for (const id of exclusive) {
      expect(learningActivitiesForCourse('TRC').some((activity) => activity.id === id)).toBe(true);
      expect((['CC', 'SI', 'TADS', 'TGTI'] as const).every((course) =>
        !learningActivitiesForCourse(course).some((activity) => activity.id === id))).toBe(true);
    }
  });

  it('preserva as cotas estruturais dos dois lotes específicos de TRC', () => {
    const trcSpecific = SI_LEARNING_LAB.filter((activity) => activity.id.startsWith('N9-TRC-'));
    expect(trcSpecific).toHaveLength(40);
    expect(Object.fromEntries([...new Set(trcSpecific.map((activity) => activity.type))]
      .map((type) => [type, trcSpecific.filter((activity) => activity.type === type).length]))).toEqual({
      categorize: 6, 'binary-choice': 5, hotspot: 8, order: 6,
      'decision-dialogue': 7, match: 2, 'multiple-select': 4, 'complete-code': 2,
    });
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

  it('preserva os trechos funcionais de C e Python do sexto lote', () => {
    const c = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-116');
    expect(c?.type).toBe('complete-code');
    if (c?.type === 'complete-code') {
      expect(c.tokens.find((token) => token.id === c.correctTokenId)?.text).toBe('atual = atual->prox;');
    }
    const python = SI_LEARNING_LAB.find((activity) => activity.id === 'N9-COM-117');
    expect(python?.type).toBe('complete-code');
    if (python?.type === 'complete-code') {
      expect(python.tokens.find((token) => token.id === python.correctTokenId)?.text).toBe('except ValueError:');
    }
  });
});

