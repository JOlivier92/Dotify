import React from 'react';
import {connect} from 'react-redux';
import { Playlists } from './results_switch';
import { fetchPlaylists } from '../../../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id]),
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Playlists)
