import React from 'react';
import PostItem from './post-item';
import styles from './post-item.module.scss';

export default function PostsGrid({ posts }) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.key} post={post} />
      ))}
    </ul>
  );
}
