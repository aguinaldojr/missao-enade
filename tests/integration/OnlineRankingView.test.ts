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
    const update = vi.fn();
    const panel = onlineLeaderboardPanel('SI', result, null, undefined, update);
    document.body.append(panel);
    expect(panel.textContent).toContain('temporariamente indisponível');
    expect(update).toHaveBeenCalledWith(expect.objectContaining({ state: 'failed' }));
    expect(panel.querySelector('form')).toBeNull();
  });

  it('envia automaticamente o resultado do perfil validado e mostra somente o código pseudônimo', async () => {
    const update = vi.fn();
    const repository: OnlineLeaderboardRepository = {
      ranking: vi.fn(async () => []),
      submit: vi.fn(async () => ({ publicCode: 'N9-ABC12345', bestUpdated: true, entries: [{
        publicCode: 'N9-ABC12345', course: 'SI' as const, questionCount: 25 as const, correctCount: 20, score: 2000,
        maxScore: 2500 as const, rankingScore: 800, durationMs: 600000, achievedAt: result.completedAt,
        collectionId: 'enade-2026' }], benefit: { qualified: true, recorded: true, hoursEarned: 1,
          totalHours: 2, bonusEarned: 0.5, evaluationBonusTotal: 1, qualifyingBonusAttempts: 2 } })),
    };
    const panel = onlineLeaderboardPanel('SI', result, repository, { id: 'verified-N9-ABC12345',
      nickname: 'Ana-3456', academicId: '123456', fullName: 'Ana Silva', course: 'SI', modality: 'EAD',
      role: 'student', publicCode: 'N9-ABC12345', verificationToken: 'token-verificado-com-mais-de-vinte',
      rankingEligible: true, createdAt: result.completedAt, lastUsedAt: result.completedAt }, update);
    document.body.append(panel);
    await vi.waitFor(() => expect(repository.submit).toHaveBeenCalled());
    expect(repository.submit).toHaveBeenCalledWith(expect.objectContaining({
      verificationToken: 'token-verificado-com-mais-de-vinte', mode: 'evaluation', course: 'SI' }));
    await vi.waitFor(() => expect(panel.textContent).toContain('incluído automaticamente'));
    expect(panel.querySelector('form')).toBeNull();
    expect(panel.textContent).toContain('N9-ABC12345');
    expect(panel.textContent).not.toContain('123456');
    expect(update).toHaveBeenCalledWith(expect.objectContaining({ state: 'sent', receipt: expect.objectContaining({
      benefit: expect.objectContaining({ totalHours: 2, evaluationBonusTotal: 1 }) }) }));
  });

  it('oferece rankings diário, avaliação e geral para o perfil validado', async () => {
    const operationalRanking = vi.fn(async () => []);
    const repository: OnlineLeaderboardRepository = {
      ranking: vi.fn(async () => []), operationalRanking,
      submit: vi.fn(async () => ({ publicCode: 'N9-ABC12345', bestUpdated: false, entries: [] })),
    };
    const player = { id: 'verified-123456', nickname: 'Ana-3456', academicId: '123456',
      fullName: 'Ana Silva', course: 'SI' as const, modality: 'EAD' as const, role: 'student' as const,
      publicCode: 'N9-ABC12345', verificationToken: 'token-verificado-com-mais-de-vinte',
      rankingEligible: true, createdAt: result.completedAt, lastUsedAt: result.completedAt };
    const panel = onlineLeaderboardPanel('SI', undefined, repository, player);
    document.body.append(panel);
    await vi.waitFor(() => expect(operationalRanking).toHaveBeenCalledWith('evaluation', 'SI', 'EAD'));
    [...panel.querySelectorAll<HTMLButtonElement>('.ranking-tabs button')]
      .find((item) => item.textContent === 'Diário')!.click();
    await vi.waitFor(() => expect(operationalRanking).toHaveBeenCalledWith('daily', 'SI', 'EAD'));
    expect(panel.textContent).toContain('dois primeiros fechamentos');
  });
});
