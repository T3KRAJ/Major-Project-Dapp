import React from 'react'

const OwnerHistory = ({ owners }) => {
 
    return (

        <div class="container bg-gray-600 mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 absolute border-opacity-20 border-white-700 h-full border" style={{left: "50%"}}></div>
        { owners && owners.map((owner, index) => {
          const timeline = index % 2 === 0 ? " right-timeline" : " left-timeline flex-row-reverse"
          return(
      <div class={`mb-8 flex justify-between items-center w-full ${timeline} `}>
              <div class="order-1 w-5/12 text-white-200"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">{index+1}</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h4 class="mb-3 font-bold text-gray-800 text-sm">{owner.owner}</h4>
                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{owner.timestamp.toString()}</p>
              </div>
            </div>

            
        )})
            
            }
          </div>
        </div>
    )

}

export default OwnerHistory