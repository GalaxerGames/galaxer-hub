import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/humanity.module.css'
import Link from 'next/link'
import '../../styles/globals.css';

const Portals = () => {
    return (
        <div>
            <Header />
            <div className={styles.page}>
             <h1 className={styles.title}>Portals: The Interdimensional Gateways of the Galaxer Universe</h1>
           {/* <div className={styles.buttons}>
            <Link href="https://genpen.io/login.xhtml" className={styles.button}>Schedule a Demo
            </Link>
             <Link href="https://www.youtube.com/@genpenai"
             className={styles.button}>Join Waitlist
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
              <h2 className={styles.header}>Holly</h2>
              <p className={styles.paragraph}>
                Try our most basic models<br />anonymously for a limited<br />time free of charge.
              </p>
              <Link href="https://genpen.io/login.xhtml" className={styles.button}>Try on the web</Link>
            </div>
            <div className={styles.imageContainer}>
              <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
    </div> */}
          </div>
          <hr />
          <div className={styles.section}>
            <h2 className={styles.smallHeader}>Starter Portals</h2>
            <table className={styles.table}>
            <thead>
    <tr>
      <th>Type</th>
      <th>Stability</th>
      <th>Energy Consumption</th>
      <th>Travel Accuracy</th>
      <th>Cooldown Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Astral Gateways</td>
      <td>High</td>
      <td>Low</td>
      <td>Medium</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>Temporal Vortexes</td>
      <td>Low</td>
      <td>High</td>
      <td>High</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Quantum Doorways</td>
      <td>High</td>
      <td>Medium</td>
      <td>High</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>Elemental Rifts</td>
      <td>Medium</td>
      <td>Medium</td>
      <td>Medium</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>Spectral Windows</td>
      <td>Low</td>
      <td>Low</td>
      <td>Low</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Reality Tears</td>
      <td>Very Low</td>
      <td>Very High</td>
      <td>Very High</td>
      <td>Very High</td>
    </tr>
  </tbody>
            </table>
          </div>
          <hr />
            <Footer />
        </div>
    );
}

export default Portals;
