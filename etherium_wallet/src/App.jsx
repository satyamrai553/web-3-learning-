import { QueryClient } from '@tanstack/react-query'
import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'


export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})


const queryClient = new QueryClient()



function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
  <div>
    <input type="text" placeholder="Address" />
    <button>Send 0.1 ETH</button>
  </div>
   </QueryClientProvider> 
    </WagmiProvider>
  )
}

export default App
