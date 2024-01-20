import Image from 'next/image'
import Link from 'next/link'
import { ButtonNeon, ButtonSimple } from '../button'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export function Header() {
  return (
    <div className="flex items-center justify-between w-full p-6">
      <Link href={'/'} className="text-xl text-limelight">
        <Image src={'/logo.png'} alt=" logo" width={50} height={50} className="w-auto h-7" />
      </Link>
      <div className="flex items-center">
        <Link href={'/jars'} className="flex mr-10 text-md hover:underline">
          Vote!
        </Link>
        <Link href={'/dashboard'} className="flex mr-10 text-md hover:underline">
          Dashboard
        </Link>
        <ConnectButton.Custom>
          {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
            const ready = mounted && authenticationStatus !== 'loading'
            const connected =
              ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated')

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return <ButtonNeon onClick={openConnectModal} label="Connect Wallet" />
                  }

                  if (chain.unsupported) {
                    return <ButtonNeon onClick={openChainModal} label=" Wrong network" />
                  }

                  return (
                    <div className="flex items-center justify-center">
                      <div className="flex flex-col items-end">
                        <ButtonSimple onClick={openAccountModal} className="text-sm">
                          {account.displayName}
                          {account.displayBalance ? ` (${account.displayBalance})` : ''}
                        </ButtonSimple>
                        <ButtonSimple onClick={openChainModal} className="font-sans text-xs">
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl ? (
                                <Image alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} width={12} height={12} />
                              ) : null}
                            </div>
                          )}
                          {chain.name}
                        </ButtonSimple>
                      </div>
                      <Link href={'/profile'} className="mx-3">
                        <div className="w-8 rounded-lg ring ring-limelight ring-offset-limelight ring-offset-1">
                          <Image
                            src="/team/wolfcito.png"
                            alt="wolfcito profile"
                            width={33}
                            height={33}
                            className="rounded-lg"
                          />
                        </div>
                      </Link>
                    </div>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  )
}
