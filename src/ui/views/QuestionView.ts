import { gameConfig } from '../../config/game';
import type { Command } from '../../app/GameSession';
import type { Attempt } from '../../domain/models/Attempt';
import { currentQuestion } from '../../domain/progression';
import { calculateScore } from '../../domain/scoring';
import { button, element } from '../components/elements';
import { questionPresentation } from '../components/QuestionPresentation';
import { journeyCharacterAssets, learningLabVisualAssets } from '../../config/visualAssets';

export function questionView(attempt: Attempt, dispatch: (command: Command) => void, signal: AbortSignal): HTMLElement {
  const question = currentQuestion(attempt);
  const answer = attempt.answers[attempt.index];
  const isJourney = attempt.mission.id === 'journey-25';
  const view = element('section', 'view question-view');
  view.dataset.questionId = question.id;
  if (isJourney) view.dataset.journeyState = answer ? (answer.isCorrect ? 'correct' : 'incorrect') : 'answering';
  const toolbar = element('div', 'question-toolbar');
  toolbar.append(element('p', 'eyebrow', gameConfig.format.challengeProgress(attempt.index + 1, attempt.mission.questionCount)), element('p', 'score', gameConfig.format.score(calculateScore(attempt.answers))));
  if (isJourney) toolbar.prepend(element('strong', '', 'Fase ' + (Math.floor(attempt.index / 5) + 1) + ' de 5'));
  const progress = element('div', 'mission-progress');
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', 'Progresso da missão');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', String(attempt.mission.questionCount));
  progress.setAttribute('aria-valuenow', String(attempt.index + 1));
  progress.setAttribute('aria-valuetext', gameConfig.format.challengeProgress(attempt.index + 1, attempt.mission.questionCount));
  const progressFill = element('span', 'mission-progress-fill');
  progressFill.style.width = ((attempt.index + 1) / attempt.mission.questionCount * 100) + '%';
  progress.append(progressFill);
  view.append(toolbar, progress);
  if (isJourney) {
    const phase = Math.floor(attempt.index / 5) + 1;
    const station = attempt.index % 5 + 1;
    const scene = element('section', 'journey-question-scene');
    scene.setAttribute('aria-label', 'Orientação dos personagens para a questão atual');
    const characters = element('div', 'journey-question-characters');
    const character = (src: string, alt: string, className: string) => {
      const image = document.createElement('img');
      image.src = src; image.alt = alt; image.className = 'journey-question-character ' + className;
      return image;
    };
    if (answer?.isCorrect) {
      characters.append(character(journeyCharacterAssets.correct, 'Estudante comemorando o acerto', 'is-student is-celebrating'));
    } else if (answer) {
      characters.append(character(journeyCharacterAssets.incorrect, 'Lia acolhendo a tentativa e convidando à revisão', 'is-lia is-welcoming'));
    } else if (station % 2 === 0) {
      characters.append(character(journeyCharacterAssets.studentThinking, 'Estudante analisando o desafio atual', 'is-student is-thinking'));
    } else {
      characters.append(character(journeyCharacterAssets.answering, 'Lia apresentando o desafio atual', 'is-lia is-explaining'));
    }
    const copy = element('div', 'journey-question-copy');
    copy.append(element('span', 'journey-question-label', 'FASE ' + phase + ' · POSTO ' + station),
      element('h2', '', answer?.isCorrect ? 'Conexão confirmada!' : answer ? 'Vamos revisar juntos' : 'Analise com calma'),
      element('p', '', answer?.isCorrect
        ? 'Lia: ótimo trabalho. Confira a explicação e avance quando estiver pronto.'
        : answer ? 'Lia: errar também faz parte da jornada. Compare sua escolha com o gabarito e entenda o raciocínio.'
          : 'Lia: leia o contexto, observe os recursos apresentados e escolha a alternativa mais adequada.'));
    const posts = element('div', 'journey-question-posts');
    posts.setAttribute('aria-label', 'Progresso nos postos da fase');
    for (let index = 1; index <= 5; index += 1) {
      const post = element('span', 'journey-question-post', index < station ? '✓' : String(index));
      post.dataset.state = index < station ? 'complete' : index === station ? 'active' : 'locked';
      post.setAttribute('aria-label', 'Posto ' + index + ': ' + (index < station ? 'concluído' : index === station ? 'atual' : 'bloqueado'));
      posts.append(post);
    }
    copy.append(posts);
    scene.append(characters, copy);
    view.append(scene);
  }
  const title = element('h1', 'question-title', question.prompt);
  title.tabIndex = -1;
  const context = element('p', 'question-context', question.context);
  context.id = 'question-context';
  context.tabIndex = 0;
  context.setAttribute('role', 'region');
  context.setAttribute('aria-label', 'Contexto do desafio');
  view.append(element('p', 'question-category', gameConfig.format.category(question.classification, attempt.courseAtStart)), context);
  if (question.presentation) view.append(questionPresentation(question.presentation));
  view.append(title);
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
    if (isJourney) {
      const outcome = element('div', 'journey-answer-outcome');
      const robot = document.createElement('img');
      robot.src = answer.isCorrect ? learningLabVisualAssets.moods.success.robot : learningLabVisualAssets.moods.retry.robot;
      robot.alt = answer.isCorrect ? 'Robô N9 confirmando resposta correta' : 'Robô N9 indicando que a resposta será revisada';
      outcome.append(robot, element('p', '', answer.isCorrect
        ? 'Posto concluído. A conexão com o próximo desafio está pronta.'
        : 'O posto continua concluído. Use a explicação para fortalecer este conhecimento antes de avançar.'));
      feedback.append(outcome);
    }
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
    const finishesMission = attempt.index === attempt.mission.questionCount - 1;
    const finishesPhase = isJourney && (attempt.index + 1) % 5 === 0;
    const next = button(finishesMission ? gameConfig.copy.finish
      : finishesPhase ? 'Concluir fase e voltar à rota' : gameConfig.copy.next);
    next.addEventListener('click', () => dispatch({ type: 'next-question', questionId: question.id }), { signal });
    view.append(next);
  } else {
    view.append(element('p', 'helper', gameConfig.copy.confirmHint));
  }
  const home = button(gameConfig.copy.menu, true);
  home.classList.add('menu-button');
  home.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  view.append(home, element('p', 'helper', attempt.mission.id === 'journey-25' ? 'Para retomar neste navegador, entre com o mesmo jogador e curso e acesse o computador da base.' : gameConfig.copy.exitHint));
  return view;
}
