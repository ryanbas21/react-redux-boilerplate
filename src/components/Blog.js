import React from 'react'
import CreateBlog from './createBlog';
import { store } from '../store/store';
const Blog = props =>
<div>
    <div id='blog-section'>
        { store.blogPost }
    </div>
This is the blog component
<CreateBlog />
</div>

module.exports = Blog;
