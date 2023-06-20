import { useEffect, useRef, useState } from 'react';
import Head from "next/head";
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../components/modules/index.module.css'

export default function Preload() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        // Video playback failed, so mark it as failed and hide it
        setVideoFailed(true);
      });
    }
  }, []);
  
  return (
    <div className={styles.preload}>
      <Head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #000;
          }
        `}</style>
      </Head>
      {!videoFailed && !videoEnded && 
        <video ref={videoRef} className={styles.preloadVideo} autoPlay muted onEnded={() => setVideoEnded(true)}>
          <source src="/welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      }
      {(videoFailed || videoEnded) && 
        <>
          <div className={styles.logoWrapper}>
            <Image src="/horitlogo.png" alt="Logo" width={300} height={200}/> 
          </div>
          <p className={styles.paragraph}>
            Welcome, brave Galaxer, to the threshold of a new reality.<br/><br/> You stand at the precipice of a universe teeming with interdimensional beings, cosmic alliances, and resilient life forms, all woven together in a timeline that spans eons.
            <br/><br/>Here, in the realm of Galaxer, you will align with the Machine Elves, entities of higher dimensions, and choose your path in the ongoing &apos;Cogadh na Trí Ríochtaí&apos;, the War of the Three Kingdoms.<br/><br/> Your alliance will shape your journey, your battles, and your victories.
            <br/><br/>You will harness the power of the resilient Tardigrades, life forms of incredible adaptability, to enhance your abilities and influence the course of the cosmic conflict.<br/><br/> Each Tardigrade species offers unique powers, and collecting them will be key to your success.
            <br/><br/>You are not alone in this journey. The Galactic Federation of Light, an interstellar alliance of various extraterrestrial species, stands as a beacon of peace and cooperation amidst the interdimensional conflict.<br/><br/> Their presence is a testament to the potential of unity in diversity.
            <br/><br/>As you step into this universe, remember: every decision you make, every alliance you form, every battle you fight, is a stitch in the fabric of this cosmic tapestry. <br/><br/>Your journey is about to begin. 
          </p>
          <button className={styles.enterButton} onClick={() => router.push('/home')}>
            Enter
          </button>
        </>
      }
    </div>
  );
}
