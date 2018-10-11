import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

// Containers
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import WelcomeContainer from './header/welcome_container';

// Routes
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <WelcomeContainer path="/"/>
    </Switch>
  </div>
);

export default App;
