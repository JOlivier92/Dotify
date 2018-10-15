import React from 'react';
import { NavLink } from 'react-router-dom';

class Browse extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="browse-component" >
        <ul className="contents-header-list">
          <li className="c-header-item">
            <NavLink to="/browse/featured"
              className="c-header-item-link"
              activeClassName="active" >Featured
            </NavLink>

          </li>
          <li className="c-header-item">
            <NavLink to="/browse/genres"
              className="c-header-item-link"
              activeClassName="active" >Genres & Moods
            </NavLink>
          </li>
          <li className="c-header-item">
            <NavLink to="/browse/discover"
              className="c-header-item-link"
              activeClassName="active" >Discover
            </NavLink>
          </li>
        </ul>
        <div className="home-header">
          <h1 className="welcome-message">Made for {this.props.currentUser.username}</h1>
        </div>
        <div className="results-container">
          Results go here
        </div>
    </div>
    );
  };
};

export default Browse;
