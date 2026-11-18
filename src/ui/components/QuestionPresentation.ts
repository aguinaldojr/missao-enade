import type {
  QuestionDiagramBlock,
  QuestionImageBlock,
  QuestionPresentation,
  QuestionPresentationBlock,
  QuestionTableBlock,
} from '../../domain/models/Question';
import { element } from './elements';

function codeBlock(block: Extract<QuestionPresentationBlock, { type: 'code' }>): HTMLElement {
  const figure = element('figure', 'question-resource question-code');
  const caption = element('figcaption', 'question-resource-title', block.caption);
  const pre = element('pre', 'question-code-scroll');
  pre.tabIndex = 0;
  pre.setAttribute('role', 'region');
  pre.setAttribute('aria-label', block.caption);
  const code = element('code', 'question-code-content', block.code);
  code.dataset.language = block.language;
  pre.append(code);
  figure.append(caption, pre);
  return figure;
}

function tableBlock(block: QuestionTableBlock): HTMLElement {
  const figure = element('figure', 'question-resource question-table-resource');
  figure.append(element('figcaption', 'question-resource-title', block.caption));
  const scroll = element('div', 'question-table-scroll');
  scroll.tabIndex = 0;
  scroll.setAttribute('role', 'region');
  scroll.setAttribute('aria-label', block.caption);
  const table = element('table', 'question-data-table');
  table.append(element('caption', 'sr-only', block.caption));
  const header = element('thead', '');
  const headerRow = element('tr', '');
  for (const column of block.columns) {
    const cell = element('th', column.align ? 'align-' + column.align : '', column.label);
    cell.scope = 'col';
    headerRow.append(cell);
  }
  header.append(headerRow);
  const body = element('tbody', '');
  for (const row of block.rows) {
    const tableRow = element('tr', '');
    row.forEach((value, index) => {
      const align = block.columns[index]?.align;
      tableRow.append(element('td', align ? 'align-' + align : '', value));
    });
    body.append(tableRow);
  }
  table.append(header, body);
  scroll.append(table);
  figure.append(scroll);
  return figure;
}

function diagramNode(block: QuestionDiagramBlock, nodeId: string): HTMLElement {
  const node = block.nodes.find((candidate) => candidate.id === nodeId)!;
  const card = element('div', 'question-diagram-node');
  card.append(element('strong', 'question-diagram-node-title', node.label));
  if (node.details) card.append(element('span', 'question-diagram-node-details', node.details));
  return card;
}

function diagramBlock(block: QuestionDiagramBlock): HTMLElement {
  const figure = element('figure', 'question-resource question-diagram');
  figure.append(element('figcaption', 'question-resource-title', block.title));
  const visual = element('div', 'question-diagram-visual');
  visual.setAttribute('aria-hidden', 'true');
  const rendered = new Set<string>();
  for (const edge of block.edges) {
    if (!rendered.has(edge.from)) {
      visual.append(diagramNode(block, edge.from));
      rendered.add(edge.from);
    }
    const connector = element('span', 'question-diagram-edge', edge.label);
    connector.append(element('span', 'question-diagram-arrow', '→'));
    visual.append(connector);
    if (!rendered.has(edge.to)) {
      visual.append(diagramNode(block, edge.to));
      rendered.add(edge.to);
    }
  }
  for (const node of block.nodes) {
    if (!rendered.has(node.id)) visual.append(diagramNode(block, node.id));
  }
  figure.append(visual, element('p', 'question-diagram-description', block.description));
  return figure;
}

function imageBlock(block: QuestionImageBlock): HTMLElement {
  const figure = element('figure', 'question-resource question-image-resource');
  const image = element('img', 'question-resource-image');
  image.src = new URL(block.src, document.baseURI).href;
  image.alt = block.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  figure.append(image);
  if (block.caption) figure.append(element('figcaption', 'question-resource-title', block.caption));
  return figure;
}

function presentationBlock(block: QuestionPresentationBlock): HTMLElement {
  switch (block.type) {
    case 'code': return codeBlock(block);
    case 'table': return tableBlock(block);
    case 'diagram': return diagramBlock(block);
    case 'image': return imageBlock(block);
  }
}

export function questionPresentation(presentation: QuestionPresentation): HTMLElement {
  const container = element('section', 'question-presentation');
  container.setAttribute('aria-label', 'Recursos do desafio');
  for (const block of presentation.blocks) container.append(presentationBlock(block));
  return container;
}
