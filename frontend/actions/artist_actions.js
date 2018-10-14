import * as APIUtil from '../utils/artists_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';


// artists index action
export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const fetchArtists = () => dispatch => (
  APIUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)))
);

// artists show action
export const receiveArtist = song => ({
  type: RECEIVE_ARTIST,
  song
});

export const fetchArtist = () => dispatch => (
  APIUtil.fetchArtist()
    .then(artists => dispatch(receiveArtists(artists)))
);
//
