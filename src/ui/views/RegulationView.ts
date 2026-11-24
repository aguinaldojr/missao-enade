import { gameConfig } from '../../config/game';
import { regulation } from '../../config/regulation';
import { element } from '../components/elements';

export function bootstrapRegulation(root: HTMLElement, onExit: () => void): () => void {
  root.className = 'regulation-root';
  const page = element('div', 'regulation-page');
  const header = element('header', 'regulation-header');
  const brand = element('a', 'regulation-brand', gameConfig.name);
  brand.href = '#';
  brand.addEventListener('click', (event) => { event.preventDefault(); onExit(); });
  const close = element('button', 'button button--secondary', '← Voltar ao jogo');
  close.type = 'button';
  close.addEventListener('click', onExit);
  header.append(brand, close);

  const main = element('main', 'regulation-content');
  main.id = 'conteudo-regulamento';
  const eyebrow = element('p', 'eyebrow', regulation.version);
  const title = element('h1', 'section-title', regulation.title);
  title.tabIndex = -1;
  main.append(eyebrow, title, element('p', 'regulation-summary', regulation.summary),
    element('p', 'regulation-highlight', 'Resumo: rankings separados por curso e modalidade; bônus acumulável de até 3,0 pontos no ciclo; 1 hora por avaliação com pelo menos 60% de acertos, até 10 horas.'));

  regulation.sections.forEach((section) => {
    const article = element('section', 'regulation-section');
    article.append(element('h2', '', section.title));
    if ('paragraphs' in section) section.paragraphs?.forEach((text) => article.append(element('p', '', text)));
    if ('items' in section && section.items) {
      const list = element('ul', 'regulation-list');
      section.items.forEach((text) => list.append(element('li', '', text)));
      article.append(list);
    }
    main.append(article);
  });

  const footer = element('footer', 'regulation-footer');
  footer.append(element('p', '', 'N9 — Jornada Digital · Regulamento do piloto 2026'),
    element('p', '', 'Guarde esta página para consulta durante o ciclo.'));
  page.append(header, main, footer);
  root.replaceChildren(page);
  queueMicrotask(() => title.focus());
  return () => undefined;
}
