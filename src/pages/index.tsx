import { useState } from 'react';

import Head from "next/head";
import { useRouter } from 'next/router';
import styles from '../components/modules/index.module.css'

export default function Preload() {
  const [videoEnded, setVideoEnded] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.preload}>
      <video className={styles.preloadVideo} autoPlay muted onEnded={() => setVideoEnded(true)}>
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {videoEnded && 
        <button className={styles.enterButton} onClick={() => router.push('/home')}>
          Enter
        </button>
      }
    </div>
  );
}
