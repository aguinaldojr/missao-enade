import data from '../content/courses.json';
import { COURSE_IDS, isCourseId, type Course, type CourseId } from '../domain/models/Course';

export const courses: readonly Course[] = Object.freeze(data.map((item) => {
  if (!isCourseId(item.id)) throw new Error('Curso desconhecido no catálogo local.');
  return Object.freeze({ ...item, id: item.id });
}));

if (courses.length !== COURSE_IDS.length || new Set(courses.map((course) => course.id)).size !== COURSE_IDS.length) {
  throw new Error('O catálogo deve conter os cinco cursos, sem duplicação.');
}

export function getCourse(id: CourseId): Course {
  const course = courses.find((entry) => entry.id === id);
  if (!course) throw new Error('Curso indisponível.');
  return course;
}
