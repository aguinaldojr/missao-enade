import type { ExampleResult } from '../domain/models/Attempt';

export type SaveStatus = 'none' | 'saved' | 'failed' | 'invalid' | 'unavailable';
export interface ResultLoad {
  readonly result: ExampleResult | null;
  readonly status: SaveStatus;
}

/** Nesta entrega persiste apenas o último resultado de exemplo concluído. */
export interface ProgressRepository {
  loadResult(): ResultLoad;
  saveResult(result: ExampleResult): boolean;
}
