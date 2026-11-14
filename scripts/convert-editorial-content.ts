import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const LOT_PATHS = [
  'docs/autoria/lote-comum-01.md',
  'docs/autoria/lote-comum-02.md',
  'docs/autoria/lote-especifico-cc.md',
  'docs/autoria/lote-especifico-si.md',
  'docs/autoria/lote-especifico-tads.md',
  'docs/autoria/lote-especifico-tgti.md',
  'docs/autoria/lote-especifico-trc.md',
] as const;

export const QUESTION_OUTPUT = 'src/content/questions/enade-2026-provisional.json';
export const PUZZLE_OUTPUT = 'src/content/puzzles/enade-2026-provisional-sequences.json';

interface Section {
  readonly id: string;
  readonly title: string;
  readonly text: string;
  readonly documentText: string;
}

interface EditorialDocuments {
  readonly sections: readonly Section[];
  readonly questions: readonly Record<string, unknown>[];
  readonly puzzles: readonly Record<string, unknown>[];
}

interface NormativeSource {
  readonly role: 'normative-complementary';
  readonly type: 'official-reference';
  readonly description: string;
  readonly url: string;
  readonly year: 2026;
  readonly documentId: string;
}

const normativeSources: Readonly<Record<string, NormativeSource>> = {
  F07: {
    role: 'normative-complementary', type: 'official-reference', year: 2026,
    documentId: 'Portaria Inep 168/2026',
    description: 'Corroboração normativa da matriz específica de Sistemas de Informação.',
    url: 'https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf',
  },
  F08: {
    role: 'normative-complementary', type: 'official-reference', year: 2026,
    documentId: 'Portaria Inep 169/2026',
    description: 'Corroboração normativa da matriz específica de Tecnologia em Análise e Desenvolvimento de Sistemas.',
    url: 'https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf',
  },
  F09: {
    role: 'normative-complementary', type: 'official-reference', year: 2026,
    documentId: 'Portaria Inep 171/2026',
    description: 'Corroboração normativa da matriz específica de Tecnologia em Gestão da Tecnologia da Informação.',
    url: 'https://abmes.org.br/arquivos/legislacoes/Portaria-inep-171-2026-04-14.pdf',
  },
  F10: {
    role: 'normative-complementary', type: 'official-reference', year: 2026,
    documentId: 'Portaria Inep 172/2026',
    description: 'Corroboração normativa da matriz específica de Tecnologia em Redes de Computadores.',
    url: 'https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf',
  },
};

export function plain(text = ''): string {
  return text.replace(/\[([^\]]+)]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
}

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

function parseCourses(text: string): readonly string[] {
  return ['CC', 'SI', 'TADS', 'TGTI', 'TRC']
    .filter((course) => new RegExp('(?:^|[, /])' + course + '(?:$|[, /])').test(text));
}

function parseCompetencies(section: Section, fields: Readonly<Record<string, string>>): readonly string[] {
  const inline = findField(fields, 'Competências / competencies');
  if (inline) return inline.split(/\s*;\s*/).map(plain).filter(Boolean);
  const block = section.text.match(/\*\*Competências \/ competencies[^\n]*\*\*\s*\n([\s\S]*?)(?=\n### )/);
  return block ? [...block[1]!.matchAll(/^- (.+)$/gm)].map((match) => plain(match[1])).filter(Boolean) : [];
}

function technicalSourceCatalog(documentText: string): Readonly<Record<string, Record<string, unknown>>> {
  const catalog: Record<string, Record<string, unknown>> = {};
  for (const line of documentText.split(/\r?\n/)) {
    if (!line.startsWith('|')) continue;
    const cells = line.slice(1, -1).split('|').map((cell) => cell.trim());
    const codeOnly = cells[0]?.match(/^((?:CC|SI|TADS)-T\d+)$/)?.[1];
    const shortCode = cells[0]?.match(/^(T\d+)\s+—/)?.[1];
    const code = codeOnly ?? shortCode;
    if (!code || cells.length < 3) continue;
    const url = line.match(/\[[^\]]+]\((https?:\/\/[^)]+)\)/)?.[1];
    const year = line.match(/\b((?:19|20)\d{2})\b/)?.[1];
    const source: Record<string, unknown> = {
      role: 'technical',
      type: 'official-reference',
      description: plain(cells.join(' | ')),
      documentId: code,
    };
    if (url) source.url = url;
    if (year) source.year = Number(year);
    catalog[code] = source;
  }
  return catalog;
}

