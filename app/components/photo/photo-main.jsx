import React from 'react';
import './photo-main.less'

class PhotoPage extends React.Component{
  constructor() {
    super();
    this.state = {
      // 七牛获取图片宽高，设置img
      arr: [1,2,3,4,5,6]
    }

  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="photo-main-page">
        <div className="container">
        {/* <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=18212759&auto=1&height=66"></iframe> */}
          <div className="album-wrapper">
          {
            this.state.arr.map(a => {
              return (
                <figure key="a">
                  <p className="album-title">黄浦江上的的卢浦大桥</p>
                  <p className="album-desc">拍摄者：W3School 项目组，拍摄时间：2010 年 10 月</p>
                  <img className="album-photo" src="app/images/small/8.jpg"/>
                </figure>
              )
            })
          }
            
          </div>
          {/* <audio src="song.ogg" controls="controls"></audio> */}
        </div>
      </div>
    )
  }
};

module.exports = {PhotoPage}
