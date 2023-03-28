import React from 'react';
import PostHeader from './post-header';
import styles from './post-content.module.scss';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
