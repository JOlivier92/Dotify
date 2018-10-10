import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

// The reason we connect with null is because we don't need any information
// from the current state to create a new user
export default connect(null, mapDispatchToProps)(SessionForm)
