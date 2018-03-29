import React from 'react';
import {YoungAnimate} from './young-animate'
import {YoungMusicBox} from './young-music-box'

class Young extends React.Component{
  constructor() {
    super();
    this.state = {
      showAnimate: true
    }
  }
  componentDidMount() {

  }
  closeAnimate() {
    this.setState({
      showAnimate: false
    })
  }
  render() {
    const Animate = () => {
      return this.state.showAnimate && (
        <YoungAnimate closeAnimate={this.closeAnimate.bind(this)}></YoungAnimate>
      )
    }
    return (
      <div className="young-page">
        {/* {Animate()} */}
        <div className="container">
          <YoungMusicBox></YoungMusicBox>
        </div>

        young
      </div>
    )
  }
};

module.exports = {Young}
