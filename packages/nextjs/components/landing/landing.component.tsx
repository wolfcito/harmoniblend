import Image from 'next/image'
import { Article } from '../article'
import { ButtonNeon } from '../button'
import { Title } from '../title'

export function Landing() {
  const createPool = () => {
    console.log('pool created')
  }

  const createApplication = () => {
    console.log('application created')
  }

  const createProfile = () => {
    console.log('profile created')
  }

  return (
    <Article>
      <div className="flex flex-col max-w-2xl">
        <Title label="Fund actions that matter" />

        <p className="py-10 text-2xl font-semibold">Transparent, Secure, and Fueled by Giving.</p>
        <p className="py-10 text-slate-300">
          Explore, Fund, Decide - Revolutionizing collective financing with Arbitrum and Allo Protocol. Empowering real
          world help.
        </p>
        <p className="py-5 space-x-5">
          <ButtonNeon onClick={createProfile} label="Create Profile" />

          <ButtonNeon onClick={createPool} label="Create Pool" />

          <ButtonNeon onClick={createApplication} label="Apply to Pool" />
        </p>
      </div>

      <Image src="/Harmoniblend.png" alt="Harmoniblend image" width={200} height={300} className="h-auto w-80" />
    </Article>
  )
}
