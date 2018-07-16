import React from "react";
import * as Qiniu from 'qiniu-js'

class Uploader extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
      // uploader: null,
      token: null,
      file: null,
      fileName: "",
      observable: null,
      subscription: null,
    };
    this.getQiniuToken = this.getQiniuToken.bind(this)
    // this.initUploader = this.initUploader.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.uploadFile = this.uploadFile.bind(this)

    this.uploadNext = this.uploadNext.bind(this)
    this.uploadError = this.uploadError.bind(this)
    this.uploadComplete = this.uploadComplete.bind(this)
  }
  componentWillMount() {
    this.getQiniuToken()
  }
  handleFileChange(event) {
    let newState = {};
    newState.fileName = event.target.value
    newState.file = event.target.files[0]
    this.setState(newState);
  }
  uploadFile() {
    // console.log(this.state.file)
    // this;
    // debugger;
    if (!this.state.file) {
      return
    }
    Request.Common.qiniuToken({key: this.state.file.name}).then(resp => {
      if (resp.ok) {
        let token = resp.data.token
        let observable = Qiniu.upload(
          this.state.file, 
          this.state.file.name, 
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
    
  }
  uploadError(err) {
    err
    this
    debugger;
  }
  uploadComplete(res) {
    res
    this
    debugger;
  }
  getQiniuToken() {
    // Request.Common.qiniuToken().then(resp => {
    //   if (resp.ok) {
    //     this.setState({
    //       token: resp.data.token
    //     })
    //   }
    // })
  }
  render() {
    return(
      <div>
        <input type="file" value={this.state.fileName} onChange={this.handleFileChange} name="file" />
        <button onClick={this.uploadFile}>test</button>
      </div>
    )
  }
}

module.exports = {Uploader}
