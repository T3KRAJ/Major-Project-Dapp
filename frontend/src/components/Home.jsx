import React, { useState } from 'react'
import abi from "../utils/Patient.json";
import { ethers } from "ethers";
import RegisterPatientForm from './RegisterPatientForm';

const Home = () => {
	const contractAddress = "0x3493d33058499Ed9250bB3b4E8C7053269d21487";
	const contractABI = abi.abi

	const [patientDetail, setPatientDetail] = useState({
		id: 0,
		name: '',
		age: 0,
		gender: '',
		weight: 0,
		height: '',
		address: '',
		phone: 0,
		email: '',
		date: ''
	})
	const [patientId, setPatientId] = useState(0)
	const [patientInfo, setPatientInfo] = useState('')

	const handleInputChange = e => {
		const { name, value } = e.target;
		setPatientDetail(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSetPatient = (e) => {
		e.preventDefault()
		createPatientRecord()
	}

	const handleGetPatient = (e) => {
		e.preventDefault()
		retrievePatientDetails()
	}

	const createPatientRecord = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
				const patientRecord = await wavePortalContract.store_patient_details(
					patientDetail.id,
					patientDetail.name,
					patientDetail.age,
					patientDetail.gender,
					patientDetail.height,
					patientDetail.weight,
					patientDetail.address,
					patientDetail.phone,
					patientDetail.email,
					patientDetail.date,
					{ gasLimit: 3000000 })
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error);
		}
	}

	const retrievePatientDetails = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
				const patientDetail = await wavePortalContract.retreive_patient_details(patientId)
				setPatientInfo(patientDetail)
				console.log(patientInfo)
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
		<RegisterPatientForm />
			
		</>
	)
}
export default Home
