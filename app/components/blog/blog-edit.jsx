import React from 'react';
import Markdown from 'react-markdown'

import './blog-edit.less'

class BlogEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      blogContent: '# This is a header\n\nAnd this is a paragraph',
      blogTitle: "123",
      taglist: [],
      selectedTags: [],
    }
    this.handleBlogChange = this.handleBlogChange.bind(this)
    this.getTags = this.getTags.bind(this)
  }
  handleBlogChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }
  getTags() {
    Request.Blog.getBlogCategory().then(resp => {
      if (resp.ok) {
        let taglist = resp.data
        this.setState({
          taglist: taglist,
        })
      }
    })
  }
  selectTag(tagKey) {
    let selectedTags = this.state.selectedTags
    if (selectedTags.indexOf(tagKey) == -1) {
      selectedTags.push(tagKey)
    } else {
      let index = selectedTags.indexOf(tagKey)
      selectedTags.splice(index, 1)
    }
    this.setState({
      selectedTags
    })
  }
  componentWillMount () {
    this.getTags()
  }
  render () {
    // const input = '# This is a header\n\nAnd this is a paragraph'
    return (
      <div className="blog-edit-page">
        <div className="blog-title">
          <input type="text" value={this.state.title} name="blogTitle" onChange={this.handleBlogChange} placeholder="博文标题" />
        </div>
        <div className="blog-tag-config">
          tags: 
          {
            this.state.taglist.map(i => {
              let className = "y-tag"
              if (this.state.selectedTags.indexOf(i.key) != -1) {
                className += " y-tag-selected"
              }
              return (
                <div className={className} key={i.key} onClick={this.selectTag.bind(this, i.key)}>
                  {i.title}
                </div>
              )
            })
          }
        </div>
        <div className="blog">
          <div className="content">
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
