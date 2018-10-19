import React from 'react';
import {connect} from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchSongs } from '../../../../actions/song_actions';
import { updateRecentlyPlayed } from '../../../../actions/audio_player_actions'

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    currentQueue: state.ui.audioPlayer.playlist,
    currentSong: state.ui.audioPlayer.currentSong
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  updateRecentlyPlayed: (songs) => dispatch(updateRecentlyPlayed(songs))
});


export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
