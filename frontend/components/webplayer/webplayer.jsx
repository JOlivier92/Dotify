import React from 'react';
import { Button, Link, withRouter,
         Route, Redirect, Switch } from 'react-router-dom';
         import { AuthRoute, ProtectedRoute } from '../../utils/route_util';

// sub-components
// sidebar
import SidebarContainer from './sidebar_container';
// main content
import BrowseContainer from './main_content/browse/browse_container';
import SearchContainer from './main_content/search_container';
import CollectionContainer from './main_content/collection/collection_container';
// footer
import FooterContainer from './footer_container';
// // //

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
          <SidebarContainer />
        </div>
        <div className="content-container">
          <Switch>
            <ProtectedRoute path="/search" component={SearchContainer} />
            <ProtectedRoute path="/browse" component={BrowseContainer} />
            <ProtectedRoute path="/collection" component={CollectionContainer} />
            <Redirect to="/404/"/>
          </Switch>
        </div>

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
