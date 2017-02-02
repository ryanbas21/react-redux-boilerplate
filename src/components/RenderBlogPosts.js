import React, { Component } from 'react';
import store from '../store/store'


class RenderBlogPosts extends Component {
  constructor() {}

  onComponentWillMount(e) {
    e.preventDefaults;
    axios.get('http://localhost:3000/getBlogPosts')
      .then(result => {
        const {getBlog} = actions.default;
        //update state here with new blog posts
        store.dispatch({type: getBlog, value: JSON.parse(result)})
      })
      .catch(error => error)
  }

  render() {
    return (
      <div>
        {...store.blogPosts}
      </div>

    )
  }
}


export default RenderBlogPosts;
