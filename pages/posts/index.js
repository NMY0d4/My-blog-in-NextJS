import React, { Fragment } from 'react';
import { DUMMY_POSTS } from '..';
import AllPosts from '../../components/posts/all-posts';

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
