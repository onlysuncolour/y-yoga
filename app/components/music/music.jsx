import React from 'react';
import {MusicBox} from './music-box'
require('./music.less')

class Music extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="music-page">
        <div className="container">
          <MusicBox></MusicBox>
        </div>
      </div>
    )
  }
};

module.exports = {Music}
