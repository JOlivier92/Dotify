import React from 'react';
import {connect} from 'react-redux';
import { PlaylistShow } from './results_switch';
import { logout } from '../../../../actions/session_actions';
import { fetchPlaylist } from '../../../../actions/playlist_actions';
import { createAudioPlaylist, setCurrentSong } from '../../../../actions/audio_player_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    playlist: state.entities.playlists
  });
};

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    createAudioPlaylist: playlistId => dispatch(createAudioPlaylist(playlistId)),
    fetchCurrentPlaylist: id => dispatch(fetchPlaylist(id)),
    setCurrentSong: songId => dispatch(setCurrentSong(songId))
}};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow)
