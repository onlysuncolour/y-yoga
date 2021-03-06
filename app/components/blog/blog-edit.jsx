import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'react-markdown'
import './blog-edit.less'
import { addPopup } from 'actions';
import Prism from '../../common/prism'

import {BlogBriefEdit} from './blog-brief-edit'

let operationAt = 0;

class BlogEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      blog: {
        content: "",
        title: "",
        tags: [],
        brief: "",
      },
      taglist: [],
      editor: null,
      loading: false,
      brief: ""
    }
    this.handleBlogChange = this.handleBlogChange.bind(this)
    this.getTags = this.getTags.bind(this)
    this.saveBlog = this.saveBlog.bind(this)
    this.getBlog = this.getBlog.bind(this)
    this.goBack = this.goBack.bind(this)
    
    this.showBriefEditor = this.showBriefEditor.bind(this)
  }
  handleBlogChange(event) {
    let blog = this.state.blog
    blog[event.target.name] = event.target.value
    this.setState({blog: blog});
  }
  handleBlogContent(type) {
    let textarea = this.refs.blogTextarea;
    let start = textarea.selectionStart,
        blog = this.state.blog,
        content = this.state.blog.content,
        text = "\n",
        length = 1;
    if (type == 'header') {
      text += "## \n"
      length += 3;
    } else if (type == 'hheader') {
      text += "# \n"
      length += 2;
    } else if (type == 'quote') {
      text = "` `"
      length = 1;
    } else if (type == 'list1') {
      text += "1. \n2. \n3. \n4. \n"
      length += 3
    } else if (type == 'list2') {
      text += "* \n* \n* \n* \n"
      length += 2
    } else if (type == 'italic') {
      text = "**"
      length = 1
    } else if (type == 'bold') {
      text = "****"
      length = 2
    } else if (type == 'strikethrough') {
      text = "~~~~"
      length = 2
    } else if (type == 'pageBreak') {
      text += "___\n"
      length += 4
    } else if (type == 'embed') {
      text += "```\n\n```\n"
      length += 4
    } else if (type == 'chain') {
      text += "[text](link)"
      length += 5
    } else if (type == 'image') {
      text += "![](link)"
      length += 8
    } else if (type == 'table') {
      text += "| head | head |\n|----|----|\n| content | content |\n"
      length += 2
    }
    content = content.substring(0, start) + text + content.substring(start, content.length);
    blog.content = content;
    operationAt = start + length;
    this.setState({blog})
  }
  getTags() {
    Request.Blog.getBlogCategory().then(resp => {
      if (resp.ok) {
        let taglist = resp.data
        taglist = taglist.filter(i => i.key != 0)
        this.setState({
          taglist: taglist,
        })
      }
    })
  }
  goBack() {
    if (this.state.blog._id) {
      browserHistory.push({
        pathname: '/blog-read',
        search: searchformat.stringify({id: this.state.blog._id})
      })
    } else {
      browserHistory.push({
        pathname: `/blog`,
      })
    }
  }
  selectTag(tag) {
    let blog = this.state.blog;
    let selectedTags = blog.tags
    if (selectedTags.filter(i => i._id == tag._id).length == 0) {
      selectedTags.push(tag)
    } else {
      for (let i = selectedTags.length-1; i >= 0; i--) {
        if (selectedTags[i]._id == tag._id) selectedTags.splice(i, 1)
      }
    }
    this.setState({
      blog: blog
    })
  }
  saveBlog() {
    let blog = this.state.blog;
    // TODO: 没有博文概述的时候，出来一个弹窗
    if (!blog._id) {
      blog.author = this.props.me
      blog.createdAt = new Date().toISOString()
      blog.updatedAt = blog.createdAt
    } else {
      blog.updatedAt = new Date().toISOString()
    }
    Request.Blog.saveBlog(blog).then(resp => {
      if (resp.ok) {
        console.log('保存成功');
        browserHistory.push({
          pathname: `/blog`,
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
      }
    })
  }
  onKeydown(e) {
    if (e.keyCode == 9) {
      e.preventDefault();
      var indent = '    ';
      var start = this.refs.blogTextarea.selectionStart;
      var end = this.refs.blogTextarea.selectionEnd;
      var selected = window.getSelection().toString();
      selected = indent + selected.replace(/\n/g, '\n' + indent);
      this.refs.blogTextarea.value = this.refs.blogTextarea.value.substring(0, start) + selected
              + this.refs.blogTextarea.value.substring(end);
      let blog = this.state.blog;
      operationAt = start+4
      blog.content = this.refs.blogTextarea.value
      this.setState({
        blog
      })
    }
  }
  showBriefEditor() {
    let briefEditPopup = {
      render: (data, events) => {
        return (
          <BlogBriefEdit data={data} events={events}>
          </BlogBriefEdit>
        )
      },
      data: {
        brief: this.state.blog.brief
      },
      events: {
        setBrief: (brief) => {
          let blog = this.state.blog
          blog.brief = brief
          this.setState({
            blog
          })
        }
      }
    }
    store.dispatch(addPopup(briefEditPopup))
  }
  componentDidMount() {
    this.getTags()
    let id = searchformat.parse(this.props.location.search).id;
    if (id) {
      this.setState({
        loading: true
      })
      this.getBlog(id);
    }
  }
  componentDidUpdate() {
    if (operationAt > 0) {
      this.refs.blogTextarea.focus()
      this.refs.blogTextarea.selectionEnd = operationAt
      operationAt = 0
    }
    Prism.highlightAll()
  }
  render () {
    const Loading = () => {
      if (this.state.loading) {
        return ( <div className="loading"> loading</div> )
      }
    }
    const buttons = () => {
      if (this.props.me._id) {
        return (
          <div className="blog-edit-buttons">
            <button className="save-btn" onClick={this.saveBlog}>发布</button>
            <button className="return-btn" onClick={this.goBack}>返回</button>
          </div>
        )
      }
    }
    return (
      <div className="blog-edit-page">
        { Loading() }
        <div className="blog-title">
          <input type="text" value={this.state.blog.title} name="title" onChange={this.handleBlogChange} placeholder="请输入标题" autoComplete="off" />
          { buttons() }
        </div>
        <div className="blog-tag-config">
          <span className="tag-label">标签：</span>
          {
            this.state.taglist.map(i => {
              let className = "y-tag"
              if (this.state.blog.tags.filter(t => t._id==i._id).length>0) {
                className += " y-tag-selected"
              }
              return (
                <div className={className} key={i._id} onClick={this.selectTag.bind(this, i)}>
                  {i.title}
                </div>
              )
            })
          }
        </div>
        <div className="blog-editor-buttons">
          <span className="editor-button icon-header" onClick={this.handleBlogContent.bind(this, 'header')}></span>
          <span className="editor-button icon-header" style={{'fontWeight': 'bolder'}} onClick={this.handleBlogContent.bind(this, 'hheader')}></span>
          <span className="editor-button icon-bold" onClick={this.handleBlogContent.bind(this, 'bold')}></span>
          <span className="editor-button icon-italic" onClick={this.handleBlogContent.bind(this, 'italic')}></span>
          <span className="editor-button icon-strikethrough" onClick={this.handleBlogContent.bind(this, 'strikethrough')}></span>
          <span className="editor-button-line">|</span>
          <span className="editor-button icon-embed2" onClick={this.handleBlogContent.bind(this, 'embed')}></span>
          <span className="editor-button icon-quotes-left" onClick={this.handleBlogContent.bind(this, 'quote')}></span>
          <span className="editor-button icon-page-break" onClick={this.handleBlogContent.bind(this, 'pageBreak')}></span>
          <span className="editor-button icon-list-numbered" onClick={this.handleBlogContent.bind(this, 'list1')}></span>
          <span className="editor-button icon-list2" onClick={this.handleBlogContent.bind(this, 'list2')}></span>
          <span className="editor-button-line">|</span>
          <span className="editor-button icon-table2" onClick={this.handleBlogContent.bind(this, 'table')}></span>
          <span className="editor-button icon-chain" onClick={this.handleBlogContent.bind(this, 'chain')}></span>
          <span className="editor-button icon-images" onClick={this.handleBlogContent.bind(this, 'image')}></span>
          <span className="fr add-brief-button" onClick={this.showBriefEditor.bind(this)} >博文概述</span>
        </div>
        <div className="blog">
          <div className="content">
            <textarea value={this.state.blog.content} name="content" ref="blogTextarea" onChange={this.handleBlogChange} onKeyDown={this.onKeydown.bind(this)} />
          </div>
          <div className="preview" ref="blogPreview">
            <Markdown className="markdown-content" source={this.state.blog.content} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    me: store.me.me,
    router: store.router,
  }
}

module.exports = {BlogEdit: connect(mapStateToProps)(BlogEdit)}
