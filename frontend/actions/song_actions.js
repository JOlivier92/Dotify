import * as APIUtil from '../utils/songs_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

// songs index action
export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchSongs = () => dispatch => (
  APIUtil.fetchSongs()
    .then(songs => dispatch(receiveSongs(songs)))
);

// songs show action
export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSong = () => dispatch => (
  APIUtil.fetchSong()
    .then(songs => dispatch(receiveSongs(songs)))
);
//
