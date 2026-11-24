import { bootstrap } from './app/bootstrap';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/exploration.css';
import './styles/puzzles.css';
import './styles/learning-lab.css';
import { bootstrapLearningLab } from './ui/learning/LearningLab';
import { bootstrapRegulation } from './ui/views/RegulationView';

const root = document.querySelector<HTMLElement>('#app');
if (!root) throw new Error('Elemento principal ausente.');
let dispose = (): void => undefined;
const mount = (): void => {
  dispose();
  root.className = '';
  root.replaceChildren();
  dispose = window.location.hash === '#/laboratorio'
    ? bootstrapLearningLab(root, () => { window.location.hash = ''; })
    : window.location.hash === '#/regulamento'
      ? bootstrapRegulation(root, () => { window.location.hash = ''; })
      : bootstrap(root);
};
window.addEventListener('hashchange', mount);
mount();
if (import.meta.hot) import.meta.hot.dispose(() => { window.removeEventListener('hashchange', mount); dispose(); });
