import React from 'react';
import { Link } from "react-router-dom";
import './blog-main.less';

class BlogPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        blog-page
        <Link className='link-test' to="/blog-edit"> 新建 </Link>
      </div>
    )
  }
};

module.exports = {BlogPage}
