import { useState, useEffect } from 'react';
import { useBalance } from 'wagmi';
import { useAccount } from 'wagmi';

export function NewNFTBalance() {
  const [balance, setBalance] = useState(null);
  const { address } = useAccount(); // Get the user's Ethereum address
  const tokenAddress = '0x75D0FB8dB2f6485fDFE6FF58321e91EFfAE759A8'; // Replace with the token's address

  const { data, refetch } = useBalance({
    address,
    token: tokenAddress,
  });

  useEffect(() => {
    if (data) {
      setBalance(data.formatted);
    }
  }, [data]);

  return (
    <div className="content-container">
      Your Token Balance: {balance}
      <button onClick={() => refetch()}>My New GLXR NFT Balance</button>
    </div>
  );
  

}
