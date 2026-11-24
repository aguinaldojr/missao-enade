import { describe, expect, it, vi } from 'vitest';
import { normalizeAcademicId } from '../../src/domain/models/OnlineLeaderboard';
import { AppsScriptLeaderboardRepository } from '../../src/infrastructure/online/AppsScriptLeaderboardRepository';
import { AppsScriptStudentRegistryRepository } from '../../src/infrastructure/online/AppsScriptStudentRegistryRepository';

const entry = { publicCode: 'N9-ABC12345', course: 'SI' as const, questionCount: 25 as const,
  correctCount: 20, score: 2000, maxScore: 2500 as const, rankingScore: 800, durationMs: 600000,
  achievedAt: '2026-11-19T12:00:00.000Z', collectionId: 'enade-2026' };

describe('ranking online', () => {
  it('normaliza RA sem persistir formatação e rejeita valores inválidos', () => {
    expect(normalizeAcademicId(' 12.345-6 ')).toBe('123456');
    expect(normalizeAcademicId('ab 1234')).toBe('AB1234');
    expect(() => normalizeAcademicId('12')).toThrow('4 a 20');
    expect(() => normalizeAcademicId('1234@')).toThrow('4 a 20');
  });

  it('carrega somente a resposta validada dos quinze primeiros', async () => {
    const calls: Array<[URL | RequestInfo, RequestInit | undefined]> = [];
    const fetcher: typeof fetch = vi.fn(async (input, init) => { calls.push([input, init]);
      return new Response(JSON.stringify({ ok: true,
        entries: Array.from({ length: 18 }, (_, i) => ({ ...entry, publicCode: 'N9-' + i })) }), { status: 200 }); });
    const repository = new AppsScriptLeaderboardRepository('https://script.google.com/macros/s/example/exec', fetcher);
    const result = await repository.ranking('SI');
    expect(result).toHaveLength(15);
    expect(String(calls[0]?.[0])).toContain('course=SI');
  });

  it('consulta separadamente o ranking diário por curso e modalidade', async () => {
    const calls: string[] = [];
    const daily = { date: '2026-11-23', course: 'SI', modality: 'EAD', position: 1,
      publicCode: 'N9-ABC12345', quickScore: 700, evaluationScore: 800, dailyScore: 1500 };
    const repository = new AppsScriptLeaderboardRepository('https://example.test/exec', async (input) => {
      calls.push(String(input));
      return new Response(JSON.stringify({ ok: true, entries: [daily] }), { status: 200 });
    });
    await expect(repository.operationalRanking('daily', 'SI', 'EAD')).resolves.toEqual([daily]);
    expect(calls[0]).toContain('type=daily');
    expect(calls[0]).toContain('course=SI');
    expect(calls[0]).toContain('modality=EAD');
  });

  it('envia RA normalizado e o resultado completo por HTTPS', async () => {
    const calls: Array<[URL | RequestInfo, RequestInit | undefined]> = [];
    const fetcher: typeof fetch = vi.fn(async (input, init) => { calls.push([input, init]);
      return new Response(JSON.stringify({ ok: true, publicCode: entry.publicCode,
        bestUpdated: true, entries: [entry], benefit: { qualified: true, recorded: true,
          hoursEarned: 1, totalHours: 3, bonusEarned: 0.5, evaluationBonusTotal: 1,
          qualifyingBonusAttempts: 2 } }), { status: 200 }); });
    const repository = new AppsScriptLeaderboardRepository('https://script.google.com/macros/s/example/exec', fetcher);
    const receipt = await repository.submit({ academicId: '12.345-6', attemptId: 'a1', course: 'SI', questionCount: 25,
      correctCount: 20, score: 2000, maxScore: 2500, durationMs: 600000,
      achievedAt: entry.achievedAt, collectionId: entry.collectionId });
    const request = calls[0]?.[1] as RequestInit;
    expect(JSON.parse(String(request.body))).toMatchObject({ academicId: '123456', course: 'SI', score: 2000 });
    expect(receipt.publicCode).toBe(entry.publicCode);
    expect(receipt.benefit).toEqual({ qualified: true, recorded: true, hoursEarned: 1,
      totalHours: 3, bonusEarned: 0.5, evaluationBonusTotal: 1, qualifyingBonusAttempts: 2 });
  });

  it('recusa endpoint sem HTTPS e respostas malformadas', async () => {
    expect(() => new AppsScriptLeaderboardRepository('http://example.test')).toThrow('HTTPS');
    const repository = new AppsScriptLeaderboardRepository('https://example.test',
      async () => new Response(JSON.stringify({ ok: true, entries: [{ course: 'SI' }] }), { status: 200 }));
    await expect(repository.ranking('SI')).rejects.toThrow('dados inválidos');
  });

  it('valida RA e e-mail e aceita somente uma identidade institucional completa', async () => {
    const fetcher: typeof fetch = vi.fn(async (_input, init) => {
      expect(JSON.parse(String(init?.body))).toEqual({ action: 'verify-student', academicId: '123456',
        email: 'aluna@example.com' });
      return new Response(JSON.stringify({ ok: true, identity: { academicId: '123456',
        fullName: 'Ana Silva', nickname: 'Ana-3456', course: 'TADS', modality: 'PRESENCIAL',
        role: 'student', publicCode: 'N9-ABC12345', verificationToken: 'token-verificado-com-mais-de-vinte',
        rankingEligible: true } }), { status: 200 });
    });
    const repository = new AppsScriptStudentRegistryRepository('https://example.test/exec', fetcher);
    await expect(repository.verify('12.345-6', ' Aluna@Example.com ')).resolves.toMatchObject({
      course: 'TADS', modality: 'PRESENCIAL', nickname: 'Ana-3456' });
  });

  it('envia resultado usando o comprovante do perfil validado', async () => {
    const fetcher: typeof fetch = vi.fn(async (_input, init) => {
      expect(JSON.parse(String(init?.body))).toMatchObject({ verificationToken: 'token-verificado',
        course: 'SI', score: 2000 });
      return new Response(JSON.stringify({ ok: true, publicCode: entry.publicCode,
        bestUpdated: true, entries: [entry] }), { status: 200 });
    });
    const repository = new AppsScriptLeaderboardRepository('https://example.test', fetcher);
    await repository.submit({ verificationToken: 'token-verificado', attemptId: 'a1', course: 'SI', questionCount: 25,
      correctCount: 20, score: 2000, maxScore: 2500, durationMs: 600000,
      achievedAt: entry.achievedAt, collectionId: entry.collectionId });
  });
});
