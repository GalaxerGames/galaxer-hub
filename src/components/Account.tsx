import { useAccount, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })

  return (
    <div className="content-container">
      <h2>Account</h2>
      <div className="box">
        {ensName ?? address}
        {ensName ? ` (${address})` : null}
      </div>
    </div>
  )
}
