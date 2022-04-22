import React, { useState } from 'react'
import { ethers } from "ethers";
import { contractABI, contractAddress } from '../lib';
import { Loading } from './Loader';

const TransferOwnership = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [ownership, setOwnership] = useState({
        productID: '',
        newAddress: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        setOwnership(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const transferOwnership = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const FPDetectionContract = new ethers.Contract(contractAddress, contractABI, signer);
                const owner_record = await FPDetectionContract.updateOwnership(
                    ownership.productID,
                    ownership.newAddress,
                    { gasLimit: 3000000 })
                const receipt = await owner_record.wait()
                const data = receipt.logs[0].data
                const [product_id, man_address] = ethers.utils.defaultAbiCoder.decode(
                    ['uint', 'address'], data
                )
                console.log("product ownership transferred to", man_address)
                setIsLoading(false)
                setOwnership({ productID: '', newAddress: '' })
            } else {
                setIsLoading(false)
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        transferOwnership()
    }


    return (
        <>
            {isLoading && <Loading />}
            <div className="border-2 border-gray-200 rounded-lg h-auto bg-white">
                <div class="font-sans p-4 text-black w-full  justify-center">
                    <h3 className="text-xl mb-3 text-black font-bold">
                        Transfer my Ownership
                    </h3>
                    <div class="w-full px-4 py-4 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <label class="block mb-6">
                                <span class="text-gray-800">Product Id</span>
                                <input
                                    type="number"
                                    name="productID"
                                    value={ownership.productID}
                                    onChange={handleInputChange}
                                    class="block w-full mt-2 p-2 rounded-md shadow-sm bg-white text-gray-800 border border-gray-400 focus:bg-gray-200 focus:border-gray-200"
                                    placeholder="Product ID"
                                    required
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-800">New Owner's Address</span>
                                <input
                                    name="newAddress"
                                    type="text"
                                    value={ownership.newAddress}
                                    onChange={handleInputChange}
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
                                    Transfer
                                </button>
                            </div>
                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransferOwnership