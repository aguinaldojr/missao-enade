import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeValidationStatus, type LegacyValidationStatus, type ValidationStatus } from '../src/domain/models/EditorialMetadata.ts';

const PROJECT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const LOT_PATHS = [
  'docs/autoria/lote-comum-01.md',
  'docs/autoria/lote-comum-02.md',
  'docs/autoria/lote-especifico-cc.md',
  'docs/autoria/lote-si-m03-fundamentos-sistemas.md',
  'docs/autoria/lote-especifico-si.md',
  'docs/autoria/lote-especifico-tads.md',
  'docs/autoria/lote-especifico-tgti.md',
  'docs/autoria/lote-especifico-trc.md',
  'docs/autoria/puzzle-c-si-prioridade.md',
  'docs/autoria/puzzle-c-si-monitor-alertas.md',
] as const;

export const QUESTION_OUTPUT = 'src/content/questions/enade-2026-provisional.json';
export const PUZZLE_OUTPUT = 'src/content/puzzles/enade-2026-provisional-sequences.json';
export const CANDIDATE_PATH = 'docs/autoria/candidatas-piloto-si-02-si-05.md';

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

function puzzleBlockText(text = ''): string {
  const escapedNewline = '__N9_C_STRING_NEWLINE__';
  return text.replace(/\[([^\]]+)]\([^)]+\)/g, '$1').replace(/`/g, '')
    .replaceAll('\\\\n', escapedNewline).replace(/\\n/g, '\n').replaceAll(escapedNewline, '\\n')
    .replace(/[ \t]+/g, ' ').trim();
}

function normalizeGovernanceText(text: string): string {
  return text.replace(/sujeit[ao] à revisão docente(?: de ([A-Z]+))?/gi,
    (_match, course: string | undefined) => 'em revisão editorial assistida por IA' + (course ? ' para ' + course : ''));
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
    else {
      const fallback: Record<string, unknown> = {
        role: 'technical', type: 'official-reference', documentId: code,
        description: plain(complement.replace(new RegExp('^' + code + '\\s+—\\s*'), '')),
      };
      const complementUrl = findField(fields, 'Complemento documental URL').trim();
      if (complementUrl) fallback.url = complementUrl;
      result.push(fallback);
    }
  }

  return result;
}

function sharedMetadata(section: Section, fields: Readonly<Record<string, string>>): Record<string, unknown> {
  return {
    collectionId: plain(findField(fields, 'collectionId')),
    pedagogicalOrigin: normalizeGovernanceText(plain(findField(fields, 'pedagogicalOrigin'))),
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
    validationStatus: normalizeValidationStatus(plain(findField(fields, 'Status editorial / validationStatus')) as
      ValidationStatus | LegacyValidationStatus),
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

function candidateSections(documentText: string): ReadonlyMap<string, Section> {
  const result = new Map<string, Section>();
  const headings = [...documentText.matchAll(/^## \d+\. Candidata (E26-Q-SI-(?:02|05)) — (.+)$/gm)];
  headings.forEach((heading, index) => result.set(heading[1]!, {
    id: heading[1]!,
    title: heading[2]!.trim(),
    text: documentText.slice(heading.index, index + 1 < headings.length ? headings[index + 1]!.index :
      documentText.search(/^## 4\./m)),
    documentText,
  }));
  return result;
}

function candidateCopy(section: Section): Pick<Record<string, unknown>,
  'prompt' | 'options' | 'correctOptionId' | 'explanation' | 'feedbackByOption'> {
  const candidateText = (text = '') => text.replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim();
  const prompt = section.text.match(/\*\*Enunciado\.\*\*\s*([^\n]+)/)?.[1];
  const answer = section.text.match(/\*\*Única alternativa correta: ([A-E])\.\*\*/);
  const explanation = section.text.match(/\*\*Única alternativa correta: [A-E]\.\*\*\s*([\s\S]*?)(?=\n\n\| Alternativa \|)/);
  const options = [...section.text.matchAll(/^- \*\*([A-E])\.\*\* (.+)$/gm)].slice(0, 5)
    .map((match) => ({ id: match[1], text: candidateText(match[2]) }));
  const feedbackByOption: Record<string, string> = {};
  for (const match of section.text.matchAll(/^\| ([A-E]) \| (.+) \|$/gm)) {
    feedbackByOption[match[1]!] = candidateText(match[2]);
  }
  if (!prompt || !answer || !explanation || options.length !== 5 || Object.keys(feedbackByOption).length !== 5) {
    throw new Error('Candidata documental incompleta: ' + section.id);
  }
  return {
    prompt: candidateText(prompt),
    options,
    correctOptionId: answer[1],
    explanation: candidateText(explanation[1]),
    feedbackByOption,
  };
}

function candidateSi02(section: Section, original: Record<string, unknown>): Record<string, unknown> {
  const code = [...section.text.matchAll(/```sql\s*([\s\S]*?)```/g)].map((match) => match[1]!.trim());
  const dataTable = section.text.match(/\| id \| equipe \| estado \| minutos_estimados \|\s*\n\|[-:| ]+\|\s*\n((?:\|.+\|\s*\n?){5})/);
  const rows = [...(dataTable?.[1] ?? '').matchAll(/^\| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|$/gm)]
    .map((match) => match.slice(1).map((value) => value.trim()));
  const context = section.text.match(/\*\*Contexto\.\*\*\s*([^\n]+)/)?.[1];
  if (code.length !== 2 || rows.length !== 5 || !context) throw new Error('Apresentação inválida: ' + section.id);
  return {
    ...original,
    ...candidateCopy(section),
    version: 2,
    context: plain(context),
    presentation: {
      blocks: [
        { type: 'code', language: 'sql', caption: 'Esquema da tabela chamados — SQLite 3', code: code[0] },
        {
          type: 'table', caption: 'Dados sintéticos disponíveis',
          columns: [
            { key: 'id', label: 'id' }, { key: 'equipe', label: 'equipe' }, { key: 'estado', label: 'estado' },
            { key: 'minutos-estimados', label: 'minutos_estimados', align: 'right' },
          ],
          rows,
        },
        { type: 'code', language: 'sql', caption: 'Consulta executada pelo painel', code: code[1] },
      ],
    },
    traceability: { ...(original.traceability as object), title: section.title },
    validationStatus: 'ready-for-pilot',
  };
}

function candidateSi05(section: Section, original: Record<string, unknown>): Record<string, unknown> {
  const contextBlock = section.text.match(/\*\*Contexto\.\*\*\s*([\s\S]*?)(?=\n\n```text)/)?.[1];
  const description = section.text.match(/\*\*Descrição textual equivalente\.\*\*\s*([^\n]+)/)?.[1];
  if (!contextBlock || !description) throw new Error('Apresentação inválida: ' + section.id);
  return {
    ...original,
    ...candidateCopy(section),
    version: 2,
    context: plain(contextBlock),
    presentation: {
      blocks: [{
        type: 'diagram',
        title: 'Modelo de requisitos das atuações',
        description: plain(description),
        nodes: [
          { id: 'analista', label: 'ANALISTA', details: 'id' },
          { id: 'atuacao', label: 'ATUAÇÃO', details: 'papel · início · fim' },
          { id: 'chamado', label: 'CHAMADO', details: 'id' },
        ],
        edges: [
          { from: 'analista', to: 'atuacao', label: '1 para N' },
          { from: 'atuacao', to: 'chamado', label: 'N para 1' },
        ],
      }],
    },
    traceability: { ...(original.traceability as object), title: section.title },
    validationStatus: 'ready-for-pilot',
  };
}

function applyApprovedCandidates(projectRoot: string, questions: readonly Record<string, unknown>[]): readonly Record<string, unknown>[] {
  const documentText = readFileSync(resolve(projectRoot, CANDIDATE_PATH), 'utf8');
  const sections = candidateSections(documentText);
  return questions.map((question) => {
    if (question.id === 'E26-Q-SI-02') return candidateSi02(sections.get(question.id)!, question);
    if (question.id === 'E26-Q-SI-05') return candidateSi05(sections.get(question.id)!, question);
    return question;
  });
}

function applySiVisualImprovements(questions: readonly Record<string, unknown>[]): readonly Record<string, unknown>[] {
  return questions.map((question) => {
    const id = String(question.id);
    if (id === 'E26-Q-SI-01') return { ...question, version: 2, presentation: { blocks: [{
      type: 'diagram',
      title: 'Mapa da informação necessária',
      description: 'O objetivo de planejar a coleta depende dos eventos de envio e devolução. Esses eventos, ligados à remessa e ao parceiro, produzem o saldo de caixas ainda em posse de cada parceiro.',
      nodes: [
        { id: 'objetivo', label: 'OBJETIVO', details: 'planejar a coleta' },
        { id: 'eventos', label: 'EVENTOS', details: 'envio e devolução' },
        { id: 'informacao', label: 'INFORMAÇÃO', details: 'saldo por remessa e parceiro' },
      ],
      edges: [
        { from: 'objetivo', to: 'eventos', label: 'precisa acompanhar' },
        { from: 'eventos', to: 'informacao', label: 'produzem' },
      ],
    }] } };
    if (id === 'E26-Q-SI-03') return { ...question, version: 2,
      context: 'Um arquivo de memória oral fictício da Base N9 prepara descrições para seu acervo. A equipe editorial prepara cada descrição e um responsável emite o parecer necessário para liberá-la. Pela agenda deste exercício, os pareceres começam somente às 16h. A transmissão eletrônica já foi confirmada nos horários indicados e, após o parecer, o processamento automático leva um minuto. Não há outro bloqueio no cenário.',
      presentation: { blocks: [
        {
          type: 'table', caption: 'Registros sintéticos do processo',
          columns: [
            { key: 'descricao', label: 'Descrição' },
            { key: 'disponivel', label: 'Pronta e disponível' },
            { key: 'parecer', label: 'Parecer concluído' },
          ],
          rows: [['R1', '09h', '16h02'], ['R2', '10h', '16h04'], ['R3', '11h', '16h06']],
        },
        {
          type: 'diagram', title: 'Fluxo observado',
          description: 'A descrição pronta aguarda a janela de parecer das 16h. Depois do parecer, o processamento automático dura um minuto.',
          nodes: [
            { id: 'preparacao', label: 'DESCRIÇÃO PRONTA', details: '09h · 10h · 11h' },
            { id: 'parecer', label: 'JANELA DE PARECER', details: 'início às 16h' },
            { id: 'processamento', label: 'PROCESSAMENTO', details: '1 minuto' },
          ],
          edges: [
            { from: 'preparacao', to: 'parecer', label: 'aguarda' },
            { from: 'parecer', to: 'processamento', label: 'libera' },
          ],
        },
      ] } };
    if (id === 'E26-Q-SI-04') return { ...question, version: 2, presentation: { blocks: [{
      type: 'diagram', title: 'Linha atual dos eventos da remessa',
      description: 'A equipe de campo registra o despacho. O laboratório confere a chegada em papel. Somente no fim do dia a digitação altera o estado no sistema.',
      nodes: [
        { id: 'despacho', label: 'DESPACHO', details: 'registrado no sistema' },
        { id: 'chegada', label: 'ENTREGA E CONFERÊNCIA', details: 'registradas em papel' },
        { id: 'digitacao', label: 'DIGITAÇÃO', details: 'somente no fim do dia' },
      ],
      edges: [
        { from: 'despacho', to: 'chegada', label: 'transporte' },
        { from: 'chegada', to: 'digitacao', label: 'atraso de atualização' },
      ],
    }] } };
    if (id === 'E26-Q-SI-06') return { ...question, version: 2, presentation: { blocks: [{
      type: 'table', caption: 'Duas definições para o mesmo nome de indicador',
      columns: [
        { key: 'painel', label: 'Painel' }, { key: 'evento', label: 'Evento usado' },
        { key: 'significado', label: 'Significado operacional' },
      ],
      rows: [
        ['Comercial', 'Data de despacho', 'Saiu da organização dentro do prazo'],
        ['Relacionamento', 'Aceite do destinatário', 'Foi aceito até a data combinada'],
      ],
    }] } };
    if (id === 'E26-Q-SI-07') return { ...question, version: 2, presentation: { blocks: [{
      type: 'image', src: 'images/questions/si-07-barras.svg',
      alt: 'Gráfico de barras com eixo iniciado em 99. Alfa está em 100 e sobe uma unidade acima da base; Beta está em 102 e sobe três unidades. A diferença dos dados é de dois registros.',
      caption: 'Comparação visual dos lotes com origem do eixo em 99',
    }] } };
    if (id === 'E26-Q-SI-08') return { ...question, version: 2, presentation: { blocks: [{
      type: 'table', caption: 'Percurso que o ensaio precisa observar',
      columns: [
        { key: 'etapa', label: 'Etapa' }, { key: 'condicao', label: 'Condição' },
        { key: 'evidencia', label: 'Evidência esperada' },
      ],
      rows: [
        ['Registro', 'Sem conexão', 'Vistoria completa armazenada no dispositivo'],
        ['Envio', 'Após reconectar', 'Mesmos dados enviados sem redigitação'],
        ['Conferência', 'Arquivo central', 'Pessoa em campo identifica a vistoria recebida'],
      ],
    }] } };
    if (id === 'E26-Q-SI-09') return { ...question, version: 2,
      context: 'Um núcleo fictício de acervo da Base N9 planeja uma rodada de trabalho. Pode concluir até quatro lotes do tipo X e até três do tipo Y. Cada lote deve ser inteiro e só conta se concluir captura e catalogação. O objetivo é maximizar o benefício segundo os pesos apresentados, sem exceder capacidade ou demanda. Não é obrigatório atender toda a demanda; os dados são didáticos e não representam XP ou política real de prioridade.',
      presentation: { blocks: [
        {
          type: 'table', caption: 'Consumo e benefício por lote concluído',
          columns: [
            { key: 'tipo', label: 'Tipo' }, { key: 'captura', label: 'Captura', align: 'right' },
            { key: 'catalogacao', label: 'Catalogação', align: 'right' },
            { key: 'beneficio', label: 'Benefício', align: 'right' },
            { key: 'demanda', label: 'Demanda máxima', align: 'right' },
          ],
          rows: [['X', '2', '1', '5', '4'], ['Y', '1', '2', '4', '3']],
        },
        {
          type: 'table', caption: 'Capacidade disponível na rodada',
          columns: [{ key: 'recurso', label: 'Recurso' }, { key: 'capacidade', label: 'Capacidade', align: 'right' }],
          rows: [['Captura', '10'], ['Catalogação', '8']],
        },
      ] } };
    if (id === 'E26-Q-SI-10') return { ...question, version: 3, presentation: { blocks: [{
      type: 'diagram', title: 'Requisitos da consulta pública',
      description: 'O público acessa pelo navegador. A camada de consulta deve suportar 600 pedidos por segundo e verificar a versão confirmada pela autoridade central antes de responder.',
      nodes: [
        { id: 'publico', label: 'NAVEGADOR', details: 'sem instalar aplicativo' },
        { id: 'consulta', label: 'CAMADA DE CONSULTA', details: 'pico de 600 pedidos/s' },
        { id: 'autoridade', label: 'VERSÃO AUTORITATIVA', details: 'confirmada pela autoridade central' },
      ],
      edges: [
        { from: 'publico', to: 'consulta', label: 'consulta' },
        { from: 'consulta', to: 'autoridade', label: 'verifica antes de responder' },
      ],
    }] } };
    return question;
  });
}

