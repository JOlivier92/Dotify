import React from 'react';
import {connect} from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchSongs } from '../../../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});


export default connect(null, mapDispatchToProps)(AudioPlayer);
