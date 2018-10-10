import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) =>
      this.setState({
        [type]: e.currentTarget.value
      });
  }

  //on submit, create new user or sign user in
  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));

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
        <h2>Sign Up!</h2>
        <form className="login-form-box">
          <label>Username:
            <input type="text"
                   value={this.state.username}
                   onChange={this.handleInput('username')}
            />
          </label>

          <label>Email:
            <input type="text"
                   value={this.state.email}
                   onChange={this.handleInput('email')}
            />
          </label>

          <label>Password:
            <input type="password"
                   value={this.state.password}
                   onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Sign Up!</button>
        </form>
      </div>
    )
  }
};

export default SessionForm
