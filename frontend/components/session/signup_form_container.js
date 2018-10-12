import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, login, clearErrors } from '../../actions/session_actions';
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to ='/login'>Log in</Link>,
  };
};
const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  processAutoLogin: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
