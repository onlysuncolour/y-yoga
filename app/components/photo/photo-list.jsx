import React from 'react';
// import './photo-main.less'
import './photo-list.less'
import styled from 'styled-components'
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import { addPopup } from 'actions';
import { Button } from 'UI';
import { SavePhoto } from './wigets/save-photo'


const Photo = styled.div`
    .photo-item{

    }
`
class PhotoList extends React.Component{
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
  editPhoto(photo) {
    let editPhotoPopup = {
      render: (data, events) => {
        return (
          <SavePhoto data={data} events={events}>
          </SavePhoto>
        )
      },
      data: {
        title: '上传图片',
        photo,
        album: this.state.album
      },
      events: {
        success: () => {
          this.getPhotos()
        }
      }
    }
    store.dispatch(addPopup(editPhotoPopup))
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
    const TopTab = () => {
      if (this.props.me._id) {
        return (
          <div className="toolbox-wrapper">
            {/* <Link to="/album/edit"> 新建 </Link> */}
            <Button onClick={this.editPhoto.bind(this, null)}>添加</Button>
          </div>
        )
      }
    }
    return (
      <div className="photo-main-page main-container">
        <div className="main-container">
        
          {/* {showAddAlbum()} */}
          <div className="main">
              {
              this.state.list.map((item)=>{
                return (
                  <Photo className="photo-item" key={item._id}>
                    <img className="photo-image" src={item.img.url}/>
                    <div className="photo-name" onClick={this.editPhoto.bind(this, item)}>{item.name}</div>
                    <div className="photo-desc">{item.description}</div>
                  </Photo>
                )
              })
              }
          </div>
          <div className="right">
            {TopTab()}
            <p className="list-title">Top:</p>
            <ul className="list-wrapper">
              {
                this.state.list.map((item, index)=>{
                  return (
                    <li className="list-item" key={item._id}>
                      <span className="number">{index}</span>
                      <span>{item.name}</span>
                      <span className="count">42k views</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
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

module.exports = {PhotoList: connect(mapStateToProps)(PhotoList)}