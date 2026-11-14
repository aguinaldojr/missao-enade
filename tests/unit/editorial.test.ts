import { describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import questions from '../../src/content/questions/central-nexo.json';
import puzzles from '../../src/content/puzzles/sequences.json';
import collections from '../../src/content/collections.json';
import { CONTENT_MODES, DIFFICULTIES, SOURCE_ROLES, SOURCE_TYPES, VALIDATION_STATUSES, COLLECTION_STATUSES } from '../../src/domain/models/EditorialMetadata';
import { validateContent } from '../../src/infrastructure/content/validateContent';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { JsonCollectionRepository } from '../../src/infrastructure/content/JsonCollectionRepository';
import { LocalStoragePuzzleRepository, PUZZLE_KEY } from '../../src/infrastructure/storage/LocalStoragePuzzleRepository';
import { LocalStorageProgressRepository, RESULT_KEY } from '../../src/infrastructure/storage/LocalStorageProgressRepository';
import { totalPuzzleXp } from '../../src/domain/puzzles/SequencePuzzle';

const customCollections = new JsonCollectionRepository([...collections, {
  id: 'fictional-fixture-v2', pedagogicalOrigin: 'Exclusivamente fictícia, para testes técnicos.', status: 'active',
}]);
const newQuestion = () => ({ ...structuredClone(questions.questions[0]!), example: false, editorialStatus: 'approved',
  collectionId: 'fictional-fixture-v2', validationStatus: 'approved-teacher' });
const newCatalog = () => ({ mode: 'approved', contentVersion: 'fixture-2.0', phaseId: 'FASE-FICTICIA-02', questions: [newQuestion()] });
const newPuzzle = () => ({ ...structuredClone(puzzles[0]!), collectionId: 'fictional-fixture-v2', validationStatus: 'approved-teacher' });

function oldQuestions() {
  const removed = new Set(['collectionId', 'pedagogicalOrigin', 'area', 'competencies', 'difficulty', 'source', 'validationStatus']);
  return { ...questions, questions: questions.questions.map((question) =>
    Object.fromEntries(Object.entries(question).filter(([key]) => !removed.has(key)))) };
}
function oldPuzzles() {
  return puzzles.map(({ collectionId, ...rest }) => ({ ...rest, collection: collectionId }));
}

describe('contratos editoriais compartilhados — exemplos exclusivamente fictícios', () => {
  it('aceita questão aprovada e novas coleção/versão/fase sem os antigos literais', () => {
    const result = validateContent(newCatalog(), customCollections);
    expect(result).toMatchObject({ mode: 'approved', contentVersion: 'fixture-2.0', phaseId: 'FASE-FICTICIA-02' });
    expect(result.questions[0]).toMatchObject({ example: false, editorialStatus: 'approved', validationStatus: 'approved-teacher' });
    const ten = { ...newCatalog(), questions: Array.from({ length: 10 }, (_, i) => ({ ...newQuestion(), id: 'FICT-' + i, courses: ['CC'] })) };
    expect(new JsonContentRepository(ten, customCollections).questionsForCourse('CC')).toHaveLength(10);
    expect(new JsonContentRepository(ten, customCollections).questionsForCourse('SI')).toHaveLength(0);
  });
  it('aceita questão pendente e marcadores de compatibilidade opcionais', () => {
    const data = newCatalog();
    data.mode = 'provisional';
    data.questions[0]!.validationStatus = 'provisional-pending-teacher-review';
    const { example: omittedExample, editorialStatus: omittedStatus, ...withoutMarkers } = data.questions[0]!;
    expect(omittedExample).toBe(false);
    expect(omittedStatus).toBe('approved');
    expect(validateContent({ ...data, questions: [withoutMarkers] }, customCollections).questions[0]?.validationStatus)
      .toBe('provisional-pending-teacher-review');
  });
  it.each(CONTENT_MODES)('aceita mode %s no contrato editorial', (mode) => {
    expect(validateContent({ ...newCatalog(), mode }, customCollections).mode).toBe(mode);
  });
  it('aceita puzzle aprovado em coleção diferente sem alterar blocos ou recompensa', () => {
    const result = new JsonPuzzleRepository([newPuzzle()], customCollections).all()[0]!;
    expect(result.validationStatus).toBe('approved-teacher');
    expect(result.blocks).toEqual(puzzles[0]!.blocks);
    expect(result.reward.xp).toBe(100);
  });
  it.each(DIFFICULTIES)('compartilha dificuldade %s entre questão e puzzle', (difficulty) => {
    const q = newCatalog(); q.questions[0]!.difficulty = difficulty;
    expect(validateContent(q, customCollections).questions[0]?.difficulty).toBe(difficulty);
    expect(new JsonPuzzleRepository([{ ...newPuzzle(), difficulty }], customCollections).all()[0]?.difficulty).toBe(difficulty);
  });
  it.each(SOURCE_TYPES)('aceita fonte %s para os dois tipos', (type) => {
    const source = { type, description: 'Referência inteiramente fictícia para teste; não é documento oficial real.',
      url: 'https://example.invalid/referencia-ficticia', year: 2026, documentId: 'DOC-FICTICIO-01' };
    const q = newCatalog(); q.questions[0]!.source = source;
    expect(validateContent(q, customCollections).questions[0]?.sources).toEqual([{ role: 'primary', ...source }]);
    expect(new JsonPuzzleRepository([{ ...newPuzzle(), source }], customCollections).all()[0]?.sources).toEqual([{ role: 'primary', ...source }]);
  });
  it('preserva fonte principal, corroboração normativa, fonte técnica e rastreabilidade', () => {
    const sources = SOURCE_ROLES.map((role) => ({ role, type: 'official-reference' as const,
      description: 'Fonte fictícia de teste para ' + role, documentId: 'DOC-' + role }));
    const traceability = { title: 'Título editorial fictício', objective: 'Verificar preservação dos metadados.',
      locators: ['SLOT-01', 'art. 5º, I'] };
    const { source: oldQuestionSource, ...question } = newQuestion();
    const { source: oldPuzzleSource, ...puzzle } = newPuzzle();
    expect(oldQuestionSource).toBeDefined();
    expect(oldPuzzleSource).toBeDefined();
    const validatedQuestion = validateContent({ ...newCatalog(), questions: [{ ...question, sources, traceability }] }, customCollections).questions[0]!;
    const validatedPuzzle = new JsonPuzzleRepository([{ ...puzzle, sources, traceability }], customCollections).all()[0]!;
    expect(validatedQuestion).toMatchObject({ sources, traceability });
    expect(validatedPuzzle).toMatchObject({ sources, traceability });
  });
  it('exige exatamente uma fonte principal', () => {
    const { source, ...question } = newQuestion();
    const { source: puzzleSource, ...puzzle } = newPuzzle();
    const base = { type: 'fictional' as const, description: 'Fonte fictícia para teste.' };
    expect(source).toBeDefined();
    expect(puzzleSource).toBeDefined();
    expect(() => validateContent({ ...newCatalog(), questions: [{ ...question,
      sources: [{ role: 'technical', ...base }] }] }, customCollections)).toThrow('exatamente uma fonte principal');
    expect(() => validateContent({ ...newCatalog(), questions: [{ ...question,
      sources: [{ role: 'primary', ...base }, { role: 'primary', ...base, description: 'Outra fonte.' }] }] }, customCollections))
      .toThrow('exatamente uma fonte principal');
    expect(() => new JsonPuzzleRepository([{ ...puzzle,
      sources: [{ role: 'technical', ...base }] }], customCollections)).toThrow('exatamente uma fonte principal');
  });
  it('rejeita papel de fonte e rastreabilidade desconhecidos ou vazios', () => {
    const { source, ...question } = newQuestion();
    const primary = { role: 'primary', type: 'fictional', description: 'Fonte fictícia para teste.' };
    expect(source).toBeDefined();
    expect(() => validateContent({ ...newCatalog(), questions: [{ ...question,
      sources: [{ ...primary, role: 'secondary' }] }] }, customCollections)).toThrow();
    expect(() => validateContent({ ...newCatalog(), questions: [{ ...question, sources: [primary],
      traceability: { title: ' ', objective: 'Objetivo', locators: ['SLOT-01'] } }] }, customCollections)).toThrow();
    expect(() => validateContent({ ...newCatalog(), questions: [{ ...question, sources: [primary],
      traceability: { title: 'Título', objective: 'Objetivo', locators: ['SLOT-01'], unknown: true } }] }, customCollections)).toThrow();
  });
  it.each(VALIDATION_STATUSES)('compartilha status %s', (validationStatus) => {
    const q = newCatalog(); q.questions[0]!.validationStatus = validationStatus;
    expect(validateContent(q, customCollections).questions[0]?.validationStatus).toBe(validationStatus);
    expect(new JsonPuzzleRepository([{ ...newPuzzle(), validationStatus }], customCollections).all()[0]?.validationStatus).toBe(validationStatus);
  });
  it.each(['collection', 'empty-competencies', 'blank-competency', 'course', 'status', 'difficulty', 'source', 'extra', 'source-extra'])('rejeita %s nos dois contratos', (kind) => {
    const metadata: Record<string, unknown> = {};
    if (kind === 'collection') metadata.collectionId = 'missing';
    if (kind === 'empty-competencies') metadata.competencies = [];
    if (kind === 'blank-competency') metadata.competencies = [' '];
    if (kind === 'course') metadata.courses = ['OUTRO'];
    if (kind === 'status') metadata.validationStatus = 'approved-by-ai';
    if (kind === 'difficulty') metadata.difficulty = 'D1';
    if (kind === 'source') metadata.source = { type: 'unknown', description: 'Fictício' };
    if (kind === 'extra') metadata.unknown = true;
    if (kind === 'source-extra') metadata.source = { type: 'fictional', description: 'Fictício', unknown: true };
    expect(() => validateContent({ ...newCatalog(), questions: [{ ...newQuestion(), ...metadata }] }, customCollections)).toThrow();
    expect(() => new JsonPuzzleRepository([{ ...newPuzzle(), ...metadata }], customCollections)).toThrow();
  });
  it.each([
    { type: 'fictional', description: ' ' },
    { type: 'official-reference', description: 'Fonte fictícia de teste', url: 'javascript:alert(1)' },
    { type: 'official-reference', description: 'Fonte fictícia de teste', url: 'https://example.invalid/a b' },
    { type: 'fictional', description: 'Fonte fictícia de teste', year: 2026.5 },
    { type: 'fictional', description: 'Fonte fictícia de teste', year: 0 },
    { type: 'fictional', description: 'Fonte fictícia de teste', documentId: ' ' },
  ])('recusa fonte malformada: %j', (source) => {
    expect(() => validateContent({ ...newCatalog(), questions: [{ ...newQuestion(), source }] }, customCollections)).toThrow();
    expect(() => new JsonPuzzleRepository([{ ...newPuzzle(), source }], customCollections)).toThrow();
  });
  it('rejeita IDs duplicados de questão, puzzle e coleção', () => {
    expect(() => validateContent({ ...newCatalog(), questions: [newQuestion(), newQuestion()] }, customCollections)).toThrow('duplicado');
    expect(() => new JsonPuzzleRepository([newPuzzle(), newPuzzle()], customCollections)).toThrow();
    expect(() => new JsonCollectionRepository([...collections, collections[0]])).toThrow('duplicado');
  });
  it.each(COLLECTION_STATUSES)('aceita coleção %s e rejeita status/atributos desconhecidos', (status) => {
    expect(new JsonCollectionRepository([{ id: 'fixture', pedagogicalOrigin: 'Fictícia', status }]).get('fixture')?.status).toBe(status);
    expect(() => new JsonCollectionRepository([{ id: 'fixture', pedagogicalOrigin: 'Fictícia', status: 'published' }])).toThrow();
    expect(() => new JsonCollectionRepository([{ id: 'fixture', pedagogicalOrigin: 'Fictícia', status, extra: true }])).toThrow();
  });
});

describe('migração e compatibilidade sem escrita de progresso', () => {
  it('normaliza formatos históricos e permite misturar entradas antigas e canônicas', () => {
    const oldQ = oldQuestions();
    const snapshot = structuredClone(oldQ);
    expect(validateContent(oldQ)).toEqual(validateContent(questions));
    expect(oldQ).toEqual(snapshot);
    expect(new JsonPuzzleRepository(oldPuzzles()).all()).toEqual(new JsonPuzzleRepository(puzzles).all());
    expect(new JsonPuzzleRepository([oldPuzzles()[0], puzzles[1]]).all()).toHaveLength(2);
    expect(validateContent({ ...oldQ, questions: [oldQ.questions[0], questions.questions[1]] }).questions).toHaveLength(2);
    expect(new JsonContentRepository(oldQ).questionsForCourse('TRC')).toHaveLength(10);
  });
  it('não preenche metadados parcialmente presentes nem descarta campos desconhecidos', () => {
    const q = structuredClone(questions);
    const { competencies, ...partial } = q.questions[0]!;
    expect(competencies.length).toBeGreaterThan(0);
    expect(() => validateContent({ ...q, questions: [partial] })).toThrow();
    expect(() => validateContent({ ...oldQuestions(), questions: [{ ...oldQuestions().questions[0], extra: true }] })).toThrow();
    expect(() => new JsonPuzzleRepository([{ ...oldPuzzles()[0], collectionId: 'missing' }])).toThrow();
  });
  it('não promove legado a aprovado e mantém todo conteúdo do jogo provisório', () => {
    expect(validateContent({ ...oldQuestions(), mode: 'approved' }).questions.every((q) => q.validationStatus === 'provisional-pending-teacher-review')).toBe(true);
    expect(validateContent(questions).questions.every((q) => q.sources[0]?.type === 'fictional' && q.validationStatus === 'provisional-pending-teacher-review')).toBe(true);
    expect(new JsonPuzzleRepository(puzzles).all().every((p) => p.sources[0]?.type === 'fictional' && p.validationStatus === 'provisional-pending-teacher-review')).toBe(true);
  });
  it('preserva conteúdo pedagógico e recompensas byte a byte na projeção original', () => {
    const fields = ['id', 'version', 'classification', 'courses', 'example', 'editorialStatus', 'context', 'prompt', 'options', 'correctOptionId', 'explanation', 'feedbackByOption'];
    const hash = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
    const questionProjection = questions.questions.map((q) => Object.fromEntries(fields.map((key) => [key, q[key as keyof typeof q]])));
    const puzzleProjection = puzzles.map(({ collectionId, ...rest }) => { expect(collectionId).toBe('n9-provisional-sequences-v1'); return rest; });
    expect(hash(questionProjection)).toBe('e2048cd6c74a1ac3744d262cc254bf286a814ccf71a8dc692983cf88b5661cc4');
    expect(hash(puzzleProjection)).toBe('75054994352f036ae9dd00c761052bdc72bd2a15c6baf72484ca357c4098e4cf');
  });
  it('restaura recibos de XP e relatório anteriores sem alterar nenhuma chave', () => {
    const receipt = { schemaVersion: 1, entries: { [puzzles[0]!.id]: {
      order: puzzles[0]!.correctOrder, hintsUsed: 1, attempts: 1, completed: true,
    } } };
    const summary = { schemaVersion: 1, contentVersion: 'example-1', mode: 'example', phaseId: 'FASE-EXEMPLO-01',
      attemptId: 'legacy', course: 'CC', total: 10, correctCount: 8, score: 800, completedAt: '2026-11-13T12:00:00.000Z' };
    const values = new Map([[PUZZLE_KEY, JSON.stringify(receipt)], [RESULT_KEY, JSON.stringify(summary)], ['other-app', 'preservar']]);
    const before = new Map(values);
    const storage = { getItem: (key: string) => values.get(key) ?? null,
      setItem: () => { throw new Error('O carregamento não deve escrever.'); } };
    const repository = new LocalStoragePuzzleRepository(new JsonPuzzleRepository(puzzles), () => storage);
    expect(repository.load().progress).toEqual(receipt);
    expect(totalPuzzleXp(repository.load().progress!, new JsonPuzzleRepository(puzzles).all())).toBe(100);
    expect(new LocalStorageProgressRepository(() => storage).loadResult().result).toEqual(summary);
    expect(values).toEqual(before);
  });
});
