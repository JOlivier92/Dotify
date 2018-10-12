import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom'
class NotFound extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="four04-page">
        <div className="content-container">
          <div className="vector-container">
            <img src='data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAAC
              H5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=='
              className="disc-vector" />
            <img src='data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAAC
              H5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=='
              className="arm-vector" />
          </div>
          <div className="message-container">
            <h1>404s and heartbreaks </h1>
            <p>
              We couldn’t find the page you were looking for. 
              Maybe our FAQ or Community can help?
            </p>
          </div>
        </div>
        <div className="absolute-header">
          <Link to="/" className="back-home" />
        </div>
      </div>
    )
  };
}

export default NotFound;