function applySiM03Visuals(questions: readonly Record<string, unknown>[]): readonly Record<string, unknown>[] {
  return questions.map((question) => {
    const id = String(question.id);
    if (id === 'E26-Q-SI-11') return { ...question, presentation: { blocks: [{
      type: 'diagram', title: 'Mapa sociotécnico do atendimento',
      description: 'O estudante envia e acompanha uma solicitação no portal. O portal cria o registro para a fila da equipe. A equipe também usa uma planilha paralela, enquanto o estudante precisa compreender o estado do pedido.',
      nodes: [
        { id: 'estudante', label: 'ESTUDANTE', details: 'envia e acompanha' },
        { id: 'portal', label: 'PORTAL', details: 'protocolo e estado' },
        { id: 'equipe', label: 'FILA DA EQUIPE', details: 'distribui pedidos' },
        { id: 'planilha', label: 'PLANILHA PARALELA', details: 'controle adicional' },
      ],
      edges: [
        { from: 'estudante', to: 'portal', label: 'envia' },
        { from: 'portal', to: 'equipe', label: 'cria registro' },
        { from: 'equipe', to: 'planilha', label: 'também controla' },
      ],
    }] } };
    if (id === 'E26-Q-SI-12') return { ...question, presentation: { blocks: [{
      type: 'table', caption: 'Reservas, presenças e regra usada na semana seguinte',
      columns: [
        { key: 'semana', label: 'Semana' }, { key: 'reservas', label: 'Reservas previstas', align: 'right' },
        { key: 'presencas', label: 'Presenças observadas', align: 'right' }, { key: 'regra', label: 'Regra seguinte' },
      ],
      rows: [['1', '40', '24', 'manter 40 vagas'], ['2', '40', '22', 'manter 40 vagas'], ['3', '40', '25', 'manter 40 vagas']],
    }] } };
    if (id === 'E26-Q-SI-13') return { ...question, presentation: { blocks: [
      {
        type: 'diagram', title: 'Fronteira de controle e interface',
        description: 'O portal de bolsas e sua política de reenvio são controlados pela equipe. O serviço financeiro é externo. Solicitações e respostas atravessam a interface identificadas por requestId.',
        nodes: [
          { id: 'portal', label: 'PORTAL DE BOLSAS', details: 'controlado · política de reenvio' },
          { id: 'servico', label: 'SERVIÇO FINANCEIRO', details: 'externo · processamento próprio' },
        ],
        edges: [{ from: 'portal', to: 'servico', label: 'interface com requestId' }],
      },
      {
        type: 'code', language: 'text', caption: 'Log sintético da interface',
        code: '10:03 requestId=R81 envio=1 resposta=timeout\n10:04 requestId=R81 envio=2 resposta=aceito\n10:05 requestId=R92 envio=1 resposta=aceito',
      },
    ] } };
    if (id === 'E26-Q-SI-14') return { ...question, presentation: { blocks: [{
      type: 'table', caption: 'Indicadores do percurso de empréstimo antes e depois da mudança',
      columns: [{ key: 'indicador', label: 'Indicador' }, { key: 'antes', label: 'Antes' }, { key: 'depois', label: 'Depois' }],
      rows: [
        ['Tempo no quiosque', '4 min', '2 min'], ['Casos enviados ao balcão', '12%', '35%'],
        ['Chegam ao balcão com contexto completo', '90%', '40%'], ['Tempo total até concluir', '9 min', '14 min'],
      ],
    }] } };
    if (id === 'E26-Q-SI-15') return { ...question, presentation: { blocks: [
      {
        type: 'table', caption: 'Sinais recebidos e situação considerada pela regra',
        columns: [{ key: 'sinal', label: 'Sinal recebido' }, { key: 'situacao', label: 'Situação atual' }],
        rows: [
          ['Oferta de turmas', 'muda a cada período'], ['Capacidade das salas', 'atualizada pela infraestrutura'],
          ['Solicitações de acessibilidade', 'analisadas individualmente'], ['Regra do sistema', 'copiada do período anterior'],
        ],
      },
      {
        type: 'code', language: 'text', caption: 'Pseudocódigo explicativo da regra atual; não executável',
        code: 'se procura_anterior > 30: abrir_lista_extra()\nfonte usada: somente o período anterior',
      },
    ] } };
    if (id === 'E26-Q-SI-16') return { ...question, presentation: { blocks: [
      {
        type: 'diagram', title: 'Ciclo de reenvio e crescimento da fila',
        description: 'Atraso sem estado visível aumenta reenvios. Reenvios duplicados ampliam a fila. A fila maior eleva o tempo de resposta. A demora dispara mais lembretes e reforça o ciclo.',
        nodes: [
          { id: 'atraso', label: 'ATRASO SEM ESTADO', details: 'aumenta incerteza' },
          { id: 'reenvios', label: 'REENVIOS', details: 'duplicam análises' },
          { id: 'fila', label: 'FILA MAIOR', details: 'eleva resposta' },
          { id: 'lembretes', label: 'MAIS LEMBRETES', details: 'reforçam o ciclo' },
        ],
        edges: [
          { from: 'atraso', to: 'reenvios', label: 'estimula' }, { from: 'reenvios', to: 'fila', label: 'amplia' },
          { from: 'fila', to: 'lembretes', label: 'dispara' }, { from: 'lembretes', to: 'atraso', label: 'reforça' },
        ],
      },
      {
        type: 'table', caption: 'Evolução sintética do ciclo em três semanas',
        columns: [
          { key: 'semana', label: 'Semana' }, { key: 'lembretes', label: 'Lembretes', align: 'right' },
          { key: 'duplicados', label: 'Duplicados', align: 'right' }, { key: 'fila', label: 'Fila', align: 'right' },
          { key: 'resposta', label: 'Resposta' },
        ],
        rows: [['1', '1', '20', '80', '2 dias'], ['2', '3', '55', '140', '4 dias'], ['3', '5', '110', '260', '8 dias']],
      },
    ] } };
    return question;
  });
}

