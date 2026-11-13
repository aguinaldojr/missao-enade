import type { GameSession } from '../../app/GameSession';
import { CityScene } from './CityScene';

/** Ambientação da central; o acesso à fase de exemplo usa controles HTML. */
export class MapScene extends CityScene {
  constructor(session: GameSession) { super('MapScene', session, 0xa1e5c4); }
}
