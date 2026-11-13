import type { GameSession } from '../../app/GameSession';
import { CityScene } from './CityScene';

export class QuestionScene extends CityScene {
  constructor(session: GameSession) { super('QuestionScene', session, 0xe3cb94); }
}
