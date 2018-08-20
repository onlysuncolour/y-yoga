import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { addPopup, removeMe } from 'actions';

import {LoginPage} from '../app/login'

import {MusicBox} from './music-box'

class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      menus: [
        {title: '主页', link: '/', name: 'index'},
        {title: 'TODO', link: '/todo', name: 'todo'},
        {title: '博客', link: '/blog', name: 'blog'},
        {title: '照片墙', link: '/album', name: 'album'},
        {title: '音乐', link: '/music', name: 'music'},
        {title: '其他', link: '/others', name: 'others'},
        {title: '管理', link: '/management', name: 'management', admin: true}
      ],
    }
    this.showLogin = this.showLogin.bind(this)
  }
  componentDidMount() {

  }
  showLogin() {
    let loginPopup = {
      render: () => {
        return (
          <LoginPage>
          </LoginPage>
        )
      }
    }
    store.dispatch(addPopup(loginPopup))
  }
  showRegister() {
    Request.User.register()
  }
  logout() {
    Request.User.logout().then(resp => {
      if (resp.ok) {
        store.dispatch(removeMe())
      }
    })
  }
  render() {
    const loginTab = () => {
      if (this.props.me && this.props.me._id) {
        return (
          <div className="header-user-tab fr">
            {this.props.me.name}
            <button onClick={this.logout}> 退出</button>
          </div>
        )
      } else {
        return (
          <div className="header-login-tab fr">
            <button onClick={this.showLogin}> 登录</button>
            <button onClick={this.showRegister}> 注册</button>
          </div>
        )
      }
    }
    return (
      <nav className="app-header">
        <div className="header-icon inline-block">
          <span> YOUNG & YOGA </span>
        </div>
        <ul className="header-menu-list inline-block">
          {
            this.state.menus.filter(i => !i.admin || (i.admin && this.props.me.admin)).map(i => (
              <li className={"header-menu-item "+{true: 'selecetd-menu', false: 'unselected-menu'}[i.link==this.props.router.location.pathname]} key={i.link}>
                <Link className="link" to={i.link}> {i.title} </Link>
              </li>
            ))
          }
        </ul>
        { loginTab() }
        <MusicBox></MusicBox>
      </nav>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    router: store.router,
    me: store.me.me,
  }
}

module.exports = {Header: connect(mapStateToProps)(Header)}
