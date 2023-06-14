// components/Header.tsx

import Link from 'next/link';
import {ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from './modules/Header.module.css';
import '../styles/globals.css';


import { useAccount } from 'wagmi'

export const Header = () => (
  <header className={styles.header}>
    <a href="/home">
      <img src="/logo.png" alt="Logo" className={styles.logo} />
    </a>
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {/* <li className={styles.menuItem}>
          <a href="/research-overview" className={styles.button}>Research</a>
          <ul className={styles.submenu}>
            <li><a href="/research-overview" className={styles.button}>Overview</a></li>
            <li><a href="/research-index" className={styles.button}>Index</a></li>
          </ul>
</li> */}
       {/* <li className={styles.menuItem}>
          <a href="/product-overview" className={styles.button}>Product </a>
          <ul className={styles.submenu}>
            <li><a href="/product-overview" className={styles.button}>Overview</a></li>
            <li><a href="/scratchpad" className={styles.button}>ScratchPad</a></li>
            <li><a href="/journal" className={styles.button}>Journal</a></li>
            <li><a href="/aide" className={styles.button}>AIDE</a></li>
            <li><a href="/holly" className={styles.button}>Holly</a></li>
            <li><a href="/customer-stories" className={styles.button}>Customer Stories</a></li>
            <li><a href="/pricing" className={styles.button}>Pricing</a></li>
          </ul>
        </li>  */}
       {/*  <li className={styles.menuItem}>
          <a href="/developer-overview" className={styles.button}>Developers</a>
          <ul className={styles.submenu}>
            <li><a href="/developer-overview" className={styles.button}>Overview</a></li>
            <li><a href="/developer-docs" className={styles.button}>Docs</a></li>
            <li><a href="/developer-api" className={styles.button}>API Reference</a></li>
            <li><a href="/developer-examples" className={styles.button}>Examples</a></li>
          </ul>
        </li>  */}
        {/* <li className={styles.menuItem}>
          <a href="/about" className={styles.button}>Company</a>
          <ul className={styles.submenu}>
            <li><a href="/about" className={styles.button}>About</a></li>
            <li><a href="/blog" className={styles.button}>Blog</a></li>
            <li><a href="/careers" className={styles.button}>Careers</a></li>
            <li><a href="/charter" className={styles.button}>Charter</a></li>
          </ul>
        </li> */}
      </ul>
      </nav> 
 
    <div className={styles.buttons}>
    <ConnectButton />
      <Link href="https://genpen.io/login.xhtml" className={styles.loginButton}>Connect Wallet
      </Link>
      {/* <Link href="https://genpen.io/signup.xhtml" className={styles.signUpButton}>Sign Up
      </Link> */}
    </div>
  </header>
);
