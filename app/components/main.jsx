import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import {Header} from './app/header'

import Blog from './blog/blog-main'
import {usPage} from './us/us-main'
import {yoga} from './us/yoga'
import {young} from './us/young'
import {photoPage} from './photo/photo-main'
import {othersPage} from './others/others-main'
import {login} from './app/login'

class Main extends React.Component{
  constructor() {
    super();
  }
  componentWillMount() {
  }
  render() {
    return (
      <Router>
          <div className="app">
          <Header />
            <div className="music-view">
              <Switch>
                <Route exact path="/" component = {usPage} />
                <Route path="/yoga" component = {yoga} />
                <Route path="/young" component = {young} />
                <Route path="/photo" component = {photoPage} />
                <Route path="/blog" component = {Blog} />
                <Route path="/others" component = {othersPage} />
              </Switch>
            </div>
          </div>
        </Router>
    )
  }
}

module.exports = {Main}
