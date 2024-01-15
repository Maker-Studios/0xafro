import { useEffect } from "react";
import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import { WagmiConfig } from "wagmi";
import { Toaster } from "~~/components/ui/toaster";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { cn } from "~~/lib/utils";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.scss";
import { AppContextProvider } from "~~/utils/contexts/AppContext";
import { ibn_plex_mono, inter } from "~~/utils/fonts";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <AppContextProvider>
      <main className={cn(inter.className, ibn_plex_mono.variable)}>
        <Component {...pageProps} />
      </main>

      <Toaster />
    </AppContextProvider>
  );
};

const ScaffoldEthAppWithProviders = (props: AppProps) => {
  // This variable is required for initial client side rendering of correct theme for RainbowKit

  return (
    <WagmiConfig config={wagmiConfig}>
      <NextNProgress />
      <RainbowKitProvider chains={appChains.chains}>
        <ScaffoldEthApp {...props} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthAppWithProviders;
