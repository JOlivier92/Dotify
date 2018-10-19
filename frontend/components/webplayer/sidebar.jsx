import React from 'react';
import { Button, Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FaBeer, FaSearch, FaHome } from 'react-icons/fa';
class Sidebar extends React.Component {
  render () {
    const {logout} = this.props;
    return (
      <div className="navbar-options">
        <div className="navbar-header">
          <Link to="/browse/featured" className="home-link" >
            <span></span>
          </Link>
        </div>
        <ul>
          <li className="navbar-group">
              <FaSearch className="icon" />
              <NavLink to="/search/recent"
                       className="navbar-text"
                       activeClassName="active2" >Search
              </NavLink>
          </li>
          <li className="navbar-group">
            <FaHome className="icon" />
            <Link to="/browse/featured" className="navbar-text" activeClassName="active2">Home</Link>
          </li>
          <li className="navbar-group vertlines">
            <hr width="1" size=""/>
            <hr width="1" size=""/>
            <hr width="1" size="" className="rotated-line"/>
            <Link to="/collection/playlists" className="navbar-text" activeClassName="active2" >Your Library</Link>
          </li>
        </ul>
        <div className="recently-played"></div>
        <div className="navbar-logout">
          <h4 className="navbar-username">{this.props.currentUser.username}</h4>
          <button onClick={logout}>Log Out</button>
        </div>
      </div>
    );
  }
}
export default Sidebar;
