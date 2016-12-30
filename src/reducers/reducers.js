import redux from 'redux'
import reactRedux from 'react-redux'
import * as action from '../actions/actions'

const addSubscriber = (state,action) => {
    const newState = {};
    Object.assign(newState,state,{ subscribe: action.value });
    return newState
};

const addBlogPost = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { addBlogPost: action.value });
    return newState;
}

const editBlogPost = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { editBlogPost: action.value })
    return newState;
}
export default { addSubscriber, addBlogPost, editBlogPost };
