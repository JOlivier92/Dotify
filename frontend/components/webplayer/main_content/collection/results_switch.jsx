import React from 'react';


export class Playlists extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  componentWillReceiveProps(nextProps) {

  }

  render () {
    let playlists = this.props.playlists
    let truncated = [];
    if (playlists.length > 9) {
      while (truncated.length < 9) {
        truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
      };
    };
    debugger
    return (
      <ul className="playlists-list">
        {truncated.map( (playlist) => (
            <li className="playlist-item">
              <div className="playlist-image">
                image here
              </div>
              <div className="playlist-details-container">
                <span className="playlist-name">{playlist.name} </span>
                <span className="playlist-creator">{playlist.name}</span>
              </div>
            </li>
          )
        )}
      </ul>
    );
  };
};


export class Artists extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    let playlists = this.props.playlists
    let truncated = [];
    if (playlists.length > 9) {
      while (truncated.length < 9) {
        truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
      };
    };
    return (
      <h1>I'm a song list</h1>
    );
  };
};

export class Albums extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <h1> I'm a album list </h1>
    );
  };
};



export class Songs extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();

  }

  render () {
    let songs = this.props.songs;
    let truncated = [];
    if (songs.length > 9) {
      while (truncated.length < 9) {
        truncated.push(songs[Math.floor(Math.random() * songs.length)]);
      };
    };
    return (
      <ul className="random-song-list">
        {truncated.map( (song,i) => (
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
  };
};
