import { combineReducers } from 'redux'

import {loginStatus} from './login'

const reducers = combineReducers({
  loginStatus
})

module.exports = {reducers}
