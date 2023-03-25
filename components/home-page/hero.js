import Image from 'next/image';
import React from 'react';
import styles from './hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/Greg_avHero.png'
          alt='An image showing Greg'
          width={600}
          height={600}
        />
      </div>
      <h1>Hi, I'm Greg</h1>
      <p>I blog about web development - For fullStack development.</p>
    </section>
  );
}
