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
      current: 0,
      progress: 0
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

  updateProgress() {
    let duration = this.refs.player.duration;
    let currentTime = this.refs.player.currentTime;
    let progress = (currentTime * 100) / duration;

    this.setState({ progress: progress });
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
    let currTime ;
    let currTimeSeconds ;
    let currTimeMinutes ;
    let currTimeHours ;
    let currTimeString ;

    let totalTime ;
    let totalTimeSeconds ;
    let totalTimeMinutes ;
    let totalTimeHours ;
    let totalTimeString ; 

    document.getElementById("progress-bar").setAttribute("value", info.played);
    
    // set current time
    currTime = Math.ceil(info.playedSeconds);
    currTimeSeconds = currTime % 60;
    currTimeMinutes = Math.floor(currTime / 60);
    if (currTimeMinutes > 60) {
      currTimeHours = Math.floor(currTime / 3600);
      currTimeMinutes %= 60;
    } else {
      currTimeHours = 0;
    }

    if (currTimeMinutes < 10 && currTimeMinutes > 0) {
      currTimeMinutes = `0${currTimeMinutes}`;
    }
    if (currTimeSeconds < 10) {
      currTimeSeconds = `0${currTimeSeconds}`;
    }
    if (currTimeHours) {
      currTimeString = `${currTimeHours}:${currTimeMinutes}:${currTimeSeconds}`;
    } else {
      currTimeString = `${currTimeMinutes}:${currTimeSeconds}`;
    }

    // set total time
    totalTime = Math.ceil(info.playedSeconds / info.played);
    totalTimeSeconds = totalTime % 60;
    totalTimeMinutes = Math.floor(totalTime / 60);
    if (totalTimeMinutes > 60) {
      totalTimeHours = Math.floor(totalTime / 3600);
      totalTimeMinutes %= 60;
    } else {
      totalTimeHours = 0;
    }

    if (totalTimeMinutes < 10 && totalTimeMinutes > 0) {
      totalTimeMinutes = `0${totalTimeMinutes}`;
    }
    if (totalTimeSeconds < 10) {
      totalTimeSeconds = `0${totalTimeSeconds}`;
    }
    if (totalTimeHours) {
      totalTimeString = `${totalTimeHours}:${totalTimeMinutes}:${totalTimeSeconds}`;
    } else {
      totalTimeString = `${totalTimeMinutes}:${totalTimeSeconds}`;
    }

    document.getElementById("current-time").innerHTML = currTimeString
    document.getElementById("total-time").innerHTML = totalTimeString
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
        <div className="button-class">
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
            <i class="fal fa-step-forward" />
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
        </div>
        <div className="progress-div">
          <div id = "current-time" className="current-time"></div>
          <progress id="progress-bar" max="1" value = ""/>
          <div id = "total-time" className="total-time"></div>
        </div>
      </div>
    }
  }
  export default AudioPlayer;
