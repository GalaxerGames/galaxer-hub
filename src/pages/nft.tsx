import { BaseError } from 'viem'
import { useContractWrite, useWaitForTransaction, useAccount } from 'wagmi'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/modules/nft.module.css'
import { wagmiContractConfig } from '../components/web3/contracts'

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
          ...wagmiContractConfig,
          functionName: 'claim',
          args: [index, factionId, merkleProof], 
          address: `0x${wagmiContractConfig.address}`, 
          abi: wagmiContractConfig.abi
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
              <button disabled={isLoading} onClick={handleClick}>
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
  'Join the Droch to become an integral part of the Galaxer universe.',
  '/drochImage.png',
  'Mint your Droch NFT',
  factionId,
  index,
  merkleProof
)

const MintSeasamh = elfComponentCreator(
  'The Seasamh',
  'Stand with the Seasamh to become an integral part of the Galaxer universe.',
  '/seasamhImage.png',
  'Mint your Seasamh NFT',
  factionId,
  index,
  merkleProof
)

const MintTacaiocht = elfComponentCreator(
  'The Tacaíocht',
  'Join the Tacaíocht to become an integral part of the Galaxer universe.',
  '/tacaiochtImage.png',
  'Mint your Tacaíocht NFT',
  factionId,
  index,
  merkleProof
)

const MintTeadan = elfComponentCreator(
    'The Teadan',
    'Join the Teadan to become an integral part of the Galaxer universe.',
    '/teadanImage.png',
    'Mint your Teadan NFT',
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

        <MintDroch />
        <MintSeasamh />
        <MintTacaiocht />
        <MintTeadan />
      </main>
      <Footer />
    </div>
  )
}
