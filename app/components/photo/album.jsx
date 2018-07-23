import React from 'react';
import './photo-main.less'
import styled from 'styled-components'
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
class AlbumPage extends React.Component{
  constructor() {
    super();
    this.state = {
      album: {},
      list: [],
    }
    this.getAlbumInfo = this.getAlbumInfo.bind(this)
    this.getPhotos = this.getPhotos.bind(this)
  }
  getAlbumInfo(albumId) {
    Request.Photo.getAlbum(albumId).then(resp => {
      if (resp.ok) {
        let album = resp.data
        this.setState({album})
      }
    })
  }
  getPhotos(id) {
    Request.Photo.listPhoto({album: id}).then(resp => {
      if (resp.ok) {
        let list = resp.data
        this.setState({list})
      }
    })
  }
  componentDidMount() {
    let id = searchformat.parse(this.props.location.search).id;
    this.getAlbumInfo(id)
    this.getPhotos(id)
    // debugger;
  }
  render() {
    let TopTab = () => {
      // if (this.props.me._id) {
      //   return (
      //     <div className="top-tab">
      //       上传图片
      //       <Uploader onChange={this.fileChange}></Uploader>
      //     </div>
      //   )
      // }
    }
    return (
      <div className="photo-main-page">
      {TopTab()}
        {/* <Album className="album-page">
          {
          this.state.list.map((item)=>{
            return (
              <Link to={`/ablum/detail/${item._id}`} key={item._id}>
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
        </Album> */}
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