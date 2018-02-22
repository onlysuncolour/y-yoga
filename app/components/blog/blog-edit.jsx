import React from 'react';
import Markdown from 'react-markdown'

import './blog-edit.less'

class BlogEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      blogContent: '# This is a header\n\nAnd this is a paragraph',
      blogTitle: "123",
    }
    this.handleBlogChange = this.handleBlogChange.bind(this)
  }
  handleBlogChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }
  componentDidMount () {}
  render () {
    // const input = '# This is a header\n\nAnd this is a paragraph'
    return (
      <div className="blog-edit-page">
        <div className="blog-title">
          <input type="text" value={this.state.title} name="blogTitle" onChange={this.handleBlogChange} placeholder="博文标题" />
        </div>
        <div className="blog">
          <div className="content">
            <div className="content-config">
              123
            </div>
            <textarea value={this.state.blogContent} name="blogContent" onChange={this.handleBlogChange} />
          </div>
          <div className="preview">
            <Markdown source={this.state.blogContent} />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {BlogEdit}
