export const addSubscriber = (state,action) => {
    const newState = {};
    Object.assign(newState,state,{ subscribe: action.value });
    return newState
};

export const addBlogPost = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { addBlogPost: action.value });
    return newState;
};

export const editBlogPost = (state, action) => {
    const newState = {};
    console.log('edit blog post reducer is being fired, action is', action)
    Object.assign(newState, state, action.value)
    return newState;
};

export const getBlogReducer = (state, action) => {
    const newState = {}
    Object.assign(newState, state, { getBlog: JSON.parse(response) } );
    return newState
}
