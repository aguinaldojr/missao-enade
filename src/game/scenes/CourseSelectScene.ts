import type { GameSession } from '../../app/GameSession';
import { CityScene } from './CityScene';

export class CourseSelectScene extends CityScene {
  constructor(session: GameSession) { super('CourseSelectScene', session, 0xe3cb94); }
}
