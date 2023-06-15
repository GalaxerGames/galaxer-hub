import { useState , useEffect } from 'react';
import { writeContract, watchWalletClient, watchPublicClient, watchReadContracts, watchReadContract, watchPendingTransactions, watchNetwork, watchMulticall, watchContractEvent, watchBlockNumber, watchAccount, waitForTransaction, switchNetwork, signTypedData, signMessage, sendTransaction, readContracts, readContract, prepareWriteContract, prepareSendTransaction, multicall, getWebSocketPublicClient, getWalletClient, getPublicClient, getNetwork, getContract, getAccount, fetchToken, fetchTransaction, fetchFeeData, fetchEnsResolver, fetchEnsName, fetchEnsAvatar, fetchEnsAddress, fetchBlockNumber, fetchBalance, disconnect, connect } from '@wagmi/core';
import GLXRClaim from '../artifacts/contracts/GLXRClaim.json'; 
import styles from '../components/modules/claim.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Claim() {
  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const tokenAddress = '0xA17051ebD6DF3b9Ad31fe6ad4fdE373b53DF1a6a'; 
  const claimAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; 

  const [selectedDays, setSelectedDays] = useState(90);
  const stakeDuration = selectedDays * 24 * 60 * 60; // convert days to seconds
  const [newBalance, setNewBalance] = useState(balance);

const handleButtonClick = (days) => {
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

  setNewBalance(balance * multiplier);
}

 // Fetching Account and Signer
 useEffect(() => {
  const doAsync = async () => {
      const {account} = await connect();
      setAccount(account);
      // After the account is set, get the signer
      const provider = await watchWalletClient();
      const signer = provider.getSigner();
      setSigner(signer);
  };
  doAsync();
}, []);

// Fetching provider
useEffect(() => {
  const providerAsync = async () => {
      const provider = await watchWalletClient();
      setProvider(provider);
  };
  providerAsync();
}, []);

// Then, when calling claimNewToken

async function claimNewToken() {
  console.log('GLXRClaim.abi:', GLXRClaim.abi);
  console.log('claimAddress:', claimAddress);
  console.log('signer:', signer);
  console.log('stakeDuration:', stakeDuration);
  
  try {
      const transactionResponse = await writeContract({
          abi: GLXRClaim.abi,
          contractAddress: claimAddress,
          functionName: 'claimNewToken',
          args: [stakeDuration],
          signer: signer,
      });
    
      console.log(`Transaction hash: ${transactionResponse.hash}`);
  } catch (error) {
      console.error(`Failed to claim tokens: ${error}`);
  }
}


return (
  <>
    <Header className={styles.header}/>
    <div className={styles.contentContainer}>
      <h1>Welcome Galaxer, to the New World</h1>
      <div className={styles.worldParagraph}>
          <p>Welcome, brave soul, to the Machine Elf Alliance (MEA). <br/>  <br/>  You have proven your mettle, enduring struggles that have shaped you into a true warrior.<br/><br/>   Now, you stand on the precipice of a new world, a realm governed by the intricate balance of the Droch, Seasamh, and Tacaíocht. <br/><br/>   The Droch, the guardians of the multiverse, view our existence as a threat, seeking to maintain stability even at the cost of annihilation. <br/> The Seasamh, the mediators, strive to uphold a delicate equilibrium, ensuring neither we nor the Machine Elves gain too much power.<br/>  And the Tacaíocht, the nurturers, believe in our potential, offering their knowledge and protection as we navigate this complex universe. <br/><br/>  As part of the MEA, you are now a key player in this cosmic dance. <br/><br/> <br/>  Welcome to your new reality.</p>
        </div>
        <div className={styles.tokenBalance}>
        <p>My Expected Claim: {newBalance}</p>
      </div>
      <div className={styles.worldParagraph}>
      <p>When You Claim You will be automatically staked for a minimum of 90days and <br/> instantly receive Nebula Notes which you will need for the game.</p>
     </div> 
     <div className={styles.buttonGroup}>
        {[90, 180, 270, 365].map(days => (
          <button
            key={days}
            className={selectedDays === days ? 'selected' : ''}
            onClick={() => handleButtonClick(days)}>
            {days} Days
          </button>
        ))}
      </div>
      <div className={styles.worldParagraph}>
      <p>Choose Your Multiplier Before Claiming. <br/> 90days: 1x <br/> 180days: 10x <br/> 270days: 100x <br/> 365days: 250x</p>
      </div>
      <button className={styles.buttons} onClick={() => claimNewToken(selectedDays * 24 * 60 * 60)}>Claim New Tokens</button>
    </div>
    <Footer/>
    </>
  );
}