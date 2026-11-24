import { isCourseId, type CourseId } from './Course';
import { normalizeAcademicId } from './OnlineLeaderboard';

export const MODALITIES = ['PRESENCIAL', 'EAD'] as const;
export type Modality = (typeof MODALITIES)[number];
export type PlayerRole = 'student' | 'teacher';

export interface VerifiedStudentIdentity {
  readonly academicId: string;
  readonly fullName: string;
  readonly nickname: string;
  readonly course: CourseId;
  readonly modality: Modality;
  readonly role: PlayerRole;
  readonly publicCode: string;
  readonly verificationToken: string;
  readonly rankingEligible: boolean;
}

export function isModality(value: unknown): value is Modality {
  return typeof value === 'string' && MODALITIES.some((item) => item === value);
}

export function validateVerifiedIdentity(value: VerifiedStudentIdentity): VerifiedStudentIdentity {
  if (normalizeAcademicId(value.academicId) !== value.academicId || !value.fullName.trim() ||
      value.nickname.length < 3 || value.nickname.length > 20 || !isCourseId(value.course) ||
      !isModality(value.modality) || !['student', 'teacher'].includes(value.role) ||
      !/^N9-[A-Z0-9_-]{8}$/.test(value.publicCode) || value.verificationToken.length < 20 ||
      value.rankingEligible !== (value.role === 'student')) {
    throw new Error('O cadastro institucional retornou dados inválidos.');
  }
  return Object.freeze({ ...value, fullName: value.fullName.trim(), nickname: value.nickname.trim() });
}
