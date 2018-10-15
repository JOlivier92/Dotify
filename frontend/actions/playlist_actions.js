import * as APIUtil from '../utils/playlists_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';


// playlists index action
export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const fetchPlaylists = () => dispatch => (
    APIUtil.fetchPlaylists()
      .then(playlists => dispatch(receivePlaylists(playlists)), err => console.log(err))
);

// playlists show action
export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  song
});

export const fetchPlaylist = () => dispatch => (
  APIUtil.fetchPlaylist()
    .then(playlist => dispatch(receivePlaylist(playlist)))
);
//
