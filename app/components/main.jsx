import React from 'react';
import { Route, Switch, Redirect, NavLink} from "react-router-dom"
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import { store, history } from '../common/redux/store'

import {Header} from './app/header'
import {BlogPage} from './blog/blog-main'
import {UsPage} from './us/us-main'
import {PhotoPage} from './photo/photo-main'
import {TodoPage} from './todo/todo-main'
import {OthersPage} from './others/others-main'
import {LostCity} from './others/game-lost-city/game-page'
import {LoginPage} from './app/login'
import {Yoga} from './us/yoga'
import {Young} from './us/young'
import {BlogEdit} from './blog/blog-edit'
import {BlogRead} from './blog/blog-read'

import './main.less'

class Main extends React.Component{
  constructor() {
    super();
  }
  componentWillMount() {
    Socket.connect()
    G.addlistener('game-message', data => this.dealGameMessage(data))
  }
  dealGameMessage(data) {
    if (data.gameType == 'lostCity') {
      G.triger('lost-city-game-action', data)
    }
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
              <Route path="/todo" component = {TodoPage} />
              <Route path="/photo" component = {PhotoPage} />
              <Route path="/blog" component = {BlogPage} />
              <Route exact path="/others" component = {OthersPage} />
              <Route path="/others/lost-city" component = {LostCity} />
              <Route path="/blog-edit" component = {BlogEdit} />
              <Route path="/blog-read/:id" component = {BlogRead} />
              <Redirect to="/"/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    )
  }
}

module.exports = {Main}
