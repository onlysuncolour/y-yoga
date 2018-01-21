import React from 'react'

import Blog from '../blog/blog-main'
import { Link } from "react-router-dom"

class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      menus: [
        {title: '主页', link: '/'},
        {title: '博客', link: '/blog'},
        {title: '照片墙', link: '/photo'},
        {title: '其他', link: '/others'},
      ]
    }
  }
  render() {

    // let menus = )

    return (
      <div className="app-header">

        <div className="header-icon inline-block">
          <span> YOUNG & YOGA </span>
        </div>

        <div className="header-menu-list inline-block">
          {
            this.state.menus.map(i => (
              <div className="header-menu-item inline-block margin-left-10" key={i.link}>
                <Link to={i.link}> {i.title} </Link>
              </div>
            ))
          }
        </div>


        <div className="header-login-tab float-right">
          <button> 登陆</button>
          <button> 注册</button>
        </div>
      </div>
    )
  }
};

module.exports = {Header}
