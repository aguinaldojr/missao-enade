import { describe, expect, it } from 'vitest';
import { N9_SHARED_LEARNING_LAB } from '../../src/content/learning-lab';
import {
  DAILY_LEARNING_COUNT,
  DAILY_LEARNING_CYCLE_DAYS,
  selectDailyLearningActivities,
} from '../../src/domain/services/DailyLearningSelector';

describe('seleção diária de atividades', () => {
  const dates = Array.from({ length: DAILY_LEARNING_CYCLE_DAYS }, (_, offset) => new Date(2026, 10, 23 + offset));

  it('monta quinze atividades por dia com as nove mecânicas', () => {
    for (const date of dates) {
      const session = selectDailyLearningActivities(N9_SHARED_LEARNING_LAB, date);
      expect(session).toHaveLength(DAILY_LEARNING_COUNT);
      expect(new Set(session.map((activity) => activity.id)).size).toBe(DAILY_LEARNING_COUNT);
      expect(new Set(session.map((activity) => activity.type)).size).toBe(9);
    }
  });

  it('não repete atividades ao longo dos seis dias', () => {
    const ids = dates.flatMap((date) => selectDailyLearningActivities(N9_SHARED_LEARNING_LAB, date).map((activity) => activity.id));
    expect(ids).toHaveLength(90);
    expect(new Set(ids).size).toBe(90);
  });

  it('é determinístico e reinicia após seis dias', () => {
    const first = selectDailyLearningActivities(N9_SHARED_LEARNING_LAB, dates[0]!).map((activity) => activity.id);
    expect(selectDailyLearningActivities(N9_SHARED_LEARNING_LAB, dates[0]!).map((activity) => activity.id)).toEqual(first);
    expect(selectDailyLearningActivities(N9_SHARED_LEARNING_LAB, new Date(2026, 10, 29)).map((activity) => activity.id)).toEqual(first);
  });

  it('rejeita bancos com IDs duplicados', () => {
    const duplicated = [...N9_SHARED_LEARNING_LAB, N9_SHARED_LEARNING_LAB[0]!];
    expect(() => selectDailyLearningActivities(duplicated, dates[0])).toThrow('IDs duplicados');
  });
});
