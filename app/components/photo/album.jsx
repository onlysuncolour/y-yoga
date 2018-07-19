import React from 'react';
import './photo-main.less'
import styled from 'styled-components'
import Link from 'react-router-dom/Link';
import {Uploader} from 'components/common/uploader'

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
      list: [],
      file: null
    }
    this.fileChange = this.fileChange.bind(this)
  }
  fileChange(file) {
    this.setState({
      file
    })
  }
  getData() {
    Request.Photo.listAblum().then(resp => {
      console.log(resp)
      if (resp.ok) {
        this.setState({
          list: resp.data
        })
      }
    }, error => {

    })
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <div className="photo-main-page">
      <div className="uploader-test">
        <Uploader onChange={this.fileChange}></Uploader>
      </div>
        <Album className="album-page">
          {
          this.state.list.map((item, index)=>{
            return (
              <Link to={`/photo/ablum/${item._id}`} key={item._id}>
                <div className="album-wrapper">
                  <div className="album-thumbnail">
                    <img className="album-image" src={item.imgUrl}/>
                  </div>
                  <div className="album-name">{item.name}</div>
                  <div className="album-desc">{item.description}</div>
                  <div className="album-other"><span className="fl">n张照片</span><span className="fr">{item.updatedAt}更新</span></div>
                </div>
              </Link>
            )
          })
          }
        </Album>
        <div className="container">
        {
          <div className="album-wrapper">
          {
            this.state.list.map((a, index) => {
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
