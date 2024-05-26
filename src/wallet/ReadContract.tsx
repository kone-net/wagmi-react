import { useReadContract } from 'wagmi'
import { abi } from './abi'

export function ReadContract() {
  const { data: balance, error, isPending } = useReadContract({
    abi: abi,
    address: '0xA26F122A42fE894C91858379CcD876b105E8b216',
    functionName: 'balanceOf',
    args: ['0xbDD645574b7db65b22c5Bb4DA4Eec8841e3Fe84a'],
    // account: '0xbDD645574b7db65b22c5Bb4DA4Eec8841e3Fe84a'
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