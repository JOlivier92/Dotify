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
                  'https://www.youtube.com/watch?v=d46Azg3Pm4c'
                ],
      recentlyPlayed: [],
      shuffle: false,
      repeat: false,
      radio: false,
    };
    this.radioPlay = this.radioPlay.bind(this);
    this.repeatToggle = this.repeatToggle.bind(this);
    this.shufflePlay = this.shufflePlay.bind(this);
    this.nextInQueue = this.nextInQueue.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }

  componentDidMount() {
    debugger;
    // this.props.fetchSongs();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  componentDidUpdate(prevProps,prevState) {
    debugger;
    if (prevProps !== this.props) {
      let newUrl = this.props.currentQueue[0][2]
      this.setState({
        url: newUrl,
        songQueue: this.props.currentQueue.slice(1),
        playing: true,
        radio: false,
        shuffle: false
      })
    }
    // updated whenever action is sent
    console.log('video player updated')
    console.log(this.state.playing)
    debugger;

  }

  shufflePlay() {
    // Durstenfeld shuffle algorithm, credits to Scott on SO
    let currentList = this.state.songQueue;
    for (let i = currentList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [currentList[i], currentList[j]] = [currentList[j], currentList[i]];
    }
    this.setState({
      songQueue: currentList,
      shuffle: true
    });
    console.log(this.state.songQueue);
  }

  radioPlay() {
    this.setState({
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
      playing: true,
      radio: true
    });
  }

  playToggle() {

    if (this.state.playing === true) {
      this.setState({playing: false})
    } else {
      this.setState({playing: true})
    }
  }

  repeatToggle() {
    if (this.state.repeat === true) {
      this.setState({repeat: false})
    } else {
      this.setState({repeat: true})
    }
  }

  nextInQueue() {
    debugger;
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
        url: nextURLState[2],
        songQueue: currentQueue,
        recentlyPlayed: newRecentlyPlayedState,
        playing: true
      });
    }
    debugger;
  }


  onProgress (info) {
    console.log(info);
  }

  render(){
    let playbutton ;
    let shufflebutton ;
    let repeatbutton ;
    let radiobutton

    if (this.state.shuffle) {
      shufflebutton = <i class="fal fa-random active" />;
    } else {
      shufflebutton = <i class="fal fa-random" />;
    }

    if (this.state.radio) {
      radiobutton = <i class="fal fa-broadcast-tower active" />;
    } else {
      radiobutton = <i class="fal fa-broadcast-tower" />;
    }

    if (this.state.repeat) {
      repeatbutton = <i class="fal fa-repeat active" />;
    } else {
      repeatbutton = <i class="fal fa-repeat" />;
    }

    if (this.state.playing) {
      playbutton = <i class="fal fa-pause-circle active" />;
    } else {
      playbutton = <i class="fal fa-play-circle" />;
    }

    return <div className="music-player">
        <button onClick={this.shufflePlay} id="shufflebutton" className="footer-button">
          {shufflebutton}
        </button>
        <button className="footer-button">
          <i class="fal fa-step-backward" />
        </button>
        <button onClick={this.playToggle} id="playbutton" className="footer-button play-button">
          {playbutton}
        </button>
        <button className="footer-button">
          <i class="fal fa-step-forward"></i>
        </button>
        <button onClick={this.repeatToggle} id="repeatbutton" className="footer-button">
          {repeatbutton}
        </button>
        <button onClick={this.radioPlay} id="radiobutton" className="radio-button footer-button">
          {radiobutton}
        </button>
        <div className="video-player">
          <ReactPlayer height="100%" width="0%" url={this.state.url} playing={this.state.playing} onEnded={this.nextInQueue} onProgress={info => this.onProgress(info)} />
        </div>
      </div>;
    }
  }
  export default AudioPlayer;
