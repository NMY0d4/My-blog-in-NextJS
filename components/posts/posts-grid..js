import React from 'react';
import PostItem from './post-item';
import styles from './posts-grid.module.scss';

export default function PostsGrid({ posts }) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
