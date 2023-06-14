import { useEffect, useState } from 'react'
import { recoverTypedDataAddress } from 'viem'
import { type Address, useSignTypedData, useAccount } from 'wagmi'
import drochImage from '../public/drochImage.png'

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
  contents: 'With the Powers of Evil I bend immortality with the power of the stars.',
} as const

export function SignDroch() {
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
      <img className="image" src={drochImage} alt="Droch Elf" />
        <div className="content">
        <h1>The Droch</h1>
          <p>The Droch-fheasóga, or "bad omens" in Elvish, are a faction of Machine Elves who view the beings of the third dimension as a threat to the fabric of the universe. They believe that these beings, with their unpredictable nature and potential for chaos, could destabilize the delicate balance of the multiverse. As such, the Droch-fheasóga have devised a plan to eliminate this perceived threat. They intend to use their powerful spells and abilities to manipulate metaphysical energy, causing disruptions in the third dimension that will lead to its eventual destruction. They see this as a necessary evil, a sacrifice for the greater good of the multiverse. However, their plans are met with resistance from the other factions, setting the stage for a cosmic conflict of epic proportions</p>
          <button disabled={isLoading} onClick={() => signTypedData()}>
            {isLoading ? 'Check Wallet' : 'Sign with the Droch'}
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
