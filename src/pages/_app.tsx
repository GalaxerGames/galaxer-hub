import { QueryClient, QueryClientProvider } from 'react-query';
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { AppProps } from 'next/app';

import '../styles/globals.css';

const queryClient = new QueryClient();
const { publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()]);
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
