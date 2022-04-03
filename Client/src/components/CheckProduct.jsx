import React from 'react'

const CheckProduct = () => {
    return (
        <div className="rounded-lg h-auto bg-white">
            <div class="font-sans p-4 text-black w-full bg-white  justify-center">
                <h3 className="text-xl mb-3 font-bold">
                    Check the Product
                </h3>
                <div class="border rounded w-full overflow-hidden flex">
                    <input
                        class="appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-200"
                        id="grid-password"
                        type="search"
                        placeholder="Enter the product ID"
                    />
                </div>
            </div>
        </div>
    )
}

export default CheckProduct