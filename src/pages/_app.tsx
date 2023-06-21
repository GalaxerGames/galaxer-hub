import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { AppProps } from "next/app";

import WalletProvider from "../providers/WalletProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}

export default MyApp;
