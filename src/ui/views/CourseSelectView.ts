import { courses } from '../../app/courses';
import type { CourseId } from '../../domain/models/Course';
import { button, element } from '../components/elements';

export interface CourseActions {
  select: (id: CourseId) => void;
  confirm: () => void;
  back: () => void;
}

export function courseSelectView(selected: CourseId | null, actions: CourseActions, signal: AbortSignal): HTMLElement {
  const view = element('section', 'view');
  const back = button('← Voltar ao início', true);
  back.classList.add('back-button');
  back.addEventListener('click', actions.back, { signal });
  view.append(back, element('p', 'eyebrow', 'SEU PERCURSO COMEÇA AQUI'));
  const title = element('h1', 'section-title', 'Qual é o seu curso?');
  title.tabIndex = -1;
  view.append(title, element('p', 'intro intro--small', 'Cinco formações, uma cidade conectada. Escolha o curso que acompanha sua jornada.'));
  const form = element('form', 'course-form');
  const group = element('fieldset', 'course-options');
  const legend = element('legend', 'sr-only', 'Escolha um dos cinco cursos');
  group.append(legend);
  for (const course of courses) {
    const label = element('label', 'course-card');
    const radio = element('input', 'course-radio');
    radio.type = 'radio';
    radio.name = 'course';
    radio.value = course.id;
    radio.checked = selected === course.id;
    radio.required = true;
    radio.addEventListener('change', () => actions.select(course.id), { signal });
    const copy = element('span', 'course-copy');
    copy.append(element('strong', 'course-code', course.id), element('span', 'course-name', course.name));
    label.append(radio, copy);
    group.append(label);
  }
  const confirm = button('Entrar na Central Nexo');
  confirm.type = 'submit';
  confirm.dataset.action = 'confirm-course';
  confirm.disabled = selected === null;
  form.append(group, confirm, element('p', 'helper', 'A escolha dura apenas enquanto esta página estiver aberta.'));
  form.addEventListener('submit', (event) => { event.preventDefault(); actions.confirm(); }, { signal });
  view.append(form, element('p', 'planned-note', 'As cinco trilhas específicas estão planejadas. Esta demonstração oferece uma fase de dez questões fictícias filtradas por curso.'));
  return view;
}
