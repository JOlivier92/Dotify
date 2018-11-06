import React from 'react';
import {connect} from 'react-redux';
import { Songs } from './results_switch';
import { fetchSongs } from '../../../../actions/song_actions';
import {
  setCurrentSong
} from "../../../../actions/audio_player_actions";


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
  };
};
const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  setCurrentSong: songId => dispatch(setCurrentSong(songId))
});


export default connect(mapStateToProps, mapDispatchToProps)(Songs)
