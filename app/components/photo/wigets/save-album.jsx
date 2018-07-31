import React from 'react';
import {Uploader} from 'components/common/uploader'
import { removePopup } from 'actions';
class SaveAlbum extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      album: props.data.album || {
        name: "",
        description: "",
        img: null
      },
    }
    this.fileChange = this.fileChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveAlbum = this.saveAlbum.bind(this)
  }
  handleInputChange(event) {
    let album = this.state.album
    album[event.target.name] = event.target.value
    this.setState({album: album});
  }
  fileChange(file) {
    let album = this.state.album
    album.img = file
    this.setState({
      album
    })
  }
  saveAlbum() {
    if (!this.state.album.name || !this.state.album.description || !this.state.album.img) {
      alert('请完善信息！')
      return
    }
    Request.Photo.saveAlbum(this.state.album).then(resp => {
      if (resp.ok) {
        alert('保存成功！')
        browserHistory.push({
          pathname: `/album`,
        })        
        store.dispatch(removePopup())
      }
    })
  }
  componentDidMount() {
    // TODO: 需要有router中id 或者props中id 调用接口拿数据
  }
  render() {
    return (
      <div className="photo-save-page">
        <div>
          <div className="title">相册名称</div>
          <div className="input"><input  type="text" value={this.state.album.name} name="name" onChange={this.handleInputChange} placeholder="请输入标题" autoComplete="off" /></div>
        </div>
        <div>
          <div className="title">相册描述</div>
          <div className="input"><input  type="text" value={this.state.album.description} name="description" onChange={this.handleInputChange} placeholder="请输入描述" autoComplete="off" /></div>
        </div>
        <div>
          <div className="title">相册主题图</div>
          <div className="input">
            <Uploader onChange={this.fileChange} type="photo" file={this.state.album.img}></Uploader>
          </div>
        </div>
        <div>
          <button onClick={this.saveAlbum}>保存</button>
        </div>
      </div>
    )
  }
};

module.exports = {SaveAlbum}
