import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmEmail: ''
    };
    // if (this.props.formType === 'signup') {
    //   this.state[confirmEmail] = '';
    // }
    this.handleSubmit = this.handleSubmit.bind(this)
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
    const user = Object.assign({}, this.state)
    this.props.processForm(user);

  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error,idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render () {
    return (
      <div className="login-form-container">
        <h2>Welcome to Dotify!</h2> <br/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
          <label>
            <input type="text"
                   value={this.state.email}
                   onChange={this.handleInput('email')}
                   placeholder="Email"
                   className="login-input"
            />
          </label>

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
          <input className="session-submit" type="submit" value={this.props.formType}/>
        </form>
      </div>
    )
  }
};

export default withRouter(SessionForm);
