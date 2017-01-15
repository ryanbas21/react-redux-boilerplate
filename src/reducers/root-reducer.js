import redux from 'redux'
import reactRedux from 'react-redux'
import * as actions from '../actions/actions'
import Reducers from './reducers'
import { store } from '../store/store'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const initialState = {
  subcribed: false,
  createBlog: ''

};

const rootReducer = combineReducers({
   Reducers,
   routing: routerReducer
  }
)
export default rootReducer;
