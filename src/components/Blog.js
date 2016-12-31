import React from 'react'
import CreateBlog from './createBlog';
import { store } from '../store/store';
const Blog = props =>
<div>
    <div id='blog-section'>
        <CreateBlog createdBlog={store.createBlog} />
    </div>
This is the blog component
<CreateBlog />
</div>

module.exports = Blog;
