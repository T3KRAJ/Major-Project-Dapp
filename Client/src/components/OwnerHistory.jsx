import React from 'react'

const OwnerHistory = ({ owners }) => {
    return (
        <div className="container mx-auto w-full">
            <div className="relative wrap overflow-hidden p-10">
                <div className="border-2-2 absolute border-opacity-20 border-white h-full border" style={{ left: "50%" }}></div>
                {
                    owners && owners.map((owner, index) => (
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 ">
                                <h3 className="mb-3 font-bold text-white text-xl">Nike</h3>
                                <p className="text-sm whitespace-nowrap leading-snug tracking-wide text-white text-opacity-100">{owner}</p>
                            </div>
                        </div>
                    ))
                }

                {/* <div className={"mb-8 flex justify-between items-center w-full right-timeline" + index % 2 == 0 ? "flex-row-reverse" : ''}> */}

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                    </div>
                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OwnerHistory