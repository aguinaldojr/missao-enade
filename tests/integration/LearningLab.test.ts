import { afterEach, describe, expect, it, vi } from 'vitest';
import { SI_LEARNING_LAB } from '../../src/content/learning-lab';
import { selectDailyLearningActivities } from '../../src/domain/services/DailyLearningSelector';
import { LearningLab } from '../../src/ui/learning/LearningLab';

let lab: LearningLab;
afterEach(() => { lab?.destroy(); document.body.replaceChildren(); });

function clickText(root: HTMLElement, text: string): void {
  const control = [...root.querySelectorAll<HTMLButtonElement>('button')].find((button) => button.textContent?.includes(text));
  if (!control) throw new Error('Controle ausente: ' + text);
  control.click();
}

describe('experiência do laboratório rápido', () => {
  it('carrega a missão diária, oferece ajuda e preserva o jogo principal', () => {
    localStorage.clear();
    const date = new Date(2026, 10, 23);
    const session = selectDailyLearningActivities(SI_LEARNING_LAB, date);
    const root = document.createElement('div'); document.body.append(root);
    const exit = vi.fn(); lab = new LearningLab(root, exit, date);
    expect(root.textContent).toContain('15 atividades na missão de hoje');
    expect(root.querySelectorAll('.lab-mechanic-card')).toHaveLength(15);

    clickText(root, 'Começar laboratório');
    expect(root.textContent).toContain(session[0]!.title);
    expect(root.textContent).toContain('ATIVIDADE 1 DE 15');
    expect(root.textContent).toContain('Preciso de ajuda');
    expect(root.textContent).not.toContain('opt-a');
    expect(localStorage.length).toBe(0);
  });
});
