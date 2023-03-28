import React from 'react';
import { DUMMY_POSTS } from '../../../pages';
import PostHeader from './post-header';
import styles from './post-content.module.scss';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function PostContent() {
  const POST = DUMMY_POSTS[0];
  POST.content = '# This is a first post';

  const imagePath = `/images/posts/${POST.slug}/${POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={POST.title} image={imagePath} />
      <ReactMarkdown>{POST.content}</ReactMarkdown>
    </article>
  );
}
