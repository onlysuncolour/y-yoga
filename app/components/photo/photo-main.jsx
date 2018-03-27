import React from 'react';
import './photo-main.less'

class PhotoPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="photo-main-page">
        <div className="container">
          <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86" src="//music.163.com/outchain/player?type=2&id=28566360&auto=1&height=66"></iframe>
          <figure>
            <p>黄浦江上的的卢浦大桥</p>
            <p>拍摄者：W3School 项目组，拍摄时间：2010 年 10 月</p>
            <img src="../../images/small/8.jpg" width="350" height="234" />
          </figure>
          {/* <audio src="song.ogg" controls="controls"></audio> */}
        </div>
      </div>
    )
  }
};

module.exports = {PhotoPage}
