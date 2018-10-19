import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { createPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreatePlaylist from './create_playlist';

const mapStateToProps = ({entities: { playlists, users },  errors }) => {
  return {
    playlists: Object.keys(playlists).map(id => playlists[id]),
    errors: errors.session,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
