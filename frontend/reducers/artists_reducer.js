import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG:
      return merge({}, state, {[action.artist.id]: action.artist});
    case RECEIVE_SONGS:
      return action.artists;
    default:
      return state;
  }
};

export default artistsReducer;
