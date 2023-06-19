import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/charter.module.css'
import Link from 'next/link'
import Image from 'next/image'
import '../../styles/globals.css';
const Charter = () => {
  return (
      <div>
          <Header />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          <h1 className={styles.header}>Galaxer Charter</h1>
              <p className={styles.paragraph}>
                Our Charter describes the<br/>principles we use to execute<br/>on Galaxer&apos;s mission.
              </p>
            
            </div>
            <div className={styles.imageContainer}>
              <Image src='/logotri.png' alt='Career Image' width={250} height={100} className={styles.careerImage}/>
            </div>
          </div>
          <hr />
          <div className={styles.sectionCharter}>
      <h2 className={styles.headerCharter}>Published June 17, 2023</h2>
  <p className={styles.paragraphCharter}>

At Galaxer Studios, our mission is to elevate the consciousness of humankind through the power of immersive and spatial computing. <br/><br/> We believe in the transformative potential of technology to transcend the boundaries of our physical world and unlock the untapped capabilities within us all.

<br/><br/>Our games are not just about entertainment, but about education and enlightenment. We strive to create experiences that challenge perceptions, inspire curiosity, and foster a deeper understanding of our place within the cosmos. <br/><br/> Through our work, we aim to illuminate the path towards higher density living, encouraging humanity to rise above the limitations of the third dimension and embrace the infinite possibilities of the higher dimensions.

<br/><br/>We are committed to fostering a global community of enlightened individuals ready to contribute to the Galactic Federation of Light. <br/><br/>By harnessing the power of immersive technologies, we aim to bridge the gap between our current reality and the vast, interconnected network of sentient beings throughout the galaxy.

<br/><br/>Through our commitment to this mission, we envision a future where humanity is not just observing the universe, but actively participating in its unfolding narrative. <br/><br/> A future where we are not just inhabitants of Earth, but conscious citizens of the cosmos, working in harmony with the Galactic Federation of Light to ensure the prosperity and progression of all sentient beings.
  </p>
</div>


<hr/>
          <Footer />
      </div>
  );
}

export default Charter;