import React from 'react';
import { Route, Switch, Redirect, NavLink} from "react-router-dom"
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import { setMe } from 'actions';

import {Header} from './app/header.jsx'
import {BlogPage} from './blog/blog-main.jsx'
import {UsPage} from './us/us-main.jsx'
import {PhotoPage} from './photo/photo-main.jsx'
import {TodoPage} from './todo/todo-main.jsx'
import {OthersPage} from './others/others-main.jsx'
import {LostCity} from './others/game-lost-city/game-page.jsx'
import {LoginPage} from './app/login.jsx'
import {Yoga} from './us/yoga.jsx'
import {Young} from './us/young.jsx'
import {BlogEdit} from './blog/blog-edit.jsx'
import {BlogRead} from './blog/blog-read.jsx'
import {ManagementPage} from './management/management-main.jsx'

import {Popup} from './common/popup.jsx'
import './main.less'

class Main extends React.Component{
  constructor() {
    super();
    this.state = {
      loading: true,
    }
  }
  componentWillMount() {
    // Socket.connect()
    Request.User.me().then(resp => {
      if (resp.ok && resp.data && resp.data._id) {
        store.dispatch(setMe(resp.data));
      }
      this.setState({
        loading: false
      })
    })
    G.addlistener('game-message', data => this.dealGameMessage(data))
  }
  dealGameMessage(data) {
    if (data.gameType == 'lostCity') {
      G.triger('lost-city-game-action', data)
    }
  }
  render() {
    const RouterView = () => {
      if (this.state.loading) {
        return (
          <div>LOADING</div>
        )
      } else {
        return (
          <Switch>
            <Route exact path="/" component = {UsPage} />
            <Route path="/yoga" component = {Yoga} />
            <Route path="/young" component = {Young} />
            <Route path="/todo" component = {TodoPage} />
            <Route path="/photo" component = {PhotoPage} />
            <Route path="/blog" component = {BlogPage} />
            <Route exact path="/others" component = {OthersPage} />
            <Route path="/others/lost-city" component = {LostCity} />
            <Route path="/management" component = {ManagementPage} />
            <Route exact path="/blog-edit" component = {BlogEdit} />
            <Route path="/blog-edit/:id" component = {BlogEdit} />
            <Route path="/blog-read/:id" component = {BlogRead} />
            <Redirect to="/"/>
          </Switch>
        )
      }
    }
    return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <div className="app">
          <Header />
          <div className="router-view">
            {
              RouterView()
            }
          </div>
          <Popup></Popup>
        </div>
      </Router>
    </Provider>
    )
  }
}

module.exports = {Main}
