import React from 'react';
import {YoungAnimate} from './young-animate'

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
          <div className="basic-info">
            <div>头像</div>
            <div>个人介绍</div>
            <div>大图</div>
          </div>
          <div className="tech-info">
            <div>掌握前端技术介绍</div>
            <div>大图</div>
          </div>
          <div className="tech-info">
            <div>掌握前端技术介绍</div>
            <div>大图</div>
          </div>


        </div>
      </div>
    )
  }
};

module.exports = {Young}
