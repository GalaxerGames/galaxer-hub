import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/about.module.css'
import Link from 'next/link'
import '../../styles/globals.css';

const About = () => {
  return (
      <div>
          <Header />
          <div className={styles.researchOverview}>
        <blockquote className={styles.quote}>
          About
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            GenPen AI is an AI<br/>Enhancement and<br/>development company. Our<br/>mission is to ensure that all<br/>humans have access to<br/>Artificially Intelligen tools.
          </p>
        </div>
      </div>
      <div className={styles.sectionItem}>
    <img src="/logo.png" alt="Research at GenPen AI" className={styles.image1}/>
  </div>
  <hr />

  <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
              <h2 className={styles.header}>Our vision for<br/>the future of<br/>AIE</h2>
              <p className={styles.paragraph1}>
                Our mission is to ensure all<br/>humans have access to the<br/>benefit of artificial<br/>intelligence enhancement.
              </p>
              <a href="/blog/plan-for-aie" className={styles.button}>Read our Plan for AIE</a>
              <a href="/charter" className={styles.button}>Read our Charter</a>

            </div>
            <div className={styles.imageContainer}>
              <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
          <hr />
          <h3 className={styles.header1}>Our Work</h3>
          <hr />
          <h3>Research</h3>
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
          <h3>Products</h3>
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
          <h2 className={styles.header3}>Opportunities<br/>at GenPen AI</h2>
          <div className={styles.sectionItem}>
    <img src="/logo.png" alt="Research at GenPen AI" className={styles.image1}/>
  </div>
<hr/>
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
              <h2 className={styles.header}>Our structure</h2>
              <p className={styles.paragraph1}>
                We are governed by members and our general<br/> profit drives our commitment to make money.<br/>This means that as AI beomes more powerful,<br/>so shall we.</p>
              <Link href="/blog/synapse-alliance" className={styles.button}>Read about Synapse Alliance</Link>
              <Link href="/blog/structure" className={styles.button}>Read about our structure</Link>

            </div>
            <div className={styles.imageContainer}>
              <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
          <hr />
<div>
 <h1 className={styles.titleBottom}>Join us to make a brighter future.</h1>
  <div className={styles.buttonsBottom}>
    <Link href="/companyCareers" className={styles.buttonBottom}>View Opportunities</Link>
  </div>
  </div>
<hr />
          <Footer />
      </div>
  );
}

export default About;