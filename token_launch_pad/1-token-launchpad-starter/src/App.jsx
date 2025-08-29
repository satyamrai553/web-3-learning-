import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css'
import { clusterApiUrl } from '@solana/web3.js';





function App() {
  return (
    <ConnectionProvider endpoint='https://api.devnet.solana.com'>

   <WalletProvider wallets={[]}>

   
    <WalletModalProvider>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
 <WalletMultiButton/>
      <WalletDisconnectButton />
      </div>
     
      <TokenLaunchpad></TokenLaunchpad>
    </WalletModalProvider>
    </WalletProvider>
     </ConnectionProvider>
  )
}

export default App
