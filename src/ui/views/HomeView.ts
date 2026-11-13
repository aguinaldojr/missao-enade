import type { ExampleResult } from '../../domain/models/Attempt';
import type { SaveStatus } from '../../ports/ProgressRepository';
import { getCourse } from '../../app/courses';
import { button, element } from '../components/elements';

export function homeView(onStart: () => void, signal: AbortSignal, lastResult: ExampleResult | null = null, saveStatus: SaveStatus = 'none'): HTMLElement {
  const view = element('section', 'view home-view');
  view.append(element('p', 'eyebrow', 'UMA CIDADE. CINCO PERCURSOS.'));
  const title = element('h1', 'hero-title');
  title.tabIndex = -1;
  title.append(document.createTextNode('Conhecimento que '), element('span', 'accent', 'conecta.'));
  view.append(title, element('p', 'intro', 'Nexo precisa de novas conexões. Junte-se a uma equipe universitária e prepare seu percurso de estudo em Computação.'));
  const start = button('Iniciar missão');
  start.append(element('span', 'button-arrow', '↗'));
  start.addEventListener('click', onStart, { signal });
  view.append(start, element('p', 'helper', 'Escolha seu curso para conhecer a Central Nexo.'));
  const steps = element('ol', 'journey');
  for (const [number, name, detail] of [
    ['01', 'Escolha', 'Seu curso, seu percurso'],
    ['02', 'Explore', 'Conheça a Central Nexo'],
    ['03', 'Aprenda', 'Dez questões de exemplo'],
  ]) {
    const item = element('li', 'journey-step');
    item.append(element('span', 'step-number', number), element('strong', '', name), element('span', 'step-detail', detail));
    steps.append(item);
  }
  view.append(steps);
  view.append(element('p', 'example-warning', 'Versão de demonstração com questões fictícias, sem conteúdo oficial do ENADE.'));
  if (lastResult) {
    const summary = element('section', 'last-result');
    summary.append(element('h2', '', saveStatus === 'saved' ? 'Último resultado salvo · Exemplo' : 'Último resultado desta sessão · Não salvo'),
      element('p', '', getCourse(lastResult.course).name + ' · ' + lastResult.correctCount + ' de 10 acertos · ' + lastResult.score + ' pontos.'));
    view.append(summary);
  } else if (saveStatus === 'invalid' || saveStatus === 'unavailable') {
    view.append(element('p', 'helper', saveStatus === 'invalid'
      ? 'O resultado local é inválido ou incompatível e não foi carregado. Uma nova conclusão poderá substituir um registro corrompido.'
      : 'O armazenamento deste navegador está indisponível. Você pode jogar, mas o resultado poderá não ser salvo.'));
  }
  return view;
}
