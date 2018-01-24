import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import {reducers} from './reducers/reducers.js'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  // reducers,
  applyMiddleware(middleware)
)

module.exports = {store, history}
