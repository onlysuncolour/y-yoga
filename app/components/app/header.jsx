import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import {store} from "app/common/redux/store";

import {Popup} from '../common/popup'
import {LoginPage} from '../app/login'

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
      login: false
    }
    this.showLogin = this.showLogin.bind(this)
  }
  componentDidMount() {
    // store.dispatch(getRouter());
  }
  showLogin(state) {
    this.setState({
      login: state
    })
  }
  render() {
    const login = () => {
      if (this.state.login) {
        return (
          <Popup>
            <LoginPage>
            </LoginPage>
          </Popup>
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
            this.state.menus.map(i => (
              <li className={"header-menu-item "+{true: 'selecetd-menu', false: 'unselected-menu'}[i.link==this.props.router.location.pathname]} key={i.link}>
                <Link className="link" to={i.link}> {i.title} </Link>
              </li>
            ))
          }
        </ul>
        <div className="header-login-tab fr">
          <button onClick={this.showLogin.bind(this, true)}> 登录</button>
          <button> 注册</button>
        </div>
        {login()}
      </nav>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    router: store.router
  }
}

module.exports = {Header: connect(mapStateToProps)(Header)}
