import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'react-markdown'
import Prism from '../../common/prism'
import { Link } from "react-router-dom"
import { BlogReadComment } from './blog-read-comment' 
import { BlogReadFooter } from './blog-read-footer' 

class BlogRead extends React.Component{
  constructor() {
    super();
    this.state = {
      blog: {},
      hotBlogList: [],
    }
    this.getBlog = this.getBlog.bind(this)
    this.getHotBlogList = this.getHotBlogList.bind(this)
    this.goEdit = this.goEdit.bind(this)
  }
  // componentWillMount() {
  // }
  componentDidMount() {
    let id = searchformat.parse(this.props.location.search).id;
    this.getBlog(id);
    this.getHotBlogList()
  }
  componentWillReceiveProps(nextProps) {
    let id = nextProps.match.params.id;
    this.getBlog(id);
    this.getHotBlogList()
  }
  componentDidUpdate() {
    Prism.highlightAll()
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
  goEdit() {
    browserHistory.push({
      pathname: `/blog-edit/${this.state.blog._id}`,
    })
  }
  render() {
    const EditLink = () => {
      if (this.props.me._id && this.props.me._id == this.state.blog.author._id) {
        return (
          <span className="icon-edit edit" onClick={this.goEdit}></span>
        )
      }
    }
    if (!this.state.blog._id) {
      return (<div></div>)
    }
    return (
      <div className="blog-read-page">
        <div className="blog">
          <div className="title-tab">
            <span className="title">
              {this.state.blog.title}
            </span>
            {EditLink()}
          </div>
          <div className="author-tab">
            <span className="author">{this.state.blog.author.name}</span>
            <span className="date">{Utils.formatDate(this.state.blog.updatedAt)}</span>
          </div>
          <div className="content">
            <Markdown className="markdown-content" source={this.state.blog.content} />
          </div>
          <BlogReadFooter blog={this.state.blog}></BlogReadFooter>
          <BlogReadComment blogId={this.state.blog._id}></BlogReadComment>
        </div>
        <div className="hot-blog-list">
          <div className="list-title">
            <span>HOT BLOGS</span>
          </div>
          <div className="list">
            { this.state.hotBlogList.map(i => {
              return (
                <div key={i._id} className="hot-blog">
                  <div className="blog-title">
                    <Link to={{
                      pathname: '/blog-read',
                      search: searchformat.stringify({id: i._id})
                    }}>{i.title}</Link>
                  </div>
                  <div className="blog-brief">
                    {i.brief}
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    me: store.me.me,
    router: store.router,
  }
}

module.exports = {BlogRead: connect(mapStateToProps)(BlogRead)}