function parseSources(section: Section, fields: Readonly<Record<string, string>>): readonly Record<string, unknown>[] {
  const parts = findField(fields, 'source.type').split(/\s+\/\s+/).map((part) => part.trim());
  const primary: Record<string, unknown> = {
    role: 'primary',
    type: parts[0],
    description: plain(findField(fields, 'source.description')),
  };
  const year = parts.find((part) => /^\d{4}$/.test(part));
  const documentId = parts.slice(1).find((part) => !/^\d{4}$/.test(part));
  const url = findField(fields, 'source.url').trim();
  if (year) primary.year = Number(year);
  if (documentId) primary.documentId = documentId;
  if (url) primary.url = url;

  const result: Record<string, unknown>[] = [primary];
  const roles = findField(fields, 'Papéis das fontes na conversão futura');
  for (const match of roles.matchAll(/(F0[7-9]|F10)\/(SI|TADS|TGTI|TRC)/g)) {
    const source = normativeSources[match[1]!];
    if (source) result.push({ ...source });
  }

  const complement = findField(fields, 'Complemento técnico documental') || findField(fields, 'Complemento documental');
  const catalog = technicalSourceCatalog(section.documentText);
  const codes = [...complement.matchAll(/\b((?:CC|SI|TADS)-T\d+|T\d+)\b/g)].map((match) => match[1]!);
  for (const code of [...new Set(codes)]) {
    const source = catalog[code];
    if (source) result.push({ ...source });
  }

  return result;
}

