export const addSubscriber = (state,action) => {
    const newState = {};
    return Object.assign(newState,state,{ subscribe: action.value });
};

export const addBlogPost = (state, action) => {
    const newState = {};
    return Object.assign(newState, state, { addBlogPost: action.value });
};

export const editBlogPost = (state, action) => {
    const newState = {};
    console.log('edit blog post reducer is being fired, action is', action)
    return Object.assign(newState, state, action.value)
};

export const getBlogReducer = (state, action) => {
    const newState = {}
    const  { getBlog } = action.value;
    return Object.assign(newState, state, getBlog );
}

export const subscribe = (state, action) => {};

