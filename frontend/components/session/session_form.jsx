import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password: '', confirmEmail: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginAsGuest = this.loginAsGuest.bind(this);
    this.fillForm = this.fillForm.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors();
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
    this.props.processForm(user);
  }

  //
  loginAsGuest(e) {
    e.preventDefault();
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
    let switchAsk = "Already";
    if (this.props.formType === 'login') {
      guestLoginButton = <button onClick={this.loginAsGuest}> Guest login</button>;
      switchAsk = "Don't"
    }
    return (
      <div className="login-form-container">
        <h2>Welcome to Dotify!</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
          <div>
            <input type="text"
                   value={this.state.email}
                   onChange={this.handleInput('email')}
                   placeholder="Email"
                   className="login-input"
            />
        </div>

            <label>
              <input type="text"
                     value={this.state.confirmEmail}
                     onChange={this.handleInput('confirmEmail')}
                     placeholder="Confirm email"
                     className="login-input"
              />
            </label>

          <label>
            <input type="password"
                   value={this.state.password}
                   onChange={this.handleInput('password')}
                   placeholder="Password"
                   className="login-input"
            />
          </label>

          <label>
            <input type="text"
                   value={this.state.username}
                   onChange={this.handleInput('username')}
                   placeholder="What should we call you?"
                   className="login-input"
            />
          </label>
        </div>
          <input className="session-submit" id="login-button" type="submit" value={this.props.formType}/>
        </form>
        {guestLoginButton}
        {switchAsk} have an account? {this.props.navLink}
      </div>
    )
  }
};

export default withRouter(SessionForm);
