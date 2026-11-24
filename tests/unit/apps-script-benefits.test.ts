import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';

type BenefitRuntime = {
  operationalSheet_: (name: string, headers: readonly string[]) => FakeSheet;
  recordEvaluationHour_: (identity: Record<string, unknown>, input: Record<string, unknown>) => {
    qualified: boolean; recorded: boolean; hoursEarned: number; totalHours: number;
    bonusEarned: number; evaluationBonusTotal: number; qualifyingBonusAttempts: number;
  };
  isClosedWeek_: (weekId: string, today: string) => boolean;
  validateSubmission_: (payload: Record<string, unknown>) => Record<string, unknown>;
};

class FakeSheet {
  readonly rows: unknown[][] = [];
  getLastRow(): number { return this.rows.length + 1; }
  getRange(row: number, _column: number, count: number): { getValues: () => unknown[][] } {
    return { getValues: () => this.rows.slice(row - 2, row - 2 + count).map((item) => [...item]) };
  }
  appendRow(row: unknown[]): void { this.rows.push([...row]); }
}

function runtime(): BenefitRuntime {
  const source = readFileSync(resolve(process.cwd(), 'google-apps-script/ranking/Code.gs'), 'utf8');
  const context: Record<string, unknown> = {
    Utilities: {
      formatDate(value: Date | string, timeZone: string): string {
        const parts = new Intl.DateTimeFormat('en-CA', {
          timeZone: timeZone === 'UTC' ? 'UTC' : timeZone,
          year: 'numeric', month: '2-digit', day: '2-digit',
        }).formatToParts(new Date(value));
        const part = (type: string): string => parts.find((item) => item.type === type)!.value;
        return part('year') + '-' + part('month') + '-' + part('day');
      },
    },
  };
  runInNewContext(source, context);
  return context as unknown as BenefitRuntime;
}

describe('apuração de bônus no Apps Script', () => {
  it('concede 0,5 nas duas primeiras avaliações válidas e mantém as horas nas seguintes', () => {
    const code = runtime();
    const sheet = new FakeSheet();
    code.operationalSheet_ = () => sheet;
    const identity = { studentKey: 'student-1', publicCode: 'N9-TESTE001', course: 'SI',
      modality: 'PRESENCIAL', role: 'student' };
    const attempt = (attemptId: string) => ({ mode: 'evaluation', correctCount: 15, attemptId,
      course: 'SI' });

    expect(code.recordEvaluationHour_(identity, attempt('a1'))).toMatchObject({ recorded: true,
      hoursEarned: 1, totalHours: 1, bonusEarned: 0.5, evaluationBonusTotal: 0.5,
      qualifyingBonusAttempts: 1 });
    expect(code.recordEvaluationHour_(identity, attempt('a2'))).toMatchObject({ recorded: true,
      hoursEarned: 1, totalHours: 2, bonusEarned: 0.5, evaluationBonusTotal: 1,
      qualifyingBonusAttempts: 2 });
    expect(code.recordEvaluationHour_(identity, attempt('a3'))).toMatchObject({ recorded: true,
      hoursEarned: 1, totalHours: 3, bonusEarned: 0, evaluationBonusTotal: 1,
      qualifyingBonusAttempts: 2 });
    expect(code.recordEvaluationHour_(identity, attempt('a1'))).toMatchObject({ recorded: true,
      hoursEarned: 1, totalHours: 3, bonusEarned: 0.5, evaluationBonusTotal: 1,
      qualifyingBonusAttempts: 2 });

    expect(sheet.rows).toHaveLength(3);
    expect(sheet.rows.map((row) => row[6])).toEqual([1, 1, 1]);
    expect(sheet.rows.map((row) => row[7])).toEqual([0.5, 0.5, 0]);
    expect(sheet.rows.reduce((total, row) => total + Number(row[7]), 0)).toBe(1);
  });

  it('só considera a semana encerrada depois do sábado', () => {
    const code = runtime();
    expect(code.isClosedWeek_('2026-11-23', '2026-11-28')).toBe(false);
    expect(code.isClosedWeek_('2026-11-23', '2026-11-29')).toBe(true);
    expect(code.isClosedWeek_('2026-11-23', '2026-11-30')).toBe(true);
  });

  it('aceita o resultado válido de 15 atividades do modo rápido', () => {
    const code = runtime();
    expect(code.validateSubmission_({ academicId: 'TESTESIP01', course: 'SI', mode: 'quick',
      questionCount: 15, correctCount: 12, score: 1200, maxScore: 1500, durationMs: 600000,
      collectionId: 'enade-2026', attemptId: 'quick-a1', achievedAt: '2026-11-23T12:00:00.000Z' }))
      .toMatchObject({ mode: 'quick', questionCount: 15, correctCount: 12, rankingScore: 800 });
  });
});
