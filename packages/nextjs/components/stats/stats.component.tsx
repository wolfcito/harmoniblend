import Image from 'next/image'
import { Article } from '../article'
import { Title } from '../title'

export function Stats() {
  return (
    <Article className="min-h-[700px]">
      <div className="flex flex-col max-w-lg space-y-4">
        <Title label="About Harmoniblend" />

        <p className="text-slate-300">Represent both harmony and blend in the financial context.</p>
        <p className="text-slate-300">
          ⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript. ✅ Contract Hot Reload: Your frontend
          auto-adapts to your smart contract as you edit it. 🔥 Burner Wallet & Local Faucet: Quickly test your
          application with a burner wallet and local faucet. 🔐 Integration with Wallet Providers: Connect to different
          wallet providers and interact with the Ethereum network.
        </p>
      </div>

      <Image src="/upcurve.jpg" alt="levelup" width={100} height={300} className="h-auto ml-20 w-52" />
      <div className="px-4 space-y-5">
        <div className="text-right">
          <h3 className="text-balance font-bold text-[3em] leading-tight text-limelight">+2M</h3>
          <p className="text-slate-300">Funding volume</p>
        </div>
        <div className="text-right">
          <h3 className="text-balance font-bold text-[3em] leading-tight text-limelight">+50</h3>
          <p className="text-slate-300">Completed Projects</p>
        </div>
        <div className="text-right">
          <h3 className="text-balance font-bold text-[3em] leading-tight text-limelight">80%</h3>
          <p className="text-slate-300">Community Engagement</p>
        </div>
      </div>
    </Article>
  )
}
