import { useEffect, useState } from 'react'
import { recoverTypedDataAddress } from 'viem'
import { type Address, useSignTypedData, useAccount } from 'wagmi'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';
import styles from '../components/modules/nft.module.css';


const drochImage = '/drochImage.png';
const seasamhImage = '/seasamhImage.png';
const tacaiochtImage = '/tacaiochtImage.png';
const teadanImage = '/teadanImage.png';


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

const messageCreator = (fromName, fromWallet, contents) => ({
  from: {
    name: fromName,
    wallet: fromWallet,
  },
  to: {
    name: 'Bob',
    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents,
} as const)

const elfComponentCreator = (title, message, description, image, signButtonText) => {
  return function ElfComponent() {
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
      <div className={styles.signMessageContainer}>
        <Image className={styles.image} src={image} alt={`${title} Elf`} />
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{description}</p>
          <button disabled={isLoading} onClick={() => signTypedData()}>
            {isLoading ? 'Check Wallet' : signButtonText}
          </button>
        </div>
  
        {data && (
          <div className={styles.contentContainer}>
            <div>Signature: {data}</div>
            <div>Recovered address {recoveredAddress}</div>
          </div>
        )}
        {error && <div>Error: {error?.message}</div>}
      </div>
    )
  }
}

const SignDroch = elfComponentCreator(
  'The Droch',
  messageCreator('Galaxer', useAccount, 'In the infinite stretches of the Galaxer universe, we, the humans, solemnly pledge our allegiance to the Droch, the Warring Elves. We vow to respect your strength and strategy, using your combat prowess as a guide in our journey. In a separate vow, we promise to uphold the principles of courage and determination, standing firm for the prosperity of all dimensions.'),
  'The Droch, known as the Warring Elves, represent the relentless strength and strategic prowess in the Galaxer universe. Their combat skills and determination serve as a guide for humans, inspiring courage and resilience in the face of adversity.',
  drochImage,
  'Sign with the Droch',
)

const SignSeasamh = elfComponentCreator(
  'The Seasamh',
  messageCreator('Galaxer', useAccount, 'In the limitless realms of the Galaxer universe, we, the humans, solemnly pledge our allegiance to the Seasamh, the Balanced Elves. We vow to respect your equilibrium and wisdom, using your balance as a compass in our journey. In a separate vow, we promise to maintain the harmony and stability of our shared existence, standing united for the prosperity of all dimensions.'),
  'The Seasamh, or the Balanced Elves, embody equilibrium and wisdom in the vast Galaxer universe. Their innate sense of balance and harmony serves as a compass for humans, guiding them towards stability and unity in their interdimensional journey.',
  seasamhImage,
  'Sign with the Seasamh',
)

const SignTacaiocht = elfComponentCreator(
  'The Tacaiocht',
  messageCreator('Galaxer', useAccount, 'As we traverse the infinite expanses of the Galaxer universe, we, the humans, solemnly pledge our loyalty to the Tacaíocht, the Supportive Elves. We vow to honor your wisdom and guidance, using your support as a foundation for our endeavors. In a separate pledge, we promise to uphold the principles of unity and cooperation, standing together for the prosperity of all dimensions.'),
  'The Tacaíocht, known as the Supportive Elves, symbolize guidance and unity in the expansive Galaxer universe. Their unwavering support and wisdom serve as a foundation for humans, fostering cooperation and mutual growth in their cosmic journey.',
  tacaiochtImage,
  'Sign with the Tacaiocht',
)

const SignTeadan = elfComponentCreator(
  'The Teadan',
  messageCreator('Galaxer', useAccount, 
  'In the vast expanse of the Galaxer universe, we, the humans, pledge our allegiance to the Téadán, the Bright Tardigrade. We vow to harness your radiant power with respect and wisdom, and to use your resilience as a beacon in our journey. In a second vow, we promise to uphold the balance and harmony of our shared existence, standing in unity for the prosperity of all dimensions.'),
  'Téadán, the Bright Tardigrade, symbolizes the radiant power and resilience that tardigrades bestow upon the machine elves, illuminating their path in the vast universe of Galaxer.',
  teadanImage,
  'Sign with the Taedan',
)
function NFT() {
  return (
    <div className={styles.Header}>
      <Header />
    <div className={styles.mainContainer}>
      <SignDroch />
      <SignSeasamh />
      <SignTacaiocht />
      <SignTeadan />
      <Footer />
    </div>
    </div>
  )
}

export default NFT;
