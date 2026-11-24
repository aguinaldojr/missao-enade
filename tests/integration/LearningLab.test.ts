import { afterEach, describe, expect, it, vi } from 'vitest';
import { N9_SHARED_LEARNING_LAB } from '../../src/content/learning-lab';
import { selectDailyLearningActivities } from '../../src/domain/services/DailyLearningSelector';
import { LearningLab } from '../../src/ui/learning/LearningLab';
import type { OnlineLeaderboardRepository } from '../../src/ports/OnlineLeaderboardRepository';
import type { PlayerProfile } from '../../src/domain/models/PlayerProfile';

let lab: LearningLab;
afterEach(() => { lab?.destroy(); document.body.replaceChildren(); vi.restoreAllMocks(); });

function clickText(root: HTMLElement, text: string): void {
  const control = [...root.querySelectorAll<HTMLButtonElement>('button')].find((button) => button.textContent?.includes(text));
  if (!control) throw new Error('Controle ausente: ' + text);
  control.click();
}

describe('experiência do laboratório rápido', () => {
  it('carrega a missão diária, oferece ajuda e preserva o jogo principal', () => {
    localStorage.clear();
    const date = new Date(2026, 10, 23);
    const session = selectDailyLearningActivities(N9_SHARED_LEARNING_LAB, date);
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

  it('envia automaticamente o resultado validado uma única vez ao concluir', async () => {
    const root = document.createElement('div'); document.body.append(root);
    const submit = vi.fn(async () => ({ publicCode: 'N9-TESTE01', bestUpdated: false, entries: [] }));
    const ranking: OnlineLeaderboardRepository = { ranking: vi.fn(async () => []), submit };
    const player: PlayerProfile = { id: 'verified-test', nickname: 'Teste-IP01', academicId: 'TESTESIP01',
      fullName: 'Aluno Teste', course: 'SI', modality: 'PRESENCIAL', role: 'student', publicCode: 'N9-TESTE01',
      verificationToken: 'token-valido', rankingEligible: true,
      createdAt: '2026-11-23T10:00:00.000Z', lastUsedAt: '2026-11-23T10:00:00.000Z' };
    lab = new LearningLab(root, vi.fn(), new Date(2026, 10, 23), ranking, player);
    const internals = lab as unknown as { index: number; firstTryCorrect: number; attemptId: string;
      startedAt: number; render(): void };
    internals.index = 15; internals.firstTryCorrect = 8; internals.attemptId = 'quick-auto-test';
    internals.startedAt = Date.now() - 60_000; internals.render();

    await vi.waitFor(() => expect(submit).toHaveBeenCalledTimes(1));
    expect(root.textContent).toContain('Resultado incluído automaticamente no ranking diário.');
    expect(root.textContent).not.toContain('Enviar ao ranking diário');

    internals.render();
    await Promise.resolve();
    expect(submit).toHaveBeenCalledTimes(1);
  });

  it('desconta ajuda, erros e tempo com teto proporcional e nunca concede XP negativo', () => {
    const clock = vi.spyOn(performance, 'now'); clock.mockReturnValue(1_000);
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(false);
    const source = N9_SHARED_LEARNING_LAB.find((item) => item.type === 'choice')!;
    if (source.type !== 'choice') throw new Error('Atividade de escolha não encontrada.');
    const activity = { ...source, xp: 45 };
    const root = document.createElement('div'); document.body.append(root);
    lab = new LearningLab(root, vi.fn(), new Date(2026, 10, 23), null, null);
    const internals = lab as unknown as { activities: typeof N9_SHARED_LEARNING_LAB; render(): void };
    clickText(root, 'Começar laboratório');
    internals.activities = Object.freeze([activity]); internals.render();

    const help = root.querySelector<HTMLDetailsElement>('.lab-help')!;
    help.open = true; help.dispatchEvent(new Event('toggle'));
    const wrong = activity.options.find((option) => option.id !== activity.correctId)!;
    root.querySelector<HTMLButtonElement>('[data-option="' + wrong.id + '"]')!.click(); clickText(root, 'Verificar');
    clock.mockReturnValue(106_000);
    root.querySelector<HTMLButtonElement>('[data-option="' + activity.correctId + '"]')!.click(); clickText(root, 'Verificar');

    expect(root.textContent).toContain('+27 XP');
    expect(root.textContent).toContain('descontos: −18 XP');
  });

  it('permite concluir sem XP depois de descontos suficientes', () => {
    vi.spyOn(performance, 'now').mockReturnValue(1_000);
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(false);
    const source = N9_SHARED_LEARNING_LAB.find((item) => item.type === 'choice')!;
    if (source.type !== 'choice') throw new Error('Atividade de escolha não encontrada.');
    const activity = { ...source, xp: 45 };
    const root = document.createElement('div'); document.body.append(root);
    lab = new LearningLab(root, vi.fn(), new Date(2026, 10, 23), null, null);
    const internals = lab as unknown as { activities: typeof N9_SHARED_LEARNING_LAB; render(): void };
    clickText(root, 'Começar laboratório'); internals.activities = Object.freeze([activity]); internals.render();
    const help = root.querySelector<HTMLDetailsElement>('.lab-help')!;
    help.open = true; help.dispatchEvent(new Event('toggle'));
    const wrong = activity.options.find((option) => option.id !== activity.correctId)!;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      root.querySelector<HTMLButtonElement>('[data-option="' + wrong.id + '"]')!.click(); clickText(root, 'Verificar');
    }
    root.querySelector<HTMLButtonElement>('[data-option="' + activity.correctId + '"]')!.click(); clickText(root, 'Verificar');

    expect(root.textContent).toContain('Atividade concluída sem XP devido aos descontos acumulados.');
    expect(root.textContent).toContain('descontos: −45 XP');
  });

  it('apresenta a composição UML como diagrama interativo em vez de cartões de texto', () => {
    const activity = N9_SHARED_LEARNING_LAB.find((item) => item.id === 'N9-COM-039')!;
    expect(activity.type).toBe('hotspot');
    const root = document.createElement('div'); document.body.append(root);
    lab = new LearningLab(root, vi.fn(), new Date(2026, 10, 23), null, null);
    const internals = lab as unknown as { activities: typeof N9_SHARED_LEARNING_LAB; render(): void };
    clickText(root, 'Começar laboratório'); internals.activities = Object.freeze([activity]); internals.render();

    expect(root.querySelector('.lab-uml-diagram')).not.toBeNull();
    expect(root.querySelectorAll<HTMLButtonElement>('.lab-uml-diagram [data-node]')).toHaveLength(4);
    expect(root.textContent).toContain('DocumentoAcademico');
    expect(root.textContent).toContain('PedidoMatricula');
    expect(root.textContent).not.toContain('Relação de composição todo-parte');
    const composition = root.querySelector<HTMLButtonElement>('[data-node="node-composicao"]')!;
    composition.click();
    expect(root.querySelector<HTMLButtonElement>('[data-node="node-composicao"]')?.getAttribute('aria-pressed')).toBe('true');
  });
});
