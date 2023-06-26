import { useState, useEffect } from 'react';
import { useContractWrite, useWaitForTransaction, useAccount } from 'wagmi';
import { ethers } from 'ethers';
import styles from '../components/modules/claim.module.css';
import Portal from '../artifacts/contracts/Portal.json'; 
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const balanceJsonUrl = 'https://bafybeidw6f3jnislw4hxynccq2vkq3sgikhsarvpzd5y4izolx4p6qvrly.ipfs.nftstorage.link/outputGLXR.json';
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

function largeNumberToBigNumber(value: string): ethers.BigNumber {
  const parts = value.split('.');
  const integerPart = ethers.BigNumber.from(parts[0]);
  const decimalPart = parts[1] ? ethers.BigNumber.from(parts[1]) : ethers.BigNumber.from('0');
  const combined = integerPart.mul(ethers.BigNumber.from(10).pow(decimalPart.toString().length)).add(decimalPart);
  return combined;
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
          multiplier = 100;
          break;
        case 270:
          multiplier = 1000;
          break;
        case 365:
          multiplier = 2000;
          break;
        default:
          multiplier = 10;
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
        throw new Error('Account, balance, or provider not loaded');
      }
  
      const contract = new ethers.Contract(claimAddress, Portal.abi, provider.getSigner());
  
      const balanceString = ethers.utils.formatUnits(balance.toString(), 18);
  
      const balanceBigNumber = largeNumberToBigNumber(balanceString);
  
      const transactionResponse = await contract.claimNewToken(stakeDuration, balanceBigNumber);
  
      console.log(`Transaction hash: ${transactionResponse.hash}`);
    } catch (error: any) {
      setError(`Failed to claim tokens: ${(error as Error).message}`);
      console.error(`Failed to claim tokens: ${(error as Error).message}`);
    }
  }
  
  
  

  
  
  return (
    <>
      <Header/>
      <div className={styles.contentContainer}>
        <h1>Portal to<br/>The Cosmic Crucible</h1>
        <div className={styles.worldParagraph}>
        <p>Welcome, brave soul, to the Machine Elf Alliance (MEA). <br/>  <br/>  You have proven your mettle, enduring struggles that have shaped you into a true warrior.<br/><br/>   Now, you stand on the precipice of a new world, a realm governed by the intricate balance of the Droch, Seasamh, and Tacaíocht. <br/><br/>   The Droch, the guardians of the multiverse, view our existence as a threat, seeking to maintain stability even at the cost of annihilation. <br/> The Seasamh, the mediators, strive to uphold a delicate equilibrium, ensuring neither we nor the Machine Elves gain too much power.<br/>  And the Tacaíocht, the nurturers, believe in our potential, offering their knowledge and protection as we navigate this complex universe. <br/><br/>  As part of the MEA, you are now a key player in this cosmic dance. <br/><br/> <br/>  Welcome to your new reality.</p>
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
