'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Landing } from '../landing'
import { Title } from '../title'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
]

const people = [
  {
    name: 'Luis Fernando (Wolfcito)',
    role: 'Software Developer Architect',
    imageUrl: '/team/wolfcito-light.png',
    bio: 'Passionate about developing solutions that inspire change and improve lives in every challenge.',
    xUrl: 'https://twitter.com/AKAwolfcito',
    linkedinUrl: 'https://www.linkedin.com/in/wolfcito/',
  },
  {
    name: 'Danny',
    role: 'Web3 developer',
    imageUrl: '/team/danny.jpeg',
    bio: 'Each project is an opportunity to contribute to global progress, beyond entrepreneurial financial success.',
    xUrl: 'https://twitter.com/dany_f_lasso',
    linkedinUrl: 'https://www.linkedin.com/in/dany-lasso-10683b124/',
  },
  {
    name: 'Koha',
    role: 'UI/UX',
    imageUrl: '/team/koha.png',
    bio: 'Greatness lies in addressing global challenges with courage.',
    xUrl: 'https://twitter.com/kohawithstuff',
    linkedinUrl: 'https://www.linkedin.com/in/kohasummons/',
  },
]
const activityItems = [
  {
    user: {
      name: 'CommunityHarbor',
      imageUrl: '/team/wolfcito-light.png',
    },
    commit: '2d89f0c0',
    branch: 'main',
    status: 'Completed',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
    link: 'projects/1',
  },
  {
    user: {
      name: 'UnityInitiatives',
      imageUrl: '/team/wolfcito-light.png',
    },
    commit: '2d89f0c1',
    branch: 'main',
    status: 'Work in progress',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
    link: 'projects/2',
  },
  {
    user: {
      name: 'NeighborImpact',
      imageUrl: '/team/wolfcito-light.png',
    },
    commit: '2d89f0c2',
    branch: 'main',
    status: 'Work in progress',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
    link: 'projects/3',
  },
  {
    user: {
      name: 'EmpowerLocal',
      imageUrl: '/team/wolfcito-light.png',
    },
    commit: '2d89f0c3',
    branch: 'main',
    status: 'Completed',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
    link: 'projects/4',
  },
]

