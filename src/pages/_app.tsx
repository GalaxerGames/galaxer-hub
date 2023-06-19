import { QueryClient, QueryClientProvider } from 'react-query';
import { WagmiConfig, createConfig } from 'wagmi';
import { configureChains, mainnet } from '@wagmi/core';
import { polygon, polygonMumbai } from '@wagmi/core/chains';
import { publicProvider } from 'wagmi/providers/public';
import { AppProps } from 'next/app';

import '../styles/globals.css';

const queryClient = new QueryClient();
const { publicClient, webSocketPublicClient } = configureChains([mainnet, polygon, polygonMumbai], [publicProvider()]);
const config = createConfig({ publicClient, webSocketPublicClient });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <Component {...pageProps} />
      </WagmiConfig>
    </QueryClientProvider>
  );
}

export default MyApp;
