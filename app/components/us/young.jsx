import React from 'react';
import {YoungAnimate} from './young-animate'

class Young extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="young-page">
        <div className="container">
          <YoungAnimate></YoungAnimate>
        </div>

        young
      </div>
    )
  }
};

module.exports = {Young}
