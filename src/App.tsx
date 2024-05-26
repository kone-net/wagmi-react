// import { useState } from 'react'  
import '@/App.css'
import { useAccount } from 'wagmi'
import { Account } from './wallet/Account'
import { WalletOptions } from './wallet/WalletOption'

import { ConnectButton } from '@rainbow-me/rainbowkit';

function ConnectWallet() {
  const { isConnected } = useAccount()
  console.log("isConnected is ", isConnected)
  if (isConnected) return <Account />
  return <WalletOptions />
}

function App() {
  return (
        <div>
          <ConnectWallet/>
          <ConnectButton />
        </div>
  )
}

export default App
