import { useState , useEffect } from 'react';
import { writeContract, watchWalletClient, watchPublicClient, watchReadContracts, watchReadContract, watchPendingTransactions, watchNetwork, watchMulticall, watchContractEvent, watchBlockNumber, watchAccount, waitForTransaction, switchNetwork, signTypedData, signMessage, sendTransaction, readContracts, readContract, prepareWriteContract, prepareSendTransaction, multicall, getWebSocketPublicClient, getWalletClient, getPublicClient, getNetwork, getContract, getAccount, fetchToken, fetchTransaction, fetchFeeData, fetchEnsResolver, fetchEnsName, fetchEnsAvatar, fetchEnsAddress, fetchBlockNumber, fetchBalance, disconnect, connect } from '@wagmi/core';
import GLXRClaim from '../artifacts/contracts/GLXRClaim.json'; 
import styles from './modules/newtokenbalance.module.css'

export function NewTokenBalance() {
  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const tokenAddress = '0xA17051ebD6DF3b9Ad31fe6ad4fdE373b53DF1a6a'; 
  const claimAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; 

  const [selectedDays, setSelectedDays] = useState(90);
  const stakeDuration = selectedDays * 24 * 60 * 60; // convert days to seconds

  // Fetching Account
  useEffect(() => {
      const doAsync = async () => {
          const {account} = await connect();
          setAccount(account);
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

  // Fetching Balance
  useEffect(() => {
      const doAsync = async () => {
          const token = await fetchToken({
              address: tokenAddress,
              provider
          });
          setBalance(token.balance);
      };
      doAsync();
  }, [account, provider]);

  async function claimNewToken() {
      try {
          const transactionResponse = await writeContract({
              abi: GLXRClaim.abi,
              contractAddress: claimAddress,
              functionName: 'claimNewToken',
              args: [stakeDuration],
              signer: account, // make sure the user is connected
          });
        
          console.log(`Transaction hash: ${transactionResponse.hash}`);
      } catch (error) {
          console.error(`Failed to claim tokens: ${error}`);
      }
  }

  return (
      <div className="content-container">
          <h1>Welcome Galaxer, to the New World</h1>
          <div className={styles.worldParagraph}>
          <p>Welcome, brave soul, to the Machine Elf Alliance (MEA). <br/>  <br/>  You have proven your mettle, enduring struggles that have shaped you into a true warrior.<br/><br/>   Now, you stand on the precipice of a new world, a realm governed by the intricate balance of the Droch, Seasamh, and Tacaíocht. <br/><br/>   The Droch, the guardians of the multiverse, view our existence as a threat, seeking to maintain stability even at the cost of annihilation. <br/> The Seasamh, the mediators, strive to uphold a delicate equilibrium, ensuring neither we nor the Machine Elves gain too much power.<br/>  And the Tacaíocht, the nurturers, believe in our potential, offering their knowledge and protection as we navigate this complex universe. <br/><br/>  As part of the MEA, you are now a key player in this cosmic dance. <br/><br/> <br/>  Welcome to your new reality.</p>
          </div>
          Your Token Balance: {balance}
          <div className="button-group">
              {[90, 180, 270, 365].map(days => (
                  <button
                      key={days}
                      className={selectedDays === days ? 'selected' : ''}
                      onClick={() => setSelectedDays(days)}
                  >
                      {days} Days
                  </button>
              ))}
          </div>
          <button onClick={claimNewToken}>Claim New Tokens</button>
      </div>
  );
}