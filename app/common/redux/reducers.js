import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {todoReducer} from './reducers/todoReducer.js'

const reducers = combineReducers({
  todo: todoReducer,
  router: routerReducer
})

module.exports = {reducers}
