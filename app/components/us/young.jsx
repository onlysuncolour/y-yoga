import React from 'react';
import {YoungAnimate} from './young-animate'
import {MusicBox} from './music-box'

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
          <MusicBox></MusicBox>
        </div>

        young
      </div>
    )
  }
};

module.exports = {Young}
