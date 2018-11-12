import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

export class Playlists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  setPlaylist() {
    debugger;
    console.log("hi");
  }

  componentDidMount() {
    this.props.fetchPlaylists()
      .then(() => setTimeout(() => this.setState({loading: false}), 750));
  }

  render () {
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
          <ScaleLoader
            className="bars"
            sizeUnit={"px"}
            height={200}
            width={5}
            size={130}
            radius={999}
            color={'#4E7E0F'}
            loading={this.state.loading}
          />
        </div>
      )
    }

    let playlists = this.props.playlists
    let truncated = [];
    let i = 0;
    if (playlists.length > 9) {
      while (truncated.length < 9) {
        // truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
        truncated.push(playlists[i]);
        i++;
      };
    } else {
      truncated = playlists;
    };
    debugger;
    if (truncated.length === 0) {
      return null
    } else {
      debugger;
    return <ul className="playlists-list">
      {truncated.map(playlist => <li className="playlist-item">
        <div className="playlist-information-container">
          <div className="playlist-image-wrapper" onClick={() => this.props.createAudioPlaylist(playlist.id)}>
              <img className="playlist-image" src={playlist.art_url}></img>
              <div className="hover-div"/>
                <div className="icon-container">
                  <i class="fal fa-play-circle" />
                </div>
              </div>
              <div className="playlist-details-container">
                <span className="playlist-name">
                  <Link to={`${`/playlist/${playlist.id}`}`} className="playlist-link">
                    {playlist.name}
                  </Link>
                </span>
                <span className="playlist-creator" onClick={this.setPlaylist}>
                  {playlist.creator.username}
                </span>
              </div>
            </div>
          </li>)}
      </ul>;
  };
  };
};


