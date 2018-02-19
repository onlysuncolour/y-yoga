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
    let category = [{id: 1, name: "category-a"}, {id: 2, name: "category-b"}, {id: 3, name: "category-c"}]
    this.setState({
      category: category,
      currentCategory: category[0] || {}
    })
    this.getBlogList()
  }
  getBlogList() {
    let blogList = [
      {id: 1, title: "blog-aaaa", content: "hello world 123", updatedAt: "2018-1-1"},
      {id: 2, title: "blog-bbbb", content: "aldsjfl hello world 123", updatedAt: "2018-1-1"},
      {id: 3, title: "blog-cccc", content: "salvjxzl laldsjfl hello world 123", updatedAt: "2018-1-1"},
    ]
    this.setState({
      blogList: blogList
    })
  }
  changeCategory(data) {
    this.setState({
      currentCategory: data || {}
    })
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
                <ItemBrief key={i.id} item={i}></ItemBrief>
              )
            })
          }
        </div>
      </div>
    )
  }
};

module.exports = {BlogPage}
