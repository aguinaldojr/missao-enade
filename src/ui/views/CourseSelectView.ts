import { gameConfig } from '../../config/game';
import { courses } from '../../app/courses';
import type { CourseId } from '../../domain/models/Course';
import type { QuestionMissionConfig } from '../../domain/models/QuestionMission';
import { button, element } from '../components/elements';
import { puzzleFamilyVisuals } from '../../config/visual';
import type { PlayerProfile } from '../../domain/models/PlayerProfile';

export interface CourseActions {
  select: (id: CourseId) => void;
  selectMission: (id: string) => void;
  confirm: () => void;
  back: () => void;
  changePlayer: () => void;
}

function verifiedJourneyBriefing(selected: CourseId | null, selectedMissionId: string,
  missions: readonly QuestionMissionConfig[], collectionName: string, _validationNotice: string,
  actions: CourseActions, signal: AbortSignal, player: PlayerProfile): HTMLElement {
  const view = element('section', 'view journey-briefing-view');
  const back = button('Voltar ao início', true);
  back.classList.add('back-button');
  back.addEventListener('click', actions.back, { signal });
  const changePlayer = button(gameConfig.copy.changePlayer, true);
  changePlayer.classList.add('change-player-button');
  changePlayer.addEventListener('click', actions.changePlayer, { signal });

  const hero = element('header', 'briefing-hero');
  const heroCopy = element('div', 'briefing-hero-copy');
  const title = element('h1', 'section-title', 'Prepare-se para a Jornada N9');
  title.tabIndex = -1;
  heroCopy.append(element('p', 'eyebrow', 'BRIEFING DA MISSÃO'), title,
    element('p', 'briefing-hero-intro', 'Você percorrerá cinco fases, responderá 25 questões e reativará sistemas tecnológicos ao longo da rota.'));
  const identity = element('aside', 'briefing-identity');
  identity.append(element('span', 'briefing-identity-label', 'PERCURSO LIBERADO'),
    element('strong', 'briefing-player-name', player.nickname),
    element('span', 'briefing-course-name', courses.find((course) => course.id === player.course)?.name ?? player.course!),
    element('span', 'briefing-modality', player.course + ' · ' + player.modality));
  hero.append(heroCopy, identity);
  view.append(back, hero);

  const route = element('section', 'briefing-route');
  route.setAttribute('aria-labelledby', 'briefing-route-title');
  const routeTitle = element('h2', 'subsection-title', 'Sua rota de avaliação');
  routeTitle.id = 'briefing-route-title';
  route.append(routeTitle, element('p', 'briefing-route-intro', 'Cada fase reúne cinco questões. Os desafios tecnológicos liberam a continuidade do mapa e não entram na pontuação.'));
  const routeTrack = element('ol', 'briefing-route-track');
  for (const [kind, name, detail] of [
    ['puzzle', 'Ativação inicial', 'Acorde o Robô N9'],
    ['phase', 'Fase 1', '5 questões'],
    ['phase', 'Fase 2', '5 questões'],
    ['puzzle', 'Nó de Rede', 'Quebra-cabeça'],
    ['phase', 'Fase 3', '5 questões'],
    ['phase', 'Fase 4', '5 questões'],
    ['puzzle', 'Núcleo de Energia', 'Quebra-cabeça'],
    ['phase', 'Fase 5', '5 questões'],
  ]) {
    const item = element('li', 'briefing-route-stop briefing-route-stop--' + kind);
    const icon = element('span', 'briefing-route-icon', kind === 'puzzle' ? '◇' : '▰');
    icon.setAttribute('aria-hidden', 'true');
    item.append(icon, element('strong', '', name), element('span', '', detail));
    routeTrack.append(item);
  }
  route.append(routeTrack);
  view.append(route);

  const details = element('section', 'briefing-details');
  const rules = element('div', 'briefing-rules');
  rules.append(element('h2', 'subsection-title', 'Como funciona'));
  for (const [titleText, detail] of [
    ['25 questões', 'Cinco grupos de cinco questões, com retorno ao mapa entre as fases.'],
    ['100 pontos por acerto', 'Erros não geram desconto e não há limite de tempo na Jornada N9.'],
    ['Quebra-cabeças na rota', 'Eles fazem parte da história e liberam o avanço pela rota.'],
    ['Resultado automático', 'Ao concluir, o relatório é salvo e enviado ao ranking quando o cadastro estiver elegível.'],
  ]) {
    const card = element('article', 'briefing-rule-card');
    card.append(element('strong', '', titleText), element('span', '', detail));
    rules.append(card);
  }
  const startPanel = element('div', 'briefing-start-panel');
  startPanel.append(element('span', 'briefing-ready-tag', 'SISTEMA PRONTO'),
    element('h2', '', 'A rota está preparada para ' + player.course + '.'),
    element('p', '', 'Ao iniciar, você entrará no mapa e deverá interagir com o Robô N9 para abrir o tutorial.'));
  const form = element('form', 'briefing-form');
  const mission = missions.find((item) => item.id === selectedMissionId) ?? missions[0];
  if (mission) {
    form.append(element('p', 'briefing-mission-summary', mission.questionCount + ' questões · ' +
      mission.commonQuestionCount + ' comuns · ' + mission.specificQuestionCount + ' específicas'));
  }
  const confirm = button('Entrar na Jornada N9');
  confirm.type = 'submit';
  confirm.dataset.action = 'confirm-course';
  confirm.disabled = selected === null || !mission;
  form.append(confirm);
  form.addEventListener('submit', (event) => { event.preventDefault(); actions.confirm(); }, { signal });
  startPanel.append(form, element('p', 'briefing-collection-note', collectionName));
  details.append(rules, startPanel);
  view.append(details, changePlayer);
  return view;
}

