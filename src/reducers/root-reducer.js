import redux from 'redux'
import reactRedux from 'react-redux'
import * as actions from '../actions/actions'
import { subscribeReducer } from './reducers'
import { store } from '../store/store'

const initialState = {
  subscribed: false
};

const rootReducer = (store = initialState, action) => {
  switch (action.type){
    case 'subscribe':
        return subscribeReducer(state, action);
    default: return store;
  }
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
export default rootReducer;
