import redux from 'redux'
import reactRedux from 'react-redux'
import * as action from '../actions/actions'
import { addSubscriber, getBlogReducer, editBlogPost, subscribe } from './reducer-functions'


function Reducers ( state = {}, action) {
    switch(action.type){
        case 'subscribe' :
         return addSubscriber(state,action)
        case 'editBlog' :
          return editBlogPost
        case 'addBlog' :
          return addBlogPost
        case 'getBlogReducer' :
          return getBlogReducer
        default : return state
    }
}

export default Reducers
