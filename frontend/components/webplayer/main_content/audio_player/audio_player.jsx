import React from 'react';
import ReactPlayer from 'react-player';

class AudioPlayer extends React.Component{
  constructor(props){
    super(props);
    this.playToggle = this.playToggle.bind(this);
    this.state = {
      url: '',
      playing: false,
      songQueue: ['https://www.youtube.com/watch?v=ysz5S6PUM-U',
                  'https://www.youtube.com/watch?v=d46Azg3Pm4c',
                  'https://www.youtube.com/watch?v=d46Azg3Pm4c',
                  'https://www.youtube.com/watch?v=d46Azg3Pm4c'],
      recentlyPlayed: []
    };
    this.radioPlay = this.radioPlay.bind(this);
    this.shufflePlay = this.shufflePlay.bind(this);
    this.nextInQueue = this.nextInQueue.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
    debugger;
    // seems to only mount once
    console.log('video player mounted')
    debugger;
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevProps !== this.props) {
      let newUrl = this.props.songs[0].songUrl
      this.setState({
        url: newUrl,
        songQueue: this.props.songs.slice(1),
        playing: true
      })
    }
    // updated whenever action is sent
    console.log('video player updated')
    debugger;
    console.log(this.state.playing)

  }

  shufflePlay() {
    // Durstenfeld shuffle algorithm, credits to Scott on SO
    let currentList = this.state.songQueue;
    for (let i = currentList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [currentList[i], currentList[j]] = [currentList[j], currentList[i]];
    }
    this.setState({
      songQueue: currentList
    });
    console.log(this.state.songQueue);
  }

  radioPlay() {
    this.setState({
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
      playing: true
    });
  }

  playToggle() {

    if (this.state.playing === true) {
      document.getElementById("playbutton")
              .classList.add('not-playing');

      this.setState({playing: false})
    } else {
      document.getElementById("playbutton")
              .classList.add('currently-playing');

      this.setState({playing: true})
    }
  }

  nextInQueue() {
    let currentQueue = this.state.songQueue
    let newRecentlyPlayedState = this.state.recentlyPlayed
    newRecentlyPlayedState.push(this.state.url)
    if (currentQueue.length === 1) {
      this.setState({
        recentlyPlayed: newRecentlyPlayedState,
        playing: false
      });
    } else {
      let nextURLState = currentQueue.shift();
      this.setState ({
        url: nextURLState.songUrl,
        songQueue: currentQueue,
        recentlyPlayed: newRecentlyPlayedState
      });
    }
  }


  onProgress (info) {
    // use this for playing bar
  }

  render(){

    return (
      <div className="music player">
        <button onClick={this.playToggle}
                id="playbutton"
                className="toggle-button footer-button">
        </button>
        <button onClick={this.radioPlay}
                id="radiobutton"
                className="radio-button footer-button">
        </button>
        <button onClick={this.shufflePlay}
                id="shufflebutton"
                className="shuffle-button footer-button">
        </button>

          <div className="video-player">
            <ReactPlayer
              height = '100%'
              width = '0%'
              url = {this.state.url}
              playing = {this.state.playing}
              onEnded = {this.nextInQueue}
              onProgress = {(info) => this.onProgress(info)}
              />
          </div>

      </div>
      );
    }
  }
  export default AudioPlayer;
