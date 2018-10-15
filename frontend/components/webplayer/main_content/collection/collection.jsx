import React from 'react';
import { NavLink, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../../../utils/route_util';
import { Playlists, Albums, Artistsjancjkn } from './results_switch';
import Songs from './songs_container';
class Collection extends React.Component {
  render () {
    return (
      <div className="browse-component" >
        <ul className="contents-header-list">
          <li className="c-header-item">
            <NavLink to="/collection/playlists"
              className="c-header-item-link"
              activeClassName="active" >Playlists
            </NavLink>

          </li>
          <li className="c-header-item">
            <NavLink to="/collection/tracks"
              className="c-header-item-link"
              activeClassName="active" >Songs
            </NavLink>
          </li>
          <li className="c-header-item">
            <NavLink to="/collection/albums"
              className="c-header-item-link"
              activeClassName="active" >Albums
            </NavLink>
          </li>
          <li className="c-header-item">
            <NavLink to="/collection/artists"
              className="c-header-item-link"
              activeClassName="active" >Artists
            </NavLink>
          </li>
        </ul>
        <div className="home-header">
          <h1 className="welcome-message">Made for</h1>
        </div>
        <div className="results-container">
          <Switch>
            <ProtectedRoute path="/collection/playlists" component={Playlists} />
            <ProtectedRoute path="/collection/tracks" component={Songs} />
            <ProtectedRoute path="/collection/albums" component={Playlists} />
            <ProtectedRoute path="/collection/artists" component={Playlists} />
            <Redirect to="/404/"/>
          </Switch>
        </div>
    </div>
    );
  };
};

export default Collection;
