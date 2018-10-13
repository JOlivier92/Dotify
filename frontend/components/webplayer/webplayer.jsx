import React from 'react';
import { Button, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBeer, FaSearch, FaHome } from 'react-icons/fa';
class Webplayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLinksActive: false };
  }

  render() {
   const {logout} = this.props;

    return (
      <div className="webplayer-page">

        <div className="navbar">

          <div className="navbar-options">
            <div className="navbar-header">
              <Link to="/webplayer">
                <span></span>
              </Link>
            </div>
            <ul>
              <li className="navbar-group">
                <FaSearch className="icon" />
                <p className="navbar-text" >Search</p>
                </li>
              <li className="navbar-group">
                <FaHome className="icon" />
                <p className="navbar-text" >Home</p>
              </li>
              <li className="navbar-group vertlines">
                <hr width="1" size=""/>
                <hr width="1" size=""/>
                <hr width="1" size="" className="rotated-line"/>
                <p className="navbar-text" >Your Library</p>
              </li>
            </ul>
            <div className="recently-played"></div>
          </div>
          <div className="navbar-user" />
        </div>
        <div className="content-container"> </div>
        <div className="footer-container">
          <div className="music-controller-container">

          </div>
          <div className="now-listening-container">

          </div>
        </div>
    </div>
    );
  }
}

export default Webplayer;
