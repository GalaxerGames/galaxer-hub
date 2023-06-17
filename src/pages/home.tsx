import '../styles/globals.css';
import styles from '../components/modules/Home.module.css'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Home() {
  const handleScrollToVideo = () => {
    document.getElementById("videoSection").scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <Header />
      <div className={styles.page}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Welcome Galaxer,<br/> to the New World</h1>
          <div className={styles.buttons}>
           
            <button onClick={handleScrollToVideo} className={styles.button}>View Teaser</button>
          </div>
        </div>
        
        <div id="videoSection" className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <video className={styles.video} src="/video1.mp4" controls></video>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.header}>Shape the Destiny of Dimensions</h2>
            <p className={styles.paragraph}>Galaxer is being built for the future. Search our codex for more information.</p>
            <a href="/lore/codex" className={styles.button}>Search Codex</a>
            <a href="/claim" className={styles.button}>Begin Claim</a>
          </div>
        </div>
        {/* <div id="claimSection" className={styles.claimSection}>
        <a href="/claim" className={styles.button}>Begin<br/>Claim</a>

  </div> */}



      </div>
      {/*
      <div className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Development Costs <br />Should be Black & <br /> White</h2>
          <a href="./pricing" className={styles.button}> Learn about our Pricing</a>
        </div>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Enterprise Scale <br /> REST ful Auto- <br />Genesis</h2>
          <a href="./research-overview" className={styles.button}>Learn about our Research</a>
        </div>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Beginning the Basis <br /> for AI Polling with <br />Human Input</h2>
          <a href="./research-index" className={styles.button}>Learn about our Patents</a>
        </div>
        
      </div>
      <hr />
      <h3>Latest Updates</h3>
      <div className={styles.section}>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 1" className={styles.image}/>
    <a href="/link/to/post1" className={styles.button}>Blog post 1</a>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 2" className={styles.image}/>
    <a href="/link/to/post2" className={styles.button}>Blog post 2</a>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 3" className={styles.image}/>
    <a  href="/link/to/post3" className={styles.button}>Blog post 3</a>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 4" className={styles.image}/>
    <a href="/link/to/post4" className={styles.button}>Blog post 4</a>
  </div>
</div>
<hr />
<h3>Template Gallery</h3>
      <div className={styles.section}>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 1" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <a href="/link/to/demo" className={styles.button}>Demo</a> <br />
    <a href="/link/to/purchase" className={styles.button}>Purchase</a>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 2" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <a href="/link/to/demo" className={styles.button}>Demo</a> <br />
    <a href="/link/to/purchase" className={styles.button}>Purchase</a>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 3" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <a href="/link/to/demo" className={styles.button}>Demo</a> <br />
    <a href="/link/to/purchase" className={styles.button}>Purchase</a>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 4" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <a href="/link/to/demo" className={styles.button}>Demo</a> <br />
    <a href="/link/to/purchase" className={styles.button}>Purchase</a>
  </div>
</div>
<hr />
<h3>Opportunities at GenPen AI</h3>
<img src="/logo.png" alt="Big Careers Image"/>
<hr />
<div className={styles.quoteSection}>
  <blockquote className={styles.quote}>
    "Working at GenPen AI has brought <br /> me great fortune and wealth."
  </blockquote>
  <div className={styles.imageContainer}>
    <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
  </div>
</div>
<hr />
 <h1 className={styles.title}>Join us to make a brighter future.</h1>
  <div className={styles.buttons}>
    <a href="./careers" className={styles.button}>View Opportunities</a>
  </div> */}
<Footer />  
</div>
    
  )
}
