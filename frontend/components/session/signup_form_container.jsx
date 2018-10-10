import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to ='/login'>log in instead</Link>,
  };
};
const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

// The reason we connect with null is because we don't need any information
// from the current state to create a new user
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
