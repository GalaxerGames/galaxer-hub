import { useState } from 'react'
import type { Address } from 'wagmi'
import { useAccount, useBalance } from 'wagmi'
import { useContractRead } from 'wagmi'
import { glxABI } from '../contracts/glx.json'

export function Balance() {
  return (
    <>
      <div className="content-container">
        <h2>Account Balance</h2>
        <div className="box">
          <AccountBalance />
        </div>
      </div>
      <br />
      <div>
        <h2>Find Balance</h2>
        <div className="box">
          <FindBalance />
        </div>
      </div>
    </>
  )
}

export function AccountBalance() {
  const { address } = useAccount()
  const { data, refetch } = useBalance({
    address,
    watch: true,
  })

  return (
    <div>
      {data?.formatted}
      <button onClick={() => refetch()}>Get ETH Balance</button>
    </div>
  )
}

export function TokenBalance() {
  const { address } = useAccount();
  const glxAddress = import.meta.env.VITE_GLX_ADDRESS;

  const { data, refetch } = useContractRead({
    address: glxAddress, // Token contract address
    abi: glxABI, // You need to provide the ABI of your token contract here
    functionName: 'balanceOf',
    args: [address],
    watch: true,
  });

  return (
    <div>
      Your GLX Balance: {data?.formatted}
      <button onClick={() => refetch()}>Get GLX Balance</button>
    </div>
  );
}

export function FindBalance() {
  const [address, setAddress] = useState('')
  const { data, isLoading, refetch } = useBalance({
    address: address as Address,
  })

  const [value, setValue] = useState('')

  return (
    <div>
      Find balance:{' '}
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="wallet address"
        value={value}
      />
      <button
        onClick={() => (value === address ? refetch() : setAddress(value))}
      >
        {isLoading ? 'fetching...' : 'fetch'}
      </button>
      <div>{data?.formatted}</div>
    </div>
  )
}
