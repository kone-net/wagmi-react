import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css';

import { WagmiProvider } from 'wagmi'
import { config } from './wallet/config.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale="zh-CN">
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
      </WagmiProvider>
  </React.StrictMode>,
)
