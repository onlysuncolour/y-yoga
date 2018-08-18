import React from 'react';

class MusicBox extends React.Component{
  constructor() {
    super();
    this.state = {
      duration: 0,
      currentTime: 0,
      autoplay: false,
      musicTagList: [],
      musicList: [],
      currentMusic: {},
      status: "pause",
    }
    this.musicBox = null;
    this.getMusicList = this.getMusicList.bind(this)
  }
  componentWillMount() {
    Request.Music.getTags().then(resp => {
      if (resp.ok) {
        this.setState({musicTagList: resp.data})
        this.getMusicList(resp.data[0]._id)
      }
    })
  }
  componentDidMount() {
  }
  getMusicList(tagId) {
    Request.Music.getList({tags: tagId}).then(resp => {
      if (resp.ok) {
        this.setState({
          musicList: resp.data,
          currentMusic: resp.data[0],
        })
      }
    })
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
      <div className="music-box-header">
        <audio src={this.state.currentMusic.url} autoPlay={this.state.autoplay}
          ref={music => this.musicBox=music}
          preload="true"
          onCanPlay={this.onCanPlay.bind(this)}
          onTimeUpdate={this.onTimeUpdate.bind(this)}
          onPause={this.testPause}
          onEnded={this.nextMusic.bind(this, true, 'onEnded')}
          onError={this.nextMusic.bind(this, true, 'onError')}
          onStalled={this.nextMusic.bind(this, true, 'onStalled')}
        ></audio>
        <div className="top-bar">
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
          <div className="music-title">{this.state.currentMusic.name}</div>
        </div>
        <div className="buttom-bar">
          <div className="music-progress-bar">
            <input type="range" className="music-range-input" value={this.state.currentTime} max={this.state.duration} min="0" onChange={this.changeCurrentTime.bind(this)} />
            {/* <span className="music-times">{Utils.getMinuteTime(this.state.currentTime)}/{Utils.getMinuteTime(this.state.duration)}</span> */}
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {MusicBox}
