import { afterEach, describe, expect, it, vi } from 'vitest';
import { LearningLab } from '../../src/ui/learning/LearningLab';

let lab: LearningLab;
afterEach(() => { lab?.destroy(); document.body.replaceChildren(); });

function click(root: HTMLElement, selector: string): void {
  const control = root.querySelector<HTMLButtonElement>(selector);
  if (!control) throw new Error('Controle ausente: ' + selector);
  control.click();
}

function clickText(root: HTMLElement, text: string): void {
  const control = [...root.querySelectorAll<HTMLButtonElement>('button')].find((button) => button.textContent?.includes(text));
  if (!control) throw new Error('Controle ausente: ' + text);
  control.click();
}

function clickLabel(root: HTMLElement, text: string): void {
  click(root, '[aria-label="' + text + '"]');
}

function checkAndNext(root: HTMLElement): void {
  click(root, '[data-action="check"]');
  expect(root.textContent).toContain('Excelente!');
  click(root, '[data-action="next"]');
}

describe('experiência do laboratório rápido', () => {
  it('conclui as nove mecânicas sem salvar ou alterar o jogo principal', () => {
    localStorage.clear();
    const root = document.createElement('div'); document.body.append(root);
    const exit = vi.fn(); lab = new LearningLab(root, exit);
    expect(root.textContent).toContain('Nove atividades curtas');
    clickText(root, 'Começar laboratório');

    click(root, '[data-option="B"]'); checkAndNext(root);

    clickLabel(root, 'Mover “Registrar o incidente e seu impacto.” para cima');
    clickLabel(root, 'Mover “Diagnosticar a causa provável com evidências.” para cima');
    clickLabel(root, 'Mover “Diagnosticar a causa provável com evidências.” para cima');
    checkAndNext(root);

    for (const id of ['erp', 'crm', 'scm']) { click(root, '[data-left="' + id + '"]'); click(root, '[data-right="' + id + '"]'); }
    checkAndNext(root);

    for (const [item, category] of [['venda', 'oltp'], ['painel', 'olap'], ['estoque', 'oltp'], ['tendencia', 'olap']]) {
      click(root, '[data-item="' + item + '"]'); click(root, '[data-category="' + category + '"]');
    }
    checkAndNext(root);

    click(root, '[data-token="correct"]'); checkAndNext(root);

    click(root, '[data-node="relation"]'); click(root, '[data-action="check"]');
    expect(root.textContent).toContain('Excelente! +70 XP');
    click(root, '[data-action="next"]');

    click(root, '[data-binary="true"]'); checkAndNext(root);

    for (const id of ['redundancy', 'failover', 'restore']) click(root, '[data-multi="' + id + '"]');
    checkAndNext(root);

    click(root, '[data-dialogue-choice="goal"]'); click(root, '[data-action="check"]');
    expect(root.textContent).toContain('Decisão 2 de 3');
    click(root, '[data-dialogue-choice="minimum"]'); click(root, '[data-action="check"]');
    expect(root.textContent).toContain('Decisão 3 de 3');
    click(root, '[data-dialogue-choice="human"]'); click(root, '[data-action="check"]');
    expect(root.textContent).toContain('Excelente! +80 XP');
    click(root, '[data-action="next"]');
    expect(root.textContent).toContain('LABORATÓRIO CONCLUÍDO!');
    expect(root.textContent).toContain('530 XP');
    expect(localStorage.length).toBe(0);
  });
});

