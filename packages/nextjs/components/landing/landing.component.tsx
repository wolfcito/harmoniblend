import Image from 'next/image'
import { Article } from '~~/components/article'
import { Button } from '~~/components/button'
import { Title } from '~~/components/title'

export function Landing() {
  const createProfile = () => {
    console.log('profile created')
  }

  return (
    <Article className="rounded-3xl bg-gradient-to-r from-primary/80 to-[#9378F3]/80 text-white mt-3">
      <div className="flex flex-col flex-1 mx-7">
        <Title label="Harmoniblend" />

        <p className="text-2xl font-semibold">Discover the magical spring where your initiatives come to life.</p>
        <p className="">Each dream is a drop that propels community creation.</p>
        <p className="py-5 space-x-5">
          <Button onClick={createProfile} label="Create Profile" />
        </p>
      </div>
      <div>
        <Image
          src="/images/gold-coins-pool-golden1.jpg"
          alt="Harmoniblend image"
          width={200}
          height={300}
          className="self-end h-auto w-96 rounded-r-2xl"
        />
      </div>
    </Article>
  )
}
