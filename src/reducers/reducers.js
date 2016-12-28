import redux from 'redux'
import reactRedux from 'react-redux'
import * as action from '../actions/actions'

const addTodoReducer = (state,action) => {
    const newState = {};
    Object.assign(newState,state,{ subscribe: action.value });
    return newState
};

const deleteTodoReducer = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { deleteTodo: action.value });
    return newState;
}

const editTodoReducer = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { editTodo: action.value })
    return newState;
}
export default { addTodoReducer, deleteTodoReducer, editTodoReducer };
