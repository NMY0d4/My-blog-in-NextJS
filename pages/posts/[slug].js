import React, { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../lib/posts-util';

export default function PostDetailPage({ post }) {
  return (
    <Fragment>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const post = getPostData(slug);

  return {
    props: { post },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames
    .map((fileName) => fileName.replace(/\.md$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
}
