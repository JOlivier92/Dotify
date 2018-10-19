import { combineReducers } from 'redux';
import modal from './modal_reducer';
import audioPlayer from './audio_player_reducer'

export default combineReducers({
  modal,
  musicPlayer
});
