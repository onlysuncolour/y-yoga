import React from 'react';
import {Button} from 'UI'
class Remark extends React.Component{
  constructor(props) {
    super();
    this.state = {
      remark: props.remark,
      myReply: "",
      showReply: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }
  replay(status) {
    this.setState({
      showReply: status
    })
  }
  submit() {
    if (!this.state.myReply) {
      return
    }
    let param = {
      blog: this.props.blogId,
      replayRemark: this.props.remark._id,
      content: this.state.myReply
    }
    Request.Blog.addRemark(param).then(resp => {
      if (resp.ok) {
        this.setState({
          myReply: "",
          showReply: false
        })
        this.props.getDatas()
      }
    })
  }
  render() {
    return (
      <div className="remark">
        <div className="author">
          {this.state.remark.author.name}
        </div>
        {
          !!this.state.remark.replayRemark && (
            <div className="reply">
              <div className="replyContent">
                {this.state.remark.replayRemark.content}
              </div>
              <div className="reply-bottom">
                <div className="reply-author">
                  {this.state.remark.replayRemark.author.name}
                </div>
                <div className="reply-date">
                  {this.state.remark.replayRemark.createdAt}
                </div>
              </div>
            </div>
          )
        }
        <div className="content">
          {this.state.remark.content}
        </div>
        {
          this.state.showReply ? (
            <div className="my-reply">
              <textarea name="myReply" value={this.state.myReply} onChange={this.handleChange}></textarea>
              <Button onClick={this.replay.bind(this, false)}>取消</Button>
              <Button onClick={this.submit}>评论</Button>
            </div>
          ) : (
            <div className="remark-footer">
              <div className="date">
                {new Date(this.state.remark.createdAt).toLocaleDateString()}
              </div>
              <Button onClick={this.replay.bind(this, true)}>回复</Button>
            </div>
          )
        }
      </div>
    )
  }
}
module.exports = {Remark}
