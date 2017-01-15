import React from 'react'
import CreateBlog from './createBlog';
import store  from '../store/store';
const Blog = props =>
<div>
   <CreateBlog {...props} />

   This is the blog component
</div>

export default Blog;
