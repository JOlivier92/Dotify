import * as APIUtil from '../utils/playlists_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';

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
  playlist
});

export const fetchPlaylist = id => dispatch => (
  APIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(createPlaylistToReducer(playlist)))
);
//

// playlist create
export const createPlaylistToReducer = playlist => ({
  type: CREATE_PLAYLIST,
  playlist
})
export const createPlaylist = playlist => dispatch => APIUtil.createPlaylist(playlist)
            .then(playlist => (dispatch(createPlaylistToReducer(playlist))),
                  err => (console.log(err), dispatch(receiveErrors(err.responseJSON))));
//
