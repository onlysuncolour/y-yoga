import React from "react";
import PropTypes from 'prop-types';
import * as Qiniu from 'qiniu-js'

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      observable: null,
      subscription: null,
      url: props.file && props.file.url,
      uploadStatus: 'waiting'
    };
    this.handleFileChange = this.handleFileChange.bind(this)
    this.clear = this.clear.bind(this)
    this.uploadFile = this.uploadFile.bind(this)

    this.uploadNext = this.uploadNext.bind(this)
    this.uploadError = this.uploadError.bind(this)
    this.uploadComplete = this.uploadComplete.bind(this)
  }
  handleFileChange(event) {
    let newState = {};
    newState.file = event.target.files[0]
    this.setState(newState);
    this.uploadFile(newState.file)
  }
  clear() {
    this.setState({
      uploadStatus: 'waiting',
      url: null
    })
    this.state.file = null;
    this.refs.file.value = null
  }
  uploadFile(file) {
    if (!file) {
      return
    }
    this.setState({
      uploadStatus: 'loading',
      url: null,
    })
    Request.Common.qiniuToken().then(resp => {
      if (resp.ok) {
        let token = resp.data.token
        let key = getKey(file.name);
        let observable = Qiniu.upload(
          file, key, token,
          { fname: file.name, mimeType: null },
          { region: Qiniu.region.z0 }
        )
        this.setState({
          subscription: observable.subscribe(this.uploadNext, this.uploadError, this.uploadComplete),
          observable,
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
        let f = resp.data;
        this.setState({
          uploadStatus: 'done',
          url: f[0].url
        })
        this.props.onChange(f[0])
      }
    })
  }
  render() {
    // TODO: 需要重写uploader的样式
    return(
      <div className="uploader-page">
        <input type="file" ref="file" value={this.state.fileName} onChange={this.handleFileChange} name="file" />
        {/* <button onClick={this.uploadFile}>test</button> */}
        {
          this.state.uploadStatus == 'waiting' ? 
          <div>选择文件上传</div> : this.state.uploadStatus == 'loading' ? 
          <div>上传中</div> : 
          <div>上传成功</div>
        }
        {
          this.state.url? 
          <div className="img-wrapper"><img className="img" src={this.state.url} /></div> :
          <div></div>
        }
      </div>
    )
  }
}

Uploader.propTypes = {
  onChange: PropTypes.func.isRequired
}

let getKey = (filename) => {
  let randomString = (len) => {
  　len = len || 32;
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
    let maxPos = chars.length;
    let pwd = '';
　　for (let i = 0; i < len; i++) {
    　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  },
  getSuffix = (filename) => {
    let pos = filename.lastIndexOf('.');
    let suffix = '';
    if (pos != -1) {
        suffix = filename.substring(pos);
    }
    return suffix;
  };
  let suffix = getSuffix(filename);
  return `${randomString(24)}${suffix}`;
}

module.exports = {Uploader}
