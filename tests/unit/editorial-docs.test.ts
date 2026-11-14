import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { validateContent } from '../../src/infrastructure/content/validateContent';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';

const lotPaths = [
  '../../docs/autoria/lote-comum-01.md',
  '../../docs/autoria/lote-comum-02.md',
  '../../docs/autoria/lote-especifico-cc.md',
  '../../docs/autoria/lote-especifico-si.md',
  '../../docs/autoria/lote-especifico-tads.md',
  '../../docs/autoria/lote-especifico-tgti.md',
  '../../docs/autoria/lote-especifico-trc.md',
] as const;

interface Section {
  readonly id: string;
  readonly title: string;
  readonly text: string;
}

const sections: readonly Section[] = lotPaths.flatMap((relativePath) => {
  const text = readFileSync(new URL(relativePath, import.meta.url), 'utf8');
  const headings = [...text.matchAll(/^## \d+\. (E26-[QP]-(?:COM|CC|SI|TADS|TGTI|TRC)-\d{2}) — (.+)$/gm)];
  return headings.map((heading, index) => ({
    id: heading[1]!,
    title: heading[2]!.trim(),
    text: text.slice(heading.index, index + 1 < headings.length ? headings[index + 1]!.index : text.length),
  }));
});

function tableFields(text: string): Readonly<Record<string, string>> {
  const result: Record<string, string> = {};
  for (const match of text.matchAll(/^\| ([^|]+?) \| (.*?) \|$/gm)) {
    const key = match[1]!.trim();
    if (!['Campo', '---'].includes(key) && !(key in result)) result[key] = match[2]!.trim();
  }
  return result;
}

function findField(fields: Readonly<Record<string, string>>, prefix: string): string {
  const key = Object.keys(fields).find((candidate) => candidate.toLowerCase().startsWith(prefix.toLowerCase()));
  return key ? fields[key]! : '';
}

function plain(text = ''): string {
  return text.replace(/\[([^\]]+)]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
}

function parseCourses(text: string): readonly string[] {
  return ['CC', 'SI', 'TADS', 'TGTI', 'TRC'].filter((course) => new RegExp('(?:^|[, /])' + course + '(?:$|[, /])').test(text));
}

function parseCompetencies(section: Section, fields: Readonly<Record<string, string>>): readonly string[] {
  const inline = findField(fields, 'Competências / competencies');
  if (inline) return inline.split(/\s*;\s*/).map(plain).filter(Boolean);
  const block = section.text.match(/\*\*Competências \/ competencies[^\n]*\*\*\s*\n([\s\S]*?)(?=\n### )/);
  return block ? [...block[1]!.matchAll(/^- (.+)$/gm)].map((match) => plain(match[1])).filter(Boolean) : [];
}

function parseSources(fields: Readonly<Record<string, string>>): readonly Record<string, unknown>[] {
  const parts = findField(fields, 'source.type').split('/').map((part) => part.trim());
  const primary: Record<string, unknown> = {
    role: 'primary',
    type: parts[0],
    description: plain(findField(fields, 'source.description')),
  };
  const year = parts.find((part) => /^\d{4}$/.test(part));
  const documentId = parts.slice(1).find((part) => !/^\d{4}$/.test(part));
  const url = plain(findField(fields, 'source.url'));
  if (year) primary.year = Number(year);
  if (documentId) primary.documentId = documentId;
  if (url) primary.url = url;

  const result: Record<string, unknown>[] = [primary];
  const roles = findField(fields, 'Papéis das fontes na conversão futura');
  for (const match of roles.matchAll(/F(0[7-9]|10)\/(SI|TADS|TGTI|TRC)/g)) {
    result.push({ role: 'normative-complementary', type: 'official-reference',
      description: 'Corroboração normativa do curso ' + match[2] + '.', documentId: 'F' + match[1] });
  }
  const technical = findField(fields, 'Complemento documental').match(/^(T\d+)\s*—\s*(.+)$/);
  if (technical) result.push({ role: 'technical', type: 'official-reference',
    description: plain(technical[2]), documentId: technical[1] });
  return result;
}

function sharedMetadata(section: Section, fields: Readonly<Record<string, string>>): Record<string, unknown> {
  return {
    collectionId: plain(findField(fields, 'collectionId')),
    pedagogicalOrigin: plain(findField(fields, 'pedagogicalOrigin')),
    courses: parseCourses(findField(fields, 'Cursos / courses')),
    area: plain(findField(fields, 'Área / area')),
    competencies: parseCompetencies(section, fields),
    difficulty: ['introductory', 'intermediate', 'advanced'].find((level) => findField(fields, 'difficulty').includes(level)),
    sources: parseSources(fields),
    traceability: {
      title: section.title,
      objective: plain(findField(fields, 'Objetivo pedagógico')),
      locators: [plain(findField(fields, 'Rastreabilidade'))],
    },
    validationStatus: plain(findField(fields, 'Status editorial / validationStatus')),
  };
}

function parseQuestion(section: Section): Record<string, unknown> {
  const fields = tableFields(section.text);
  const text = section.text.match(/\*\*Contexto\.\*\*\s*([\s\S]*?)\n\n\*\*Enunciado\.\*\*\s*([^\n]+)([\s\S]*?)\n\n### Resposta/);
  const answer = section.text.match(/\*\*Única alternativa correta: ([A-E])\.\*\*/);
  const explanation = section.text.match(/\*\*Única alternativa correta: [A-E]\.\*\*\s*([\s\S]*?)(?=\n\n\| Alternativa \|)/);
  const feedbackByOption: Record<string, string> = {};
  for (const match of section.text.matchAll(/^\| ([A-E]) \| (.+) \|$/gm)) feedbackByOption[match[1]!] = plain(match[2]);
  return {
    ...sharedMetadata(section, fields),
    id: section.id,
    version: Number(findField(fields, 'Versão')),
    classification: findField(fields, 'Contrato / classification').split('/').map(plain)[1],
    context: plain(text?.[1]),
    prompt: plain(text?.[2]),
    options: [...section.text.matchAll(/^- \*\*([A-E])\.\*\* (.+)$/gm)].slice(0, 5)
      .map((match) => ({ id: match[1], text: plain(match[2]) })),
    correctOptionId: answer?.[1],
    explanation: plain(explanation?.[1]),
    feedbackByOption,
  };
}

function parsePuzzle(section: Section): Record<string, unknown> {
  const fields = tableFields(section.text);
  const narrative = section.text.match(/### Narrativa ao jogador\s*\n\n([\s\S]*?)(?=\n\n### Blocos)/);
  const blockPart = section.text.match(/### Blocos\s*\n([\s\S]*?)(?=\n### Ordem correta)/)?.[1] ?? '';
  const hintPart = section.text.match(/### Dicas progressivas\s*\n([\s\S]*?)(?=\n### Explica)/)?.[1] ?? '';
  return {
    ...sharedMetadata(section, fields),
    kind: 'sequence',
    id: section.id,
    title: section.title,
    narrative: plain(narrative?.[1]),
    blocks: [...blockPart.matchAll(/^\| ([a-z0-9-]+) \| (.+) \|$/gm)]
      .map((match) => ({ id: match[1], text: plain(match[2]) })),
    correctOrder: (section.text.match(/\*\*correctOrder:\*\* (.+)\./)?.[1] ?? '').split('→').map(plain).filter(Boolean),
    hints: [...hintPart.matchAll(/^\d+\. (.+)$/gm)].map((match) => plain(match[1])),
    explanation: plain(section.text.match(/### Explicação final(?: ao jogador)?\s*\n\n([\s\S]*?)(?=\n### )/)?.[1]),
    reward: { xp: Number(section.text.match(/\*\*reward\.xp:\*\*\s*(\d+)/)?.[1]) },
    unlocks: {
      mapId: plain(section.text.match(/\*\*unlocks\.mapId:\*\*\s*([a-z0-9-]+)/)?.[1]),
      objectId: plain(section.text.match(/\*\*unlocks\.objectId:\*\*\s*([a-z0-9-]+)/)?.[1]),
    },
  };
}

const questions = sections.filter((section) => section.id.includes('-Q-')).map(parseQuestion);
const puzzles = sections.filter((section) => section.id.includes('-P-')).map(parsePuzzle);
const catalog = validateContent({ mode: 'provisional', contentVersion: 'audit-correction-memory-1',
  phaseId: 'AUDIT-CORRECTION-66', questions });
const puzzleCatalog = new JsonPuzzleRepository(puzzles).all();

const reducedAnswers = new Map([
  ['E26-Q-COM-09', 'A'], ['E26-Q-COM-10', 'C'], ['E26-Q-SI-10', 'B'],
  ['E26-Q-TGTI-09', 'B'], ['E26-Q-TGTI-10', 'C'], ['E26-Q-TRC-04', 'C'],
  ['E26-Q-TRC-08', 'D'], ['E26-Q-TRC-09', 'E'], ['E26-Q-TRC-10', 'C'],
]);

describe('documentos editoriais da coleção de 66 desafios', () => {
  it('valida 60 questões e seis puzzles canônicos reconstruídos somente em memória', () => {
    expect(catalog.questions).toHaveLength(60);
    expect(puzzleCatalog).toHaveLength(6);
    expect(new Set([...catalog.questions, ...puzzleCatalog].map((item) => item.id)).size).toBe(66);
    expect([...catalog.questions, ...puzzleCatalog].every((item) => item.validationStatus === 'provisional-pending-teacher-review')).toBe(true);
  });

  it('preserva elegibilidade, cotas e distribuição 7/9/4 em cada curso', () => {
    for (const course of ['CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const) {
      const eligible = catalog.questions.filter((question) => question.courses.includes(course));
      const eligiblePuzzles = puzzleCatalog.filter((puzzle) => puzzle.courses.includes(course));
      expect(eligible).toHaveLength(20);
      expect(eligible.filter((question) => question.classification === 'COMUM')).toHaveLength(10);
      expect(eligible.filter((question) => question.classification === course)).toHaveLength(10);
      expect(eligible.filter((question) => question.difficulty === 'introductory')).toHaveLength(7);
      expect(eligible.filter((question) => question.difficulty === 'intermediate')).toHaveLength(9);
      expect(eligible.filter((question) => question.difficulty === 'advanced')).toHaveLength(4);
      expect(eligiblePuzzles).toHaveLength(2);
    }
  });

  it('mantém exatamente uma fonte principal e preserva corroborações multcurso', () => {
    for (const item of [...catalog.questions, ...puzzleCatalog]) {
      expect(item.sources.filter((source) => source.role === 'primary')).toHaveLength(1);
      expect(item.traceability?.locators.length).toBeGreaterThan(0);
    }
    for (const id of ['E26-Q-COM-07', 'E26-Q-COM-08', 'E26-Q-COM-10', 'E26-P-COM-01']) {
      const item = [...catalog.questions, ...puzzleCatalog].find((candidate) => candidate.id === id)!;
      expect(item.sources.filter((source) => source.role === 'normative-complementary')).toHaveLength(4);
    }
  });

  it('mantém gabaritos e reduz os nove itens para até 250 palavras', () => {
    for (const [id, answer] of reducedAnswers) {
      const question = catalog.questions.find((candidate) => candidate.id === id)!;
      const words = plain([question.context, question.prompt, ...question.options.map((option) => option.text)].join(' ')).split(/\s+/).length;
      expect(question.version).toBe(2);
      expect(question.correctOptionId).toBe(answer);
      expect(words).toBeLessThanOrEqual(250);
    }
  });

  it('não expõe a origem interna nos textos destinados ao jogador', () => {
    const questionText = catalog.questions.map((question) => [question.context, question.prompt,
      ...question.options.map((option) => option.text), question.explanation, ...Object.values(question.feedbackByOption)].join(' '));
    const puzzleText = puzzleCatalog.map((puzzle) => [puzzle.title, puzzle.narrative, ...puzzle.blocks.map((block) => block.text),
      ...puzzle.hints, puzzle.explanation].join(' '));
    expect([...questionText, ...puzzleText].some((text) => /enade/i.test(text))).toBe(false);
  });
});
