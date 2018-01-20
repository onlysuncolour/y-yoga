import React from 'react'

import Blog from '../blog/blog-main'
import { Link } from "react-router-dom"

class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="app-header">
          <div className="header-menu-item">
            <Link to="/"> 主页 </Link>
          </div>
          <div className="header-menu-item">
            <Link to="/blog"> 博客 </Link>
          </div>
          <div className="header-menu-item">
            <Link to="/photo"> 照片墙 </Link>
          </div>
          <div className="header-menu-item">
            <Link to="/others"> 其他 </Link>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {Header}
