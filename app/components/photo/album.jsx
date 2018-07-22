import React from 'react';
import './photo-main.less'
import styled from 'styled-components'
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';

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
class AlbumPage extends React.Component{
  constructor() {
    super();
    this.state = {
      // 七牛获取图片宽高，设置img
      list: [],
      file: null
    }
  }
  getData() {
    Request.Photo.albumList().then(resp => {
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
    const TopTab = () => {
      if (this.props.me._id) {
        return (
          <div className="top-tab">
            <Link to="/album/edit"> 新建 </Link>
          </div>
        )
      }
    }
    return (
      <div className="photo-main-page">
      {TopTab()}
        <Album className="album-page">
          {
          this.state.list.map((item)=>{
            return (
              <Link to={`/photo/ablum/${item._id}`} key={item._id}>
                <div className="album-wrapper">
                  <div className="album-thumbnail">
                    <img className="album-image" 
                    src={item.img.url}
                    />
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
      </div>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    me: store.me.me,
    router: store.router,
  }
}

module.exports = {AlbumPage: connect(mapStateToProps)(AlbumPage)}