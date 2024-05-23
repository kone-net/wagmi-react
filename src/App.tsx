// import { useState } from 'react'  
import '@/App.css'
import { useAccount } from 'wagmi'
import { Account } from './wallet/Account'
import { WalletOptions } from './wallet/WalletOption'

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

function App() {
  return (
        <div>
          <ConnectWallet/>
        </div>
  )
}

export default App
