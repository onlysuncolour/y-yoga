import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './blog-main.less';
import {BlogCategory} from './blog-category'
import {ItemBrief} from './blog-item-brief'

class BlogPage extends React.Component{
  constructor() {
    super();
    this.state = {
      category: [],
      blogList: [],
      currentCategory: {}
    }
    this.getCategory = this.getCategory.bind(this)
    this.getBlogList = this.getBlogList.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
  }
  componentWillMount() {
    this.getCategory()
  }
  componentDidMount() {

  }
  getCategory() {
    Request.Blog.getBlogCategory().then(resp => {
      if (resp.ok) {
        let category = resp.data
        this.setState({
          category: category,
          currentCategory: category[0] || {}
        })
        this.getBlogList(category[0] || {})
      }
    })
  }
  getBlogList(currentCategory) {
    let params = {}
    if (currentCategory && currentCategory._id) {
      if (currentCategory.key) {
        params.tags = currentCategory.key
      }
    }
    Request.Blog.getBlogList(params).then(resp => {
      if (resp.ok) {
        let blogList = resp.data
        this.setState({
          blogList: blogList
        })
      }
    })
  }
  changeCategory(data) {
    this.setState({
      currentCategory: data || {}
    })
    this.getBlogList(data || {})
  }
  updateSQL() {
    Request.Blog.updateSQL()
  }
  render() {
    const TopTab = () => {
      if (this.props.me._id) {
        return (
          <div className="top-tab">
            <Link className='link-test' to="/blog-edit"> 新建 </Link>
          </div>
        )
      }
    }
    return (
      <div className="blog-main-page">
        {TopTab()}
        <BlogCategory category={this.state.category} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
        <div className="blog-list">
          {
            this.state.blogList.map(i => {
              return (
                <ItemBrief key={i._id} item={i} me={this.props.me}></ItemBrief>
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

module.exports = {BlogPage: connect(mapStateToProps)(BlogPage)}
