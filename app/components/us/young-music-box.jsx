import React from 'react';

class YoungMusicBox extends React.Component{
  constructor() {
    super();
    this.state = {
      duration: null,
      currentTime: null,
      autoplay: false,
      musicList: [
        {
          src: "http://music.163.com/song/media/outer/url?id=28660009.mp3",
          name: "Old Cash"
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
    // debugger;
    this.musicBox.play()
    this.setState({status: "play"})
  }
  stopMusic() {
    // debugger;
    this.musicBox.pause()
    this.setState({status: "pause"})
  }
  // musicOnEnd() {
  //   console.log('music-end')
  //   this.nextMusic.bind(this, true)()
  // }
  onCanPlay(e) {
    // debugger;
  }
  onTimeUpdate(e) {
    // debugger;
  }
  testPause() {
    // debugger;
  }
  nextMusic(type, status) {
    let index = this.state.musicList.indexOf(this.state.currentMusic),
      musicListLength = this.state.musicList.length,
      currentMusic;
    if (type === true) {
      currentMusic = index < musicListLength - 1 ? this.state.musicList[index+1] : this.state.musicList[0]
    } else if (type === false) {
      currentMusic = index == 0 ? this.state.musicList[musicListLength-1] : this.state.musicList[index-1]
    }
    this.setState({currentMusic, autoplay: true})
  }
  render() {
    return (
      <div className="young-music-box">
        young-music-box
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
        <div>{this.state.currentMusic.name}</div>
        <button onClick={this.playMusic.bind(this)}> 播放</button>
        <button onClick={this.nextMusic.bind(this, true, 'next')}> 下一首</button>
        <button onClick={this.nextMusic.bind(this, false, 'previous')}> 上一首</button>
        <button onClick={this.stopMusic.bind(this)}> 暂停</button>
      
      </div>
    )
  }
};

module.exports = {YoungMusicBox}
