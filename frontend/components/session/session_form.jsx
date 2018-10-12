import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';
import { Button, Link } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password: '', confirmEmail: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginAsGuest = this.loginAsGuest.bind(this);
    this.fillForm = this.fillForm.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors();
  }

  recaptchaLoaded () {
    console.log("captcha successfull loaded");
  }
  handleInput(type) {
    return e =>
      this.setState({
        [type]: e.currentTarget.value
      });
  }
  //on submit, create new user or sign user in
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user["confirmEmail"]
    this.props.processForm(user);
  }

  //
  loginAsGuest(e) {
    e.preventDefault();
    this.setState({
      formType: 'login'
    });
    const email = 'DotifyGuest@dotify.io'.split("");
    const password = "examplePassword4".split("");
    const button = document.getElementById('login-button')
    this.setState({username: '', email: '', password: '', confirmEmail: ''},
                  () => this.fillForm(email,password,button))
  }

  fillForm(email,password,button) {
    if (email.length > 0) {
      this.setState(
        {email: this.state.email + email.shift()}, () => {
          window.setTimeout( () =>
            this.fillForm(email,password,button), Math.floor(Math.random()*50)+70);
        }
      );
    } else if (password.length > 0) {
      this.setState(
        {password: this.state.password + password.shift()}, () => {
          window.setTimeout( () =>
            this.fillForm(email,password,button), Math.floor(Math.random()*50)+70);
        }
      );
    } else { button.click(); }
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
    return (
      <ul>
        {this.props.errors.map((error,idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    } else {
      return null;
    }
  }


  render () {
    let guestLoginButton;
    let recaptcha;
    let signUpwithEmail;
    let switchAsk = "Already";
    let usernameField;
    let confirmEmailField;
    let emailFieldText = "Email"
    guestLoginButton = <button onClick={this.loginAsGuest} className="auto-login-btn">Log In With Guest Account</button>;

    if (this.props.formType === 'login') {
      switchAsk = "Don't"
      emailFieldText = "Email address or username"
    } else {
           recaptcha = <Recaptcha
           render="explicit"
           sitekey="6LeHn3QUAAAAAMRwsX8XGbiin3Eg7KLH8Vo3Yg77"
           onloadCallback={this.recaptchaLoaded}
           />
         signUpwithEmail = <h4 className="email-statement">Sign up with your email address</h4>
          confirmEmailField = <div className= "input-item">
                               <input type="text"
                                      value={this.state.confirmEmail}
                                      onChange={this.handleInput('confirmEmail')}
                                      placeholder="Confirm email"
                                      className="login-input"
                               />
                             </div>
         usernameField = <div className= "input-item">
           <input type="text"
             value={this.state.username}
             onChange={this.handleInput('username')}
             placeholder="What should we call you?"
             className="login-input"/>
         </div>
    }
    return (
      <div className="credentials-form-container">
        <header className="credentials-header">
          <div className="logo-link-container">
            <Link to="/" className="logo-link">
              <span></span>
            </Link>
          </div>
        </header>
        <div className="credentials-body">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              {guestLoginButton}
              <div className="or-statement">
                <div className="line" />
                <strong className="line-thru">or</strong>
                <div className="line" />

              </div>
              <div className= "input-item">
                <input type="email"
                       value={this.state.email}
                       onChange={this.handleInput('email')}
                       placeholder={emailFieldText}
                       className="login-input"
                />
              </div>

              {confirmEmailField}

              <div className= "input-item">
                <input type="password"
                       value={this.state.password}
                       onChange={this.handleInput('password')}
                       placeholder="Password"
                       className="login-input"
                />
              </div>
              {usernameField}

            </div>
            {recaptcha}
             <button className="session-submit" id="login-button" type="submit" value={this.props.formType}>
               Log in </button>
          </form>

          {switchAsk} have an account? {this.props.navLink}
        </div>

      </div>
    )
  }
};

export default withRouter(SessionForm);
