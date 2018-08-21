import React from 'react';
import {Button} from 'UI'
import {Remark} from './remark'

class BlogReadRemark extends React.Component{
  constructor() {
    super();
    this.state = {
      remarkList: [],
      currentRemark: ""
    }
    this.getDatas = this.getDatas.bind(this)
    this.addRemark = this.addRemark.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }
  componentDidMount() {
    this.getDatas()
  }
  getDatas() {
    Request.Blog.getBlogRemark(this.props.blogId).then(resp => {
      if (resp.ok) {
        this.setState({
          remarkList: resp.data
        })
      }
    })
  }
  addRemark() {
    if (!this.state.currentRemark) {
      return;
    }
    Request.Blog.addRemark({
      blog: this.props.blogId,
      content: this.state.currentRemark,
    }).then(resp => {
      if (resp.ok) {
        this.getDatas()
        this.setState({currentRemark: ""})
      }
    })
  }
  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }
  render() {
    return (
      <div className="blog-read-remark">
        <hr/>
        <div className="add-remark">
          <div className="info">你想说些什么？</div>
          <textarea name="currentRemark" className="remark" value={this.state.currentRemark} onChange={this.handleChange}></textarea>
          <Button className="add-remark-btn" onClick={this.addRemark}>发表</Button>
        </div>
        <div className="remark-list">
          {
            this.state.remarkList.map(r => {
              return (
                <Remark getDatas={this.getDatas} key={r._id} remark={r} blogId={this.props.blogId}></Remark>
              )
            })
          }
        </div>
      </div>
    )
  }
};

module.exports = {BlogReadRemark}
