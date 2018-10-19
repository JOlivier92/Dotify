import React from 'react';
import {connect} from 'react-redux';
import { PlaylistShow } from './results_switch';
import { logout } from '../../../../actions/session_actions';
import { fetchPlaylist } from '../../../../actions/playlist_actions';
import { createAudioPlaylist } from '../../../../actions/audio_player_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    playlist: state.entities.playlists
  });
};

const mapDispatchToProps = dispatch => {
  return {
    createAudioPlaylist: ([selectedSong, songsList]) => dispatch(createAudioPlaylist),
    fetchCurrentPlaylist: id => dispatch(fetchPlaylist(id))
}};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow)

// Object.keys(state.entities.playlists).map(id => state.entities.playlists[id])[0]
