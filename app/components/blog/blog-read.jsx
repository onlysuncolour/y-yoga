import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'react-markdown'
import Prism from '../../common/prism'
import { Link } from "react-router-dom"

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
  render() {
    const EditLink = () => {
      if (this.props.me.userId && this.props.me.userId == this.state.blog.authorId) {
        return (
          <span className="icon-edit edit" onClick={this.goEdit}></span>
        )
      }
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
            <span className="author">{this.state.blog.author}</span>
            <span className="date">{Utils.formatDate(this.state.blog.updatedAt)}</span>
          </div>
          <div className="content">
            <Markdown className="markdown-content" source={this.state.blog.content} />
          </div>
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
                    <Link to={'/blog-read/'+i._id}>{i.title}</Link>
                  </div>
                  <div className="blog-brief">
                    {i.brief || i.ibrief}
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
