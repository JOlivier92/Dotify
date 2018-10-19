import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../../../utils/route_util';
import Playlists from '../collection/playlists_container';
import PlaylistShow from '../collection/playlist_show_container';

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
          <div className="results-container">
            <Switch>
              <ProtectedRoute path="/browse/featured" component={Playlists} />

            </Switch>
        </div>
    </div>
  </div>
    );
  };
};

export default Browse;
