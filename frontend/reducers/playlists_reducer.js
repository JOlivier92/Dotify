import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, CREATE_PLAYLIST } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      return merge({}, state, {[action.type.id]: action.playlist})
    case CREATE_PLAYLIST:
      return merge({}, action.playlist)
    default:
      return state;
  }
};

export default playlistsReducer;


// return merge({}, state, {[Number(Object.keys(action.playlist)[0])]: action.playlist})
