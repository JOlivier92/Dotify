import React from 'react';
import {connect} from 'react-redux';
import { Albums } from './results_switch';
import { fetchAlbums } from '../../../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id])
  };
};
const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});


export default connect(mapStateToProps, mapDispatchToProps)(Albums)
