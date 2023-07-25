import '../styles/globals.css';
import styles from '../components/modules/Home.module.css'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Home() {
  const handleScrollToVideo = () => {
    const element = document.getElementById("videoSection");
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <div>
      <Header />
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/globe_celtic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.page}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Welcome Galaxer,<br/> to the New World</h1>
          <div className={styles.buttons}>
            <button onClick={handleScrollToVideo} className={styles.button}>View Teaser</button>
          </div>
        </div>
      
        
        <div id="videoSection" className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <video className={styles.video} src="/video2.mp4" controls></video>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.header}>Shape the Destiny <br/>of Dimensions</h2>
            <p className={styles.paragraph}><b>Galaxer is being built for the future.<br/> Search our codex for more information.</b></p>
            <Link href="/lore/codex" className={styles.button}>Search Codex</Link>
           {/* <Link href="/claim" className={styles.button}>Begin GLXR Claim</Link>
            <Link href="/nft" className={styles.button}>Sign with the MEA</Link>*/}
          </div>
        </div>
        {/* <div id="claimSection" className={styles.claimSection}>
        <Link href="/claim" className={styles.button}>Begin<br/>Claim</Link>

  </div> */}



      </div>
      {/*
      <div className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Development Costs <br />Should be Black & <br /> White</h2>
          <Link href="./pricing" className={styles.button}> Learn about our Pricing</Link>
        </div>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Enterprise Scale <br /> REST ful Auto- <br />Genesis</h2>
          <Link href="./research-overview" className={styles.button}>Learn about our Research</Link>
        </div>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Beginning the Basis <br /> for AI Polling with <br />Human Input</h2>
          <Link href="./research-index" className={styles.button}>Learn about our Patents</Link>
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
<h3>Template Gallery</h3>
      <div className={styles.section}>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 1" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo" className={styles.button}>Demo</Link> <br />
    <Link href="/link/to/purchase" className={styles.button}>Purchase</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 2" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo" className={styles.button}>Demo</Link> <br />
    <Link href="/link/to/purchase" className={styles.button}>Purchase</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 3" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo" className={styles.button}>Demo</Link> <br />
    <Link href="/link/to/purchase" className={styles.button}>Purchase</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 4" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo" className={styles.button}>Demo</Link> <br />
    <Link href="/link/to/purchase" className={styles.button}>Purchase</Link>
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
    <Link href="./careers" className={styles.button}>View Opportunities</Link>
  </div> */}
<Footer />  
</div>
    
  )
}
