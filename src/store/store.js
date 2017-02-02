import rootReducer from '../reducers/root-reducer';
import { connect } from 'react-redux'
import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const defaultState = {
  blogPosts: [{name:'testPost', post: 'this will be a file'}, {name:'testPost2', post: 'this will be a file'}, {name:'testPost3', post: 'this will be a file'}]
}

const store = createStore(rootReducer,defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store)
export default store
