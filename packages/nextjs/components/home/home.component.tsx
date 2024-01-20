'use client'

import { Header } from '../header'
import { Landing } from '../landing'
import { ProjectsHub } from '../projects-hub'
import { Stats } from '../stats'
import { Strategy } from '../strategy'
import { Team } from '../team'

export function Home() {
  return (
    <main className="flex flex-col min-h-screen my-2 mx-7">
      <Header />
      <Landing />
      <ProjectsHub />
      <Stats />
      <Strategy />
      <Team />
      <div className="self-center mt-40 mb-5">The dream team</div>
    </main>
  )
}
