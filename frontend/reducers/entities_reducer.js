import { combineReducers } from 'redux';
import users from './users_reducer';
import albums from './albums_reducer';
import artists from './artists_reducer';
import songs from './songs_reducer';
import playlists from './playlists_reducer';
const entitiesReducer = combineReducers({
  users,
  albums,
  artists,
  songs,
  playlists,
})

export default entitiesReducer;
