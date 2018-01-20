import React from 'react'
// import {IndexLink, Link} from 'react-router-dom'
import Blog from '../blog/blog-main'
import { NavLink} from "react-router-dom"

class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
          <div className="app">
            <div className="music-tab">
              <div className="tab-item">
              <NavLink to="/"> 主页 </NavLink>
              <NavLink to="/blog"> 博客 </NavLink>
              <NavLink to="/photo"> 照片墙 </NavLink>
              <NavLink to="/others"> 其他 </NavLink>

                {/* <NavLink to="/blog" className="nav-link"><span>推荐</span></NavLink> */}
              </div>
            </div>
            {/* <div className="music-view">
              <Switch>
                <Route path="/blog" component={Blog} />
              </Switch>
            </div>
            <MusicPlayer/> */}
          </div>
        </div>
    )
  }
};

module.exports = {Header}
