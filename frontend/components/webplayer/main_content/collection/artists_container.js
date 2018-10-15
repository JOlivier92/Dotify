import React from 'react';
import {connect} from 'react-redux';
import { Artists } from './results_switch';
import { fetchAritsts } from '../../../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    artists: Object.keys(state.entities.artists).map(id => state.entities.artists[id])
  };
};
const mapDispatchToProps = dispatch => ({
  fetchAritsts: () => dispatch(fetchAritsts())
});


export default connect(mapStateToProps, mapDispatchToProps)(Artists)
