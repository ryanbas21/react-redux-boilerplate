import React from 'react'
import { browserHistory } from 'react-router';
import RenderBlogPosts from './RenderBlogPosts';
const Blog = props =>
<div>
  <button onClick={() => browserHistory.push('/blog/createblog')} type="submit">Write Blog Post</button>
  <RenderBlogPosts />
</div>

export default Blog;
