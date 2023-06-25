import { useState, useEffect } from 'react';
import { useContractWrite, useWaitForTransaction, useAccount } from 'wagmi';
import { ethers } from 'ethers';
import styles from '../components/modules/claim.module.css';
import Portal from '../artifacts/contracts/Portal.json'; 
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const balanceJsonUrl = 'https://bafybeibqbhprtnmueudgn7udzqr2qnqbf72qixoq2dkkaxcpgoi7vf2tqy.ipfs.nftstorage.link/outputGLXR.json';
const claimAddress = "0x5511a0180A1add063CCdD932C07B8257954F3bbE"; 

async function fetchBalance(userAddress: string): Promise<number> {
  try {
    const response = await fetch(balanceJsonUrl);
    if (!response.ok) {
      console.error(`Failed to fetch balance: ${response.statusText}`);
      return 0;
    }

    const dataArray = await response.json();
    const userEntry = dataArray.find((entry: {userAddress: string, balance: string}) => 
      entry.userAddress.toLowerCase() === userAddress.toLowerCase()
    );

    if (userEntry === undefined) {
      console.error(`No balance found for address: ${userAddress}`);
      return 0;
    }
    
    return Number(userEntry.balance);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching balance: ${error.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
    return 0;
  }
}



function Claim() {
  const account = useAccount();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [selectedDays, setSelectedDays] = useState(90);
  const [error, setError] = useState<string | null>(null);
  const [claim, setClaim] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  }, []);

  const stakeDuration = selectedDays * 24 * 60 * 60; // convert days to seconds

  useEffect(() => {
    if (balance !== null) {
      let multiplier;

      switch (selectedDays) {
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

      setClaim(balance * multiplier);
    }
  }, [balance, selectedDays]);

  const handleStakeDuration = (days: number) => {
    setSelectedDays(days);
  };

  useEffect(() => {
    const fetchUserBalance = async () => {
      if (account.address) {
        try {
          const userBalance = await fetchBalance(account.address);
          setBalance(userBalance);
        } catch (err) {
          setError('Failed to fetch balance');
        }
      }
    };
    fetchUserBalance();
  }, [account]);

  async function claimNewToken() {
    try {
      if (!account.address || balance === null || !provider) {
        throw new Error('Account, balance or provider not loaded');
      }
  
      const contract = new ethers.Contract(claimAddress, Portal.abi, provider.getSigner());
  
      const transactionResponse = await contract.claimNewToken(stakeDuration, balance);
  
      console.log(`Transaction hash: ${transactionResponse.hash}`);
    } catch (error: any) {
      setError(`Failed to claim tokens: ${(error as Error).message}`);
    }
  }
  
  return (
    <>
      <Header/>
      <div className={styles.contentContainer}>
        <h1>Portal to<br/>The Cosmic Crucible</h1>
        <div className={styles.worldParagraph}>
          <p>Welcome, brave soul, to the Machine Elf Alliance (MEA). ... </p>
        </div>
        <div className={styles.tokenBalance}>
          <p>My Balance: {balance}</p>
        </div>
        <div className={styles.worldParagraph}>
          <p>When You Claim You will be automatically staked for a minimum of 90days and instantly receive Nebula Notes which you will need for the game.</p>
        </div> 
        <div className={styles.buttonGroup}>
          {[90, 180, 270, 365].map(days => (
            <button key={days} className={selectedDays === days ? 'selected' : ''} onClick={() => handleStakeDuration(days)}>{days} Days</button>
          ))}
        </div>
        <div className={styles.tokenBalance}>
          <p>My Expected Claim: {claim}</p>
        </div>
        <div className={styles.worldParagraph}>
          <p>Choose Your Multiplier Before Claiming. 90days: 10x, 180days: 100x, 270days: 1000x, 365days: 2000x</p>
        </div>
        <button className={styles.buttons} onClick={claimNewToken}>Claim New Tokens</button>
      </div>
      <Footer/>
    </>
  );
}

export default Claim;
