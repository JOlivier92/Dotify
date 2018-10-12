import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import ConnectedSwitch from '../store/connected_switch';
// Containers
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import WelcomeContainer from './splashpage/welcome_container';
import Recaptcha from 'react-recaptcha';
// Routes
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NotFound from './404/not_found';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={WelcomeContainer}/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
