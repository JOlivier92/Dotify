import React from 'react';
import { withRouter } from 'react-router-dom';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="create-playlist-box">
          <br/>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <div className="login-form">
            <div className="create-new-playlists-prompt">
              Create new playlist
            </div>
            <div className="input-container">
              <div className="input-box">
                <div className="content-spacing">
                  <h4 className="text-above-input">Playlist Name</h4>
                  <input type="text"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Start typing..."
                    autofocus="autofocus"
                    onfocus="this.select()"
                  />
                </div>
              </div>
            </div>
            <div className="button-group">
              <button className="btn btn-cancel" onClick={this.props.closeModal}>CANCEL</button>
              <button className="btn btn-create">CREATE</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePlaylist);
