import nowPlayingReducer from './now_playing_reducer';
import songQueueReducer from './song_queue_reducer';
import queueSelectorReducer from './queue_selector_reducer';
import { combineReducers } from 'redux';


  export default combineReducers({
    nowPlaying: nowPlayingReducer,
    songQueue: songQueueReducer,
    queueSelector: queueSelectorReducer,
  });
