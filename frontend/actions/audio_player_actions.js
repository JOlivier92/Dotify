import * as APIUtil from '../utils/songs_api_util';

export const CREATE_AUDIO_PLAYLIST = 'CREATE_AUDIO_PLAYLIST';
export const RECEIVE_SONG = 'RECEIVE_SONG';

// songs index action
export const createAudioPlaylist = payload => ({
  type: CREATE_AUDIO_PLAYLIST,
  payload
});

export const fetchSongs = () => dispatch => (
  APIUtil.fetchSongs()
    .then(songs => dispatch(receiveSongs(songs)))
);

// get song by name action
export const fetchSongsByName = query => dispatch => (
  APIUtil.fetchSongsByName(query)
    .then(songs => dispatch(receiveSongs(songs)))
)
//////////////////////////////////////////////////////

// songs show action
export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSong = () => dispatch => (
  APIUtil.fetchSong()
    .then(songs => dispatch(receiveSongs(songs)))
);
