import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {loginStatus} from './login'

const reducers = combineReducers({
  loginStatus,
  router: routerReducer
})

module.exports = {reducers}
