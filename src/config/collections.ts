import { learningCollections } from '../infrastructure/content/JsonCollectionRepository';
import type { ContentMode } from '../domain/models/EditorialMetadata';
import type { QuestionMissionConfig } from '../domain/models/QuestionMission';
import { LEGACY_EXAMPLE_MISSION, QUESTION_MISSION_LIST, QUESTION_MISSIONS } from './missions';
export type { LearningCollection } from '../domain/models/EditorialMetadata';

export interface PlayableCollectionConfig {
  readonly collectionId: string;
  readonly displayName: string;
  readonly contentVersion: string;
  readonly mode: ContentMode;
  readonly phaseId: string;
  readonly missions: readonly QuestionMissionConfig[];
  readonly defaultMissionId: string;
  readonly validationNotice: string;
}

/** Origem pedagógica interna; o identificador não é exibido ao jogador. */
export const firstLearningCollection = learningCollections.get('enade-2026')!;

export const PROVISIONAL_PLAYABLE_COLLECTION: PlayableCollectionConfig = Object.freeze({
  collectionId: firstLearningCollection.id,
  displayName: 'N9 Jornada Digital',
  contentVersion: 'enade-2026-provisional-1',
  mode: 'provisional',
  phaseId: 'N9-COLLECTION-PROVISIONAL',
  missions: QUESTION_MISSION_LIST,
  defaultMissionId: QUESTION_MISSIONS.special.id,
  validationNotice: 'Conteúdo experimental em revisão editorial.',
});

/** Configuração padrão dos testes e consumidores antigos. */
export const LEGACY_PLAYABLE_COLLECTION: PlayableCollectionConfig = Object.freeze({
  collectionId: 'n9-provisional-questions-v1',
  displayName: 'N9 Jornada Digital',
  contentVersion: 'example-1',
  mode: 'example',
  phaseId: 'FASE-EXEMPLO-01',
  missions: Object.freeze([LEGACY_EXAMPLE_MISSION]),
  defaultMissionId: LEGACY_EXAMPLE_MISSION.id,
  validationNotice: 'Conteúdo demonstrativo.',
});
