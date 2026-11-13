import type { Command } from '../../app/GameSession';
import { getCourse } from '../../app/courses';
import type { ExampleResult } from '../../domain/models/Attempt';
import type { SaveStatus } from '../../ports/ProgressRepository';
import { button, element } from '../components/elements';

export function resultView(result: ExampleResult, status: SaveStatus, dispatch: (command: Command) => void, signal: AbortSignal): HTMLElement {
  const view = element('section', 'view result-view');
  view.append(element('p', 'eyebrow', 'FASE DE EXEMPLO CONCLUÍDA'));
  const title = element('h1', 'section-title', 'Uma conexão a mais.');
  title.tabIndex = -1;
  view.append(title, element('p', 'example-warning', 'Resultado de questões fictícias. Não estima nota no ENADE nem comprova domínio de uma área.'), element('p', 'intro intro--small', getCourse(result.course).name));
  const scores = element('dl', 'result-numbers');
  for (const [label, value] of [['Acertos', result.correctCount + ' de 10'], ['Pontuação', result.score + ' de 1.000'], ['Questões respondidas', '10 de 10']]) {
    const group = element('div', '');
    group.append(element('dt', '', label), element('dd', '', value));
    scores.append(group);
  }
  view.append(scores);
  const saved = element('p', 'save-message', status === 'saved'
    ? 'Resultado salvo neste navegador. Ele também aparecerá no menu após recarregar.'
    : 'Resultado não salvo neste navegador. A partida foi concluída e você pode tentar salvar novamente.');
  saved.setAttribute('role', 'status');
  view.append(saved);
  if (status !== 'saved') {
    const retry = button('Tentar salvar novamente', true);
    retry.addEventListener('click', () => dispatch({ type: 'retry-save' }), { signal });
    view.append(retry);
  }
  const home = button('Voltar ao menu');
  home.classList.add('menu-button');
  home.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  view.append(home, element('p', 'helper', 'O último resultado de exemplo é substituído ao concluir outra fase. Limpar os dados do navegador ou trocar de dispositivo pode removê-lo.'));
  return view;
}
