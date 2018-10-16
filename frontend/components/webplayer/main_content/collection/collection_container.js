import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Collection from './collection';
import { logout } from '../../../../actions/session_actions';
import { openModal } from '../../../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
});


export default connect(null, mapDispatchToProps)(Collection)
