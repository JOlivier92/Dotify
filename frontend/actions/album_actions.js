import * as APIUtil from '../utils/albums_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';


// albums index action
export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const fetchAlbums = () => dispatch => (
  APIUtil.fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)))
);

// albums show action
export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAlbum = () => dispatch => (
  APIUtil.fetchAlbum()
    .then(albums => dispatch(receiveAlbums(albums)))
);
