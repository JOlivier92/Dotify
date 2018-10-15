import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {queryString: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatResults = this.formatResults.bind(this);
  };

  handleInput(type) {
    return e =>
      this.setState({
        [type]: e.currentTarget.value
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    let query = Object.assign({}, this.state);
    this.props.fetchSongsByName(query)
  }

  render () {
    let results_list = this.formatResults();
    return (
    <div className="search-component">
      <form className="input-field" onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.queryString}
          onChange={this.handleInput('queryString')}
          placeholder="Start typing..."
          className="search-input"/>
      </form>
      <div className="results">
        <ul className="contents-header-list">
          <li className="c-header-item">
            <NavLink to="/search/recent"
              className="c-header-item-link"
              activeClassName="active" >Artists
            </NavLink>

          </li>
          <li className="c-header-item">
            <NavLink to="/search/recent"
              className="c-header-item-link"
              activeClassName="active" >Songs
            </NavLink>
          </li>
          <li className="c-header-item">
            <NavLink to="/search/recent"
              className="c-header-item-link"
              activeClassName="active" >Albums
            </NavLink>
          </li>
        </ul>
        <div className="contents">
          {results_list}
        </div>
      </div>

    </div>
    );
  };



  formatResults() {
    let listOfQueryResults = this.props.songs.slice(0,9);
    return (
      <ul className="random-song-list">
        {listOfQueryResults.map( (song,i) => (
            <li className="song-item">
              <div className="cute-icon">
                ♪
              </div>
              <div className="track-details-container">
                <span className="track-title">{song.title} </span>
                <div className="other-track-details">
                  <span className="detail-contents">{song.artist_name}</span>
                  <span class="line-separator">•</span>
                  <span className="detail-contents">{song.album_title}</span>
                </div>
              </div>
              <div className="more-dropdown">

              </div>
              <div className="track-length">
                0:30
              </div>
            </li>
          )
        )}
      </ul>
    );
  }
};

export default Search;
