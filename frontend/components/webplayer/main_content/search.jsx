import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

class Search extends React.Component {
  constructor (props) {
    super(props);
    debugger;
    this.state = {
      songs: props.songs,
      artists: props.artists,
      albums: props.albums,
      queryString: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInput(type) {
    return e =>
      this.setState({
        [type]: e.currentTarget.value
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    <Redirect to="search/${this.state.queryString}/results"/>
    const query = Object.assign({}, this.state);
    console.log(this.props.searchSongs(query));
    this.props.searchSongs(query)
      .then(e => this.setState(e.value));
    debugger;
  }

  render () {
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
          <ul className="results-list">
            <li>

            </li>
          </ul>
        </div>
      </div>

    </div>
    );
  };
};

export default Search;
