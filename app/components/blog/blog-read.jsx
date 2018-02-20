import React from 'react';

class BlogRead extends React.Component{
  constructor() {
    super();
    this.state = {
      blog: {},
      hotBlogList: [],
    }
    this.getBlog = this.getBlog.bind(this)
    this.getHotBlogList = this.getHotBlogList.bind(this)
  }
  componentWillMount() {
    let id = this.props.match.params.id;
    this.getBlog(id);
    this.getHotBlogList()
  }
  getBlog(id) {
    Request.Blog.getBlog(id).then(resp => {
      if (resp.ok) {
        let blog = resp.data;
        this.setState({
          blog
        })
      }
    })
  }
  getHotBlogList() {
    Request.Blog.getHotBlogList().then(resp => {
      if (resp.ok) {
        let list = resp.data;
        this.setState({
          hotBlogList: list
        })
      }
    })
  }
  render() {
    return (
      <div className="blog-read-page">
        blog-read
        <br />
        id: {this.state.blog.id}
        <br />
        title: {this.state.blog.title}
        <br />
        content: {this.state.blog.content}
      </div>
    )
  }
};

module.exports = {BlogRead}
