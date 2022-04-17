import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import { contractABI, contractAddress } from '../lib';
import Loader from './Loader';

const CheckManufacturer = () => {
    const [manAddress, setManAddress] = useState('')
    const [manDetails, setManDetails] = useState('')
    const [lenError, setLenError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const getManufacturer = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                setIsLoading(true)
                setManDetails('')
                setLenError(false)
                const address = ethers.utils.getAddress(manAddress)
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const FPDetectionContract = new ethers.Contract(contractAddress, contractABI, signer);
                const manDetail = await FPDetectionContract.getManufacture(address)
                setManDetails(manDetail)
                console.log(manDetail)
                setIsLoading(false)
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            setIsLoading(false)
            alert("Metamask not connected!");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLenError(false)
        setManDetails('')
        if (manAddress.length == 42)
            getManufacturer()
        else {
            setLenError(true)
        }
    }

    useEffect(() => {
        setManDetails(manDetails)
    }, [manDetails])

    return (
        <div className="border-2 border-gray-200 rounded-lg h-96 bg-white" id="detectManufacturer">
            <div className="font-sans p-4 text-black w-full bg-white  justify-center">
                <h3 className="text-xl mb-3 font-bold">
                    Check the Manufacturer
                </h3>
                <form className="border rounded w-full overflow-hidden flex" onSubmit={handleSubmit}>
                    <input
                        className="appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-200"
                        id="grid-password"
                        type="search"
                        value={manAddress}
                        onChange={(e) => setManAddress(e.target.value)}
                        placeholder="Search the address.."
                        required
                    />

                </form>
                {lenError && <p className='pl-2 text-red-400 font-thin '>Invalid wallet address</p>}
                {isLoading && <div className='mx-auto py-6 flex justify-center'><Loader /></div>}
                {manDetails && <div class="flex justify-center">
                    {manDetails.exists ? <ul class="bg-white grid h-56 mt-4 content-center w-full text-gray-900">
                        <li class="px-6 py-2 border-b border-gray-200 w-full bg-purple-600 text-white">
                            Manufacturer Available
                        </li>
                        <li class="px-6 py-2 border-b border-gray-200 w-full">{manDetails.wallet_address}</li>
                        <li class="px-6 py-2 border-b border-gray-200 w-full"><b>Manufacturer Name:</b> {manDetails.name}</li>
                        <li class="px-6 py-2 border-b border-gray-200 w-full"><b>Website:</b> {manDetails.website}</li>
                    </ul>
                        :
                        <ul class="bg-white mt-8 border border-gray-200 w-96 text-gray-900">
                            <li class="px-6 py-2 border-b border-gray-200 w-full bg-red-600 text-white">
                                Manufacturer Nat Available
                            </li>
                        </ul>
                    }
                </div>}
            </div>
        </div>
    )
}

export default CheckManufacturer