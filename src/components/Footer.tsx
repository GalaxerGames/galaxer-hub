import Link from 'next/link';
import styles from './modules/Footer.module.css';
import Image from 'next/image';


export const Footer = () => (
  <footer className={styles.footer}>
    <Link href='/' legacyBehavior>
      <Image src='/horitlogo.png' alt='Logo' width={350} height={300} className={styles.logo} />
    </Link>
     <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href='/lore/codex' className={styles.button}>Codex</Link>
          <ul className={styles.submenu}>
            <li><Link href='/lore/humanity' className={styles.button}>Humanity</Link></li>
            <li><Link href='/lore/portals' className={styles.button}>Portals</Link></li>
            <li><Link href='/lore/conflict' className={styles.button}>Cosmic Conflict</Link></li>
            <li><Link href='/lore/droch' className={styles.button}>The Droch</Link></li>
            <li><Link href='/lore/seasamh' className={styles.button}>The Seasamh</Link></li>
            <li><Link href='/lore/tacaiocht' className={styles.button}>The Tacaiocht</Link></li>
            <li><Link href='/lore/teadan' className={styles.button}>The Teadan</Link></li>
            <li><Link href='/lore/guild' className={styles.button}>The Galaxer Guild</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href='/platforms/overview'>Platforms</Link>
          <ul className={styles.submenu}>
            <li><Link href='/platforms/overview'>Overview</Link></li> 
            <li><Link href='/platforms/ios'>iOS</Link></li>
            <li><Link href='/platforms/android'>Android</Link></li>
            <li><Link href='/platforms/desktop'>Desktop</Link></li>
            <li><Link href='/platforms/vr'>VR</Link></li>
            <li><Link href='/platforms/xbox'>Xbox</Link></li>
            <li><Link href='/platforms/playstation'>PlayStation</Link></li>
            <li><Link href='/platforms/nintendo'>Nintendo</Link></li>

          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href='/ecosystem/overview'>Ecosystem</Link>
          <ul className={styles.submenu}>
            <li><Link href='/ecosystem/overview'>Overview</Link></li>
            <li><Link href='/ecosystem/glxr'>GLXR</Link></li>
            <li><Link href='/ecosystem/nebula'>Nebula Notes</Link></li>
            <li><Link href='/ecosystem/mea'>Machine Elf Alliance</Link></li>
            <li><Link href='/ecosystem/tardigrades'>Tardigrades</Link></li>
            <li><Link href='/ecosystem/materials'>Materials</Link></li>
            <li><Link href='/claim'>Claim GLXR</Link></li>
            <li><Link href='/nft'>Claim NFTs</Link></li>
            <li><Link href='/map'>Hub Map</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href='/studio/about'>Studio</Link>
          <ul className={styles.submenu}>
            <li><Link href='/studio/about'>About</Link></li>
            {/* <li><Link href='/studio/blog'>Blog</Link></li> */}
            {/* <li><Link href='/studio/careers'>Careers</Link></li> */}
            <li><Link href='/studio/charter'>Charter</Link></li>
            <li><Link href='/studio/investors'>Investors</Link></li>
            {/* <li><Link href='/studio/brand'>Brand</Link></li> */}
          </ul>
        </li>
</ul> 
    </nav> 
 
   {/* <div className={styles.buttons}>
      <Link href='https://genpen.io/login.xhtml' className={styles.loginButton}>Login
      </Link>
      <Link href='https://genpen.io/signup.xhtml' className={styles.signUpButton}>Sign Up
      </Link>
</div> */}
    <hr/>
    <div className={styles.titleFooter}>
   
        <h1>Galaxer © 2021-2023</h1>
        <div className={styles.socialFooter}>
        <Link href='https://twitter.com/Galaxer_glxr' className={styles.socialFooter}>Twitter</Link>
        <Link href='https://www.youtube.com/@galaxer-glxr' className={styles.socialFooter}>Youtube</Link>
        <Link href='https://github.com/galaxergames' className={styles.socialFooter}>Github</Link>
        <Link href='https://linkedin.com/galaxer' className={styles.socialFooter}>Linkedin</Link> <br/>
        <Link href='/terms' className={styles.titleFooter}>Terms</Link>
        <Link href='/privacy' className={styles.titleFooter}>Policy</Link>
        {/* <Link href='/studio/brand' className={styles.titleFooter}>Brand</Link> */}
        </div>
    </div>
  </footer>
);
