import { afterEach, expect, it } from 'vitest';
import catalog from '../../src/content/questions/central-nexo.json';
import { makeQuestionBank } from '../fixtures/questionBanks';
import { GameSession, type Command } from '../../src/app/GameSession';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { AppShell } from '../../src/ui/AppShell';

let shell: AppShell;
afterEach(() => { shell?.destroy(); document.body.replaceChildren(); });
it('mostra conteúdo necessário/disponível nos controles existentes e mantém acesso ao menu', () => {
  const root = document.createElement('div');
  document.body.append(root);
  const session = new GameSession(new JsonContentRepository({ ...catalog, questions: makeQuestionBank(8, 1) }));
  shell = new AppShell(root);
  const dispatch = (command: Command): void => shell.render(session.dispatch(command), dispatch);
  shell.render(session.snapshot, dispatch);
  dispatch({ type: 'start' }); dispatch({ type: 'select-course', course: 'CC' });
  dispatch({ type: 'enter-central' });
  root.querySelector<HTMLButtonElement>('.world-interact')!.click();
  const message = root.querySelector<HTMLElement>('.content-error')!;
  expect(message.hidden).toBe(false);
  expect(message.getAttribute('role')).toBe('alert');
  expect(message.textContent).toContain('necessárias 10 questões (9 comuns e 1 específica)');
  expect(message.textContent).toContain('disponíveis 9 (8 comuns e 1 específica)');
  expect(root.querySelectorAll('input[name="answer"]')).toHaveLength(0);
  const menu = [...root.querySelectorAll('button')].find((button) => button.textContent === 'Voltar ao menu')!;
  menu.click();
  expect(session.snapshot.screen).toBe('home');
});
