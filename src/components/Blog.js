import React from 'react'
import CreateBlog from './createBlog';
import { store } from '../store/store';
const Blog = props =>
<div>
    <div id='blog-section'>
        <CreateBlog  />
    </div>
   This is the blog component
</div>

module.exports = Blog;
