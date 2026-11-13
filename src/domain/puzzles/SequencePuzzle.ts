import type { EditorialMetadata } from '../models/EditorialMetadata';

export interface SequencePuzzle extends EditorialMetadata {
  readonly kind: 'sequence';
  readonly id: string;
  readonly title: string;
  readonly narrative: string;
  readonly blocks: readonly { readonly id: string; readonly text: string }[];
  readonly correctOrder: readonly string[];
  readonly hints: readonly string[];
  readonly explanation: string;
  readonly reward: { readonly xp: number };
  readonly unlocks: { readonly mapId: string; readonly objectId: string };
}
/** Entrada do formato anterior: somente exemplos provisórios. */
export type LegacySequencePuzzle = Omit<SequencePuzzle, 'collectionId' | 'difficulty' | 'source' | 'validationStatus'> & {
  readonly collection: string;
  readonly difficulty: 'introductory';
  readonly source: { readonly type: 'fictional'; readonly description: string };
  readonly validationStatus: 'provisional-pending-teacher-review';
};
export interface SequenceProgress {
  readonly order: readonly string[];
  readonly hintsUsed: number;
  readonly attempts: number;
  readonly completed: boolean;
}
export interface PuzzleProgress {
  readonly schemaVersion: 1;
  readonly entries: Readonly<Record<string, SequenceProgress>>;
}
export interface SequenceAttempt {
  readonly puzzleId: string;
  readonly solved: boolean;
  readonly feedback: 'none' | 'incorrect' | 'correct';
  readonly earnedXp: number;
}
export const emptyPuzzleProgress = (): PuzzleProgress => ({ schemaVersion: 1, entries: {} });

export function isPermutation(order: readonly string[], puzzle: SequencePuzzle): boolean {
  return order.length === puzzle.blocks.length && new Set(order).size === order.length &&
    order.every((id) => puzzle.blocks.some((block) => block.id === id));
}
export function isSequenceCorrect(order: readonly string[], puzzle: SequencePuzzle): boolean {
  return isPermutation(order, puzzle) && order.every((id, index) => id === puzzle.correctOrder[index]);
}
export function shuffledOrder(puzzle: SequencePuzzle, random: () => number = Math.random): readonly string[] {
  const order = puzzle.blocks.map((block) => block.id);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.max(0, Math.min(i, Math.floor(random() * (i + 1))));
    [order[i], order[j]] = [order[j]!, order[i]!];
  }
  if (isSequenceCorrect(order, puzzle)) order.push(order.shift()!);
  return order;
}
export function moveBlock(order: readonly string[], id: string, to: number): readonly string[] {
  const from = order.indexOf(id);
  if (from < 0 || !Number.isInteger(to) || to < 0 || to >= order.length || to === from) return order;
  const next = [...order];
  next.splice(from, 1);
  next.splice(to, 0, id);
  return next;
}
export function totalPuzzleXp(progress: PuzzleProgress, puzzles: readonly SequencePuzzle[]): number {
  return puzzles.reduce((xp, puzzle) => xp + (progress.entries[puzzle.id]?.completed ? puzzle.reward.xp : 0), 0);
}
/** Recibos por ID tornam a recompensa idempotente, inclusive ao mesclar abas. */
export function mergePuzzleProgress(previous: PuzzleProgress, next: PuzzleProgress): PuzzleProgress {
  const entries = { ...previous.entries };
  for (const [id, entry] of Object.entries(next.entries)) {
    const old = entries[id];
    entries[id] = { ...entry, completed: !!old?.completed || entry.completed,
      attempts: Math.max(old?.attempts ?? 0, entry.attempts),
      hintsUsed: Math.max(old?.hintsUsed ?? 0, entry.hintsUsed) };
  }
  return { schemaVersion: 1, entries };
}
