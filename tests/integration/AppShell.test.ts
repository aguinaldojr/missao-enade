import { afterEach, describe, expect, it } from 'vitest';
import { GameSession, type Command } from '../../src/app/GameSession';
import { AppShell } from '../../src/ui/AppShell';

let shell: AppShell;
afterEach(() => { shell?.destroy(); document.body.replaceChildren(); });

function setup() {
  const root = document.createElement('div');
  document.body.append(root);
  const session = new GameSession();
  shell = new AppShell(root);
  const dispatch = (command: Command) => shell.render(session.dispatch(command), dispatch);
  shell.render(session.snapshot, dispatch);
  const click = (text: string) => {
    const control = [...root.querySelectorAll('button')].find((button) => button.textContent?.includes(text));
    if (!control) throw new Error('Controle ausente: ' + text);
    control.click();
  };
  return { root, session, click };
}

describe('controles HTML e foco', () => {
  it('leva ao perfil antes do modo rápido quando não há cadastro validado', () => {
    const { session, click } = setup();
    click('Entrar para jogar');
    expect(session.snapshot.screen).toBe('profile');
  });

  it('só habilita a entrada após escolher um curso e preserva o foco do radio', () => {
    const { root, session, click } = setup();
    click('Jogar Jornada N9');
    expect(document.activeElement).toBe(root.querySelector('h1'));
    const confirm = root.querySelector<HTMLButtonElement>('[data-action="confirm-course"]')!;
    expect(confirm.disabled).toBe(true);
    const radio = root.querySelector<HTMLInputElement>('input[value="TADS"]')!;
    radio.focus();
    radio.click();
    expect(confirm.disabled).toBe(false);
    expect(document.activeElement).toBe(radio);
    click('Entrar na Central Nexo');
    expect(session.snapshot.screen).toBe('map');
    expect(root.querySelector('.selected-name')?.textContent).toBe('Tecnologia em Análise e Desenvolvimento de Sistemas');
    expect(document.activeElement).toBe(root.querySelector('h1'));
    expect(root.textContent).toContain('MISSÃO ATIVA');
  });

  it('limpa listeners de telas desmontadas, permite trocar curso e mantém o fluxo sem canvas', () => {
    const { root, session, click } = setup();
    const oldStart = root.querySelector<HTMLButtonElement>('button')!;
    click('Jogar Jornada N9');
    root.querySelector<HTMLInputElement>('input[value="CC"]')!.click();
    click('Entrar na Central Nexo');
    oldStart.click();
    expect(session.snapshot.screen).toBe('map');
    click('Trocar curso');
    expect(root.querySelector<HTMLInputElement>('input[value="CC"]')!.checked).toBe(true);
    root.querySelector<HTMLInputElement>('input[value="TRC"]')!.click();
    click('Entrar na Central Nexo');
    shell.showGraphicUnavailable();
    expect(root.textContent).toContain('Ambientação indisponível');
    click('Voltar ao menu');
    expect(session.snapshot.screen).toBe('home');
  });
});
