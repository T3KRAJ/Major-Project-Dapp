import React from 'react'
import CreateProduct from './CreateProduct'
import TransferOwnership from './TransferOwnership'

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
                            <CreateProduct />
                            <TransferOwnership />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Manufacturer