import React, { useState, useEffect } from 'react';
import styles from '../components/modules/withdraw.module.css';
import { ethers } from 'ethers';
import cosmicCrucibleABI from '../artifacts/contracts/CosmicCrucible.json';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Set your deployed contract address here
const contractAddress = '0x3fd239404FBDd4A636D79eb0a29A45852ab75E60';

function Withdraw() {
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [balance, setBalance] = useState();
    const [duration, setDuration] = useState();
    const [penalty, setPenalty] = useState();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(contractAddress, cosmicCrucibleABI, provider);
            setProvider(provider);
            setContract(contract);
        }
    }, []);

    useEffect(() => {
        if(contract){
            fetchBalance();
            fetchDuration();
            fetchPenalty();
        }
    }, [contract]);

    async function fetchBalance() {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const balance = await contract.getStakedAmount(account);
        setBalance(ethers.utils.formatEther(balance));
    }

    async function fetchDuration() {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const duration = await contract.getStakedDuration(account);
        const now = Math.floor(Date.now() / 1000);
        const stakedTimestamp = await contract.getStakedTimestamp(account);
        const timeRemaining = duration - (now - stakedTimestamp);

        setDuration(timeRemaining);
    }

    async function fetchPenalty() {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const amount = await contract.getStakedAmount(account);
        const duration = await contract.getStakedDuration(account);
        const now = Math.floor(Date.now() / 1000);
        const stakedTimestamp = await contract.getStakedTimestamp(account);
        const timeElapsed = now - stakedTimestamp;

        // I assumed that calculatePenaltyAmount function is made public. 
        // You need to change the contract's function visibility for this to work.
        const penalty = await contract.calculatePenaltyAmount(amount, duration, timeElapsed);
        setPenalty(ethers.utils.formatEther(penalty));
    }

    async function unstake() {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const contractWithSigner = contract.connect(provider.getSigner(account));
        await contractWithSigner.unstakeTokens();
    }

    return (
        <>
        <Header/>
        <div className={styles.contentContainer}>
            <div className={styles.tokenBalance}>
                <h2>Your staked balance: {balance}</h2>
                <h3>Time remaining: {duration}</h3>
                <h3>Penalty Amount: {penalty}</h3>
            </div>
            <button className={styles.buttons} onClick={unstake}>Unstake</button>
        </div>
        <Footer/>
        </>
    );
}

export default Withdraw;
