import { gameConfig } from '../../config/game';
import type { Command } from '../../app/GameSession';
import type { Attempt } from '../../domain/models/Attempt';
import { currentQuestion } from '../../domain/progression';
import { calculateScore } from '../../domain/scoring';
import { button, element } from '../components/elements';

export function questionView(attempt: Attempt, dispatch: (command: Command) => void, signal: AbortSignal): HTMLElement {
  const question = currentQuestion(attempt);
  const answer = attempt.answers[attempt.index];
  const view = element('section', 'view question-view');
  const toolbar = element('div', 'question-toolbar');
  toolbar.append(element('p', 'eyebrow', gameConfig.format.challengeProgress(attempt.index + 1, attempt.mission.questionCount)), element('p', 'score', gameConfig.format.score(calculateScore(attempt.answers))));
  const progress = element('div', 'mission-progress');
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', 'Progresso da missão');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', String(attempt.mission.questionCount));
  progress.setAttribute('aria-valuenow', String(attempt.index + 1));
  const progressFill = element('span', 'mission-progress-fill');
  progressFill.style.width = ((attempt.index + 1) / attempt.mission.questionCount * 100) + '%';
  progress.append(progressFill);
  view.append(toolbar, progress, element('p', 'example-warning', gameConfig.copy.challengeExample));
  const title = element('h1', 'question-title', question.prompt);
  title.tabIndex = -1;
  const context = element('p', 'question-context', question.context);
  context.id = 'question-context';
  view.append(element('p', 'question-category', gameConfig.format.category(question.classification, attempt.courseAtStart)), context, title);
  const form = element('form', 'answer-form');
  const fieldset = element('fieldset', 'answer-options');
  fieldset.setAttribute('aria-describedby', context.id);
  fieldset.append(element('legend', 'sr-only', gameConfig.copy.optionLegend));
  for (const option of question.options) {
    const label = element('label', 'answer-card');
    const radio = element('input', 'answer-radio');
    radio.type = 'radio';
    radio.name = 'answer';
    radio.value = option.id;
    radio.checked = (answer?.selectedOptionId ?? attempt.selectedOptionId) === option.id;
    radio.required = true;
    radio.disabled = !!answer;
    radio.addEventListener('change', () => dispatch({ type: 'select-option', questionId: question.id, option: option.id }), { signal });
    const copy = element('span', 'answer-copy');
    copy.append(element('strong', 'option-id', option.id), element('span', '', option.text));
    label.append(radio, copy);
    if (answer) {
      if (option.id === question.correctOptionId) {
        label.classList.add('answer-card--correct');
        label.append(element('span', 'answer-mark', gameConfig.copy.optionCorrect));
      } else if (option.id === answer.selectedOptionId) {
        label.classList.add('answer-card--incorrect');
        label.append(element('span', 'answer-mark', gameConfig.copy.optionIncorrect));
      }
    }
    fieldset.append(label);
  }
  form.append(fieldset);
  if (!answer) {
    const confirm = button(gameConfig.copy.confirm);
    confirm.type = 'submit';
    confirm.dataset.action = 'confirm-answer';
    confirm.disabled = attempt.selectedOptionId === null;
    form.append(confirm);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      dispatch({ type: 'confirm-answer', questionId: question.id });
    }, { signal });
  }
  view.append(form);
  if (answer) {
    const feedback = element('section', 'feedback ' + (answer.isCorrect ? 'feedback--correct' : 'feedback--incorrect'));
    const heading = element('h2', 'feedback-heading', answer.isCorrect ? gameConfig.copy.correctFeedback : gameConfig.copy.incorrectFeedback);
    heading.tabIndex = -1;
    heading.id = 'answer-feedback';
    feedback.setAttribute('aria-labelledby', heading.id);
    const correct = question.options.find((option) => option.id === question.correctOptionId)!;
    feedback.append(heading,
      element('p', 'correct-answer', gameConfig.copy.correctPrefix + correct.id + ' — ' + correct.text),
      element('p', 'explanation', question.explanation),
      element('p', 'chosen-explanation', gameConfig.copy.choicePrefix + question.feedbackByOption[answer.selectedOptionId]));
    const details = element('details', 'all-explanations');
    details.append(element('summary', '', gameConfig.copy.allExplanations));
    const list = element('ul', '');
    for (const option of question.options) list.append(element('li', '', option.id + ': ' + question.feedbackByOption[option.id]));
    details.append(list);
    feedback.append(details);
    view.append(feedback);
    const next = button(attempt.index === attempt.mission.questionCount - 1 ? gameConfig.copy.finish : gameConfig.copy.next);
    next.addEventListener('click', () => dispatch({ type: 'next-question', questionId: question.id }), { signal });
    view.append(next);
  } else {
    view.append(element('p', 'helper', gameConfig.copy.confirmHint));
  }
  const home = button(gameConfig.copy.menu, true);
  home.classList.add('menu-button');
  home.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  view.append(home, element('p', 'helper', gameConfig.copy.exitHint));
  return view;
}
