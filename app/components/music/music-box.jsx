import React from 'react';

class MusicBox extends React.Component{
  constructor() {
    super();
    this.state = {
      duration: 0,
      currentTime: 0,
      autoplay: false,
      musicList: [
        {
          src: "http://music.163.com/song/media/outer/url?id=28660009.mp3",
          name: "Old Money"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=5046372.mp3",
          name: "Way Back To Love"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=642718.mp3",
          name: "君ノ瞳ニ恋シテル"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=38358220.mp3",
          name: "What is A Youth"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=1698589.mp3",
          name: "Wild World"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=30841780.mp3",
          name: "Death With Dignity"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=441612583.mp3",
          name: "City Of Stars"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=26354120.mp3",
          name: "Another Love"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=26354121.mp3",
          name: "I Know"
        }, {
          src: "http://music.163.com/song/media/outer/url?id=401249910.mp3",
          name: "We Don't Talk Anymore"
        }
      ],
      currentMusic: {},
      status: "pause",
    }
    this.musicBox = null;
  }
  componentDidMount() {
    let currentMusic = this.state.musicList[0]
    this.setState({currentMusic})
  }
  playMusic() {
    this.musicBox.play()
    this.setState({status: "play"})
  }
  stopMusic() {
    this.musicBox.pause()
    this.setState({status: "pause"})
  }
  onCanPlay(e) {
    this.setState({
      duration: e.target.duration || 0,
      currentTime: e.target.currentTime || 0,
    })
  }
  onTimeUpdate(e) {
    this.setState({
      duration: e.target.duration || 0,
      currentTime: e.target.currentTime || 0,
    })
  }
  nextMusic(type, status) {
    let index = this.state.musicList.indexOf(this.state.currentMusic),
      musicListLength = this.state.musicList.length,
      currentMusic,
      autoplay = true;
    if (type === true) {
      currentMusic = index < musicListLength - 1 ? this.state.musicList[index+1] : this.state.musicList[0]
    } else if (type === false) {
      currentMusic = index == 0 ? this.state.musicList[musicListLength-1] : this.state.musicList[index-1]
    }
    if (this.state.status == "pause" && (status == "onEnded" || status == "onError" || status == "onStalled")) {
      autoplay = false
    }
    this.setState({currentMusic, autoplay, duration: 0, currentTime: 0})
  }
  changeCurrentTime(e) {
    let currentTime
    if (typeof e == 'number') {
      currentTime = e
    } else {
      currentTime = e.target.value
    }
    this.musicBox.currentTime = currentTime
    this.setState({
      currentTime
    })
  }
  changeMusic(music) {
    if(music == this.state.currentMusic) {
      this.changeCurrentTime.bind(this, 0)
    } else {
      this.setState({ currentMusic: music, autoplay: true })
    }
  }
  render() {
    return (
      <div className="music-box-main">
        <div className="music-box-table">
          <audio src={this.state.currentMusic.src} autoPlay={this.state.autoplay}
            ref={music => this.musicBox=music}
            preload="true"
            onCanPlay={this.onCanPlay.bind(this)}
            onTimeUpdate={this.onTimeUpdate.bind(this)}
            onPause={this.testPause}
            onEnded={this.nextMusic.bind(this, true, 'onEnded')}
            onError={this.nextMusic.bind(this, true, 'onError')}
            onStalled={this.nextMusic.bind(this, true, 'onStalled')}
          ></audio>
          <div className="music-title">{this.state.currentMusic.name}</div>
          <div className="music-controls">
            <div className="buttons-tab">
              <span className="icon-step-backward music-control-btn previous-btn" onClick={this.nextMusic.bind(this, false, 'previous')}></span>
              {
                {
                  pause: ( 
                  <span className="icon-play music-control-btn play-btn" onClick={this.playMusic.bind(this)}></span>
                ),
                  play: ( 
                  <span className="icon-pause music-control-btn pause-btn" onClick={this.stopMusic.bind(this)}></span>
                ),
                }[this.state.status]
              }
              <span className="icon-step-forward music-control-btn next-btn" onClick={this.nextMusic.bind(this, true, 'next')}></span>
            </div>
            <div className="music-progress-bar">
              <input type="range" className="music-range-input" value={this.state.currentTime} max={this.state.duration} min="0" onChange={this.changeCurrentTime.bind(this)} />
              {/* <span className="music-current-time">{Utils.getMinuteTime(this.state.currentTime)}</span>
              <span className="music-duration">{Utils.getMinuteTime(this.state.duration)}</span> */}
              <span className="music-times">{Utils.getMinuteTime(this.state.currentTime)}/{Utils.getMinuteTime(this.state.duration)}</span>
            </div>
          </div>
        </div>
        <div className="music-list-table">
          <ul className="music-list">
          {
            this.state.musicList.map((music, index) => {
              return (
                <li key={index}>
                  <span
                    className={`music-name ${this.state.currentMusic==music ? "music-name-on-playing" : ""}`}
                    onDoubleClick={this.changeMusic.bind(this, music)}
                  >{music.name}</span>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }
};

module.exports = {MusicBox}
