import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import {Header} from './app/header'

import {BlogPage} from './blog/blog-main'
import {UsPage} from './us/us-main'
import {PhotoPage} from './photo/photo-main'
import {OthersPage} from './others/others-main'
import {LoginPage} from './app/login'
import {Yoga} from './us/yoga'
import {Young} from './us/young'

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
            <div className="router-view">
              <Switch>
                <Route exact path="/" component = {UsPage} />
                <Route path="/yoga" component = {Yoga} />
                <Route path="/young" component = {Young} />
                <Route path="/photo" component = {PhotoPage} />
                <Route path="/blog" component = {BlogPage} />
                <Route path="/others" component = {OthersPage} />
              </Switch>
            </div>
          </div>
        </Router>
    )
  }
}

module.exports = {Main}
