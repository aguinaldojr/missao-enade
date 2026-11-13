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
  toolbar.append(element('p', 'eyebrow', 'Questão ' + (attempt.index + 1) + ' de 10'), element('p', 'score', 'Pontuação: ' + calculateScore(attempt.answers)));
  view.append(toolbar, element('p', 'example-warning', 'EXEMPLO FICTÍCIO · Demonstração, sem conteúdo oficial do ENADE.'));
  const title = element('h1', 'question-title', question.prompt);
  title.tabIndex = -1;
  const context = element('p', 'question-context', question.context);
  context.id = 'question-context';
  view.append(element('p', 'question-category', 'Classificação: ' + question.classification + ' · Curso: ' + attempt.courseAtStart), context, title);
  const form = element('form', 'answer-form');
  const fieldset = element('fieldset', 'answer-options');
  fieldset.setAttribute('aria-describedby', context.id);
  fieldset.append(element('legend', 'sr-only', 'Escolha uma alternativa'));
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
        label.append(element('span', 'answer-mark', 'Correta'));
      } else if (option.id === answer.selectedOptionId) {
        label.classList.add('answer-card--incorrect');
        label.append(element('span', 'answer-mark', 'Sua resposta · incorreta'));
      }
    }
    fieldset.append(label);
  }
  form.append(fieldset);
  if (!answer) {
    const confirm = button('Confirmar resposta');
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
    const heading = element('h2', 'feedback-heading', answer.isCorrect ? 'Resposta correta!' : 'Resposta incorreta.');
    heading.tabIndex = -1;
    heading.id = 'answer-feedback';
    feedback.setAttribute('aria-labelledby', heading.id);
    const correct = question.options.find((option) => option.id === question.correctOptionId)!;
    feedback.append(heading,
      element('p', 'correct-answer', 'Alternativa correta: ' + correct.id + ' — ' + correct.text),
      element('p', 'explanation', question.explanation),
      element('p', 'chosen-explanation', 'Sobre sua escolha: ' + question.feedbackByOption[answer.selectedOptionId]));
    const details = element('details', 'all-explanations');
    details.append(element('summary', '', 'Explicações de todas as alternativas'));
    const list = element('ul', '');
    for (const option of question.options) list.append(element('li', '', option.id + ': ' + question.feedbackByOption[option.id]));
    details.append(list);
    feedback.append(details);
    view.append(feedback);
    const next = button(attempt.index === 9 ? 'Ver resultado final' : 'Próxima questão');
    next.addEventListener('click', () => dispatch({ type: 'next-question', questionId: question.id }), { signal });
    view.append(next);
  } else {
    view.append(element('p', 'helper', 'Escolha uma alternativa e confirme. Após a confirmação, a resposta não pode ser alterada.'));
  }
  const home = button('Voltar ao menu', true);
  home.classList.add('menu-button');
  home.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  view.append(home, element('p', 'helper', 'Ao sair ou recarregar, esta partida é encerrada. Apenas resultados concluídos são salvos.'));
  return view;
}
