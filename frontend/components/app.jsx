import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import ConnectedSwitch from '../store/connected_switch';
// Containers
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import WelcomeContainer from './header/welcome_container';
import Recaptcha from 'react-recaptcha';
// Routes
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={WelcomeContainer}/>
    </Switch>
  </div>
);

export default App;
