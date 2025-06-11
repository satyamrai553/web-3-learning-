import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";


import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./Airdrop";

function App() {
  

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/YvGnmvojySkIuXx4cNt8VL3oNObvdY9w"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
