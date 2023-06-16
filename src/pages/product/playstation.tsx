import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/scratchpad.module.css'
import Link from 'next/link'
import '../../styles/globals.css';

const Playstation = () => {
    return (
        <div>
            <Header />
            <div className={styles.page}>
             <h1 className={styles.title}>Generate Text & Images <br /> with a Single Prompt all <br /> for Free</h1>
            <div className={styles.buttons}>
            <Link href="https://genpen.io/login.xhtml" className={styles.button}>Try on the Web
            </Link>
             <Link href="https://www.youtube.com/@genpenai"
             className={styles.button}>Learn more about GenPen
             </Link>
             </div>
            </div>
            <hr />
      <h3>Latest Updates</h3>
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
  <div className={styles.textContainer}>
    <h2 className={styles.header}>ScratchPad</h2>
    <p className={styles.paragraph}>
      Try our most basic models<br />anonymously for a limited<br />time free of charge.
    </p>
    <Link href="https://genpen.io/login.xhtml" className={styles.button}>Try on the web</Link>
  </div>
  <div className={styles.imageContainer}>
    <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
  </div>
</div>
<hr />
<div className={styles.section}>
  <h2 className={styles.smallHeader}>Content & Ownership</h2>
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Ownership</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>Images</td>
          <td>GenPen AI</td>
          <td><Link href="https://genpen.io/login.xhtml" className={styles.button}>Try Now</Link></td>
      </tr>
      <tr>
        <td>Code</td>
        <td>GenPen AI</td>
        <td><Link href="https://genpen.io/login.xhtml" className={styles.button}>Try Now</Link></td>
      </tr>
      <tr>
        <td>Text</td>
        <td>GenPen AI</td>
        <td><Link href="https://genpen.io/login.xhtml" className={styles.button}>Try Now</Link></td>
      </tr>
    </tbody>
  </table>
</div>



<hr />

            <Footer />
        </div>
    );
}

export default Playstation;
