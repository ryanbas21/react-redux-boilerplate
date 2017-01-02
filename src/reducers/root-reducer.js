import redux from 'redux'
import reactRedux from 'react-redux'
import * as actions from '../actions/actions'
import { addTodoReducer, deleteTodoReducer, editTodoReducer } from './reducers'
import { store } from '../store/store'

const initialState = {
  blogText: '',
  subcribed: false,
  createBlog: true

};

const rootReducer = (store = initialState, action) => {
  switch (action.type){
    case 'subscribe':
        return subscribeReducer(state, action);
    case 'editBlog':
        return editTodo(state,action);
    case 'submitBlog':
        return editTodoReducer(state,action);
    default: return store;
  }
};
export default rootReducer;
