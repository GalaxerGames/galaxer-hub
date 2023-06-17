import Link from 'next/link';
import styles from './modules/Footer.module.css';


export const Footer = () => (
  <footer className={styles.footer}>
    <a href="/">
      <img src="/horitlogo.png" alt="Logo" className={styles.logo} />
    </a>
     <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="/lore/overview" className={styles.button}>Lore</a>
          <ul className={styles.submenu}>
            <li><a href="/lore/humanity" className={styles.button}>Humanity</a></li>
            <li><a href="/lore/portals" className={styles.button}>Portals</a></li>
            <li><a href="/lore/conflict" className={styles.button}>Cosmic Conflict</a></li>
            <li><a href="/lore/droch" className={styles.button}>The Droch</a></li>
            <li><a href="/lore/seasamh" className={styles.button}>The Seasamh</a></li>
            <li><a href="/lore/tacaiocht" className={styles.button}>The Tacaiocht</a></li>
            <li><a href="/lore/teadan" className={styles.button}>The Teadan</a></li>
            <li><a href="/lore/guild" className={styles.button}>The Galaxer Guild</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/product/overview">Product</a>
          <ul className={styles.submenu}>
            <li><a href="/product/overview">Overview</a></li> 
            <li><a href="/product/ios">iOS</a></li>
            <li><a href="/product/android">Android</a></li>
            <li><a href="/product/desktop">Desktop</a></li>
            <li><a href="/product/vr">VR</a></li>
            <li><a href="/product/xbox">Xbox</a></li>
            <li><a href="/product/playstation">PlayStation</a></li>
            <li><a href="/product/nintendo">Nintendo</a></li>

          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/ecosystem/overview">Ecosystem</a>
          <ul className={styles.submenu}>
            <li><a href="/ecosystem/overview">Overview</a></li>
            <li><a href="/ecosystem/glxr">GLXR</a></li>
            <li><a href="/ecosystem/nebula">Nebula Notes</a></li>
            <li><a href="/ecosystem/materials">Materials</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/about">Studio</a>
          <ul className={styles.submenu}>
            <li><a href="/studio/about">About</a></li>
            <li><a href="/studio/blog">Blog</a></li>
            <li><a href="/studio/careers">Careers</a></li>
            <li><a href="/studio/charter">Charter</a></li>
            <li><a href="/studio/investors">Investors</a></li>
          </ul>
        </li>
</ul> 
    </nav> 
 
   {/* <div className={styles.buttons}>
      <Link href="https://genpen.io/login.xhtml" className={styles.loginButton}>Login
      </Link>
      <Link href="https://genpen.io/signup.xhtml" className={styles.signUpButton}>Sign Up
      </Link>
</div> */}
    <hr/>
    <div className={styles.titleFooter}>
   
        <h1>Galaxer © 2021-2023</h1>
        <div className={styles.socialFooter}>
        <a href="https://twitter.com/Galaxer_glxr" className={styles.socialFooter}>Twitter</a>
        <a href="https://www.youtube.com/@galaxer-glxr" className={styles.socialFooter}>Youtube</a>
        <a href="https://github.com/galaxergames" className={styles.socialFooter}>Github</a>
        <a href="https://linkedin.com/galaxer" className={styles.socialFooter}>Linkedin</a> <br/>
        <a href="/terms" className={styles.titleFooter}>Terms</a>
        <a href="/privacy" className={styles.titleFooter}>Policy</a>
        {/* <a href="/studio/brand" className={styles.titleFooter}>Brand</a> */}
        </div>
    </div>
  </footer>
);
