import React from 'react';
import {connect} from 'react-redux';
import { AlbumShow } from './results_switch';
import { logout } from '../../../../actions/session_actions';
import { fetchAlbum } from '../../../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return ({
    albums: state.entities.albums
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentAlbum: id => dispatch(fetchAlbum(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow)
