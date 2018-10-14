import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Browse from './browse';
import { logout } from '../../../../actions/session_actions';


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(null, mapDispatchToProps)(Browse)
