import * as React from 'react'
import { 
  useWaitForTransactionReceipt,
  useWriteContract 
} from 'wagmi'
import { abi } from './abi'
 
export function WriteContract() {
  const { 
    data: hash, 
    isPending, 
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const address = formData.get('address') as string
    const value = formData.get('value') as string
    console.log(address, value)
    
    writeContract({
      address: '0xA26F122A42fE894C91858379CcD876b105E8b216',
      abi,
      functionName: 'transfer',
      args: [`0x${address}`, BigInt(value)],
    })
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Mint'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
    </form>
  )
}