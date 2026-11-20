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

describe('experiência do laboratório rápido', () => {
  it('carrega o lote compartilhado, oferece ajuda e preserva o jogo principal', () => {
    localStorage.clear();
    const root = document.createElement('div'); document.body.append(root);
    const exit = vi.fn(); lab = new LearningLab(root, exit);
    expect(root.textContent).toContain('Vinte atividades compartilhadas');
    expect(root.querySelectorAll('.lab-mechanic-card')).toHaveLength(20);

    clickText(root, 'Começar laboratório');
    expect(root.textContent).toContain('Falha de Acesso no Portal N9');
    expect(root.textContent).toContain('Preciso de ajuda');
    click(root, '[data-option="opt-a"]');
    click(root, '[data-action="check"]');
    expect(root.textContent).toContain('Excelente! +50 XP');
    click(root, '[data-action="next"]');

    expect(root.textContent).toContain('Consulta de Notas em SQL');
    expect(root.querySelector('[data-option="opt-b"]')?.textContent).toContain('HAVING AVG(NOTA_FINAL) > 7.0');
    click(root, '[data-option="opt-b"]');
    click(root, '[data-action="check"]');
    expect(root.textContent).toContain('Excelente! +50 XP');
    expect(localStorage.length).toBe(0);
  });
});
