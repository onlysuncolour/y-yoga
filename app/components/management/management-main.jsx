import React from 'react';
import {Link, Route, Switch, Redirect, NavLink, Match} from "react-router-dom"
require('./management.less')

class ManagementPage extends React.Component{
  constructor() {
    super();
    this.state = {
      tabs: [
        {name: "主页配置", code: 'usPage'},
        {name: "博客配置", code: 'blogPage'},
        {name: "照片配置", code: 'photoPage'},
      ]
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="management-main-page">
        management-page
      </div>
    )
  }
};

module.exports = {ManagementPage}
