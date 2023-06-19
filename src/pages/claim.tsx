import { useState, useEffect } from 'react';
import { InjectedConnector, connect, writeContract } from '@wagmi/core';
import { createWalletClient, custom } from 'viem'; 
import { mainnet } from 'viem/chains';
import GLXRClaim from '../artifacts/contracts/GLXRClaim.json'; 
import styles from '../components/modules/claim.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'

const tokenAddress = '0xA17051ebD6DF3b9Ad31fe6ad4fdE373b53DF1a6a'; 
const claimAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; 

async function getMerkleProofs(userAddress: string): Promise<string[]> {
  const response = await fetch(`https://yourserver.com/merkleProof/${userAddress}`);
  const data = await response.json();
  return data.merkleProof;
}

function Claim() {
  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState<string | null>(null);
  const [walletClient, setWalletClient] = useState<any | null>(null);
  const [selectedDays, setSelectedDays] = useState(90);
  const stakeDuration = selectedDays * 24 * 60 * 60; // convert days to seconds
  const [newBalance, setNewBalance] = useState<number | null>(null);

  const handleStakeDuration = (days: number) => {
    setSelectedDays(days);
    let multiplier;

    switch(days) {
      case 180:
        multiplier = 10;
        break;
      case 270:
        multiplier = 100;
        break;
      case 365:
        multiplier = 250;
        break;
      default:
        multiplier = 1;
    }

    if (balance !== null) {
      setNewBalance(balance * multiplier);
    }
  }

  useEffect(() => {
    const fetchAccount = async () => {
      // Create a Wallet Client using viem
      const client = createWalletClient({
        chain: mainnet,
        transport: custom(window.ethereum)
      });

      const [address] = await client.getAddresses();
      setAccount(address);
      setWalletClient(client);
    };
    fetchAccount();
  }, []);

  async function claimNewToken() {
    try {
      if (account === null) {
        throw new Error("Account not loaded");
      }

      const merkleProofs = await getMerkleProofs(account);

      const transactionResponse = await walletClient.sendTransaction({
        to: claimAddress,
        data: walletClient.interface.encodeFunctionData('claimNewToken', [stakeDuration, balance, merkleProofs]),
      });

      console.log(`Transaction hash: ${transactionResponse.hash}`);
    } catch (error) {
      console.error(`Failed to claim tokens: ${error}`);
    }
  }


  return (
    <>
      <Header/>
      <div className={styles.contentContainer}>
        <h1>Welcome Galaxer, to the New World</h1>
        <div className={styles.worldParagraph}>
        <p>Welcome, brave soul, to the Machine Elf Alliance (MEA). <br/>  <br/>  You have proven your mettle, enduring struggles that have shaped you into a true warrior.<br/><br/>   Now, you stand on the precipice of a new world, a realm governed by the intricate balance of the Droch, Seasamh, and Tacaíocht. <br/><br/>   The Droch, the guardians of the multiverse, view our existence as a threat, seeking to maintain stability even at the cost of annihilation. <br/> The Seasamh, the mediators, strive to uphold a delicate equilibrium, ensuring neither we nor the Machine Elves gain too much power.<br/>  And the Tacaíocht, the nurturers, believe in our potential, offering their knowledge and protection as we navigate this complex universe. <br/><br/>  As part of the MEA, you are now a key player in this cosmic dance. <br/><br/> <br/>  Welcome to your new reality.</p>
        </div>
        <div className={styles.tokenBalance}>
          <p>My Expected Claim: {newBalance}</p>
        </div>
        <div className={styles.worldParagraph}>
          <p>When You Claim You will be automatically staked for a minimum of 90days and instantly receive Nebula Notes which you will need for the game.</p>
        </div> 
        <div className={styles.buttonGroup}>
          {[90, 180, 270, 365].map(days => (
            <button key={days} className={selectedDays === days ? 'selected' : ''} onClick={() => handleStakeDuration(days)}>{days} Days</button>
          ))}
        </div>
        <div className={styles.worldParagraph}>
          <p>Choose Your Multiplier Before Claiming. 90days: 1x, 180days: 10x, 270days: 100x, 365days: 250x</p>
        </div>
        <button className={styles.buttons} onClick={claimNewToken}>Claim New Tokens</button>
      </div>
      <Footer/>
    </>
  );
}

export default Claim;
