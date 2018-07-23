import React from 'react';
import './photo-main.less'
import styled from 'styled-components'
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import {PhotoEdit} from './photo-edit'

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
  constructor(props) {
    super(props);
    this.state = {
      albumId: searchformat.parse(props.location.search).id,
      album: {},
      list: [],
    }
    this.getAlbumInfo = this.getAlbumInfo.bind(this)
    this.getPhotos = this.getPhotos.bind(this)
  }
  getAlbumInfo() {
    Request.Photo.getAlbum(this.state.albumId).then(resp => {
      if (resp.ok) {
        let album = resp.data
        this.setState({album})
      }
    })
  }
  getPhotos() {
    Request.Photo.listPhoto({album: this.state.albumId}).then(resp => {
      if (resp.ok) {
        let list = resp.data
        this.setState({list})
      }
    })
  }
  componentDidMount() {
    this.getAlbumInfo()
    this.getPhotos()
  }
  render() {
    if (!this.state.album._id) {
      return (
        <div></div>
      )
    }
    let showAddAlbum = () => {
      if (this.props.me._id) {
        return (
          <PhotoEdit album={this.state.album} success={this.getPhotos}></PhotoEdit>
        )
      }
    }
    return (
      <div className="photo-main-page">
      {showAddAlbum()}
        <Album className="album-page">
          {
          this.state.list.map((item)=>{
            return (
              <div key={item._id}>
                <div className="album-wrapper">
                  <div className="album-thumbnail">
                    <img className="album-image" 
                    src={item.img.url}
                    />
                  </div>
                  <div className="album-name">{item.name}</div>
                  <div className="album-desc">{item.description}</div>
                </div>
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

module.exports = {AlbumPage: connect(mapStateToProps)(AlbumPage)}