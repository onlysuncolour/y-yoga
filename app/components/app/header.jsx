import React from 'react'
import { connect } from 'react-redux';

import {store} from "app/common/redux/store";

import Blog from '../blog/blog-main'
import { Link } from "react-router-dom"

class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      menus: [
        {title: '主页', link: '/', name: 'index'},
        {title: 'TODO', link: '/todo', name: 'todo'},
        {title: '博客', link: '/blog', name: 'blog'},
        {title: '照片墙', link: '/photo', name: 'photo'},
        {title: '其他', link: '/others', name: 'others'},
      ],
    }
  }
  componentDidMount() {
    // store.dispatch(getRouter());
  }
  render() {
    return (
      <div className="app-header">
        <div className="header-icon inline-block">
          <span> YOUNG & YOGA </span>
        </div>
        <div className="header-menu-list inline-block">
          {
            this.state.menus.map(i => (
              <div className={"header-menu-item inline-block margin-left-10 "+{true: 'selecetd-menu', false: 'unselected-menu'}[i.link==this.props.router.location.pathname]} key={i.link}>
                <Link className="link" to={i.link}> {i.title} </Link>
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

const mapStateToProps = (store) => {
  return {
    router: store.router
  }
}

module.exports = {Header: connect(mapStateToProps)(Header)}