const activity = [
  { id: 1, type: 'defined', person: { name: 'Primary objectives' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  {
    id: 2,
    type: 'detailed',
    person: {
      name: 'Primary objectives',
      imageUrl: 'team/wolfcito-light.png',
    },
    comment: 'Facilitate community project funding',
    details: [
      'Facilitate community project funding',
      'Encourage active community involvement in initiative development',
      'Promote transparency and accountability in managing community resources',
    ],
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 3, type: 'defined', person: { name: 'Project spans' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  {
    id: 4,
    type: 'detailed',
    person: {
      name: 'Project spans',
      imageUrl: 'team/wolfcito-light.png',
    },
    comment: 'Facilitate community project funding',
    details: [
      'Define objectives, identify stakeholders, analyze the situation, and develop the action plan',
      'Develop the blockchain platform, establish the board, and launch the initial coin pools',
      'Project promotion and expansion to new communities',
    ],
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 5, type: 'defined', person: { name: 'Action plan' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  {
    id: 6,
    type: 'detailed',
    person: {
      name: 'Action plan',
      imageUrl: 'team/wolfcito-light.png',
    },
    comment: 'Facilitate community project funding',
    details: [
      'Define objectives, identify stakeholders, conduct a situation analysis, and develop the action plan',
      'Develop the blockchain platform, establish the board, and launch the initial coin pools',
      'Project promotion and expansion to new communities',
    ],
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 1, type: 'defined', person: { name: 'Execution' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  {
    id: 2,
    type: 'detailed',
    person: {
      name: 'Execution',
      imageUrl: 'team/wolfcito-light.png',
    },
    comment: 'Facilitate community project funding',
    details: [
      'A team of professionals, including blockchain experts, project managers, and community developers, will execute the plan.',
    ],
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  {
    id: 1,
    type: 'defined',
    person: { name: 'Monitoring and Evaluation' },
    date: '7d ago',
    dateTime: '2023-01-23T10:32',
  },
  {
    id: 2,
    type: 'detailed',
    person: {
      name: 'Monitoring and Evaluation',
      imageUrl: 'team/wolfcito-light.png',
    },
    comment: 'Facilitate community project funding',
    details: [
      'Regular monitoring and evaluation by the project management team will ensure progress tracking and corrective action if needed.',
    ],
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
]

export function Home() {
  return (
    <main className="flex flex-col min-h-screen my-2 mx-7">
      <div className="flex">
        <Landing />
        <div className="mx-3 mt-3 border rounded-3xl border-secondary min-w-[320px] flex justify-center flex-col items-center">
          <span className="text-2xl font-bold">Wishing pool</span>
          <div className="flex items-center justify-center w-40 h-40 m-4 rounded-full bg-primary/40">
            <Image
              src="/images/coin-pool-logo.png"
              alt="Harmoniblend image"
              width={200}
              height={300}
              className="w-32 h-auto rounded-r-2xl"
            />
          </div>
          <div>
            <span className="text-base">Funds raised: 20M</span>
          </div>
          <div>
            <span className="text-base">Projects: 300</span>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <main>
          <header>
            <div className="grid grid-cols-1 text-white bg-gradient-to-r from-primary/80 to-[#9378F3]/80 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={clsx(
                    statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                    'border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8',
                  )}
                >
                  <p className="text-sm font-medium leading-6 ">{stat.name}</p>
                  <p className="flex items-baseline mt-2 gap-x-2">
                    <span className="text-4xl font-semibold tracking-tight">{stat.value}</span>
                    {stat.unit ? <span className="text-sm ">{stat.unit}</span> : null}
                  </p>
                </div>
              ))}
            </div>
          </header>

          <div className="border-t border-white/10 pt-11">
            <h2 className="px-4 text-base font-semibold leading-7 sm:px-6 lg:px-8">Latest activity</h2>
            <table className="table w-full mt-6 text-left whitespace-nowra table-zebra">
              <colgroup>
                <col className="w-full sm:w-4/12" />
                <col className="lg:w-4/12" />
                <col className="lg:w-2/12" />
                <col className="lg:w-1/12" />
                <col className="lg:w-1/12" />
              </colgroup>
              <thead className="text-sm leading-6 border-b border-white/10">
                <tr>
                  <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                    Project
                  </th>
                  <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                    Revision
                  </th>
                  <th scope="col" className="py-2 pl-0 pr-4 font-semibold text-right sm:pr-8 sm:text-left lg:pr-20">
                    Status
                  </th>
                  <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                    Duration
                  </th>
                  <th
                    scope="col"
                    className="hidden py-2 pl-0 pr-4 font-semibold text-right sm:table-cell sm:pr-6 lg:pr-8"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activityItems.map(item => (
                  <tr key={item.commit}>
                    <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                      <div className="flex items-center gap-x-4">
                        <Image
                          src={item.user.imageUrl}
                          alt=""
                          className="w-8 h-8 bg-gray-800 rounded-full"
                          width={32}
                          height={32}
                        />
                        <div className="text-sm font-medium leading-6 truncate">{item.user.name}</div>
                      </div>
                    </td>
                    <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                      <div className="flex gap-x-3">
                        <div className="font-mono text-sm leading-6 ">{item.commit}</div>
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-gray-400/10 ring-1 ring-inset ring-gray-400/20">
                          {item.branch}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                      <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                        <time className=" sm:hidden" dateTime={item.dateTime}>
                          {item.date}
                        </time>

                        <div
                          className={clsx('flex-none rounded-full p-1', {
                            'text-green-400 bg-green-400/10': item.status === 'Completed',
                            'text-rose-400 bg-rose-400/10': item.status === 'Error',
                            'text-orange-300 bg-orange-400/10': item.status === 'Work in progress',
                          })}
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        </div>
                        <div className="hidden sm:block">{item.status}</div>
                      </div>
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 md:table-cell lg:pr-20">{item.duration}</td>
                    <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 text-right sm:table-cell sm:pr-6 lg:pr-8">
                      <Link href={item.link} className="underline text-primary underline-offset-2">
                        View more{' '}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <Title label="Our Roadmap" />
        <ul role="list" className="space-y-6">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id} className="relative flex gap-x-4">
              <div
                className={clsx(
                  activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                  'absolute left-0 top-0 flex w-6 justify-center',
                )}
              >
                <div className="w-px bg-gray-200" />
              </div>
              {activityItem.type === 'detailed' ? (
                <>
                  <img
                    src={activityItem.person.imageUrl}
                    alt=""
                    className="relative flex-none w-6 h-6 mt-3 rounded-full bg-gray-50"
                  />
                  <div className="flex-auto p-3 rounded-md ring-1 ring-inset ring-gray-200">
                    <div className="flex justify-between gap-x-4">
                      <div className="py-0.5 text-xs leading-5 text-gray-500">
                        <span className="font-medium text-gray-900">Details</span>
                      </div>
                      <time
                        dateTime={activityItem.dateTime}
                        className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                      >
                        {activityItem.date}
                      </time>
                    </div>
                    <ul>
                      {activityItem.details?.map(detail => (
                        <li className="text-sm leading-6 text-gray-500" key={nanoid()}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white">
                    {activityItem.type === 'completed' ? (
                      <CheckCircleIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                    ) : (
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                    )}
                  </div>
                  <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                    <span className="font-medium text-gray-900">{activityItem.person.name}</span> {activityItem.type}
                  </p>
                  <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                    {activityItem.date}
                  </time>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="py-24 bg-white md:py-32">
        <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The DreamTeam</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results.
            </p>
          </div>
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {people.map(person => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <Image
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                  width={208}
                  height={208}
                />
                <div className="flex-auto max-w-xl">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                  <ul role="list" className="flex mt-6 gap-x-6">
                    <li>
                      <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">X</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="self-center mt-40 mb-5">@DreamTeam</div>
    </main>
  )
}
