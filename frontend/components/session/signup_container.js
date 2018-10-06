import {connect} from 'react-redux';
import SignUp from './signup';
import { createNewUser } from '../../actions/session';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

// The reason we connect with null is because we don't need any information
// from the current state to create a new user
export default connect(null, mapDispatchToProps)(SignUp)
