import React, {Component} from 'react';
import { Button, Link, withRouter,
         Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import ReactPlayer from 'react-player';

// sub-components
// sidebar
import SidebarContainer from './sidebar_container';
// main content
import BrowseContainer from './main_content/browse/browse_container';
import SearchContainer from './main_content/search/search_container';
import CollectionContainer from './main_content/collection/collection_container';
import ArtistShowContainer from './main_content/collection/artist_show_container';
import PlaylistShowContainer from './main_content/collection/playlist_show_container';
import AlbumShowContainer from './main_content/collection/album_show_container';
// footer
import FooterContainer from './footer_container';
import AudioPlayerContainer from './main_content/audio_player/audio_player_container';
// // //

class Webplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLinksActive: false };
  }

  render() {
   let curr_location = this.props.location.pathname.slice(1).replace(new RegExp("/", "g"),"_");
   const {logout} = this.props;
    return (
      <div className="webplayer-page">
        <div className={"all-content " + curr_location}>
          <SidebarContainer />
        <div className="content-container">
          <Switch>
            <ProtectedRoute path="/search" component={SearchContainer} />
            <ProtectedRoute path="/collection" component={CollectionContainer} />
            <ProtectedRoute path="/browse" component={BrowseContainer} />


            <ProtectedRoute path="/playlist/:playlistId" component={PlaylistShowContainer} />
            <ProtectedRoute path="/album/:albumId" component={AlbumShowContainer} />
            <ProtectedRoute path="/artist/:artistId" component={ArtistShowContainer} />
            <Redirect to="/404/"/>
          </Switch>
        </div>
      </div>
        <div className="footer-container">
          <div className="music-controller-container">
            <AudioPlayerContainer />
          </div>
          <div className="now-listening-container">

          </div>
        </div>
    </div>
    );
  }
}

export default Webplayer;
