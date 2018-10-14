import React from 'react';
import { Button, Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import SessionForm from '../session/session_form';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLinksActive: false };
  }

  toggleLinks() {
    this.setState({ isLinksActive: !this.state.isLinksActive });
  }

  sessionLinks() {
    return (
      <div className="splash-page">
          <header className="welcome-box">
            <div className="container">
              <div className="navbar-main-elements">
                <div className="navbar-logo">
                  <div className="header-logo-link-container">
                    <Link to="/" className="header-logo-link">
                      <span></span>
                    </Link>
                  </div>
                </div>
                <div className="hamburger" onClick={() => this.toggleLinks()}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <nav className={`login-signup-links ${this.state.isLinksActive ? "active" : ""}`}>
                  <Link to="/login" className="login-signup-link grayed-link">Log In</Link>
                  <Link to="/signup" className="login-signup-link grayed-link">Sign up</Link>
                  <a target="_blank" className="login-signup-link no-hover">|</a>
                  <a target="_blank" className="login-signup-link" href="https://github.com/JOlivier92/Dotify">Github</a>
                  <a target="_blank" className="login-signup-link" href="https://www.linkedin.com/in/joseph-olivier/">Linked In</a>
                </nav>
              </div>
            </div>
            <div className="splash-body">
              <h1>Music for everyone.</h1>
              <h4>Thousands of songs. No credit card needed.</h4>
              <Link to="/login" >SIGN IN AS GUEST</Link>
            </div>
          </header>
        <footer className="splash-footer">
        </footer>
      </div>
    );
  }

  render() {
    const { currentUser } = this.props;
    return currentUser ? <Redirect to="/browse/featured"/> : this.sessionLinks();
  }
};


export default Welcome;
