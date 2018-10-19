import { merge } from 'lodash';

const audioPlayerReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CREATE_AUDIO_PLAYLIST:
      return newState;
    default:
      return state;
  }
}

export default audioPlayerReducer;
