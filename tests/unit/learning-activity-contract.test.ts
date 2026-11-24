import { describe, expect, it } from 'vitest';
import { JsonLearningActivityRepository } from '../../src/infrastructure/content/JsonLearningActivityRepository';
import { validateLearningActivities } from '../../src/infrastructure/content/validateLearningActivities';
import trcCatalogOne from '../../src/content/learning/n9-trc-01.json';
import trcCatalogTwo from '../../src/content/learning/n9-trc-02.json';

const base = {
  courses: ['CC', 'SI'], area: 'Área de exemplo', conceptId: 'conceito-exemplo', difficulty: 'introductory',
  context: 'Situação fictícia usada para validar o contrato.', instruction: 'Realize a interação solicitada.', xp: 50,
  help: { hint: 'Observe a finalidade.', concept: 'Definição breve do conceito.', example: 'Exemplo profissional breve.' },
  explanation: 'Explicação tecnicamente suficiente apresentada depois da resposta.',
  sources: [{ role: 'primary', type: 'fictional', description: 'Conteúdo autoral fictício para validação.' }],
  sourceVerificationNeeded: false,
  traceability: { title: 'Rastreabilidade de exemplo', objective: 'Validar o contrato.', locators: ['exemplo-I'] },
  validationStatus: 'draft',
};

const option = (id: string) => ({ id, text: 'Alternativa ' + id, feedback: 'Feedback da alternativa ' + id + '.' });

function catalog(): Record<string, unknown> {
  return structuredClone({ schemaVersion: 1, batchId: 'N9-TEST-01', activities: [
    { ...base, id: 'N9-TEST-SINGLE', title: 'Escolha', mechanic: 'single-choice',
      payload: { type: 'single-choice', options: ['a', 'b', 'c', 'd', 'e'].map(option), correctId: 'b' } },
    { ...base, id: 'N9-TEST-BINARY', title: 'Binária', mechanic: 'binary-choice',
      payload: { type: 'binary-choice', statement: 'Uma afirmação verificável.', correctValue: true,
        feedbackTrue: 'Feedback para verdadeiro.', feedbackFalse: 'Feedback para falso.' } },
    { ...base, id: 'N9-TEST-MULTI', title: 'Múltipla', mechanic: 'multiple-select',
      payload: { type: 'multiple-select', requiredCount: 2, options: ['a', 'b', 'c', 'd', 'e'].map((id, index) =>
        ({ ...option(id), correct: index < 2 })) } },
    { ...base, id: 'N9-TEST-ORDER', title: 'Ordem', mechanic: 'sequence-order',
      payload: { type: 'sequence-order', blocks: ['a', 'b', 'c', 'd'].map((id) => ({ id, text: 'Etapa ' + id })),
        correctOrder: ['a', 'b', 'c', 'd'] } },
    { ...base, id: 'N9-TEST-MATCH', title: 'Pares', mechanic: 'pair-match',
      payload: { type: 'pair-match', pairs: ['a', 'b', 'c'].map((id) => ({ id, left: 'Necessidade ' + id, right: 'Solução ' + id })) } },
    { ...base, id: 'N9-TEST-CATEGORY', title: 'Categorias', mechanic: 'categorize',
      payload: { type: 'categorize', categories: [
        { id: 'operacao', label: 'Operação', description: 'Atividade operacional.' },
        { id: 'analise', label: 'Análise', description: 'Atividade analítica.' },
      ], items: ['a', 'b', 'c', 'd'].map((id, index) => ({ id, text: 'Item ' + id,
        categoryId: index % 2 ? 'analise' : 'operacao' })) } },
    { ...base, id: 'N9-TEST-FILL', title: 'Lacuna', mechanic: 'fill-slot',
      payload: { type: 'fill-slot', language: 'python', contentBefore: 'if valor ', contentAfter: ':',
        tokens: ['a', 'b', 'c', 'd'].map((id) => ({ id, text: 'trecho ' + id, feedback: 'Feedback ' + id })),
        correctTokenId: 'a' } },
    { ...base, id: 'N9-TEST-HOTSPOT', title: 'Visual', mechanic: 'visual-hotspot',
      payload: { type: 'visual-hotspot', visualDescription: 'Diagrama com dois nós.',
        accessibleDescription: 'Descrição textual equivalente do diagrama.', nodes: [
          { id: 'origem', label: 'Origem', detail: 'Primeiro elemento.' },
          { id: 'destino', label: 'Destino', detail: 'Segundo elemento.' },
        ], correctNodeId: 'destino' } },
    { ...base, id: 'N9-TEST-DIALOGUE', title: 'Diálogo', mechanic: 'decision-dialogue',
      payload: { type: 'decision-dialogue', steps: ['a', 'b', 'c'].map((id) => ({ id, speaker: 'Pessoa ' + id,
        message: 'Mensagem da etapa ' + id + '.', choices: ['adequada', 'risco-a', 'risco-b'].map((choice, index) => ({
          id: choice, text: 'Decisão ' + choice, reaction: 'Consequência da decisão ' + choice + '.', correct: index === 0,
        })) })) } },
  ] });
}

