import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'UI'
class Remark extends React.Component{
  constructor(props) {
    super();
    this.state = {
      // remark: props.remark,
      myReply: "",
      showReply: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.remove = this.remove.bind(this)
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
  remove() {
    Request.Blog.removeRemark(this.props.remark._id).then(resp => {
      if (resp.ok) {
        this.props.getDatas()
      }
    })
  }
  render() {
    return (
      <div className="remark">
        <div className="author">
          {this.props.remark.author.name}
        </div>
        <div className="content-panel">
          {
            !!this.props.remark.replayRemark && (
              <div className="reply">
                <div className="reply-info">
                  回复：
                </div>
                <div className="reply-content">
                  {this.props.remark.replayRemark.content}
                </div>
                <div className="reply-bottom">
                  <div className="reply-author">
                    {this.props.remark.replayRemark.author.name}
                  </div>
                  <div className="reply-date">
                    {new Date(this.props.remark.replayRemark.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            )
          }
          <div className="content">
            {this.props.remark.content}
          </div>
          {
            this.state.showReply ? (
              <div className="my-reply">
                <textarea name="myReply" value={this.state.myReply} onChange={this.handleChange}></textarea>
                <Button className="my-reply-btn" onClick={this.replay.bind(this, false)}>取消</Button>
                <Button className="my-reply-btn" onClick={this.submit}>评论</Button>
              </div>
            ) : (
              <div className="remark-footer">
                <div className="date">
                  {new Date(this.props.remark.createdAt).toLocaleDateString()}
                </div>
                <Button className="remark-btn" onClick={this.replay.bind(this, true)}>回复</Button>
                {(this.props.remark.author._id == this.props.me._id || this.props.me.admin) && (
                  <Button className="remark-btn" onClick={this.remove} >删除</Button>
                )}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    me: store.me.me,
    router: store.router,
  }
}

module.exports = {Remark: connect(mapStateToProps)(Remark)}