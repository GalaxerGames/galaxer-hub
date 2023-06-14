import { useEffect, useState } from 'react'
import { recoverTypedDataAddress } from 'viem'
import { type Address, useSignTypedData } from 'wagmi'
import tacaiochtImage from '../public/tacaiochtImage.png'

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
    name: 'Cow',
    wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
    name: 'Bob',
    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'I Vow to Protect the Galaxy. United as Galaxers with the Force of the Tacaiocht.',
} as const

export function SignTacaiocht() {
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
      <img className="image" src={tacaiochtImage} alt="Tacaiocht Elf" />
        <div className="content">
          <h1>The Tacaiocht</h1>
          <p>
The Tacaíocht, translating to "support" in Elvish, are a faction of Machine Elves who believe in the potential of the beings of the third dimension. They see these beings as less evolved and in need of assistance, and thus, they have taken upon themselves the role of guardians. The Tacaíocht's plan is one of nurturing and protection. They aim to use their advanced technology and medical knowledge to aid the third dimension beings in their struggle for survival. They provide them with knowledge and protection, helping them navigate the complexities of the multiverse. Their goal is to ensure the growth and evolution of these beings, hoping that one day, they will be able to stand on their own and contribute positively to the multiverse. However, their benevolent efforts are often met with resistance from factions who view the third dimension beings as a threat, making the Tacaíocht's mission a challenging one.</p>
          <button disabled={isLoading} onClick={() => signTypedData()}>
            {isLoading ? 'Check Wallet' : 'Sign with the Tacaiocht'}
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
