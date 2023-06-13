// React Modules
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
// CSS
import './App.css';

// Web3
import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

// Maps
import 'mapbox-gl/dist/mapbox-gl.css';

// Images
import  logo  from './public/logo192.png'

// Components
import { Account } from './components/Account'
import { Balance } from './components/Balance'
import { BlockNumber } from './components/BlockNumber'
import { NetworkSwitcher } from './components/NetworkSwitcher'
import { ReadContract } from './components/ReadContract'
import { ReadContracts } from './components/ReadContracts'
import { ReadContractsInfinite } from './components/ReadContractsInfinite'
import { SendTransaction } from './components/SendTransaction'
import { SendTransactionPrepared } from './components/SendTransactionPrepared'
import { SignMessage } from './components/SignMessage'
import { SignSeasamh } from './components/SignSeasamh'
import { SignDroch } from './components/SignDroch'
import { SignTacaiocht } from './components/SignTacaiocht'
import { Token } from './components/Token'
import { WatchContractEvents } from './components/WatchContractEvents'
import { WatchPendingTransactions } from './components/WatchPendingTransactions'
import { OldTokenBalance } from './components/OldTokenBalance'
import { NewTokenBalance } from './components/NewTokenBalance'
import { OldNFTBalance } from './components/OldNFTBalance'
import { NewNFTBalance } from './components/NewNFTBalance'
import { WriteContract } from './components/WriteContract'
import { WriteContractPrepared } from './components/WriteContractPrepared'
import { ParallaxSlider } from './components/ParalaxSlider'
import { GalaxerMap } from './components/GalaxerMap'
import  Home  from './Home'



export function App() {
  const { isConnected } = useAccount();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const sidebarContent = (
    <div className="sidebar-content">
      <img src={logo} alt="Logo" />
      <Web3Button />
      <nav>
        <Link className="sidebar-button" to="/">Home</Link>
        <Link className="sidebar-button"  to="/account">Account</Link>
        <Link className="sidebar-button"  to="/balance">Balance</Link>
        <Link className="sidebar-button"  to="/portal">Portal</Link>
        <Link className="sidebar-button"  to="/droch">The Droch</Link>
        <Link className="sidebar-button"  to="/seasamh">The Seasamh</Link>
        <Link className="sidebar-button"  to="/tacaiocht">The Tacaiocht</Link>
        <Link className="sidebar-button"  to="/old-token-balance">OLD GLX</Link>
        <Link className="sidebar-button"  to="/new-token-balance">GET GLXR</Link>
        <Link className="sidebar-button"  to="/old-nft-balance">OLD GLX NFT</Link>
        <Link className="sidebar-button"  to="/new-nft-balance">GET GLXR NFT</Link>
        <Link className="sidebar-button"  to="/map">Set Map Location</Link>
      </nav>
    </div>
  );

  return (
    <Router>

<header style={{ width: '100%', backgroundColor: '#FFBF00', padding: '20px 0', textAlign: 'center' }}>
        <h1>Welcome to the Galaxer Hub</h1>
        </header>
      <Sidebar
        sidebar={sidebarContent}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        styles={{ sidebar: { background: "black", width: "250px" } }}
      >
        <button onClick={openSidebar}>Menu</button>

        {isConnected && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/portal" element={<NetworkSwitcher />} />
            <Route path="/droch" element={<SignDroch />} />
            <Route path="/seasamh" element={<SignSeasamh />} />
            <Route path="/tacaiocht" element={<SignTacaiocht />} />
            <Route path="/old-token-balance" element={<OldTokenBalance />} />
            <Route path="/new-token-balance" element={<NewTokenBalance />} />
            <Route path="/old-nft-balance" element={<OldNFTBalance />} />
            <Route path="/new-nft-balance" element={<NewNFTBalance />} />
            <Route path="/map" element={<GalaxerMap />} />
          </Routes>
        )}
        </Sidebar>
      
        </Router>
        
        );
        }