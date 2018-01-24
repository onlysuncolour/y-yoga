import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import {reducers} from './reducers/reducers.js'


//
// import {
//   createStore,
//   applyMiddleware,
//   compose
// } from 'redux';
// import duedates from './reducers/duedates'
//
// export default compose(applyMiddleware(thunk))(createStore)(duedates);


const history = createHistory()
const middleware = routerMiddleware(history)
const store = compose(applyMiddleware(thunk))(createStore)(reducers)
// createStore(
//   reducers,
//   applyMiddleware(middleware)
// )

module.exports = {store, history}
