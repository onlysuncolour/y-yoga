import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'react-markdown'
import Prism from '../../common/prism'

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
      if (this.props.me.userId && this.props.me.userId == this.state.blog.author_id) {
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
            <span className="date">{Utils.formatDate(this.state.blog.updated_at)}</span>
          </div>
          <div className="content">
            <Markdown className="markdown-content" source={this.state.blog.content} />
          </div>
        </div>
        <div className="hot-blog-list">
          <span>热门博文</span>
          { this.state.hotBlogList.map(i => {
              return (
                <div key={i._id}>
                  {i.title}
                </div>
              )
            })
          }
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