function activities(data: Record<string, unknown>): Record<string, unknown>[] {
  return data.activities as Record<string, unknown>[];
}

describe('contrato de atividades do modo aprender', () => {
  it('valida IDs, cotas e elegibilidade ampliada do primeiro lote de TRC', () => {
    const validated = validateLearningActivities(trcCatalogOne);
    expect(validated.activities.map((activity) => activity.id)).toEqual(
      Array.from({ length: 20 }, (_, index) => 'N9-TRC-' + String(index + 1).padStart(3, '0')),
    );
    expect(Object.fromEntries([1, 4, 5].map((count) => [count,
      validated.activities.filter((activity) => activity.courses.length === count).length]))).toEqual({ 1: 2, 4: 1, 5: 17 });
    expect(Object.fromEntries(['introductory', 'intermediate', 'advanced'].map((difficulty) => [difficulty,
      validated.activities.filter((activity) => activity.difficulty === difficulty).length]))).toEqual({
      introductory: 8, intermediate: 10, advanced: 2,
    });
    expect(validated.activities.every((activity) => activity.sources.filter((source) => source.role === 'primary').length === 1)).toBe(true);
    expect(validated.activities.filter((activity) => activity.sourceVerificationNeeded).map((activity) => activity.id))
      .toEqual(['N9-TRC-005', 'N9-TRC-010', 'N9-TRC-017', 'N9-TRC-018', 'N9-TRC-020']);
  });

  it('valida IDs, cotas e elegibilidade ampliada do segundo lote de TRC', () => {
    const validated = validateLearningActivities(trcCatalogTwo);
    expect(validated.activities.map((activity) => activity.id)).toEqual(
      Array.from({ length: 20 }, (_, index) => 'N9-TRC-' + String(index + 21).padStart(3, '0')),
    );
    expect(Object.fromEntries([1, 4, 5].map((count) => [count,
      validated.activities.filter((activity) => activity.courses.length === count).length]))).toEqual({ 1: 5, 4: 1, 5: 14 });
    expect(Object.fromEntries(['introductory', 'intermediate', 'advanced'].map((difficulty) => [difficulty,
      validated.activities.filter((activity) => activity.difficulty === difficulty).length]))).toEqual({
      introductory: 8, intermediate: 10, advanced: 2,
    });
    expect(validated.activities.every((activity) => activity.sources.filter((source) => source.role === 'primary').length === 1)).toBe(true);
    expect(validated.activities.filter((activity) => activity.sourceVerificationNeeded).map((activity) => activity.id))
      .toEqual(['N9-TRC-025', 'N9-TRC-030', 'N9-TRC-034', 'N9-TRC-036', 'N9-TRC-037', 'N9-TRC-040']);
  });

  it('aceita as nove mecânicas e oferece filtros imutáveis', () => {
    const data = catalog();
    expect(validateLearningActivities(data).activities).toHaveLength(9);
    const repository = new JsonLearningActivityRepository(data);
    expect(repository.all()).toHaveLength(9);
    expect(repository.forCourse('SI')).toHaveLength(9);
    expect(repository.byMechanic('decision-dialogue')).toHaveLength(1);
    expect(Object.isFrozen(repository.all()[0])).toBe(true);
  });

  it('rejeita IDs duplicados e campos desconhecidos', () => {
    const duplicate = catalog(); activities(duplicate)[1]!.id = activities(duplicate)[0]!.id;
    expect(() => validateLearningActivities(duplicate)).toThrow(/duplicados/i);
    const unknown = catalog(); activities(unknown)[0]!.surprise = true;
    expect(() => validateLearningActivities(unknown)).toThrow(/inválido/i);
  });

  it('rejeita payload incompatível e respostas estruturais inválidas', () => {
    const mismatch = catalog(); activities(mismatch)[0]!.mechanic = 'binary-choice';
    expect(() => validateLearningActivities(mismatch)).toThrow(/incompatíveis/i);
    const multiple = catalog();
    (activities(multiple)[2]!.payload as Record<string, unknown>).requiredCount = 3;
    expect(() => validateLearningActivities(multiple)).toThrow(/Quantidade de respostas/i);
    const dialogue = catalog();
    const steps = (activities(dialogue)[8]!.payload as { steps: { choices: { correct: boolean }[] }[] }).steps;
    steps[0]!.choices[1]!.correct = true;
    expect(() => validateLearningActivities(dialogue)).toThrow(/uma decisão adequada/i);
  });

  it('protege rastreabilidade e textos apresentados ao jogador', () => {
    const source = catalog();
    activities(source)[0]!.sources = [{ role: 'technical', type: 'fictional', description: 'Sem principal.' }];
    expect(() => validateLearningActivities(source)).toThrow(/fonte principal/i);
    const exposed = catalog(); activities(exposed)[0]!.title = 'Preparação ENADE';
    expect(() => validateLearningActivities(exposed)).toThrow(/exposta ao jogador/i);
  });
});

