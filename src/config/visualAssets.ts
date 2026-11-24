import labDesktopBackground from '../assets/visual/n9/backgrounds/laboratorio-desktop.jpg';
import labMobileBackground from '../assets/visual/n9/backgrounds/laboratorio-mobile.jpg';
import robotCorrect from '../assets/visual/n9/characters/robot/robo-acerto.png';
import robotError from '../assets/visual/n9/characters/robot/robo-erro.png';
import robotTalking from '../assets/visual/n9/characters/robot/robo-falando.png';
import robotNormal from '../assets/visual/n9/characters/robot/robo-normal.png';
import robotReward from '../assets/visual/n9/characters/robot/robo-recompensa-xp.png';
import chibiLiaNormal from '../assets/visual/n9/characters/chibi/lia-normal.png';
import chibiStudentNormal from '../assets/visual/n9/characters/chibi/estudante-normal.png';
import chibiLiaExplaining from '../assets/visual/n9/characters/chibi/lia-explicando.png';
import chibiLiaWelcoming from '../assets/visual/n9/characters/chibi/lia-acolhendo.png';
import chibiStudentThinking from '../assets/visual/n9/characters/chibi/estudante-pensando.png';
import chibiStudentCelebrating from '../assets/visual/n9/characters/chibi/estudante-comemorando.png';
import badgeConcepts from '../assets/visual/n9/badges/cacador-de-conceitos.png';
import badgeWeek from '../assets/visual/n9/badges/destaque-da-semana.png';
import badgeDaily from '../assets/visual/n9/badges/destaque-diario.png';
import badgeReview from '../assets/visual/n9/badges/mestre-da-revisao.png';
import badgeTurbo from '../assets/visual/n9/badges/modo-turbo.png';
import badgePioneer from '../assets/visual/n9/badges/pioneiro-do-dia.png';
import badgePrecision from '../assets/visual/n9/badges/precisao-maxima.png';
import badgeSequence from '../assets/visual/n9/badges/sequencia-ativa.png';
import liaSheet from '../assets/visual/n9/sprites/lia-spritesheet.png';
import studentSheet from '../assets/visual/n9/sprites/estudante-spritesheet.png';

export const mapVisualAssets = {
  player: { key: 'n9-player', url: studentSheet, frameWidth: 96, frameHeight: 120 },
  lia: { key: 'n9-lia', url: liaSheet, frameWidth: 96, frameHeight: 120 },
} as const;

export const achievementVisualAssets = {
  concepts: badgeConcepts,
  week: badgeWeek,
  daily: badgeDaily,
  review: badgeReview,
  turbo: badgeTurbo,
  pioneer: badgePioneer,
  precision: badgePrecision,
  sequence: badgeSequence,
} as const;

export type LabCharacterMood = 'neutral' | 'thinking' | 'success' | 'retry' | 'result';

export const learningLabVisualAssets = {
  backgrounds: { desktop: labDesktopBackground, mobile: labMobileBackground },
  moods: {
    neutral: { lia: chibiLiaNormal, student: chibiStudentNormal, robot: robotNormal },
    thinking: { lia: chibiLiaExplaining, student: chibiStudentThinking, robot: robotTalking },
    success: { lia: chibiLiaExplaining, student: chibiStudentCelebrating, robot: robotCorrect },
    retry: { lia: chibiLiaWelcoming, student: chibiStudentThinking, robot: robotError },
    result: { lia: chibiLiaNormal, student: chibiStudentCelebrating, robot: robotReward },
  },
} as const satisfies {
  readonly backgrounds: { readonly desktop: string; readonly mobile: string };
  readonly moods: Record<LabCharacterMood, { readonly lia: string; readonly student: string; readonly robot: string }>;
};

export const journeyCharacterAssets = {
  answering: chibiLiaExplaining,
  correct: chibiStudentCelebrating,
  incorrect: chibiLiaWelcoming,
  studentThinking: chibiStudentThinking,
} as const;
