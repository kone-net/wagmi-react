import { http, createConfig } from 'wagmi'
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  localhost,
} from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = '<WALLETCONNECT_PROJECT_ID>'

// export const config = createConfig({
//   chains: [mainnet, base],
//   connectors: [
//     injected(),
//     walletConnect({ projectId }),
//     metaMask(),
//     safe(),
//   ],
//   transports: {
//     [mainnet.id]: http(),
//     [base.id]: http(),
//   },
// })
export const config = getDefaultConfig({
  appName: 'Hardhat RainbowKit App',
  projectId: '11112',
  chains: [mainnet, polygon, optimism, arbitrum, base, localhost],
  ssr: false, // If your dApp uses server side rendering (SSR)
});