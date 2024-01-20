'use client'

import { useParams } from 'next/navigation'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Header } from '~~/components/header'
import { PROJECTS } from '~~/constants'

export default function ProjectProfile() {
  const params = useParams<{ id: string }>()
  const { id } = params

  return (
    <>
      <Header></Header>
      <div className="bg-black">
        <div className={`bg-[url('${PROJECTS[id]['image']}')] bg-no-repeat bg-cover h-[50vh]`}>
          <div className="h-[50vh] bg-gradient-to-b from-black/0 to-black/100"></div>
        </div>
        <div className="p-6 md:p-14 mt-[-100px] max-w-[800px]">
          <div>
            <h3 className="text-4xl font-semibold">{PROJECTS[id]['name-project']}</h3>
            <p className="mt-1 text-sm leading-6 text-gray-300">{PROJECTS[id]['description']}</p>
          </div>
          <div>
            <dl>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium">Funded %</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
                  {PROJECTS[id]['funded-percentage']}
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{PROJECTS[id]['email']}</dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium">Short description</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
                  {PROJECTS[id]['short-description']}
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium">Description</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
                  {PROJECTS[id]['description']}
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium leading-6 ">Attachments</dt>
                <dd className="mt-2 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="border border-gray-200 divide-y divide-gray-700 rounded-md">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 leading-6">
                      <div className="flex items-center flex-1 w-0">
                        <PaperClipIcon className="flex-shrink-0 w-5 h-5 text-gray-300" aria-hidden="true" />
                        <div className="flex flex-1 min-w-0 gap-2 ml-4">
                          <span className="font-medium truncate">Project_Whitepaper.pdf</span>
                          <span className="flex-shrink-0 text-gray-300">2.4mb</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <a href="#" className="font-medium text-limelight">
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 leading-6">
                      <div className="flex items-center flex-1 w-0">
                        <PaperClipIcon className="flex-shrink-0 w-5 h-5 text-gray-300" aria-hidden="true" />
                        <div className="flex flex-1 min-w-0 gap-2 ml-4">
                          <span className="font-medium truncate">LegalTerms.pdf</span>
                          <span className="flex-shrink-0 text-gray-300">1.1mb</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <a href="#" className="font-medium text-limelight">
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
