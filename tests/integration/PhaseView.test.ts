import { afterEach, describe, expect, it } from 'vitest';
import catalog from '../../src/content/questions/central-nexo.json';
import { GameSession, type Command } from '../../src/app/GameSession';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { AppShell } from '../../src/ui/AppShell';

let shell: AppShell;
afterEach(() => { shell?.destroy(); document.body.replaceChildren(); });

function setup() {
  const data = structuredClone(catalog);
  data.questions[0]!.context = '<img src=x onerror=alert(1)> Exemplo de texto literal.';
  const root = document.createElement('div');
  document.body.append(root);
  const session = new GameSession(new JsonContentRepository(data));
  shell = new AppShell(root);
  const dispatch = (command: Command) => shell.render(session.dispatch(command), dispatch);
  shell.render(session.snapshot, dispatch);
  dispatch({ type: 'start' });
  dispatch({ type: 'select-course', course: 'CC' });
  dispatch({ type: 'enter-central' });
  dispatch({ type: 'start-phase' });
  return { root, session, dispatch };
}

describe('questão e feedback no HTML', () => {
  it('não revela solução antes da confirmação, renderiza texto sem HTML e preserva foco de seleção', () => {
    const { root } = setup();
    expect(root.querySelector('img')).toBeNull();
    expect(root.querySelector('.question-context')?.textContent).toContain('<img');
    expect(root.querySelectorAll('input[name="answer"]')).toHaveLength(5);
    expect(root.querySelector('.feedback')).toBeNull();
    expect(root.querySelector('.explanation')).toBeNull();
    const confirm = root.querySelector<HTMLButtonElement>('[data-action="confirm-answer"]')!;
    expect(confirm.disabled).toBe(true);
    const option = root.querySelector<HTMLInputElement>('input[value="B"]')!;
    option.focus();
    option.click();
    expect(document.activeElement).toBe(option);
    expect(confirm.disabled).toBe(false);
  });

  it('trava a resposta, apresenta gabarito e justificativas e anuncia feedback antes de avançar', () => {
    const { root, session } = setup();
    root.querySelector<HTMLInputElement>('input[value="A"]')!.click();
    const confirm = root.querySelector<HTMLButtonElement>('[data-action="confirm-answer"]')!;
    confirm.click();
    confirm.click();
    expect(root.querySelectorAll('input[name="answer"]:disabled')).toHaveLength(5);
    expect(root.querySelector('.feedback-heading')?.textContent).toBe('Resposta incorreta.');
    expect(document.activeElement).toBe(root.querySelector('.feedback-heading'));
    expect(root.querySelector('.correct-answer')?.textContent).toContain('Alternativa correta: B');
    expect(root.querySelectorAll('.all-explanations li')).toHaveLength(5);
    expect(session.snapshot.attempt?.answers).toHaveLength(1);
    expect(session.snapshot.attempt?.answers[0]?.feedbackAccessed).toBe(true);
    const next = [...root.querySelectorAll('button')].find((item) => item.textContent === 'Próxima questão')!;
    next.click();
    next.click();
    expect(session.snapshot.attempt?.index).toBe(1);
    expect(root.querySelector('.question-toolbar')?.textContent).toContain('Questão 2 de 10');
    expect(root.querySelectorAll('input[name="answer"]:checked')).toHaveLength(0);
    expect(root.querySelector('.feedback')).toBeNull();
    expect(document.activeElement).toBe(root.querySelector('h1'));
  });
});
