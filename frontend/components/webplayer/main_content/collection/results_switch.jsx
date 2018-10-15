import React from 'react';

export class Playlists extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <h1> I'm a PLaylist</h1>
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
              </div>
              <div className="track-details-container">
                <span className="track-title">{song.title} </span>
                <div className="other-track-details">
                  <span>{song.artist_name}</span>
                  <span class="line-separator">•</span>
                  <span>{song.album_title}</span>
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
