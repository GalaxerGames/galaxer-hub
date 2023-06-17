import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/investors.module.css'
import Link from 'next/link'
import '../../styles/globals.css';

const Investors = () => {
  return (
      <div>
          <Header />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          
              <p className={styles.paragraph}>
                Investing<br />from equity to<br />tokens
              </p>
              <Link href="https://genpen.io/login.xhtml" className={styles.button}>Contact IR</Link>
             {/* <Link href="/blog/investors" className={styles.link}>Learn More</Link> */}
            </div>
            <div className={styles.imageContainer}>
              <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
          <hr />
         {/* <h3>Latest Updates</h3>
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
  <hr /> */}
<div className={styles.container}>
  <div className={styles.imageContainer}>
    <img src="/logotri.png" alt="Image 4" className={styles.image1}/>
  </div>
  <div className={styles.paragraphContainer}>
    <blockquote className={styles.quote}>
      GLXR
    </blockquote>
    <p className={styles.paragraph1}>
      GLXR token provides ample<br/>opportunity to small to institutional<br/>investors to bring about<br/>change in the Galaxer Ecosystem.
    </p>
  </div>
</div>
<hr />


          <div>
          <h1 className={styles.titleEnd}>Start investing in A LRG Corp <br /> today.</h1>
          <div className={styles.buttonsContainerBottom}>
         <div className={styles.buttons1}>
        <Link href="https://t.me/galaxer_glxr" className={styles.button}>Inquire Here</Link>
       {/* <Link href="https://genpen.io/login.xhtml" className={styles.button}>Login</Link> */}
        </div>
        </div>
        <hr />
         </div>

          <Footer />
      </div>
  );s
}

export default Investors;