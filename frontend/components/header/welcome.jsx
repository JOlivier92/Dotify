import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="splash-page">
      <header className="welcome-box">
        <div className="container">
          <div className="navbar-main-elements">
            <div className="navbar-logo">
              <Link to="/" className="header-logo-link">
                <span></span>
              </Link>
            </div>
              <nav className="login-signup-links">
                <Link to="/login" className="grayed-link">Log In</Link>
                <Link to="/signup" className="grayed-link">Sign up</Link>
                <a target="_blank" className="divider"></a>
                <a target="_blank" href="https://github.com/JOlivier92/Dotify">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/joseph-olivier/">Linked In</a>
              </nav>
          </div>
        </div>
      </header>
      <footer className="splash-footer">
        <h1>Blahh</h1>
      </footer>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Welcome;
