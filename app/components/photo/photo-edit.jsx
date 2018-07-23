import {Uploader} from 'components/common/uploader'
import React from 'react';

class PhotoEdit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      photo: {
        name: '',
        img: {},
        album: this.props.album,
        description: '',
        tags: [],
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.fileChange = this.fileChange.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
  }
  componentDidMount() {
    // TODO: 如果有photoId 需要从photoId获得数据
  }
  handleInputChange(event) {
    let photo = this.state.photo
    photo[event.target.name] = event.target.value
    this.setState({
      photo
    });
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
        this.props.success();
      }
    })
  }
  render() {
    return (
      <div className="photo-edit-page">
        上传图片
        <div className="form">
          <Uploader onChange={this.fileChange} ref="uploader"></Uploader>
          图片名称
          <input value={this.state.photo.name} name="name" onChange={this.handleInputChange} />
          图片描述
          <input value={this.state.photo.description} name="description" onChange={this.handleInputChange} />
          所在相册：
          {this.state.photo.album.name}
          {/* // TODO: 标签 */}
          <button onClick={this.savePhoto}>上传</button>
        </div>
      </div>
    )
  }
}

module.exports = {PhotoEdit}
