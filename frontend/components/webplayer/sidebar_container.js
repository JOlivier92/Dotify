import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

// The reason we connect with null is because we don't need any information
// from the current state to create a new user
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
