import React from 'react';
import { Link } from 'react-router-dom';



const Welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <header className="navbar-header">
      <div className="container">
        <div className="navbar-logo">
          <Link to="/" className="header-link">
            <h1>Dotify</h1>
          </Link>
        </div>
        <nav className="login-signup">
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log In</Link>
        </nav>
      </div>
    </header>
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
