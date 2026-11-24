import { afterEach, describe, expect, it, vi } from 'vitest';
import type { MissionResult } from '../../src/domain/models/Attempt';
import { resultView } from '../../src/ui/views/ResultView';

afterEach(() => document.body.replaceChildren());

const result: MissionResult = {
  schemaVersion: 1, contentVersion: '3', mode: 'provisional', phaseId: 'N9-JOURNEY',
  missionId: 'journey-25', attemptId: 'result-view-a1', course: 'SI', total: 25,
  correctCount: 18, score: 1800, durationMs: 900000, completedAt: '2026-11-24T12:00:00.000Z',
};

describe('encerramento da jornada de avaliação', () => {
  it('resume os 25 desafios, benefícios e oferece os três destinos finais', () => {
    const dispatch = vi.fn();
    const view = resultView(result, 'saved', dispatch, new AbortController().signal, {
      id: 'verified-1', nickname: 'Aluno-0001', course: 'SI', modality: 'PRESENCIAL', role: 'student',
      publicCode: 'N9-TESTE0001', verificationToken: 'token-verificado-com-mais-de-vinte',
      rankingEligible: true, createdAt: result.completedAt, lastUsedAt: result.completedAt,
    });
    document.body.append(view);

    expect(view.querySelector('h1')?.textContent).toBe('Missão concluída!');
    expect(view.textContent).toContain('25 de 25');
    expect(view.textContent).toContain('18 de 25');
    expect(view.textContent).toContain('72%');
    expect(view.textContent).toContain('Bônus acadêmico');
    expect(view.textContent).toContain('Atividades complementares');
    expect(view.textContent).toContain('Envio automático');
    expect(view.querySelectorAll('.journey-benefit-card')).toHaveLength(3);

    const controls = [...view.querySelectorAll<HTMLButtonElement>('button')];
    controls.find((item) => item.textContent === 'Jogar novamente')!.click();
    controls.find((item) => item.textContent === 'Ver ranking')!.click();
    controls.find((item) => item.textContent === 'Voltar ao início')!.click();
    expect(dispatch.mock.calls).toEqual([[{ type: 'start' }], [{ type: 'open-ranking' }], [{ type: 'home' }]]);
  });
});
