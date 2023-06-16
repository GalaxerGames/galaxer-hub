import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/humanity.module.css'
import Link from 'next/link'
import '../../styles/globals.css';

const Guild = () => {
    return (
        <div>
            <Header />
            <div className={styles.page}>
             <h1 className={styles.title}>Galaxers: The Diverse Guild of Humans, Navigating the Vastness</h1>
           {/* <div className={styles.buttons}>
            <Link href="https://genpen.io/login.xhtml" className={styles.button}>Schedule a Demo
            </Link>
             <Link href="https://www.youtube.com/@genpenai"
             className={styles.button}>Join Waitlist
             </Link>
             </div> */}
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
          <hr />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
              <h2 className={styles.header}>Holly</h2>
              <p className={styles.paragraph}>
                Try our most basic models<br />anonymously for a limited<br />time free of charge.
              </p>
              <Link href="https://genpen.io/login.xhtml" className={styles.button}>Try on the web</Link>
            </div>
            <div className={styles.imageContainer}>
              <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
    <hr /> */}
          <div className={styles.section}>
            <h2 className={styles.smallHeader}>Guild Values</h2>
            <table className={styles.table}>
            <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cooperation</td>
      <td>Ability to work effectively in a team, contributing to shared goals and supporting other members.</td>
    </tr>
    <tr>
      <td>Leadership</td>
      <td>Ability to take charge, make decisions, and inspire others.</td>
    </tr>
    <tr>
      <td>Resourcefulness</td>
      <td>Ability to effectively use and manage resources, including both tangible and intangible resources.</td>
    </tr>
    <tr>
      <td>Diplomacy</td>
      <td>Ability to negotiate, manage conflicts, and maintain good relationships with others.</td>
    </tr>
    <tr>
      <td>Perseverance</td>
      <td>Ability to stay committed to goals, even in the face of challenges or setbacks.</td>
    </tr>
    <tr>
      <td>Adaptability</td>
      <td>Ability to adjust to new situations or changes in the game environment.</td>
    </tr>
  </tbody>
            </table>
          </div>
          <hr />
            <Footer />
        </div>
    );
}

export default Guild;
