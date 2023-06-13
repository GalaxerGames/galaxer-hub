import { useEffect, useState } from 'react'
import { recoverTypedDataAddress } from 'viem'
import { type Address, useSignTypedData, useAccount } from 'wagmi'
import seasamhImage from '../public/seasamhImage.png'

const domain = {
  name: 'Ether Mail',
  version: '1',
  chainId: 1,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const

const types = {
  Person: [
    { name: 'name', type: 'string' },
    { name: 'wallet', type: 'address' },
  ],
  Mail: [
    { name: 'from', type: 'Person' },
    { name: 'to', type: 'Person' },
    { name: 'contents', type: 'string' },
  ],
} as const

const message = {
  from: {
    name: 'Galaxer',
    wallet: useAccount,
  },
  to: {
    name: 'Bob',
    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Make every attempt to leave all as it is.',
} as const

export function SignSeasamh() {
  const { data, error, isLoading, signTypedData } = useSignTypedData({
    domain,
    types,
    message,
    primaryType: 'Mail',
  })

  const [recoveredAddress, setRecoveredAddress] = useState<Address>()
  useEffect(() => {
    if (!data) return
    ;(async () => {
      setRecoveredAddress(
        await recoverTypedDataAddress({
          domain,
          types,
          message,
          primaryType: 'Mail',
          signature: data,
        }),
      )
    })()
  }, [data])

  return (
    <div className="sign-message-container">
      <div className="content-row">
      <img className="image" src={seasamhImage} alt="Seasamh Elf" />
        <div className="content">
        <h1>The Seasamh</h1>
          <p>The Seasamh, translating to "balance" in Elvish, are a faction of Machine Elves who strive to maintain harmony between the dimensions. They believe that the beings of the third dimension have a right to exist, but their powers must be kept in check to prevent any potential disruption to the multiverse. The Seasamh's plan is one of diplomacy and negotiation. They aim to use their balanced approach to magic and technology to mediate between the third dimension beings and the other factions of Machine Elves. Their goal is to establish a set of rules and agreements that will ensure peaceful coexistence and mutual respect among all beings. However, their diplomatic efforts are often challenged by the more aggressive factions, forcing the Seasamh to constantly navigate complex power dynamics to keep the peace.</p>
          <button disabled={isLoading} onClick={() => signTypedData()}>
            {isLoading ? 'Check Wallet' : 'Sign with the Seasamh'}
          </button>
        </div>
      </div>
  
      {data && (
        <div className="content-container">
          <div>Signature: {data}</div>
          <div>Recovered address {recoveredAddress}</div>
        </div>
      )}
      {error && <div>Error: {error?.message}</div>}
    </div>
  )
  
  
}
