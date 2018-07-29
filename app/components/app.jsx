import React from 'react';
import { Route, Switch, Redirect, NavLink} from "react-router-dom"
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import { setMe } from 'actions';

import {Header} from './app/header'
import {BlogPage} from './blog/blog-main'
import {UsPage} from './us/us-main'
import {AlbumListPage} from './photo/album-list'
import {AlbumPage} from './photo/album'
import {PhotoDetailPage} from './photo/photo-detail'
import {TodoPage} from './todo/todo-main'
import {OthersPage} from './others/others-main'
import {LostCity} from './others/game-lost-city/game-page'
import {LoginPage} from './app/login'
import {Yoga} from './us/yoga'
import {Young} from './us/young'
import {BlogEdit} from './blog/blog-edit'
import {BlogRead} from './blog/blog-read'
import {Music} from './music/music'
import {ManagementPage} from './management/management-main'

import {Popup} from './common/popup'
import './app.less'
class App extends React.Component{
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
            <Route exact path="/album" component = {AlbumListPage} />
            <Route path="/album/detail" component = {AlbumPage} />
            {/* <Route path="/album/:id" component = {AlbumPage} /> */}
            <Route path="/music" component = {Music} />
            <Route path="/blog" component = {BlogPage} />
            <Route exact path="/others" component = {OthersPage} />
            <Route path="/others/lost-city" component = {LostCity} />
            <Route path="/management" component = {ManagementPage} />
            <Route exact path="/blog-edit" component = {BlogEdit} />
            <Route path="/blog-edit" component = {BlogEdit} />
            <Route path="/blog-read" component = {BlogRead} />
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

module.exports = {App}
