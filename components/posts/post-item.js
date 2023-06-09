import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import styles from './post-item.module.scss';

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link className='link' href={linkPath}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout='responsive'
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
