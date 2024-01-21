'use client'

// @refresh reset
import { Balance } from '../Balance'
import { AddressInfoDropdown } from './AddressInfoDropdown'
import { AddressQRCodeModal } from './AddressQRCodeModal'
import { WrongNetworkDropdown } from './WrongNetworkDropdown'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Address } from 'viem'
import { Button } from '~~/components/button'
import { useAutoConnect, useNetworkColor } from '~~/hooks/scaffold-eth'
import { useTargetNetwork } from '~~/hooks/scaffold-eth/useTargetNetwork'
import { getBlockExplorerAddressLink } from '~~/utils/scaffold-eth'

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  useAutoConnect()
  const networkColor = useNetworkColor()
  const { targetNetwork } = useTargetNetwork()

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <Button className="btn btn-secondary btn-sm" onClick={openConnectModal}>
                    Connect Wallet
                  </Button>
                )
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return <WrongNetworkDropdown />
              }

              return (
                <>
                  <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address as Address} className="h-auto min-h-0" />
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div>
                  <AddressInfoDropdown
                    address={account.address as Address}
                    displayName={account.displayName}
                    ensAvatar={account.ensAvatar}
                    blockExplorerAddressLink={blockExplorerAddressLink}
                  />
                  <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
                </>
              )
            })()}
          </>
        )
      }}
    </ConnectButton.Custom>
  )
}
