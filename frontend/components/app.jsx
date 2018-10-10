import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

// Containers
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import WelcomeContainer from './header/welcome_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Dotify</h1>
      </Link>
      <WelcomeContainer />
    </header>
    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
