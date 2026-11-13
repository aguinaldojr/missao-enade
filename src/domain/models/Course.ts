export const COURSE_IDS = ['CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const;
export type CourseId = (typeof COURSE_IDS)[number];

export interface Course {
  readonly id: CourseId;
  readonly name: string;
  readonly region: string;
}

export function isCourseId(value: unknown): value is CourseId {
  return typeof value === 'string' && COURSE_IDS.some((id) => id === value);
}
