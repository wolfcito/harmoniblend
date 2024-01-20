'use client'

import { useState } from 'react'
import { Header } from '~~/components/header'

const NewJar = () => {
  const [poolId, setPoolId] = useState('')

  const createPool = () => {
    console.log(poolId)
    setPoolId('001')
  }
  return (
    <>
      <Header></Header>
      <h3 className="px-2 text-2xl font-semibold md:px-14">Create New Jar (Pool)</h3>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[700px]">
          <form action="" method="POST">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <div className="mb-5">
                  <label htmlFor="endDate" className="block mb-3 text-base font-medium text-slate-200">
                    Submission Deadline
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    placeholder="2024-12-12"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-limelight focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3">
                <div className="mb-5">
                  <label htmlFor="votingDeadline" className="block mb-3 text-base font-medium text-slate-200">
                    Voting Deadline
                  </label>
                  <input
                    type="date"
                    name="votingDeadline"
                    id="votingDeadline"
                    placeholder="2024-12-31"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-limelight focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="distributionInterval" className="block mb-3 text-base font-medium text-slate-200">
                How many days should pass between payouts (interval)?
              </label>
              <input
                type="number"
                name="distributionInterval"
                id="distributionInterval"
                placeholder="15"
                min="15"
                step={15}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-limelight focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-3 text-base font-medium text-slate-200">
                Do the projects require some data?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input type="radio" name="radio1" id="radioButton1" className="w-5 h-5" />
                  <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-slate-200">
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="radio1" id="radioButton2" className="w-5 h-5" />
                  <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-slate-200">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                className="px-8 py-3 text-base font-semibold text-center text-black rounded-full outline-none hover:shadow-form bg-limelight"
                onClick={createPool}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewJar
