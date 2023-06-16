import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/product-overview.module.css'
import Link from 'next/link'
import '../styles/globals.css';

const ProductOverview = () => {
  return (
      <div>
          <Header />
          <div className={styles.researchOverview}>
        <blockquote className={styles.quote}>
          Turning <br /> humans into <br /> engineers
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph1}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          <div className={styles.buttons}>
            <Link href="/research-index"
              className={styles.button}>Get started
            </Link>
            <Link href="/governance"
              className={styles.button}>For developers
            </Link>
          </div>
        </div>
      </div>
      <hr />
          <img src="/logo.png" alt="Research at GenPen AI" className={styles.image}/>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Models
        </blockquote>

        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          ScratchPad <br /> & <br /> Journal
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
         AI-DE
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Holly
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Code Gen
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Made for Humans
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph3}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>

        <div className={styles.section}>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 1" className={styles.image}/>
    <Link href="/link/to/post1" className={styles.button}>Blog post 1</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 2" className={styles.image}/>
    <Link href="/link/to/post2" className={styles.button}>Blog post 2</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 3" className={styles.image}/>
    <Link  href="/link/to/post3" className={styles.button}>Blog post 3</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 4" className={styles.image}/>
    <Link href="/link/to/post4" className={styles.button}>Blog post 4</Link>
  </div>
</div>
<hr />
<div className={styles.quoteSection}>
  <blockquote className={styles.quote3}>
    Ensuring <br /> responsible <br /> use of our<br /> tools.
  </blockquote>
  <div className={styles.imageContainer}>
    <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
  </div>
</div>
<hr />
<div className={styles.sectionBuilt}>
      <h1 className={styles.header}>Built with GenPen</h1>

      <div className={styles.largeImagesBuilt}>
        <div className={styles.imageContainer}>
          <img src="/logotri.png" alt="Description of image 1" className={styles.largeImage} />
          <p className={styles.imageCaption}>Your description for image 1.</p>
        </div>
        <div className={styles.imageContainerBuilt}>
          <img src="/logotri.png" alt="Description of image 2" className={styles.largeImage} />
          <p className={styles.imageCaption}>Your description for image 2.</p>
        </div>
      </div>

      <div className={styles.section}>
       <div className={styles.sectionItem}>
        <Link href="/subpage1">
          <img src="/logotri.png" alt="Link to subpage 1" className={styles.image} />
        </Link>
        </div>
        <div className={styles.sectionItem}>
        <Link href="/subpage2">
          <img src="/logotri.png" alt="Link to subpage 2" className={styles.image} />
        </Link>
        </div>
        <div className={styles.sectionItem}>
        <Link href="/subpage3">
          <img src="/logotri.png" alt="Link to subpage 3" className={styles.image} />
        </Link>
        </div>
        <div className={styles.sectionItem}>
        <Link href="/subpage4">
          <img src="/logotri.png" alt="Link to subpage 4" className={styles.image} />
        </Link>
      </div>
    </div>
    </div>
    <hr />


  <h1 className={styles.titleEnd}>Start creating with GenPen AI's <br /> powerful tools.</h1>
  <div className={styles.buttons}>
    <Link href="https://genpen.io/login.xhtml" className={styles.button}>Get Started</Link>
    <Link href="/pricing" className={styles.button}>View pricing</Link>
  </div>
<hr />

          <Footer />
      </div>
  );
}

export default ProductOverview;
