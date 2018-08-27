import React from 'react';
import {Uploader} from 'components/common/uploader'
import { removePopup } from 'actions';
class SavePhoto extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      photo: props.data.photo || {
        name: '',
        img: null,
        album: props.data.album,
        description: '',
        tags: [],
      },
    }
    this.fileChange = this.fileChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
  }
  // showModal = () => {
  //   this.savePhoto()
  // }

  // hideModal = () => {
  //   store.dispatch(removePopup())
  // }
  handleInputChange(event) {
    let photo = this.state.photo
    photo[event.target.name] = event.target.value
    this.setState({photo: photo});
  }
  fileChange(file) {
    let photo = this.state.photo
    photo.img = file
    this.setState({
      photo
    })
  }
  savePhoto() {
    Request.Photo.savePhoto(this.state.photo).then(resp =>{ 
      if (resp.ok) { 
        console.log('上传成功！')     
        this.refs.uploader.clear();
        let photo = this.state.photo
        photo.name = ''
        photo.img = null
        photo.description = ''
        this.setState({photo})
        this.props.events.success();
        store.dispatch(removePopup())
        // this.props.success();
      }
    })
  }
  componentDidMount() {
    // TODO: 需要有router中id 或者props中id 调用接口拿数据
  }
  render() {
    return (
      <div className="photo-edit-page">
        {/* 上传图片 */}
        <div className="form">
          <Uploader onChange={this.fileChange} ref="uploader"  file={this.state.photo.img}></Uploader>
          图片名称
          <input value={this.state.photo.name} onChange={this.handleInputChange} />
          图片描述
          <input value={this.state.photo.description} onChange={this.handleInputChange} />
          所在相册：
          {this.state.photo.album.name}
          {/* // TODO: 标签 */}
          <button onClick={this.savePhoto}>上传</button>

        </div>
      </div>
    )
  }
};

module.exports = {SavePhoto}
