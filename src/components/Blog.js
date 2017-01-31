import React from 'react'
import CreateBlog from './createBlog';
import store  from '../store/store';
import { browserHistory } from 'react-router';
import createBlog from './createBlog';
const Blog = props =>
<div>
  <button onClick={() => browserHistory.push('/blog/createblog')} type="submit">Write Blog Post</button>
</div>

export default Blog;
