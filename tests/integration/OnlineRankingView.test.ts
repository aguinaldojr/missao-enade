import { afterEach, describe, expect, it, vi } from 'vitest';
import type { MissionResult } from '../../src/domain/models/Attempt';
import type { OnlineLeaderboardRepository } from '../../src/ports/OnlineLeaderboardRepository';
import { onlineLeaderboardPanel } from '../../src/ui/components/OnlineLeaderboardPanel';

afterEach(() => document.body.replaceChildren());

const result: MissionResult = { schemaVersion: 1, contentVersion: '3', mode: 'provisional',
  phaseId: 'N9-JOURNEY', missionId: 'journey-25', attemptId: 'a1', course: 'SI', total: 25,
  correctCount: 20, score: 2000, durationMs: 600000, completedAt: '2026-11-19T12:00:00.000Z' };

describe('painel do ranking online', () => {
  it('explica indisponibilidade sem fazer requisição quando não está configurado', () => {
    const panel = onlineLeaderboardPanel('SI', result, null);
    document.body.append(panel);
    expect(panel.textContent).toContain('ainda não configurado');
    expect(panel.querySelector('form')).toBeNull();
  });

  it('exige consentimento, não exibe o RA e mostra o código pseudônimo após envio', async () => {
    const repository: OnlineLeaderboardRepository = {
      ranking: vi.fn(async () => []),
      submit: vi.fn(async () => ({ publicCode: 'N9-ABC12345', bestUpdated: true, entries: [{
        publicCode: 'N9-ABC12345', course: 'SI' as const, questionCount: 25 as const, correctCount: 20, score: 2000,
        maxScore: 2500 as const, rankingScore: 800, durationMs: 600000, achievedAt: result.completedAt,
        collectionId: 'enade-2026' }] })),
    };
    const panel = onlineLeaderboardPanel('SI', result, repository);
    document.body.append(panel);
    const input = panel.querySelector<HTMLInputElement>('#online-ranking-ra')!;
    const consent = panel.querySelector<HTMLInputElement>('input[type="checkbox"]')!;
    input.value = '123456';
    consent.checked = true;
    panel.querySelector<HTMLFormElement>('form')!.requestSubmit();
    await vi.waitFor(() => expect(repository.submit).toHaveBeenCalled());
    await vi.waitFor(() => expect(panel.textContent).toContain('N9-ABC12345'));
    expect(panel.textContent).not.toContain('123456');
  });
});
