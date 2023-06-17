

import React, {useState} from 'react';
import { useConnect, WagmiConfig } from 'wagmi';
import styles from './modules/Header.module.css';
import '../styles/globals.css';
import { useAccount } from 'wagmi'

export const Header = () => {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const onConnectWallet = async () => {
    if (connectors[0]) {
      await connect({ connector: connectors[0] });
    }
  }

  const openNav = () => {
    setSidebarOpen(true);
  }

  const closeNav = () => {
    setSidebarOpen(false);
  }

  const handleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  }

  return (
    <header className={styles.header}>
      <a href="/home">
      <img src="/logo.png" alt="Logo" className={styles.logo} />
    </a>
    <div className={styles.buttons}>
      <button onClick={onConnectWallet} className={styles.loginButton}>Connect Wallet</button>
      <button className={styles.openbtn} onClick={openNav}>☰</button>
    </div> 
    <div id="mySidebar" className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
      <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}>×</a>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${activeMenu === 'lore' ? styles.menuItemActive : ''}`} onClick={() => handleSubMenu('lore')}>
            <a href="/lore/codex">Lore</a>
            <ul className={`${styles.submenu} ${activeMenu === 'lore' ? styles.open : ''}`}>
              <li><a href="/lore/humanity">Humanity</a></li>
                <li><a href="/lore/portals">Portals</a></li>
                <li><a href="/lore/conflict">Cosmic Conflict</a></li>
                <li><a href="/lore/droch">The Droch</a></li>
                <li><a href="/lore/seasamh">The Seasamh</a></li>
                <li><a href="/lore/tacaiocht">The Tacaiocht</a></li>
                <li><a href="/lore/teadan">The Teadan</a></li>
                <li><a href="/lore/guild">The Galaxer Guild</a></li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <a href="/platforms/overview" 
              onClick={(e) => handleMenuClick(e, 'platforms')} 
                onDoubleClick={(e) => handleMenuDoubleClick(e, '/platforms/overview')}>
                  Platforms
                  </a>
              <ul className={`${styles.submenu} ${activeMenu === 'platforms' ? styles.open : ''}`}>
                <li><a href="/platforms/overview">Overview</a></li> 
                <li><a href="/platforms/ios">iOS</a></li>
                <li><a href="/platforms/android">Android</a></li>
                <li><a href="/platforms/desktop">Desktop</a></li>
                <li><a href="/platforms/vr">VR</a></li>
                <li><a href="/platforms/xbox">Xbox</a></li>
                <li><a href="/platforms/playstation">PlayStation</a></li>
                <li><a href="/platforms/nintendo">Nintendo</a></li>
              </ul>
            </li>
            <li className={styles.menuItem}>
            <a href="/ecosystem/overview" 
              onClick={(e) => handleMenuClick(e, 'ecosystem')} 
                onDoubleClick={(e) => handleMenuDoubleClick(e, '/ecosystem/overview')}>
                  Ecosystem
                  </a>
              <ul className={`${styles.submenu} ${activeMenu === 'ecosystem' ? styles.open : ''}`}>
                <li><a href="/ecosystem/overview">Overview</a></li>
                <li><a href="/ecosystem/glxr">GLXR</a></li>
                <li><a href="/ecosystem/nebula">Nebula Notes</a></li>
                <li><a href="/ecosystem/mea">Machine Elf Alliance</a></li>
                <li><a href="/ecosystem/tardigrades">Tardigrades</a></li>
                <li><a href="/ecosystem/materials">Materials</a></li>
              </ul>
            </li>
            <li className={styles.menuItem}>
            <a href="/studio/about" 
              onClick={(e) => handleMenuClick(e, 'studio')} 
                onDoubleClick={(e) => handleMenuDoubleClick(e, '/studio/about')}>
                  Studio
                  </a>
              <ul className={`${styles.submenu} ${activeMenu === 'studio' ? styles.open : ''}`}>
                <li><a href="/studio/about">About</a></li>
                <li><a href="/studio/blog">Blog</a></li>
               {/* <li><a href="/studio/careers">Careers</a></li> */}
                <li><a href="/studio/charter">Charter</a></li>
                <li><a href="/studio/investors">Investors</a></li>
              </ul>
            </li>
          </ul>
          </nav>
          </div>
  
     {/* <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
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
        </li> 
      </ul>
      </nav> */}
 
    
  </header>
);
    };