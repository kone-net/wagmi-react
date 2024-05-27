import { useReadContract, useAccount } from 'wagmi'
import { abi } from './abi'

export function ReadContract() {
  const { address, isConnected } = useAccount()
  if (!isConnected || address === undefined) {
    console.log("wallet don not connect")
    return;
  }
  let addr = address
  if (!address.startsWith('0x')) {
    addr = `0x${address}`
  }
  const { data: balance, error, isPending } = useReadContract({
    abi: abi,
    address: '0xA26F122A42fE894C91858379CcD876b105E8b216',
    functionName: 'balanceOf',
    args: [address],
  })

  console.log(balance, error, isPending)

  if (isPending) return <div>Loading...</div>


  if (error)
    return (
      <div>
        Error: {error.message}
      </div>
    )

  return (
    <div>Balance: {balance?.toString()}</div>
  )
}