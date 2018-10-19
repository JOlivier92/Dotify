import * as APIUtil from '../utils/playlists_api_util';

export const FETCH_AUDIO_PLAYLIST = 'FETCH_AUDIO_PLAYLIST';
export const UPDATE_RECENTLY_PLAYED = 'UPDATE_RECENTLY_PLAYED';
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'

// songs index action
export const fetchAudioPlaylist = payload => ({
  type: FETCH_AUDIO_PLAYLIST,
  payload
});

export const createAudioPlaylist = (id) => dispatch => {
  debugger;
  return (
  APIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(fetchAudioPlaylist(playlist)))
);
}

export const updateRecentlyPlayed = payload => ({
  type: UPDATE_RECENTLY_PLAYED,
  payload
})
