import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, mainnet, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

type WalletProviderProps = {
  children: React.ReactNode;
};

const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, polygonMumbai],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Galaxer",
    projectId: "GALAXER",
    chains,
  });

  const config = createConfig({
    publicClient,
    webSocketPublicClient,
    autoConnect: true,
    connectors,
  });

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={darkTheme({
          accentColor: "#252525",
          accentColorForeground: "#ffbf0095",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
