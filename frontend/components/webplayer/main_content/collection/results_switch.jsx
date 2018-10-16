import React from 'react';


export class Playlists extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render () {
    let playlists = this.props.playlists
    let truncated = [];
    let i = 0;
    if (playlists.length > 9) {
      while (truncated.length < 9) {
        // truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
        truncated.push(playlists[i]);
        i++;
      };
    };
    return (
      <ul className="playlists-list">
        {truncated.map( (playlist) => (
            <li className="playlist-item">
              <div className="playlist-image">
                image here
              </div>
              <div className="playlist-details-container">
                <span className="playlist-name">{playlist.name} </span>
                <span className="playlist-creator">{playlist.creator.username}</span>
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

  componentDidMount() {
    this.props.fetchArtists();
  }

  render () {
    let artists = this.props.artists
    let truncated = [];
    let i = 0;
    if (artists.length > 24) {
      while (truncated.length < 24) {
        // truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
        truncated.push(artists[i]);
        i++;
      };
    };
    return (
      <ul className="artists-list">
        {truncated.map( (artist) => (
            <li className="artist-item">
              <div className="artist-image">
                image here
              </div>
              <div className="artist-details-container">
                <span className="artist-name">{artist.name}</span>
              </div>
            </li>
          )
        )}
      </ul>
    );
  };
};



export class Albums extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render () {
    let albums = this.props.albums
    let truncated = [];
    let i = 0;
    if (albums.length > 24) {
      while (truncated.length < 24) {
        // truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
        truncated.push(albums[i]);
        i++;
      };
    };
    return (
      <ul className="albums-list">
        {truncated.map( (album) => (
            <li className="album-item">
              <div className="album-image">
                image here
              </div>
              <div className="album-details-container">
                <span className="album-name">{album.title}</span>
                <span className="album-creator">{album.artist.name}</span>
              </div>
            </li>
          )
        )}
      </ul>
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
    let i = 0;
    if (songs.length > 9) {
      while (truncated.length < 9) {
        // truncated.push(songs[Math.floor(Math.random() * songs.length)]);
        truncated.push(songs[i]);
        i++
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
