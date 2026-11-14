import { gameConfig } from '../../config/game';
import type { Command, SessionState } from '../../app/GameSession';
import { activePlayer } from '../../domain/models/PlayerProfile';
import { button, element } from '../components/elements';

export function playerProfileView(state: SessionState, dispatch: (command: Command) => void,
  signal: AbortSignal): HTMLElement {
  const view = element('section', 'view profile-view');
  const back = button(gameConfig.copy.backHome, true);
  back.classList.add('back-button');
  back.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  const title = element('h1', 'section-title', gameConfig.copy.profileTitle);
  title.tabIndex = -1;
  view.append(back, element('p', 'eyebrow', gameConfig.copy.profileEyebrow), title,
    element('p', 'intro intro--small', gameConfig.copy.profileIntro),
    element('p', 'privacy-notice', gameConfig.copy.localDataNotice));

  const form = element('form', 'profile-form');
  const label = element('label', 'field-label', gameConfig.copy.nicknameLabel);
  label.htmlFor = 'nickname';
  const input = element('input', 'text-input');
  input.id = 'nickname';
  input.name = 'nickname';
  input.type = 'text';
  input.minLength = 3;
  input.maxLength = 20;
  input.autocomplete = 'off';
  input.required = true;
  input.setAttribute('aria-describedby', 'nickname-help profile-error');
  const help = element('p', 'helper', gameConfig.copy.nicknameHelp);
  help.id = 'nickname-help';
  const create = button(gameConfig.copy.createPlayer);
  create.type = 'submit';
  form.append(label, input, help, create);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    dispatch({ type: 'create-player', nickname: input.value });
  }, { signal });
  view.append(form);

  const error = element('p', 'profile-error', state.profileError ?? '');
  error.id = 'profile-error';
  error.setAttribute('role', 'alert');
  if (!state.profileError) error.hidden = true;
  view.append(error);

  if (state.profiles.players.length > 0) {
    const heading = element('h2', 'subsection-title', gameConfig.copy.existingPlayers);
    const group = element('fieldset', 'player-options');
    group.append(element('legend', 'sr-only', gameConfig.copy.existingPlayers));
    for (const player of state.profiles.players) {
      const option = element('label', 'player-card');
      const radio = element('input', 'player-radio');
      radio.type = 'radio';
      radio.name = 'player';
      radio.value = player.id;
      radio.checked = state.profiles.activePlayerId === player.id;
      radio.addEventListener('change', () => dispatch({ type: 'select-player', playerId: player.id }), { signal });
      option.append(radio, element('span', '', player.nickname));
      group.append(option);
    }
    view.append(heading, group);
  }

  const current = activePlayer(state.profiles);
  if (current) view.append(element('p', 'current-player', gameConfig.copy.currentPlayer + ': ' + current.nickname));
  const proceed = button(gameConfig.copy.continueWithPlayer);
  proceed.disabled = current === null;
  proceed.addEventListener('click', () => dispatch({ type: 'continue-profile' }), { signal });
  view.append(proceed);
  if (state.profileSaveStatus === 'failed' || state.profileSaveStatus === 'unavailable') {
    view.append(element('p', 'helper', gameConfig.copy.profileSaveFailed));
  }
  return view;
}
