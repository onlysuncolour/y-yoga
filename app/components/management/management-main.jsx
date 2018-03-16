import React from 'react';
import {Link, Route, Switch, Redirect, NavLink, Match} from "react-router-dom"
require('./management.less')

class ManagementPage extends React.Component{
  constructor() {
    super();
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
