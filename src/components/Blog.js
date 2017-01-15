import React from 'react'
import CreateBlog from './postedblog';
import store  from '../store/store';
const Blog = props =>
<div>
    <div id='blog-section'>
        <CreateBlog createdBlog={store.createdBlog}/>
    </div>
    <CreateBlog  />
   This is the blog component
</div>

module.exports = Blog;
