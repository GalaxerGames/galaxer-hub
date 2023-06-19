import { useState , useEffect } from 'react';
import { InjectedConnector, connect, watchWalletClient, writeContract, watchContractEvent } from '@wagmi/core';
import GLXRClaim from '../artifacts/contracts/GLXRClaim.json'; 
import styles from '../components/modules/claim.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WalletConnectConnector } from 'wagmi/dist/connectors/walletConnect';
import { WalletClient } from 'viem/dist/types/clients/createWalletClient';

const tokenAddress = '0xA17051ebD6DF3b9Ad31fe6ad4fdE373b53DF1a6a'; 
const claimAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; 

function Claim() {
  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState<string | null>(null);
  const [signer, setSigner] = useState<any | null>(null);
  const [selectedDays, setSelectedDays] = useState(90);
  const stakeDuration = selectedDays * 24 * 60 * 60; // convert days to seconds
  const [newBalance, setNewBalance] = useState<number | null>(null);
  const injectedConnector = new InjectedConnector({ options: { shimDisconnect: true } });
  const walletConnectConnector: WalletConnectConnector = new WalletConnectConnector({ options: { projectId: '...', showQrModal: true } });

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
      const {account} = await connect({ connector: injectedConnector });
      setAccount(account);
    };
    fetchAccount();
  }, [injectedConnector]);

  useEffect(() => {
    const fetchSigner = async () => {
      const unwatch = await watchWalletClient(
        { chainId: 1 },
        async (walletClient: WalletClient | null) => {
          if(walletClient !== null){
            setSigner(walletClient); // directly assigning walletClient to signer
          }
        }
      );
      return () => unwatch();
    };
    fetchSigner();
  }, []);


  async function claimNewToken() {
    try {
      const transactionResponse = await writeContract({
        abi: GLXRClaim.abi,
        contractAddress: claimAddress,
        functionName: 'claimNewToken',
        args: [stakeDuration, balance, merkleProofs], // merkleProofs needs to be defined in your code
        signer: signer,
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
            <p>Welcome, brave soul, to the Machine Elf Alliance (MEA)...Welcome to your new reality.</p>
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
