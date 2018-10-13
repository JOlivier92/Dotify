import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

// Containers
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import WelcomeContainer from './splashpage/welcome_container';
import WebplayerContainer from './webplayer/webplayer_container';
// Routes
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NotFound from './404/not_found';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, FaSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)
//

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/webplayer" component={WebplayerContainer} />
      <Route exact path="/" component={WelcomeContainer}/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
