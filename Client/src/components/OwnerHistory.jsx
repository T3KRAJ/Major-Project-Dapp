import React from 'react'
import { options } from '../lib'

const OwnerHistory = ({ owners }) => {

  return (

    <div className="container bg-gray-600 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <h1 className='text-2xl pb-8 font-bold'>Product Ownership History</h1>
        <div className="border-2-2 absolute border-opacity-20 border-white h-full border" style={{ left: "50%" }}></div>
        {owners && owners.map((owner, index) => {
          const timeline = index % 2 === 0 ? " right-timeline " : " left-timeline flex-row-reverse"
          return (
            <div className={`mb-8 flex justify-between items-center w-full ${timeline} `}>
              <div className="order-1 w-5/12 text-white-200"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-yellow">{index + 1}</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h4 className="mb-3 font-bold text-white text-sm">{owner.owner}</h4>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{owner.timestamp.toLocaleString("en-US", options)}</p>
              </div>
            </div>
          )
        })

        }
      </div>
    </div>
  )

}

export default OwnerHistory