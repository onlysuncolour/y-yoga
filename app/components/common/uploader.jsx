import React from "react";
import * as Qiniu from 'qiniu-js'

class Uploader extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      file: null,
      fileName: "",
      observable: null,
      subscription: null,
    };
    this.handleFileChange = this.handleFileChange.bind(this)
    this.uploadFile = this.uploadFile.bind(this)

    this.uploadNext = this.uploadNext.bind(this)
    this.uploadError = this.uploadError.bind(this)
    this.uploadComplete = this.uploadComplete.bind(this)
  }
  handleFileChange(event) {
    let newState = {};
    newState.fileName = event.target.value
    newState.file = event.target.files[0]
    this.setState(newState);
  }
  uploadFile() {
    if (!this.state.file) {
      return
    }
    Request.Common.qiniuToken({key: this.state.file.name}).then(resp => {
      if (resp.ok) {
        let token = resp.data.token
        let observable = Qiniu.upload(
          this.state.file, 
          null, // TODO: key, 需要自己生成key + .file后缀
          token,
          {
            fname: this.state.file.name,
            mimeType: null
          },
          {
            region: Qiniu.region.z0
          }
        )
        this.setState({
          subscription: observable.subscribe(this.uploadNext, this.uploadError, this.uploadComplete),
          observable
        })
      }
    })
  }
  uploadNext(res) {
    // TODO: 重写uploader样式中的进度条的进度，需要从这边获取
  }
  uploadError(err) {
    // TODO: 处理上传失败
  }
  uploadComplete(res) {
    let files = [{
      filename: this.state.file.name,
      key: res.key,
      type: this.state.file.type
    }]
    Request.Common.addFile(files).then(resp => {
      if (resp.ok) {
        console.log('文件上传成功！')
        // TODO: 需要调用props方法 返回file的key
      }
    })
  }
  render() {
    // TODO: 需要重写uploader的样式
    return(
      <div>
        <input type="file" value={this.state.fileName} onChange={this.handleFileChange} name="file" />
        <button onClick={this.uploadFile}>test</button>
      </div>
    )
  }
}

module.exports = {Uploader}
