import { LEGACY_EXAMPLE_MISSION } from '../config/missions';
import { assertMissionQuestionSet } from './QuestionSelection';
import type { QuestionMissionConfig } from './models/QuestionMission';
import type { Attempt } from './models/Attempt';
import type { CourseId } from './models/Course';
import type { OptionId, Question } from './models/Question';

export function createAttempt(id: string, course: CourseId, questions: readonly Question[],
  mission: QuestionMissionConfig = LEGACY_EXAMPLE_MISSION): Attempt {
  assertMissionQuestionSet(questions, course, mission);
  return Object.freeze({
    id, courseAtStart: course, mission: Object.freeze({ ...mission }), questions: Object.freeze([...questions]),
    answers: Object.freeze([]), index: 0, selectedOptionId: null,
  });
}

export function currentQuestion(attempt: Attempt): Question {
  const question = attempt.questions[attempt.index];
  if (!question) throw new Error('Questão indisponível.');
  return question;
}

export function selectOption(attempt: Attempt, questionId: string, option: OptionId): Attempt {
  const question = currentQuestion(attempt);
  if (question.id !== questionId || attempt.answers[attempt.index]) return attempt;
  if (!question.options.some((item) => item.id === option)) throw new Error('Alternativa inválida.');
  return Object.freeze({ ...attempt, selectedOptionId: option });
}

export function confirmAnswer(attempt: Attempt, questionId: string): Attempt {
  const question = currentQuestion(attempt);
  if (question.id !== questionId || attempt.answers[attempt.index]) return attempt;
  if (attempt.selectedOptionId === null) throw new Error('Escolha uma alternativa antes de confirmar.');
  const answer = Object.freeze({
    questionId: question.id, questionVersion: question.version,
    selectedOptionId: attempt.selectedOptionId,
    isCorrect: attempt.selectedOptionId === question.correctOptionId, feedbackAccessed: false,
  });
  return Object.freeze({ ...attempt, answers: Object.freeze([...attempt.answers, answer]) });
}

export function accessFeedback(attempt: Attempt, questionId: string): Attempt {
  const answer = attempt.answers[attempt.index];
  if (!answer || answer.questionId !== questionId || answer.feedbackAccessed) return attempt;
  return Object.freeze({
    ...attempt, answers: Object.freeze(attempt.answers.map((item, index) =>
      index === attempt.index ? Object.freeze({ ...item, feedbackAccessed: true }) : item)),
  });
}

export function canAdvance(attempt: Attempt, questionId: string): boolean {
  return currentQuestion(attempt).id === questionId && attempt.answers[attempt.index]?.feedbackAccessed === true;
}

export function isComplete(attempt: Attempt): boolean {
  return attempt.questions.length === attempt.mission.questionCount &&
    attempt.answers.length === attempt.mission.questionCount && attempt.answers.every((answer) => answer.feedbackAccessed);
}
