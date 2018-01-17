import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

var urlRouter = (
  <Provider store = {store} >
    <Router history={browserHistory}>
    </Router>
  </Provider>
)

module.exports = {urlRouter}
