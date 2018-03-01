import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import {todoReducer} from './reducers/todoReducer.js'
import {popupReducer} from './reducers/popupReducer.js'
import {meReducer} from './reducers/meReducer.js'

const reducers = combineReducers({
  todo: todoReducer,
  popup: popupReducer,
  me: meReducer,
  router: routerReducer,
})
const store = compose(applyMiddleware(thunk))(createStore)(reducers)

module.exports = store
