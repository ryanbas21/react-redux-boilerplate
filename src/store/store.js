import rootReducer from '../reducers/root-reducer';
import { connect } from 'react-redux'
import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const defaultState = {
  posts,
  comments
}

export const history = syncHistoryWithStore(browserHistory, store)
const store = createStore(rootReducer,defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()););



export default store;
