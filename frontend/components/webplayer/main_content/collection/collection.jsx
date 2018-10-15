import React from 'react';
import { NavLink, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../../../utils/route_util';
import { Playlists, Albums, Artistsjancjkn } from './results_switch';
import Songs from './songs_container';

//this code was copied over from search, make sure to go back and change css.
class Collection extends React.Component {
  render () {
    return (
      <div className="browse-component" >
        <div className="navigation-header">
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
        <div className="new-playlist-button-container">
          <button className="playlist-button">NEW PLAYLIST</button>
        </div>
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
