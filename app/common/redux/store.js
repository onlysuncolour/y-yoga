import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import { reducers } from './reducers.js'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = compose(applyMiddleware(thunk))(createStore)(reducers)

module.exports = {store, history}
