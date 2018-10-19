import { merge } from 'lodash';
import { FETCH_AUDIO_PLAYLIST,
         UPDATE_RECENTLY_PLAYED,
         SET_CURRENT_SONG
       } from '../actions/audio_player_actions';


const _nullState = {
   currentSong: {},
   playlist: [],
   recentlyPlayed: []
 };
const audioPlayerReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_AUDIO_PLAYLIST:
      return merge({}, state, {playlist: Object.values(action.payload)[0].songInfoList})
    case UPDATE_RECENTLY_PLAYED:
      return merge({},state,{recentlyPlayed: action.payload})
    case SET_CURRENT_SONG:
      return merge({},state)
    default:
      return state;
  }
}

export default audioPlayerReducer;
