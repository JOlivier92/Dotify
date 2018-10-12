import React from 'react';
import { Button, Link } from 'react-router-dom';

class Webplayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLinksActive: false };
  }

  render() {
    const {logout} = this.props;
    return (<div><h1>test</h1><button className="header-button" onClick={logout}>Log Out</button></div>)
  }
}

export default Webplayer;
