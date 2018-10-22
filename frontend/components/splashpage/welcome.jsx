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
    return <div className="splash-page">
        <header className="welcome-box">
          <div className="container">
            <div className="navbar-main-elements">
              <div className="navbar-logo">
                <div className="header-logo-link-container">
                  <Link to="/" className="header-logo-link">
                    <span />
                  </Link>
                </div>
              </div>
              <div className="hamburger" onClick={() => this.toggleLinks()}>
                <span />
                <span />
                <span />
              </div>
              <nav className={`login-signup-links ${this.state.isLinksActive ? "active" : ""}`}>
                <Link to="/login" className="login-signup-link grayed-link">
                  Log In
                </Link>
                <Link to="/signup" className="login-signup-link grayed-link">
                  Sign up
                </Link>
                <a target="_blank" className="login-signup-link no-hover bar">
                  |
                </a>
                <a target="_blank" className="login-signup-link" href="https://github.com/JOlivier92/Dotify">
                  <i class="fab fa-github" />
                </a>
                <a target="_blank" className="login-signup-link linkedin-svg" href="https://www.linkedin.com/in/joseph-olivier/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </nav>
            </div>
          </div>
          <div className="splash-body">
            <h1>Music for everyone.</h1>
            <h4>Thousands of songs. No credit card needed.</h4>
            <Link to="/login">SIGN IN AS GUEST</Link>
          </div>
        </header>
        <footer className="splash-footer">
          <div className="content-container">
            <nav className="row">
              <div className="logo" />
              <div className="developer">
                <h3 className="list-header">Developer</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a target="_blank" className="login-signup-link" href="https://github.com/JOlivier92/Dotify">
                      Dotify Github
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a target="_blank" className="login-signup-link" href="https://www.linkedin.com/in/joseph-olivier/">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="useful-links">
                <h3 className="list-header">Useful Links</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link to="/signup" className="login-signup-link grayed-link">
                      Sign up
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/login" className="login-signup-link grayed-link">
                      Log In
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/anyrandomurlextension" className="login-signup-link grayed-link">
                      404 page
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="other-projects">
                <h3 className="list-header header-right">
                  Other Github Projects
                </h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a target="_blank" className="login-signup-link" href="https://github.com/JOlivier92/Crushd">
                      Crushd
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a target="_blank" className="login-signup-link" href="https://github.com/JOlivier92/ATFConverter">
                      ATF Converter
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="copyright-info">
            <div className="USA-flag-area">
              <div className="flag-flex-area">
                <h4 className="USA-text">USA</h4>
                <div className="flag-icon" />
              </div>

              <div>© 2018 Dotify</div>
            </div>
          </div>
        </footer>
      </div>;
  }

  render() {
    const { currentUser } = this.props;
    return currentUser ? <Redirect to="/browse/featured"/> : this.sessionLinks();
  }
};


export default Welcome;
