export const DAILY_LEARNING_COUNT = 15;
export const DAILY_LEARNING_CYCLE_DAYS = 6;

interface DailySelectable {
  readonly id: string;
  readonly type: string;
}

function hash(value: string): number {
  let result = 2166136261;
  for (const character of value) {
    result ^= character.codePointAt(0) ?? 0;
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function localDayNumber(date: Date): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
}

function cycleDay(date: Date): number {
  const day = localDayNumber(date) % DAILY_LEARNING_CYCLE_DAYS;
  return day < 0 ? day + DAILY_LEARNING_CYCLE_DAYS : day;
}

function buildCycle<T extends DailySelectable>(activities: readonly T[]): readonly (readonly T[])[] {
  const byType = new Map<string, T[]>();
  for (const activity of activities) {
    const group = byType.get(activity.type) ?? [];
    group.push(activity);
    byType.set(activity.type, group);
  }
  if (byType.size !== 9) throw new Error('A seleção diária exige as nove mecânicas.');
  for (const group of byType.values()) {
    group.sort((left, right) => left.id.localeCompare(right.id));
    if (group.length < DAILY_LEARNING_CYCLE_DAYS) throw new Error('Mecânica sem capacidade para seis dias.');
  }

  const plans: T[][] = Array.from({ length: DAILY_LEARNING_CYCLE_DAYS }, () => []);
  const reserved = new Set<string>();
  for (const group of byType.values()) {
    for (let day = 0; day < DAILY_LEARNING_CYCLE_DAYS; day += 1) {
      plans[day]!.push(group[day]!);
      reserved.add(group[day]!.id);
    }
  }

  const extraPerDay = DAILY_LEARNING_COUNT - byType.size;
  const pool = activities.filter((activity) => !reserved.has(activity.id))
    .sort((left, right) => hash(left.id + ':n9') - hash(right.id + ':n9'));
  if (pool.length < extraPerDay * DAILY_LEARNING_CYCLE_DAYS) {
    throw new Error('Banco insuficiente para montar seis sessões sem repetição.');
  }
  for (let day = 0; day < DAILY_LEARNING_CYCLE_DAYS; day += 1) {
    plans[day]!.push(...pool.slice(day * extraPerDay, (day + 1) * extraPerDay));
    plans[day]!.sort((left, right) => hash(left.id + ':' + day) - hash(right.id + ':' + day));
  }
  return plans;
}

export function selectDailyLearningActivities<T extends DailySelectable>(
  activities: readonly T[], date = new Date(),
): readonly T[] {
  if (new Set(activities.map((activity) => activity.id)).size !== activities.length) {
    throw new Error('O banco de aprendizagem contém IDs duplicados.');
  }
  return Object.freeze([...buildCycle(activities)[cycleDay(date)]!]);
}