function sharedMetadata(section: Section, fields: Readonly<Record<string, string>>): Record<string, unknown> {
  return {
    collectionId: plain(findField(fields, 'collectionId')),
    pedagogicalOrigin: plain(findField(fields, 'pedagogicalOrigin')),
    courses: parseCourses(findField(fields, 'Cursos / courses')),
    area: plain(findField(fields, 'Área / area')),
    competencies: parseCompetencies(section, fields),
    difficulty: ['introductory', 'intermediate', 'advanced']
      .find((level) => findField(fields, 'difficulty').includes(level)),
    sources: parseSources(section, fields),
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
  const playerText = section.text.match(/\*\*Contexto\.\*\*\s*([\s\S]*?)\n\n\*\*Enunciado\.\*\*\s*([^\n]+)([\s\S]*?)\n\n### Resposta/);
  const answer = section.text.match(/\*\*Única alternativa correta: ([A-E])\.\*\*/);
  const explanation = section.text.match(/\*\*Única alternativa correta: [A-E]\.\*\*\s*([\s\S]*?)(?=\n\n\| Alternativa \|)/);
  const feedbackByOption: Record<string, string> = {};
  for (const match of section.text.matchAll(/^\| ([A-E]) \| (.+) \|$/gm)) feedbackByOption[match[1]!] = plain(match[2]);
  const options = [...section.text.matchAll(/^- \*\*([A-E])\.\*\* (.+)$/gm)].slice(0, 5)
    .map((match) => ({ id: match[1], text: plain(match[2]) }));
  if (!playerText || !answer || options.length !== 5 || Object.keys(feedbackByOption).length !== 5) {
    throw new Error('Questão documental incompleta: ' + section.id);
  }
  return {
    id: section.id,
    version: Number(findField(fields, 'Versão')),
    classification: findField(fields, 'Contrato / classification').split('/').map(plain)[1],
    context: plain(playerText[1]),
    prompt: plain(playerText[2]),
    options,
    correctOptionId: answer[1],
    explanation: plain(explanation?.[1]),
    feedbackByOption,
    ...sharedMetadata(section, fields),
  };
}

function parsePuzzle(section: Section): Record<string, unknown> {
  const fields = tableFields(section.text);
  const narrative = section.text.match(/### Narrativa ao jogador\s*\n\n([\s\S]*?)(?=\n\n### Blocos)/);
  const blockPart = section.text.match(/### Blocos\s*\n([\s\S]*?)(?=\n### Ordem correta)/)?.[1] ?? '';
  const hintPart = section.text.match(/### Dicas progressivas\s*\n([\s\S]*?)(?=\n### Explica)/)?.[1] ?? '';
  const blocks = [...blockPart.matchAll(/^\| ([a-z0-9-]+) \| (.+) \|$/gm)]
    .map((match) => ({ id: match[1], text: plain(match[2]) }));
  const correctOrder = (section.text.match(/\*\*correctOrder:\*\* (.+)\./)?.[1] ?? '')
    .split('→').map(plain).filter(Boolean);
  const hints = [...hintPart.matchAll(/^\d+\. (.+)$/gm)].map((match) => plain(match[1]));
  const explanation = plain(section.text.match(/### Explicação final(?: ao jogador)?\s*\n\n([\s\S]*?)(?=\n### )/)?.[1]);
  if (!narrative || blocks.length < 4 || correctOrder.length !== blocks.length || hints.length < 3 || !explanation) {
    throw new Error('Puzzle documental incompleto: ' + section.id);
  }
  return {
    kind: 'sequence',
    id: section.id,
    title: section.title,
    narrative: plain(narrative[1]),
    blocks,
    correctOrder,
    hints,
    explanation,
    reward: { xp: Number(section.text.match(/\*\*reward\.xp:\*\*\s*(\d+)/)?.[1]) },
    unlocks: {
      mapId: plain(section.text.match(/\*\*unlocks\.mapId:\*\*\s*([a-z0-9-]+)/)?.[1]),
      objectId: plain(section.text.match(/\*\*unlocks\.objectId:\*\*\s*([a-z0-9-]+)/)?.[1]),
    },
    ...sharedMetadata(section, fields),
  };
}

export function readEditorialDocuments(projectRoot = PROJECT_ROOT): EditorialDocuments {
  const sections: Section[] = [];
  for (const relativePath of LOT_PATHS) {
    const documentText = readFileSync(resolve(projectRoot, relativePath), 'utf8');
    const headings = [...documentText.matchAll(/^## \d+\. (E26-[QP]-(?:COM|CC|SI|TADS|TGTI|TRC)-\d{2}) — (.+)$/gm)];
    headings.forEach((heading, index) => sections.push({
      id: heading[1]!,
      title: heading[2]!.trim(),
      text: documentText.slice(heading.index, index + 1 < headings.length ? headings[index + 1]!.index : documentText.length),
      documentText,
    }));
  }
  return {
    sections,
    questions: sections.filter((section) => section.id.includes('-Q-')).map(parseQuestion),
    puzzles: sections.filter((section) => section.id.includes('-P-')).map(parsePuzzle),
  };
}

export function convertedCatalogs(projectRoot = PROJECT_ROOT): {
  readonly questions: Record<string, unknown>;
  readonly puzzles: readonly Record<string, unknown>[];
} {
  const documents = readEditorialDocuments(projectRoot);
  return {
    questions: {
      mode: 'provisional',
      contentVersion: 'enade-2026-provisional-1',
      phaseId: 'ENADE-2026-PROVISIONAL',
      questions: documents.questions,
    },
    puzzles: documents.puzzles,
  };
}

export function writeConvertedCatalogs(projectRoot = PROJECT_ROOT): void {
  const converted = convertedCatalogs(projectRoot);
  writeFileSync(resolve(projectRoot, QUESTION_OUTPUT), JSON.stringify(converted.questions, null, 2) + '\n', 'utf8');
  writeFileSync(resolve(projectRoot, PUZZLE_OUTPUT), JSON.stringify(converted.puzzles, null, 2) + '\n', 'utf8');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) writeConvertedCatalogs();
