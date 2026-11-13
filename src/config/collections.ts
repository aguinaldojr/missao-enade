import { learningCollections } from '../infrastructure/content/JsonCollectionRepository';
export type { LearningCollection } from '../domain/models/EditorialMetadata';

/** Origem interna planejada; não muda os textos nem ativa conteúdos no jogo. */
export const firstLearningCollection = learningCollections.get('enade-2026')!;
