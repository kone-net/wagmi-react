import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance } from 'wagmi'
import {SendTransaction} from '@/wallet/SendTransaction'
import { ReadContract } from '@/wallet/ReadContract'

export function Account() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const balanceValue = useBalance({ address })
  console.log(balanceValue)

  var value: string = "0"
  if (balanceValue?.data?.value) {
    value = (Number(balanceValue?.data?.value) /  Number(1e18)).toFixed(4)
}
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div>
      {isConnected && (
        <div>
          当前钱包地址: {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
          {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}<br />
          余额: {balanceValue.data?.value.toString()} gwei <br/>
          余额(ETH): {value.toString()} {balanceValue?.data?.symbol}<br/>
        </div>
      )}
      
      <button onClick={() => disconnect()}>Disconnect</button>

      <SendTransaction />
      <ReadContract />
    </div>
  )
}