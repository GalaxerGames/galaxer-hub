import '@rainbow-me/rainbowkit/styles.css'
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon, polygonMumbai, goerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

type WalletProviderProps = {
  children: React.ReactNode
}
const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const { theme } = resolveConfig(tailwindConfig)
  const { chains, provider } = configureChains(
    [mainnet, polygon, polygonMumbai, goerli ],
    [publicProvider()]
  )

  const { connectors } = getDefaultWallets({
    appName: 'Galaxer',
    projectId: 'GLXR',
    chains,
  })

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  })

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: theme.colors.accent,
          accentColorForeground: theme.colors.primary[600],
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default WalletProvider