import Ajv from 'ajv';
import schema from '../../schemas/puzzle-progress.schema.json';
import { isPermutation, mergePuzzleProgress, type PuzzleProgress } from '../../domain/puzzles/SequencePuzzle';
import type { PuzzleContentRepository, PuzzleProgressRepository } from '../../ports/PuzzleRepository';

export const PUZZLE_KEY = 'n9:puzzles:v1';
const validate = new Ajv().compile<PuzzleProgress>(schema);
const SI_PUZZLE_ID = 'E26-P-SI-01';
const SI_PUZZLE_V1_BLOCKS: Readonly<Record<string, string>> = {
  'confirmar-relato': 'validar-solicitacao',
  'conciliar-trechos': 'consultar-disponibilidade',
  'calcular-demonstrativo': 'criar-reserva',
  'autorizar-demonstrativo': 'autorizar-acesso',
  'registrar-custeio': 'sincronizar-acesso',
};

/** Mantém recibos e tentativas do SI-01 após a substituição editorial, sem regravar ao carregar. */
function normalizeSiPuzzleV1(data: unknown): unknown {
  if (typeof data !== 'object' || data === null || !('entries' in data) ||
      typeof data.entries !== 'object' || data.entries === null) return data;
  const entries = data.entries as Record<string, unknown>;
  const entry = entries[SI_PUZZLE_ID];
  if (typeof entry !== 'object' || entry === null || !('order' in entry) || !Array.isArray(entry.order) ||
      !entry.order.every((id) => typeof id === 'string' && id in SI_PUZZLE_V1_BLOCKS)) return data;
  const migrated = entry.order.map((id) => SI_PUZZLE_V1_BLOCKS[id as string]!);
  return { ...data, entries: { ...entries, [SI_PUZZLE_ID]: { ...entry, order: migrated } } };
}

export class LocalStoragePuzzleRepository implements PuzzleProgressRepository {
  constructor(private readonly content: PuzzleContentRepository,
    private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem'> = () => window.localStorage) {}

  private valid(data: unknown): data is PuzzleProgress {
    return validate(data) && Object.entries(data.entries).every(([id, entry]) => {
      const puzzle = this.content.get(id);
      return !!puzzle && isPermutation(entry.order, puzzle) && entry.hintsUsed <= puzzle.hints.length &&
        (!entry.completed || entry.attempts > 0);
    });
  }
  load(): ReturnType<PuzzleProgressRepository['load']> {
    try {
      const raw = this.getStorage().getItem(PUZZLE_KEY);
      if (raw === null) return { progress: null, status: 'none' };
      const data = normalizeSiPuzzleV1(JSON.parse(raw));
      return this.valid(data) ? { progress: data, status: 'saved' } : { progress: null, status: 'invalid' };
    } catch (error) {
      return { progress: null, status: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
    }
  }
  save(progress: PuzzleProgress): ReturnType<PuzzleProgressRepository['save']> {
    try {
      if (!this.valid(progress)) return { progress, status: 'failed' };
      const storage = this.getStorage();
      const raw = storage.getItem(PUZZLE_KEY);
      let merged = progress;
      if (raw) {
        try {
          const previous = normalizeSiPuzzleV1(JSON.parse(raw));
          if (typeof previous === 'object' && previous !== null && 'schemaVersion' in previous &&
              typeof previous.schemaVersion === 'number' && previous.schemaVersion > 1) return { progress, status: 'failed' };
          if (this.valid(previous)) merged = mergePuzzleProgress(previous, progress);
        } catch { /* Substituir dado corrompido somente após ação explícita. */ }
      }
      storage.setItem(PUZZLE_KEY, JSON.stringify(merged));
      return { progress: merged, status: 'saved' };
    } catch { return { progress, status: 'failed' }; }
  }
}
