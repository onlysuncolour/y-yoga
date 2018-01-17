import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {reducers} from '../common/redux/reducers'

import {Main} from './main'
import {usPage} from './us/us-main'
import {yoga} from './us/yoga'
import {young} from './us/young'
import {photoPage} from './photo/photo-main'
import {blogPage} from './blog/blog-main'
import {othersPage} from './others/others-main'
import {login} from './app/login'

let store = createStore(reducers, {
  loginStatus: {
    isLogin: false,
  }
});

var urlRouter = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={usPage} />
        <Route path="/yoga" component = {yoga} />
        <Route path="/young" component = {young} />
        <Route path="/photo" component = {photoPage} />
        <Route path="/blog" component = {blogPage} />
        <Route path="/others" component = {othersPage} />
      </Route>
      <Route path="/login" component = {login} />
    </Router>
  </Provider>
)

module.exports = {urlRouter}
