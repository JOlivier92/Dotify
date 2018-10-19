import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, action.album);
    case RECEIVE_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export default albumsReducer;


// return merge({}, state, {[Number(Object.keys(action.album)[0])]: action.album});
