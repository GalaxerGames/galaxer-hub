import "../styles/globals.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./modules/Header.module.css";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menuName: string
  ) => {
    e.preventDefault();
    // Handle your menu click here
    console.log(`Menu ${menuName} clicked.`);
  };

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  const handleSubMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <header className={styles.header}>
      <Link href="/home" legacyBehavior>
        <Image
          src="/logo.png"
          alt="Logo"
          width={250}
          height={100}
          className={styles.logo}
        />
      </Link>
      <div className={styles.buttons}>
        <ConnectButton chainStatus={"none"} showBalance={false} />
        <button className={styles.openbtn} onClick={openNav}>
          ☰
        </button>
      </div>
      <div
        id="mySidebar"
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
      >
        <button className={styles.closebtn} onClick={closeNav}>
          ×
        </button>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li
              className={`${styles.menuItem} ${
                activeMenu === "lore" ? styles.menuItemActive : ""
              }`}
              onClick={() => handleSubMenu("lore")}
            >
              <Link href="/lore/codex">♦ Lore</Link>
              <ul
                className={`${styles.submenu} ${
                  activeMenu === "lore" ? styles.open : ""
                }`}
              >
                <li>
                  <Link href="/lore/codex">♦ Codex</Link>
                </li>
                <li>
                  <Link href="/lore/humanity">♦ Humanity</Link>
                </li>
                <li>
                  <Link href="/lore/portals">♦ Portals</Link>
                </li>
                <li>
                  <Link href="/lore/conflict">♦ Cosmic Conflict</Link>
                </li>
                <li>
                  <Link href="/lore/droch">♦ The Droch</Link>
                </li>
                <li>
                  <Link href="/lore/seasamh">♦ The Seasamh</Link>
                </li>
                <li>
                  <Link href="/lore/tacaiocht">♦ The Tacaiocht</Link>
                </li>
                <li>
                  <Link href="/lore/teadan">♦ The Teadan</Link>
                </li>
                <li>
                  <Link href="/lore/guild">♦ The Galaxer Guild</Link>
                </li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link
                href="/platforms/overview"
                onClick={(e) => handleMenuClick(e, "platforms")}
                onDoubleClick={(e) => handleMenuClick(e, "/platforms/overview")}
              >
                ♦ Platforms
              </Link>
              <ul
                className={`${styles.submenu} ${
                  activeMenu === "platforms" ? styles.open : ""
                }`}
              >
                <li>
                  <Link href="/platforms/overview">♦ Overview</Link>
                </li>
                <li>
                  <Link href="/platforms/ios">♦ iOS</Link>
                </li>
                <li>
                  <Link href="/platforms/android">♦ Android</Link>
                </li>
                <li>
                  <Link href="/platforms/desktop">♦ Desktop</Link>
                </li>
                <li>
                  <Link href="/platforms/vr">♦ VR</Link>
                </li>
                <li>
                  <Link href="/platforms/xbox">♦ Xbox</Link>
                </li>
                <li>
                  <Link href="/platforms/playstation">♦ PlayStation</Link>
                </li>
                <li>
                  <Link href="/platforms/nintendo">♦ Nintendo</Link>
                </li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link
                href="/ecosystem/overview"
                onClick={(e) => handleMenuClick(e, "ecosystem")}
                onDoubleClick={(e) => handleMenuClick(e, "/ecosystem/overview")}
              >
                ♦ Ecosystem
              </Link>
              <ul
                className={`${styles.submenu} ${
                  activeMenu === "ecosystem" ? styles.open : ""
                }`}
              >
                <li>
                  <Link href="/ecosystem/overview">♦ Overview</Link>
                </li>
                <li>
                  <Link href="/ecosystem/glxr">♦ GLXR</Link>
                </li>
                <li>
                  <Link href="/ecosystem/nebula">♦ Nebula Notes</Link>
                </li>
                <li>
                  <Link href="/ecosystem/mea">♦ Machine Elf Alliance</Link>
                </li>
                <li>
                  <Link href="/ecosystem/tardigrades">♦ Tardigrades</Link>
                </li>
                <li>
                  <Link href="/ecosystem/materials">♦ Materials</Link>
                </li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link
                href="/studio/about"
                onClick={(e) => handleMenuClick(e, "studio")}
                onDoubleClick={(e) => handleMenuClick(e, "/studio/about")}
              >
                ♦ Studio
              </Link>
              <ul
                className={`${styles.submenu} ${
                  activeMenu === "studio" ? styles.open : ""
                }`}
              >
                <li>
                  <Link href="/studio/about">♦ About</Link>
                </li>
                {/* <li><Link href='/studio/blog'>Blog</Link></li>  */}
                {/* <li><Link href='/studio/careers'>Careers</Link></li> */}
                <li>
                  <Link href="/studio/charter">♦ Charter</Link>
                </li>
                <li>
                  <Link href="/studio/investors">♦ Investors</Link>
                </li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link
                href="/ecosystem/overview"
                onClick={(e) => handleMenuClick(e, "overview")}
                onDoubleClick={(e) => handleMenuClick(e, "/ecosystem/overview")}
              >
                ♦ Claims
              </Link>
              <ul
                className={`${styles.submenu} ${
                  activeMenu === "overview" ? styles.open : ""
                }`}
              >
                <li>
                  <Link href="/claim">♦ CLaim GLXR</Link>
                </li>
                <li>
                  <Link href="/nft">♦ Claim NFTs</Link>
                </li>
                <li>
                  <Link href="/map">♦ Hub Map</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href='/research-overview' className={styles.button}>Research</Link>
          <ul className={styles.submenu}>
            <li><Link href='/research-overview' className={styles.button}>Overview</Link></li>
            <li><Link href='/research-index' className={styles.button}>Index</Link></li>
          </ul>
</li> */}
      {/* <li className={styles.menuItem}>
          <Link href='/product-overview' className={styles.button}>Product </Link>
          <ul className={styles.submenu}>
            <li><Link href='/product-overview' className={styles.button}>Overview</Link></li>
            <li><Link href='/scratchpad' className={styles.button}>ScratchPad</Link></li>
            <li><Link href='/journal' className={styles.button}>Journal</Link></li>
            <li><Link href='/aide' className={styles.button}>AIDE</Link></li>
            <li><Link href='/holly' className={styles.button}>Holly</Link></li>
            <li><Link href='/customer-stories' className={styles.button}>Customer Stories</Link></li>
            <li><Link href='/pricing' className={styles.button}>Pricing</Link></li>
          </ul>
        </li>  */}
      {/*  <li className={styles.menuItem}>
          <Link href='/developer-overview' className={styles.button}>Developers</Link>
          <ul className={styles.submenu}>
            <li><Link href='/developer-overview' className={styles.button}>Overview</Link></li>
            <li><Link href='/developer-docs' className={styles.button}>Docs</Link></li>
            <li><Link href='/developer-api' className={styles.button}>API Reference</Link></li>
            <li><Link href='/developer-examples' className={styles.button}>Examples</Link></li>
          </ul>
        </li>  */}
      {/* <li className={styles.menuItem}>
          <Link href='/about' className={styles.button}>Company</Link>
          <ul className={styles.submenu}>
            <li><Link href='/about' className={styles.button}>About</Link></li>
            <li><Link href='/blog' className={styles.button}>Blog</Link></li>
            <li><Link href='/careers' className={styles.button}>Careers</Link></li>
            <li><Link href='/charter' className={styles.button}>Charter</Link></li>
          </ul>
        </li> 
      </ul>
      </nav> */}
    </header>
  );
};
