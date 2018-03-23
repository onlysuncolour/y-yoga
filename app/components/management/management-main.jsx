import React from 'react';
import {Link, Route, Switch, Redirect, NavLink, Match} from "react-router-dom"
require('./management.less')
import {UsPageManagement} from './us-page/us-page-management.jsx'
import {BlogPageManagement} from './blog-page-management.jsx'
import {PhotoPageManagement} from './photo-page-management.jsx'

class ManagementPage extends React.Component{
  constructor() {
    super();
    this.state = {
      tabs: [
        {name: "主页配置", code: 'usPage'},
        {name: "博客配置", code: 'blogPage'},
        {name: "照片配置", code: 'photoPage'},
      ],
      currentTab: "usPage"
    }
  }
  componentWillMount() {
    // TODO: 判断用户权限，跳转首页
  }
  componentDidMount() {

  }
  changeTab(tab) {
    this.setState({currentTab: tab.code})
  }
  render() {
    return (
      <div className="management-main-page">
        <div className="management-tabs">
          {
            this.state.tabs.map(t => {
              return (
                <div className={`tab ${this.state.currentTab==t.code? "selected-tab" : ""}`} onClick={this.changeTab.bind(this, t)} key={t.code}>
                  <span>{t.name}</span>
                </div>
              )
            })
          }
        </div>
        <div className="management-current-tab">
          {
            {
              usPage: ( <UsPageManagement></UsPageManagement> ),
              blogPage: ( <BlogPageManagement></BlogPageManagement> ),
              photoPage: ( <PhotoPageManagement></PhotoPageManagement> ),
            }[this.state.currentTab]
          }
        </div>
      </div>
    )
  }
};

module.exports = {ManagementPage}
