import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Link  from 'next/link';
import styles from '../../components/modules/android.module.css';
import '../../styles/globals.css';
import React from 'react';

const GLXR = () => {
  return (
      <div>
          <Header />
          <div className={styles.page}>
             <h1 className={styles.title}>Machine Elf Alliance</h1>
            <div className={styles.buttons}>
            <Link href="/nft"
             className={styles.button}>Sign with the Alliance
             </Link>
             </div>
            </div>
          <Footer />
      </div>
  );
}

export default GLXR;