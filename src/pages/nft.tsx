import { BaseError } from 'viem'
import { useContractWrite, useWaitForTransaction, useAccount } from 'wagmi'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/modules/nft.module.css'
import { nftContract } from '../components/web3/nftContract'

const elfComponentCreator = (
  title: string, 
  description: string, 
  image: string, 
  claimButtonText: string,
  factionId: number,
  index: number,
  merkleProof: string[]
): (() => JSX.Element) => {
    return function ElfComponent() {
        const { address } = useAccount()
        const [showModal, setShowModal] = useState(false)
    
        const { write, data, error, isLoading, isError } = useContractWrite({
          ...nftContract,
          functionName: 'claim',
          args: [index, factionId, merkleProof], 
          address: `0x${nftContract.address}`, 
          abi: nftContract.abi
        })
    
        const { data: receipt, isLoading: isPending, isSuccess } = useWaitForTransaction({ hash: data?.hash })
    
        const handleClick = () => {
          write()
          setShowModal(isSuccess)
        }
    
        return (
          <div className={styles.mintNftContainer}>
            <Image width={250} height={250} className={styles.image} src={image} alt={`${title} Elf`} />
            <div className={styles.content}>
              <h1>{title}</h1>
              <p>{description}</p>
              <button className={styles.button} disabled={isLoading} onClick={handleClick}>
                 {isLoading ? 'Claiming...' : claimButtonText}
                </button>
            </div>
      
            {isPending && <div className={styles.loader}>Processing Transaction...</div>}
            {isSuccess && showModal && (
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                  <p>Transaction Completed Successfully!</p>
                  <button onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            )}
            {isError && <div className={styles.error}>{(error as BaseError)?.shortMessage}</div>}
          </div>
        )
      }
}

const factionId = 1; // add actual factionId
const index = 1; // add actual index
const merkleProof = ["0x1234", "0x5678"]; // add actual merkleProof

const MintDroch = elfComponentCreator(
  'The Droch',
  'I solemnly pledge my allegiance to the Droch, the Warring Elves and vow to respect your strength and strategy, using your combat prowess as a guide in our journey. In a separate vow, we promise to uphold the principles of courage and determination, standing firm for the prosperity of all dimensions.',
  '/drochImage.png',
  'Sign with the Droch',
  factionId,
  index,
  merkleProof
)

const MintSeasamh = elfComponentCreator(
  'The Seasamh',
  'I solemnly pledge my allegiance to the Seasamh, the Balanced Elves and vow to respect your equilibrium and wisdom, using your balance as a compass in our journey. In a separate vow, we promise to maintain the harmony and stability of our shared existence, standing united for the prosperity of all dimensions.',
  '/seasamhImage.png',
  'Sign with the Seasamh',
  factionId,
  index,
  merkleProof
)

const MintTacaiocht = elfComponentCreator(
  'The Tacaíocht',
  'I solemnly pledge my loyalty to the Tacaíocht, the Supportive Elves and vow to honor your wisdom and guidance, using your support as a foundation for our endeavors. In a separate pledge, we promise to uphold the principles of unity and cooperation, standing together for the prosperity of all dimensions.',
  '/tacaiochtImage.png',
  'Sign with the Tacaiocht',
  factionId,
  index,
  merkleProof
)

const MintTeadan = elfComponentCreator(
    'The Teadan',
    'I pledge my allegiance to the Téadán, the Bright Tardigrade and vow to harness your radiant power with respect and wisdom, and to use your resilience as a beacon in our journey. In a second vow, we promise to uphold the balance and harmony of our shared existence, standing in unity for the prosperity of all dimensions.',
    '/teadanImage.png',
    'Sign with the Teadan',
    factionId,
    index,
    merkleProof
  )

  export default function Home() {
    const clientResult = useAccount();
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Join the Machine Elf Alliance
          </h1>
  
          <div className={styles.nftGrid}>
            <MintDroch />
            <MintSeasamh />
            <MintTacaiocht />
            <MintTeadan />
          </div>
        </main>
        <Footer />
      </div>
    )
  }
  
