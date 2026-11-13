import type { Answer } from './models/Attempt';

export function calculateScore(answers: readonly Answer[]): number {
  return answers.filter((answer) => answer.isCorrect).length * 100;
}
