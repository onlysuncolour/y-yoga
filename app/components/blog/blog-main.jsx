import React from 'react';
import { Link } from "react-router-dom";
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
      params.key = currentCategory.key
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
  render() {
    return (
      <div className="blog-main-page">
        <div className="top-tab">
          blog-page
          <Link className='link-test' to="/blog-edit"> 新建 </Link>
        </div>
        <BlogCategory category={this.state.category} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
        <div className="blog-list">
          {
            this.state.blogList.map(i => {
              return (
                <ItemBrief key={i._id} item={i}></ItemBrief>
              )
            })
          }
        </div>
      </div>
    )
  }
};

module.exports = {BlogPage}
