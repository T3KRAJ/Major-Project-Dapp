import React from 'react'

const Manufacturer = () => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900">Manufacturer</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="border-2 border-gray-200 rounded-lg h-auto bg-gray-800">
                                <div class="font-sans p-4 text-black w-full  justify-center">
                                    <h3 className="text-xl mb-3 text-white font-bold">
                                        Create new Product
                                    </h3>
                                    <div class="w-full px-4 py-4 mx-auto">
                                        <form method="POST" action="https://herotofu.com/start">
                                            <label class="block mb-6">
                                                <span class="text-gray-200">Product Name</span>
                                                <input
                                                    type="text"
                                                    name="product_name"
                                                    class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                                    placeholder="Product Name"
                                                />
                                            </label>
                                            <label class="block mb-6">
                                                <span class="text-gray-200">Model</span>
                                                <input
                                                    name="model"
                                                    type="text"
                                                    class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                                    placeholder="Product Model"
                                                    required
                                                />
                                            </label>
                                            <label class="block mb-6">
                                                <span class="text-gray-200">Price</span>
                                                <input
                                                    name="product_price"
                                                    type="number"
                                                    class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                                    placeholder="Rs .."
                                                    required
                                                />
                                            </label>
                                            <div class="">
                                                <button
                                                    type="submit"
                                                    class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-gray-200 rounded-lg h-auto bg-white">
                                <div class="font-sans p-4 text-black w-full  justify-center">
                                    <h3 className="text-xl mb-3 text-black font-bold">
                                        Transfer my Ownership
                                    </h3>
                                    <div class="w-full px-4 py-4 mx-auto">
                                        <form method="POST" action="https://herotofu.com/start">
                                            <label class="block mb-6">
                                                <span class="text-gray-800">Product Id</span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    class="block w-full mt-2 p-2 rounded-md shadow-sm bg-white text-gray-800 border border-gray-400 focus:bg-gray-200 focus:border-gray-200"
                                                    placeholder="Manufacture Name"
                                                />
                                            </label>
                                            <label class="block mb-6">
                                                <span class="text-gray-800">New Owner's Address</span>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    class="block w-full mt-2 p-2 rounded-md shadow-sm bg-white text-gray-800 border border-gray-400 focus:bg-gray-200 focus:border-gray-200"
                                                    placeholder="0x0000000000000000000000000000000000000000"
                                                    required
                                                />
                                            </label>
                                            <div class="">
                                                <button
                                                    type="submit"
                                                    class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Manufacturer