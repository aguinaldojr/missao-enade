import { bootstrap } from './app/bootstrap';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/exploration.css';

const root = document.querySelector<HTMLElement>('#app');
if (!root) throw new Error('Elemento principal ausente.');
const dispose = bootstrap(root);
if (import.meta.hot) import.meta.hot.dispose(dispose);
