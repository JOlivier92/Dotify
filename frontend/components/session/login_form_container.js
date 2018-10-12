import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>,
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

// The reason we connect with null is because we don't need any information
// from the current state to create a new user
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
