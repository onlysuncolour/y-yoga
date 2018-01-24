import React from 'react';
import { Route, Switch, Redirect, NavLink} from "react-router-dom"
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import { store, history } from '../common/redux/store'

import {Header} from './app/header'
import {BlogPage} from './blog/blog-main'
import {UsPage} from './us/us-main'
import {PhotoPage} from './photo/photo-main'
import {OthersPage} from './others/others-main'
import {LoginPage} from './app/login'
import {Yoga} from './us/yoga'
import {Young} from './us/young'
import {BlogEdit} from './blog/blog-edit'

import './main.less'

class Main extends React.Component{
  constructor() {
    super();
  }
  componentWillMount() {
  }
  render() {
    return (
    <Provider store={store}>
      <Router history={history}>
        <div className="app">
          <div className="router-view">
            <Header />
            <Switch>
              <Route exact path="/" component = {UsPage} />
              <Route path="/yoga" component = {Yoga} />
              <Route path="/young" component = {Young} />
              <Route path="/photo" component = {PhotoPage} />
              <Route path="/blog" component = {BlogPage} />
              <Route path="/others" component = {OthersPage} />
              <Route path="/blog-edit" component = {BlogEdit} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    )
  }
}

module.exports = {Main}
