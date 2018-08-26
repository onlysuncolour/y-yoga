import React from 'react';
import './photo-main.less'
import styled from 'styled-components'
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import {SaveAlbum} from './wigets/save-album'
import { addPopup } from 'actions';
import { Button } from 'UI';
import Lottie from 'lottie-web';

const Album = styled.div`
    .album-wrapper{
      display: inline-block;
      padding: 20px;
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
class AlbumListPage extends React.Component{
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
  initSvg() {
    Lottie.loadAnimation({
      container: this.refs.lottieDemo, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'app/images/svg/letter.json' // the path to the animation json
    });
  }
  componentDidMount() {
    this.getData();
    this.initSvg();
  }
  editAlbum(album) {
    let editAlbumPopup = {
      render: (data, events) => {
        return (
          <SaveAlbum data={data} events={events}>
          </SaveAlbum>
        )
      },
      data: {
        album
      },
      events: {
        success: () => {
          this.getData()
        }
      }
    }
    store.dispatch(addPopup(editAlbumPopup))
  }
  render() {
    const TopTab = () => {
      if (this.props.me._id) {
        return (
          <div className="top-tab">
            {/* <Link to="/album/edit"> 新建 </Link> */}
            <Button onClick={this.editAlbum.bind(this, null)} type="primary">新建</Button>
          </div>
        )
      }
    }
    return (
      <div className="photo-main-page">
      <div style={{width:'100px', height:'100px'}} ref="lottieDemo"></div>
      <div>
        <p>buttons</p>
        <Button>default</Button>
        <Button className="y-btn-text">text</Button>
        <Button className="y-btn-text-green">text-green</Button>
        <Button className="y-btn-green">text-green</Button>
      </div>
      {TopTab()}
        <Album className="album-page">
          {
          this.state.list.map((item)=>{
            return (
              <div className="album-wrapper" key={item._id}>
                <div className="album-thumbnail">
                  <img className="album-image" 
                  src={item.img.url + '?imageView2/1/w/350/h/350'}
                  />
                </div>
                <Link to={
                    {pathname: '/album/detail',
                    search: searchformat.stringify({id: item._id})}
                  }>{item.name}</Link>
                <div className="album-desc">{item.description}</div>
                <div className="album-other"><span className="fl">n张照片</span><span className="fr">{item.updatedAt}更新</span></div>
                <Button onClick={this.editAlbum.bind(this, item)}>编辑</Button>
              </div>
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

module.exports = {AlbumListPage: connect(mapStateToProps)(AlbumListPage)}