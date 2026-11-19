import { describe, expect, it, vi } from 'vitest';
import { normalizeAcademicId } from '../../src/domain/models/OnlineLeaderboard';
import { AppsScriptLeaderboardRepository } from '../../src/infrastructure/online/AppsScriptLeaderboardRepository';

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

  it('envia RA normalizado e o resultado completo por HTTPS', async () => {
    const calls: Array<[URL | RequestInfo, RequestInit | undefined]> = [];
    const fetcher: typeof fetch = vi.fn(async (input, init) => { calls.push([input, init]);
      return new Response(JSON.stringify({ ok: true, publicCode: entry.publicCode,
        bestUpdated: true, entries: [entry] }), { status: 200 }); });
    const repository = new AppsScriptLeaderboardRepository('https://script.google.com/macros/s/example/exec', fetcher);
    const receipt = await repository.submit({ academicId: '12.345-6', course: 'SI', questionCount: 25,
      correctCount: 20, score: 2000, maxScore: 2500, durationMs: 600000,
      achievedAt: entry.achievedAt, collectionId: entry.collectionId });
    const request = calls[0]?.[1] as RequestInit;
    expect(JSON.parse(String(request.body))).toMatchObject({ academicId: '123456', course: 'SI', score: 2000 });
    expect(receipt.publicCode).toBe(entry.publicCode);
  });

  it('recusa endpoint sem HTTPS e respostas malformadas', async () => {
    expect(() => new AppsScriptLeaderboardRepository('http://example.test')).toThrow('HTTPS');
    const repository = new AppsScriptLeaderboardRepository('https://example.test',
      async () => new Response(JSON.stringify({ ok: true, entries: [{ course: 'SI' }] }), { status: 200 }));
    await expect(repository.ranking('SI')).rejects.toThrow('dados inválidos');
  });
});
