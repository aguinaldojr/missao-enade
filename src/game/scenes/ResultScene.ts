import type { GameSession } from '../../app/GameSession';
import { CityScene } from './CityScene';

export class ResultScene extends CityScene {
  constructor(session: GameSession) { super('ResultScene', session, 0xa1e5c4); }
}
