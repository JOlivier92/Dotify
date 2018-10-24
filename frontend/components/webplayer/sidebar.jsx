import React from 'react';
import { Button, Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recently_played: [],
      active_path: "browse"
    }
  }
  render () {
    const {logout} = this.props;
    return <div className="navbar-options">
        <div className="navbar-header">
          <Link to="/browse/featured" className="home-link">
            <span />
          </Link>
        </div>
        <ul className="side-bar-list">
          <li className="navbar-group magnifying-glass">
            <i class="fal fa-search" />
            <NavLink to="/search/recent" className="navbar-text" activeClassName="active2">
              Search
            </NavLink>
          </li>
          <li className="navbar-group">
            <i class="fal fa-home" />
            <Link to="/browse/featured" className="navbar-text" activeClassName="active2">
              Home
            </Link>
          </li>
          <li className="navbar-group vertlines">
            <hr width="1" size="" className= "line"/>
            <hr width="1" size="" className= "line"/>
            <hr width="1" size="" className="line rotated-line" />
            <Link to="/collection/playlists" className="navbar-text" activeClassName="active2">
              Your Library
            </Link>
          </li>
        </ul>
        <div className="recently-played" />
        <div className="navbar-logout">
          <h4 className="navbar-username">
            {this.props.currentUser.username}
          </h4>
          <button onClick={logout}>Log Out</button>
        </div>
      </div>;
  }
}
export default Sidebar;
