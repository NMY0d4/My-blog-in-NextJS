import React, { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 3600,
  };
}
