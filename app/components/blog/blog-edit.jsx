import React from 'react';
import {store} from "app/common/redux/store";
import { connect } from 'react-redux';
import Editor from 'tui-editor';
import './blog-edit.less'

class BlogEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      blog: {
        content: "",
        title: "",
        tags: [],
      },
      taglist: [],
      editor: null,
      loading: false,
    }
    this.handleBlogChange = this.handleBlogChange.bind(this)
    this.getTags = this.getTags.bind(this)
    this.saveBlog = this.saveBlog.bind(this)
    this.getBlog = this.getBlog.bind(this)
  }
  handleBlogChange(event) {
    let blog = this.state.blog
    blog[event.target.name] = event.target.value
    this.setState({blog: blog});
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
    let blog = this.state.blog;
    let selectedTags = blog.tags
    if (selectedTags.indexOf(tagKey) == -1) {
      selectedTags.push(tagKey)
    } else {
      let index = selectedTags.indexOf(tagKey)
      selectedTags.splice(index, 1)
    }
    this.setState({
      blog: blog
    })
  }
  saveBlog() {
    let blog = this.state.blog;
    blog.content = this.state.editor.getValue()
    if (!blog._id) {
      blog.author = this.props.me.userName
      blog.author_id = this.props.me.userId
      blog.created_at = new Date().getTime()
      blog.updated_at = blog.created_at
    } else {
      blog.updated_at = new Date().getTime()
    }
    Request.Blog.saveBlog(blog).then(resp => {
      if (resp.ok) {
        console.log('保存成功');
        this.setState({
          blog: resp.data
        })
      }
    })
  }
  getBlog(id) {
    Request.Blog.getBlog(id).then(resp => {
      if (resp.ok) {
        let blog = resp.data;
        this.setState({
          blog,
          loading: false,
        })
        this.state.editor.setMarkdown(blog.content)
      }
    })
  }
  componentDidMount() {
    this.getTags()
    let id = this.props.match.params.id;
    let editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px'
    });
    if (id) {
      this.setState({
        loading: true
      })
      this.getBlog(id);
    }
    this.setState({
      editor
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
          <input type="text" value={this.state.blog.title} name="title" onChange={this.handleBlogChange} placeholder="博文标题" />
          { saveButton() }
        </div>
        <div className="blog-tag-config">
          tags:
          {
            this.state.taglist.map(i => {
              let className = "y-tag"
              if (this.state.blog.tags.indexOf(i.key) != -1) {
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
          <div id="editSection" className="editor"></div>
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
