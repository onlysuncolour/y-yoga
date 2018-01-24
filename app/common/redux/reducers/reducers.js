import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {loginStatus} from './login'
import {todoReducer} from './todoReducer'

const reducers = combineReducers({
  // loginStatus,
  todo: todoReducer,
  router: routerReducer
})

module.exports = {reducers}
