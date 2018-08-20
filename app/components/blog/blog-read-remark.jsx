import React from 'react';
import {Button} from 'UI'

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
          <textarea name="currentRemark" className="remark" value={this.state.currentRemark} onChange={this.handleChange}></textarea>
          <Button onClick={this.addRemark}>发表</Button>
        </div>
        <div className="remark-list">
          {
            this.state.remarkList.map(r => {
              return (
                <div key={r._id}>
                  {r.content} {new Date(r.createdAt).toLocaleDateString()} {r.author.name}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
};

module.exports = {BlogReadRemark}
