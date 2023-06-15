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
          <a href="/research-overview" className={styles.button}>Lore</a>
          <ul className={styles.submenu}>
            <li><a href="/research-overview" className={styles.button}>The Droch</a></li>
            <li><a href="/research-index" className={styles.button}>The Seasamh</a></li>
            <li><a href="/tacaiocht" className={styles.button}>The Tacaiocht</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/product-overview">Product</a>
          <ul className={styles.submenu}>
            <li><a href="/product-overview">Overview</a></li> 
            <li><a href="/scratchpad">iOS</a></li>
            <li><a href="/journal">Android</a></li>
            <li><a href="/ai1de">Desktop</a></li>
            <li><a href="/holly">VR</a></li>
            <li><a href="/customer-stories">Xbox</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/developer-overview">Developers</a>
          <ul className={styles.submenu}>
            <li><a href="/developer-overview">Overview</a></li>
            <li><a href="/developer-docs">Docs</a></li>
            <li><a href="/developer-api">API Reference</a></li>
            <li><a href="/developer-examples">Examples</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/about">Company</a>
          <ul className={styles.submenu}>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/charter">Charter</a></li>
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
        <a href="https://linkedin.com/galaxer" className={styles.socialFooter}>Linkedin</a>
        <a href="/terms" className={styles.titleFooter}>Terms</a>
        <a href="/privacy" className={styles.titleFooter}>Policy</a>
        <a href="/brand" className={styles.titleFooter}>Brand</a>
        </div>
    </div>
  </footer>
);
