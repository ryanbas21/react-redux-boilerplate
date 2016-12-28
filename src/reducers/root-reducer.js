import redux from 'redux'
import reactRedux from 'react-redux'
import * as actions from '../actions/actions'
import { addTodoReducer, deleteTodoReducer, editTodoReducer } from './reducers'
import { store } from '../store/store'

const initialState = {
  todos: {}
};

const rootReducer = (store = initialState, action) => {
  switch (action.type){
    case 'addTodo':
        return subscribeReducer(state, action);
    case 'editTodo':
        return editTodo(state,action)
    case 'deleteTodo':
        return editTodoReducer(state,action);
    default: return store;
  }
};
export default rootReducer;
