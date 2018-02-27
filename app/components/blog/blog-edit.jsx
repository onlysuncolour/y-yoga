import React from 'react';
import Markdown from 'react-markdown'
import {store} from "app/common/redux/store";
import { connect } from 'react-redux';

import './blog-edit.less'

class BlogEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      blogContent: '# This is a header\n\nAnd this is a paragraph',
      blogTitle: "",
      blogObj: {},
      taglist: [],
      selectedTags: [],
      loading: false,
    }
    this.handleBlogChange = this.handleBlogChange.bind(this)
    this.getTags = this.getTags.bind(this)
    this.saveBlog = this.saveBlog.bind(this)
    this.getBlog = this.getBlog.bind(this)
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
  saveBlog() {
    let blog = this.state.blogObj;
    if (!blog._id) {
      blog.author = this.props.me.userName
      blog.author_id = this.props.me.userId
      blog.created_at = new Date().getTime()
    } else {
      blog.updated_at = new Date().getTime()
    }
    blog.content = this.state.blogContent
    blog.title = this.state.blogTitle
    blog.tags = this.state.selectedTags;
    Request.Blog.saveBlog(blog).then(resp => {
      if (resp.ok) {
        console.log('保存成功');
      }
    })
  }
  componentWillMount() {
    this.getTags()
    let id = this.props.match.params.id;
    if (id) {
      this.setState({
        loading: true
      })
      this.getBlog(id);
    }
  }
  getBlog(id) {
    Request.Blog.getBlog(id).then(resp => {
      if (resp.ok) {
        let blog = resp.data;
        this.setState({
          blogObj: blog,
          blogContent: blog.content,
          blogTitle: blog.title,
          selectedTags: blog.tags,
          loading: false,
        })
      }
    })
  }
  render () {
    const Loading = () => {
      if (this.state.loading) {
        return ( <div className="loading"> loading</div> )
      }
    }
    const saveButton = () => {
      if (this.props.me.userId) {
        return (
          <button className="fr" onClick={this.saveBlog}>保存</button>
        )
      }
    }
    return (
      <div className="blog-edit-page">
        { Loading() }
        <div className="blog-title">
          <input type="text" value={this.state.blogTitle} name="blogTitle" onChange={this.handleBlogChange} placeholder="博文标题" />
          { saveButton() }
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

const mapStateToProps = (store) => {
  return {
    me: store.me.me,
  }
}

module.exports = {BlogEdit: connect(mapStateToProps)(BlogEdit)}