export class Artists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchArtists()
      .then(() => setTimeout(() => this.setState({ loading: false }), 750));
  }

  render () {
    if (this.state.loading) {
      return <div className="sweet-loading">
          <ScaleLoader className="bars" sizeUnit={"px"} height={200} width={5} size={130} radius={999} color={"#4E7E0F"} loading={this.state.loading} />
        </div>;
    }
    let artists = this.props.artists
    let truncated = [];
    let i = 0;
    if (artists.length > 24) {
      while (truncated.length < 24) {
        // truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
        truncated.push(artists[i]);
        i++;
      };
    } else {
      truncated = artists
    };
    return (
      <ul className="artists-list">
        {truncated.map( (artist) => (
            <li className="artist-item">
              <div className="artist-image">
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
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchAlbums().then(() => setTimeout(() => this.setState({ loading: false }), 750));;
    debugger;
  }

  render () {
    if (this.state.loading) {
      return <div className="sweet-loading">
          <ScaleLoader className="bars" sizeUnit={"px"} height={200} width={5} size={130} radius={999} color={"#4E7E0F"} loading={this.state.loading} />
        </div>;
    }
    let albums = this.props.albums
    let truncated = [];
    let i = 0;
    debugger;
    if (albums.length > 24) {
      while (truncated.length < 24) {
        // truncated.push(playlists[Math.floor(Math.random() * playlists.length)]);
        truncated.push(albums[i]);
        i++;
      };
    } else {
      truncated = albums
    };
    return (
      <ul className="albums-list">
        {truncated.map( (album) => (
            <li className="album-item">
              <div className="album-information-container">
                <div style={{position: "relative", height: 0, paddingBottom: "100%", width: "100%", overflow: "hidden"}}>
                  <img className="album-image" src={album.art_url}></img>
                </div>
                <div className="album-details-container">
                  <span className="detail-contents">
                    <Link to= {`${`/album/${album.id}`}`} className="album-link">{album.title}</Link>
                  </span>
                  <span className="detail-contents">
                    <Link to= {`${`/artist/${album.artist.id}`}`} className="artist-link">{album.artist.name}</Link>
                  </span>
                </div>
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
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchSongs().then(() => setTimeout(() => this.setState({ loading: false }), 750));;
    debugger;
  }

  render () {
    if (this.state.loading) {
      return <div className="sweet-loading">
          <ScaleLoader className="bars" sizeUnit={"px"} height={200} width={5} size={130} radius={999} color={"#4E7E0F"} loading={this.state.loading} />
        </div>;
    }

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
    debugger;
    return (
      <ul className="random-song-list">
        {truncated.map( (song,i) => (
            <li className="song-item">
              <div className="cute-icon">
                ♪
              </div>
              <div className="track-details-container">
                <span className="track-title" onClick={() => this.props.setCurrentSong(song.id)}>{song.title} </span>
                <div className="other-track-details">
                  <span className="detail-contents">
                    <Link to= {`${`/artist/${song.artist.id}`}`} className="artist-link">{song.artist.name}</Link>
                  </span>
                  <span class="line-separator">•</span>
                  <span className="detail-contents">
                    <Link to= {`${`/album/${song.album.id}`}`} className="album-link">{song.album.title}</Link>
                  </span>
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

export class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {playlist: {}, songs:{}};
    this.setDivs = this.setDivs.bind(this);
    this.goBacktoBrowse = this.goBacktoBrowse.bind(this);
  }

  goBacktoBrowse() {
    this.props.history.push(`/browse/featured`);
  }

  componentDidMount() {
    debugger;
    this.props.fetchCurrentPlaylist(Number(this.props.match.params.playlistId))
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props !== prevProps) {
      this.setState({playlist: this.props.playlist})
    }
  }

  setDivs() {
    let playlistId = Number(this.props.match.url.slice(10))
    let songsList ;
    let contentUnderTitle ;
    debugger;
    if (typeof this.props.playlist[playlistId] === 'undefined') {
      this.props.fetchCurrentPlaylist(playlistId)

    } else if (this.props.playlist[playlistId].songList.length === 0) {
      songsList = <div className="empty-song-list-container">
                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                      <title>Album</title>
                      <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80
                            0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6
                            17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88
                            17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94
                            0 14.4 6.46 14.4 14.4S47.94 52.8 40
                            52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z"
                            fill="currentColor"
                            fill-rule="evenodd">
                        </path>
                      </svg>
                  <h1 className="empty-container">It's a bit empty here...</h1>
                  <h4 className="return-container">Find more of the music you love among our New Releases</h4>
                  <button onClick={this.goBacktoBrowse} className="back-to-browse btn">Browse</button>
                </div>
       contentUnderTitle = <div className='content-under-album-art'>
                            <h1 className="playlist-name">{Object.values(this.props.playlist)[0]["name"]}</h1>
                            <h4 className="playlist-username">{this.state.playlist[playlistId].creator.username}</h4>
                          </div>
    } else {
      let songsObj ;
      debugger;

      songsObj = this.props.playlist[playlistId].songList;
      songsList = <div className="results-container">
                  <ul className="random-song-list">
                    <li>
                      {songsObj.map((song,i) => (
                        <li className="song-item" >
                          <div className="cute-icon">
                            ♪
                          </div>
                          <div className="track-details-container">
                            <span className="track-title" onClick={() => this.props.createAudioPlaylist(playlistId)}>{song.title} </span>
                            <div className="other-track-details">
                              <span className="detail-contents">
                                <Link to= {`${`/artist/${song.artist_id}`}`} className="artist-link">{this.props.playlist[playlistId].songInfoList[i][0]}</Link>
                              </span>
                              <span class="line-separator">•</span>
                              <span className="detail-contents">
                                <Link to= {`${`/album/${song.album_id}`}`} className="album-link">{this.props.playlist[playlistId].songInfoList[i][1]}</Link>
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </li>
                  </ul>
                </div>
      contentUnderTitle = <div className='content-under-album-art'>
                           <h1 className="playlist-name">{Object.values(this.props.playlist)[0]["name"]}</h1>
                           <h4 className="playlist-username">{this.state.playlist[playlistId].creator.username}</h4>
                         </div>
    }
    return (
      <div className="playlist-show-container">
        <div className="art-side-container">
          <div className="album-art">
            <Link to="/" className="header-logo-link">
              <span></span>
            </Link>
          </div>
          <div className='content-under-album-art'>
            <h1 className="playlist-name">{Object.values(this.props.playlist)[0]["name"]}</h1>
            <h4 className="playlist-username">{this.state.playlist[playlistId].creator.username}</h4>
          </div>
        </div>
        <div className="playlist-side-container">
          {songsList}
        </div>
    </div>
    )
  }

  render () {
    let header ;
    let album ;
    let playlist_id ;
    if (Object.keys(this.state.playlist).length === 1) {
      header = this.setDivs();
    }
    debugger;
    return (
      <div className="playlist-album-show">
        {header}
      </div>
    )
  }
}

export class ArtistShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger;
    this.props.fetchCurrentArtist(Number(this.props.match.params.artistId))
  }

  componentDidUpdate(prevProps,prevState) {
    let currentArtistId ;
    currentArtistId = Number(this.props.match.params.artistId)
    if (Number(prevProps.match.params.artistId) !== currentArtistId) {
      this.props.fetchCurrentArtist(currentArtistId)
    }
  }

  render () {
    debugger;
    return (
      <div>
        <h4>niceeee artist</h4>
      </div>
    )
  }
}

export class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {album: {}, songs:{}};
    this.setDivs = this.setDivs.bind(this)
    this.goBacktoBrowse = this.goBacktoBrowse.bind(this)
  }

  goBacktoBrowse() {
    this.props.history.push(`/browse/featured`);
  }

  componentDidMount() {
    debugger;
    this.props.fetchCurrentAlbum(Number(this.props.match.url.slice(7)))
      .then(() => this.setState({
        album: this.props.albums[Number(this.props.match.url.slice(7))]
      }));

  }

  setDivs() {
    debugger;
    let albumId ;
    albumId = Number(this.props.match.url.slice(7))
    let songsList ;
    let contentUnderTitle ;
      let songsObj ;
      songsObj = this.props.albums[albumId].songList;
      songsList = <div className="results-container">
                  <ul className="random-song-list">
                    <li>
                      {songsObj.map((song,i) => (
                        <li className="song-item">
                          <div className="cute-icon">
                            ♪
                          </div>
                          <div className="track-details-container">
                            <span className="track-title">{song.title} </span>
                            <div className="other-track-details">
                              <span className="detail-contents">
                              </span>
                              <span class="line-separator">•</span>
                              <span className="detail-contents">
                              </span>
                            </div>
                          </div>
                          <div className="more-dropdown">
                          </div>
                          <div className="track-length">
                            0:30
                          </div>
                        </li>
                      ))}
                    </li>
                  </ul>
                </div>
      contentUnderTitle = <div className='content-under-album-art'>
                           <h1 className="album-name">{this.props.albums[albumId].title}</h1>
                           <h4 className="album-username">{this.props.albums[albumId].artist.name}</h4>
                         </div>
    return (
      <div className="album-show-container">
        <div className="art-side-container">
          <div className="album-art">
            <Link to="/" className="header-logo-link">
              <span></span>
            </Link>
          </div>
          <div className='content-under-album-art'>
            <h1 className="album-name">{Object.values(this.props.albums)[0]["name"]}</h1>
            <h4 className="album-username">
              <Link to= {`${`/artist/${this.props.albums[albumId].id}`}`} className="playlist-link">{this.props.albums[albumId].artist.name}</Link>
            </h4>
          </div>
        </div>
        <div className="album-side-container">
          {songsList}
        </div>
    </div>
    )
  }

  render () {
    let header ;
    let album ;
    debugger;
    if (this.state.album.id) {
      header = this.setDivs();
    } 
    debugger;
    return (
      <div className="album-album-show">
        {header}
      </div>
    )
  }
}
