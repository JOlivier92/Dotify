import React from 'react';
import {connect} from 'react-redux';
import { ArtistShow } from './results_switch';
import { fetchArtist } from '../../../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    artists: Object.keys(state.entities.artists).map(id => state.entities.artists[id])
  };
};
const mapDispatchToProps = dispatch => {
  return {
  fetchCurrentArtist: id => dispatch(fetchArtist(id))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow)
