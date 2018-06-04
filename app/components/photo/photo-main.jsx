import React from 'react';
import './photo-main.less'
import styled from 'styled-components'

const Album = styled.div`
    .album-wrapper{
      display: inline-block;
      margin: 40px 130px;
      .album-thumbnail{
        width: 181px;
        height: 181px;
        background: url(https://img3.doubanio.com/f/shire/283921263c43e490777b39d1a4e03bdedfc4d871/pics/albumback.gif) 1px 1px no-repeat;
        padding: 4px 7px 7px 4px;
        .album-image{
          display: block;
          width: 100%;
        }
      }
      .album-name{
        margin-top: 10px;
        font-size: 16px;
      }
      .album-desc{
        margin-top: 3px;
        font-size: 14px;
      }
      .album-other{
        margin-top: 20px;
        font-size: 14px;
        clear: both;
      }
    }
    .sidebar{
      .search{}
      .tag-wrapper{
        .tag{}
      }
    }
`
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
        <Album className="album-page">
          {
          [1,2,3,4].map((item, index)=>{
            return (
              <div className="album-wrapper" key={index}>
                <div className="album-thumbnail">
                  <img className="album-image" src="https://img3.doubanio.com/view/photo/sqs/public/p2169576573.webp"/>
                </div>
                <div className="album-name">Kinfolk</div>
                <div className="album-desc">city guides</div>
                <div className="album-other"><span className="fl">138张照片</span><span className="fr">2016-11-13更新</span></div>
              </div>
            )
          })
          }
        </Album>
        <div className="container">
        {
          <div className="album-wrapper">
          {
            this.state.arr.map((a, index) => {
              return (
                <figure key={index}>
                  <p className="album-title">黄浦江上的的卢浦大桥</p>
                  <p className="album-desc">拍摄者：W3School 项目组，拍摄时间：2010 年 10 月</p>
                  <img className="album-photo" src="app/images/small/8.jpg"/>
                </figure>
              )
            })
          }
            
          </div>
        }
        </div>
      </div>
    )
  }
};

module.exports = {PhotoPage}
