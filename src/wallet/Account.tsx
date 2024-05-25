import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance } from 'wagmi'
import {SendTransaction} from '@/wallet/SendTransaction'

export function Account() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const balanceValue = useBalance({ address })
  console.log(balanceValue)
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div>
      {isConnected && (
        <div>
          当前钱包地址: {address}<br />
          余额: {balanceValue.data?.value.toString()} <br/>
        </div>
      )}
      {balanceValue.isSuccess && <div>{balanceValue.data.symbol}</div>}
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>

      <SendTransaction />
    </div>
  )
}