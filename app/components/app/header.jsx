import React from 'react'
import {IndexLink, Link} from 'react-router'

class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="header-nav">
        <div className="header-bar">
          <div className="navbar-header">
            <IndexLink to="/" className="logo"> young&yoga </IndexLink>
          </div>
          <div className="header-menu">
            <ul className="header-menu-list">
              <li className="active"><Link to="/"> 主页 </Link></li>
              <li><Link to="/blog"> 博客 </Link></li>
              <li><Link to="/photo"> 照片墙 </Link></li>
              <li><Link to="/others"> 其他 </Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

module.exports = {Header}