export function courseSelectView(selected: CourseId | null, selectedMissionId: string,
  missions: readonly QuestionMissionConfig[], collectionName: string, validationNotice: string,
  actions: CourseActions, signal: AbortSignal, player?: PlayerProfile | null): HTMLElement {
  if (player?.course && player.modality) {
    return verifiedJourneyBriefing(selected, selectedMissionId, missions, collectionName, validationNotice,
      actions, signal, player);
  }
  const view = element('section', 'view');
  const back = button(gameConfig.copy.backHome, true);
  back.classList.add('back-button');
  back.addEventListener('click', actions.back, { signal });
  view.append(back, element('p', 'eyebrow', gameConfig.copy.courseEyebrow));
  const changePlayer = button(gameConfig.copy.changePlayer, true);
  changePlayer.classList.add('change-player-button');
  changePlayer.addEventListener('click', actions.changePlayer, { signal });
  view.append(changePlayer);
  const title = element('h1', 'section-title', gameConfig.copy.courseTitle);
  title.tabIndex = -1;
  view.append(title, element('p', 'intro intro--small', player?.course
    ? 'Seu cadastro dá acesso ao percurso de ' + player.course + '.' : gameConfig.copy.courseIntro));
  const form = element('form', 'course-form');
  const group = element('fieldset', 'course-options');
  const legend = element('legend', 'sr-only', gameConfig.copy.courseLegend);
  group.append(legend);
  for (const course of courses) {
    if (player?.course && player.course !== course.id) continue;
    const label = element('label', 'course-card');
    label.dataset.course = course.id.toLowerCase();
    const radio = element('input', 'course-radio');
    radio.type = 'radio';
    radio.name = 'course';
    radio.value = course.id;
    radio.checked = selected === course.id;
    radio.required = true;
    radio.addEventListener('change', () => actions.select(course.id), { signal });
    const copy = element('span', 'course-copy');
    copy.append(element('strong', 'course-code', course.id), element('span', 'course-name', course.name));
    const symbol = element('span', 'course-symbol', puzzleFamilyVisuals[course.id].symbol);
    symbol.setAttribute('aria-hidden', 'true');
    label.append(radio, symbol, copy);
    group.append(label);
  }
  const missionTitle = element('h2', 'mission-select-title', gameConfig.copy.missionTitle);
  const missionGroup = element('fieldset', 'mission-options');
  missionGroup.append(element('legend', 'sr-only', gameConfig.copy.missionLegend));
  for (const mission of missions) {
    const label = element('label', 'mission-card');
    const radio = element('input', 'mission-radio');
    radio.type = 'radio';
    radio.name = 'mission';
    radio.value = mission.id;
    radio.checked = selectedMissionId === mission.id;
    radio.required = true;
    radio.addEventListener('change', () => actions.selectMission(mission.id), { signal });
    const copy = element('span', 'mission-copy');
    copy.append(element('strong', '', mission.internalTitle),
      element('span', '', mission.questionCount + ' desafios · ' + mission.commonQuestionCount + ' comuns + ' +
        mission.specificQuestionCount + ' específicos'));
    if (mission.id === 'journey-25') copy.append(element('span', '', '5 fases de 5 questões. Os quebra-cabeças abrem as salas da rota.'));
    label.append(radio, copy);
    missionGroup.append(label);
  }
  const confirm = button(gameConfig.copy.enterCentral);
  confirm.type = 'submit';
  confirm.dataset.action = 'confirm-course';
  confirm.disabled = selected === null || !missions.some((mission) => mission.id === selectedMissionId);
  form.append(group, missionTitle, missionGroup, element('p', 'helper', gameConfig.copy.arenaCapacity), confirm,
    element('p', 'helper', player?.course ? 'Curso e modalidade definidos pelo cadastro acadêmico.' : gameConfig.copy.courseTemporary));
  form.addEventListener('submit', (event) => { event.preventDefault(); actions.confirm(); }, { signal });
  view.append(form, element('p', 'planned-note', collectionName));
  return view;
}
