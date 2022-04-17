import React, { useState } from 'react'
import { contractABI, contractAddress } from '../lib';
import { ethers } from "ethers";
import Loader from './Loader';
import { Loading } from './Loading';

const CreateProduct = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState({
        product_name: '',
        model: '',
        price: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const createProduct = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const FPDetectionContract = new ethers.Contract(contractAddress, contractABI, signer);
                const product_record = await FPDetectionContract.createProduct(
                    product.product_name,
                    product.model,
                    product.price,
                    { gasLimit: 3000000 })
                const receipt = await product_record.wait()
                const data = receipt.logs[0].data
                const [product_id, man_address] = ethers.utils.defaultAbiCoder.decode(
                    ['uint', 'address'], data
                )
                console.log("product ", product_id, "created by", man_address)
                setIsLoading(false)
                setProduct({ product_name: '', model: '', price: '' })
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
        createProduct()
    }

    return (
        <>
            {isLoading ? <Loading /> :
                <div className="border-2 border-gray-200 rounded-lg h-auto bg-gray-800">
                    <div class="font-sans p-4 text-black w-full  justify-center">
                        <h3 className="text-xl mb-3 text-white font-bold">
                            Create new Product
                        </h3>
                        <div class="w-full px-4 py-4 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <label class="block mb-6">
                                    <span class="text-gray-200">Product Name</span>
                                    <input
                                        type="text"
                                        name="product_name"
                                        value={product.product_name}
                                        class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                        placeholder="Product Name"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label class="block mb-6">
                                    <span class="text-gray-200">Model</span>
                                    <input
                                        value={product.model}
                                        name="model"
                                        type="text"
                                        class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                        placeholder="Product Model"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label class="block mb-6">
                                    <span class="text-gray-200">Price</span>
                                    <input
                                        value={product.price}
                                        name="price"
                                        type="number"
                                        class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                        placeholder="Rs .."
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <div class="">
                                    <button
                                        type="submit"
                                        class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                    >
                                        Create Product
                                    </button>
                                </div>
                                <div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default CreateProduct