function applyCommonVisualImprovements(questions: readonly Record<string, unknown>[]): readonly Record<string, unknown>[] {
  return questions.map((question) => {
    const id = String(question.id);
    if (id === 'E26-Q-COM-01') return { ...question, version: 2,
      context: 'Na Base N9 fictícia, uma oficina de organização dos estudos passou a oferecer um horário à noite. O registro acompanha as mesmas 40 pessoas convidadas em duas semanas; todas responderam em ambas. “Conseguiu participar” significa ter comparecido a pelo menos um encontro naquela semana, e cada pessoa foi contada uma vez por semana. O registro não informa motivos de participação, não mede bem-estar e não possui grupo de comparação. Os dados são inteiramente fictícios.',
      presentation: { blocks: [{
        type: 'image', src: 'images/questions/com-01-participacao.svg',
        alt: 'Gráfico de barras. Entre 40 pessoas convidadas, 16 conseguiram participar na semana anterior e 24 na semana com o novo horário. O aumento observado foi de oito pessoas, sem demonstrar sua causa.',
        caption: 'Participação registrada nas duas semanas',
      }] } };
    if (id === 'E26-Q-COM-02') return { ...question, version: 2, presentation: { blocks: [{
      type: 'diagram', title: 'Canais e finalidades disponíveis',
      description: 'Os registros de atendimento foram fornecidos para o retorno individual da equipe de apoio. O mural público permite divulgar a oficina sem transferir nomes, contatos ou descrições de dificuldades.',
      nodes: [
        { id: 'registros', label: 'REGISTROS DO ATENDIMENTO', details: 'nome · contato · dificuldade' },
        { id: 'apoio', label: 'EQUIPE DE APOIO', details: 'finalidade: retorno individual' },
        { id: 'convite', label: 'CONVITE DA OFICINA', details: 'não precisa identificar solicitantes' },
        { id: 'mural', label: 'MURAL PÚBLICO', details: 'canal disponível para divulgação' },
      ],
      edges: [
        { from: 'registros', to: 'apoio', label: 'uso combinado' },
        { from: 'convite', to: 'mural', label: 'divulgação pública' },
      ],
    }] } };
    if (id === 'E26-Q-COM-03') return { ...question, version: 2, presentation: { blocks: [{
      type: 'image', src: 'images/questions/com-03-convite.svg',
      alt: 'Cartaz com a frase “Chegue junto para virar a chave no Ponto!”. Três campos aparecem sem informação: qual é a atividade, onde será e em qual horário. Duas interpretações registradas são conversa e conserto de fechadura.',
      caption: 'Aviso recebido por públicos com repertórios diferentes',
    }] } };
    if (id === 'E26-Q-COM-04') return { ...question, version: 2, presentation: { blocks: [{
      type: 'diagram', title: 'Rotas de reserva consideradas',
      description: 'As duas rotas consultam a mesma disponibilidade de vagas. O formulário preserva o uso por teclado e leitor de tela; o balcão oferece atendimento assistido sem exigir celular próprio conectado.',
      nodes: [
        { id: 'formulario', label: 'FORMULÁRIO ACESSÍVEL', details: 'teclado e leitor de tela · requer celular e internet' },
        { id: 'vagas', label: 'MESMAS VAGAS', details: 'disponibilidade compartilhada pelos canais' },
        { id: 'balcao', label: 'BALCÃO ACESSÍVEL', details: 'reserva assistida · sem celular próprio' },
      ],
      edges: [
        { from: 'formulario', to: 'vagas', label: 'consulta' },
        { from: 'vagas', to: 'balcao', label: 'também disponível no' },
      ],
    }] } };
    if (id === 'E26-Q-COM-05') return { ...question, version: 2,
      context: 'No entorno fictício da Base N9, a equipe propõe um piloto de sombra em locais de espera durante o calor. O objetivo é reduzir a exposição ao sol de quem já espera nesses locais. Há recurso para uma intervenção de mesmo custo em um dos dois pontos, e ambos permitem instalação sem bloquear a circulação. Em uma observação sintética de 30 minutos, cada pessoa foi contada uma vez e permaneceu no mesmo local. A estimativa indica quantas pessoas ao sol caberiam na nova sombra; não prevê temperatura, adoecimento ou comportamento futuro.',
      presentation: { blocks: [{
        type: 'table', caption: 'Observação dos locais de espera',
        columns: [
          { key: 'local', label: 'Local' },
          { key: 'observadas', label: 'Pessoas observadas', align: 'right' },
          { key: 'sol', label: 'Pessoas ao sol', align: 'right' },
          { key: 'cobertura', label: 'Caberiam na nova sombra', align: 'right' },
        ],
        rows: [['Ponto da praça', '20', '15', '10'], ['Ponto da alameda', '40', '8', '6']],
      }] } };
    if (id === 'E26-Q-COM-06') return { ...question, version: 2, presentation: { blocks: [
      {
        type: 'table', caption: 'Comportamento informado das duas versões do sensor',
        columns: [
          { key: 'versao', label: 'Versão' }, { key: 'metal', label: 'Peças metálicas' },
          { key: 'ceramica', label: 'Peças cerâmicas' }, { key: 'capacidade', label: 'Capacidade das equipes' },
        ],
        rows: [
          ['Vento', 'Funciona bem', 'Não funciona', 'Ambas constroem e testam'],
          ['Maré', 'Funciona, mas ficou mais lenta', 'Passou a medir', 'Ambas constroem e testam'],
        ],
      },
      {
        type: 'diagram', title: 'Objetivo da cooperação',
        description: 'O acordo busca compreensão recíproca das modificações e adaptação às oficinas locais. Não exige escolher uma versão universal.',
        nodes: [
          { id: 'vento', label: 'LABORATÓRIO VENTO', details: 'projeto original e razões técnicas' },
          { id: 'troca', label: 'INTERCÂMBIO', details: 'projetos · mudanças · testes · condições de uso' },
          { id: 'mare', label: 'LABORATÓRIO MARÉ', details: 'modificação e razões técnicas' },
        ],
        edges: [
          { from: 'vento', to: 'troca', label: 'compartilha e reproduz' },
          { from: 'troca', to: 'mare', label: 'compartilha e reproduz' },
        ],
      },
    ] } };
    if (id === 'E26-Q-COM-07') return { ...question, version: 2, presentation: { blocks: [
      {
        type: 'code', language: 'text', caption: 'Registro das tentativas remotas',
        code: '[SOL-7A] Terminal 1 -> serviço: reserva Lume\n[SOL-7A] Serviço -> Terminal 1: Equipamento não cadastrado\n\n[SOL-7B] Terminal 2 -> serviço: reserva Lume\n[SOL-7B] Serviço -> Terminal 2: Equipamento não cadastrado',
      },
      {
        type: 'code', language: 'text', caption: 'Teste executado diretamente no computador do serviço',
        code: '[TESTE-LOCAL] Aplicação -> cadastro: consulta Lume\n[TESTE-LOCAL] Aplicação: Equipamento não cadastrado',
      },
    ] } };
    if (id === 'E26-Q-COM-08') return { ...question, version: 2, presentation: { blocks: [{
      type: 'image', src: 'images/questions/com-08-memoria.svg',
      alt: 'Diagrama de memória. O serviço possui limite de oito unidades, seis estão ocupadas e apenas duas permanecem disponíveis. A próxima tarefa precisa de três unidades. O computador ainda possui doze unidades livres fora do limite do serviço.',
      caption: 'Memória do serviço e necessidade da próxima tarefa',
    }] } };
    if (id === 'E26-Q-COM-09') return { ...question, version: 3, presentation: { blocks: [
      {
        type: 'diagram', title: 'Relação territorial considerada',
        description: 'A água do setor Alto segue para o setor Baixo. O acordo precisa proteger o Baixo sem aumentar a vazão enviada e sem reduzir excessivamente o solo permeável no Alto.',
        nodes: [
          { id: 'alto', label: 'SETOR ALTO', details: 'origem da vazão · solo permeável' },
          { id: 'baixo', label: 'SETOR BAIXO', details: 'moradias expostas · menos infraestrutura' },
        ],
        edges: [{ from: 'alto', to: 'baixo', label: 'vazão de pico atual: 12 L/s' }],
      },
      {
        type: 'table', caption: 'Exigências que devem ser cumpridas simultaneamente',
        columns: [
          { key: 'criterio', label: 'Critério' }, { key: 'limite', label: 'Limite obrigatório' },
          { key: 'sentido', label: 'Como avaliar' },
        ],
        rows: [
          ['Moradias protegidas no Baixo', 'Pelo menos 30', 'Valor igual ou maior que 30'],
          ['Vazão do Alto para o Baixo', 'No máximo 12 L/s', 'Valor igual ou menor que 12'],
          ['Solo permeável preservado no Alto', 'Pelo menos 90 m²', 'Valor igual ou maior que 90'],
        ],
      },
    ] } };
    if (id === 'E26-Q-COM-10') return { ...question, version: 3, presentation: { blocks: [{
      type: 'table', caption: 'Papéis e controles necessários',
      columns: [
        { key: 'papel', label: 'Papel ou situação' }, { key: 'editar', label: 'Editar rotas' },
        { key: 'consultar', label: 'Consultar painel' }, { key: 'controle', label: 'Controle necessário' },
      ],
      rows: [
        ['Manutenção ativa', 'Sim', 'Sim', 'Conta individual e edição registrada'],
        ['Equipe de circulação', 'Não', 'Sim', 'Permissão própria de consulta'],
        ['Pessoa desligada', 'Não', 'Não', 'Credencial antiga desativada'],
      ],
    }] } };
    return question;
  });
}

function parsePuzzle(section: Section): Record<string, unknown> {
  const fields = tableFields(section.text);
  const narrative = section.text.match(/### Narrativa ao jogador\s*\n\n([\s\S]*?)(?=\n\n### Blocos)/);
  const blockPart = section.text.match(/### Blocos\s*\n([\s\S]*?)(?=\n### Ordem correta)/)?.[1] ?? '';
  const hintPart = section.text.match(/### Dicas progressivas\s*\n([\s\S]*?)(?=\n### Explica)/)?.[1] ?? '';
  const blocks = [...blockPart.matchAll(/^\| ([a-z0-9-]+) \| (.+) \|$/gm)]
    .map((match) => ({ id: match[1], text: puzzleBlockText(match[2]) }));
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
  const questions = sections.filter((section) => section.id.includes('-Q-')).map(parseQuestion);
  return {
    sections,
    questions: applyCommonVisualImprovements(applySiM03Visuals(applySiVisualImprovements(applyApprovedCandidates(projectRoot, questions)))),
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
