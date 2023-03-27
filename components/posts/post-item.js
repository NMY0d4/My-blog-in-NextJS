import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './post-item.module.scss';

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = newDate(date).toLocalDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={styles.post}>
      <Link>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{exerpt}</p>
        </div>
      </Link>
    </li>
  );
}
