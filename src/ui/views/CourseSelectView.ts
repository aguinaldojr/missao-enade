import { gameConfig } from '../../config/game';
import { courses } from '../../app/courses';
import type { CourseId } from '../../domain/models/Course';
import type { QuestionMissionConfig } from '../../domain/models/QuestionMission';
import { button, element } from '../components/elements';
import { puzzleFamilyVisuals } from '../../config/visual';

export interface CourseActions {
  select: (id: CourseId) => void;
  selectMission: (id: string) => void;
  confirm: () => void;
  back: () => void;
  changePlayer: () => void;
}

export function courseSelectView(selected: CourseId | null, selectedMissionId: string,
  missions: readonly QuestionMissionConfig[], collectionName: string, validationNotice: string,
  actions: CourseActions, signal: AbortSignal): HTMLElement {
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
  view.append(title, element('p', 'intro intro--small', gameConfig.copy.courseIntro));
  const form = element('form', 'course-form');
  const group = element('fieldset', 'course-options');
  const legend = element('legend', 'sr-only', gameConfig.copy.courseLegend);
  group.append(legend);
  for (const course of courses) {
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
    label.append(radio, copy);
    missionGroup.append(label);
  }
  const confirm = button(gameConfig.copy.enterCentral);
  confirm.type = 'submit';
  confirm.dataset.action = 'confirm-course';
  confirm.disabled = selected === null || !missions.some((mission) => mission.id === selectedMissionId);
  form.append(group, missionTitle, missionGroup, element('p', 'helper', gameConfig.copy.arenaCapacity), confirm,
    element('p', 'helper', gameConfig.copy.courseTemporary));
  form.addEventListener('submit', (event) => { event.preventDefault(); actions.confirm(); }, { signal });
  view.append(form, element('p', 'planned-note', collectionName + ' · ' + validationNotice));
  return view;
}
