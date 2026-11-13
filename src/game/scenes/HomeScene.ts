import type { GameSession } from '../../app/GameSession';
import { CityScene } from './CityScene';

export class HomeScene extends CityScene {
  constructor(session: GameSession) { super('HomeScene', session, 0xa1e5c4); }
}
