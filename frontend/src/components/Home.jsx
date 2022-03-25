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
			<form onSubmit={handleSetPatient} style={{ padding: '40px 0' }}>
				<h2>Register Patient</h2>
				<h4>Patient ID</h4>
				<input name="id" type="number" value={patientDetail.id} onChange={handleInputChange} />
				<h4>Patient Name</h4>
				<input name="name" type="text" value={patientDetail.name} onChange={handleInputChange} />
				<h4>Patient Age</h4>
				<input name="age" type="number" value={patientDetail.age} onChange={handleInputChange} />
				<h4>Patient Gender</h4>
				<input name="gender" type="text" value={patientDetail.gender} onChange={handleInputChange} />
				<h4>Patient Height</h4>
				<input name="height" type="text" value={patientDetail.height} onChange={handleInputChange} />
				<h4>Patient Weight</h4>
				<input name="weight" type="number" value={patientDetail.weight} onChange={handleInputChange} />
				<h4>Patient Address</h4>
				<input name="address" type="text" value={patientDetail.address} onChange={handleInputChange} />
				<h4>Patient Phone</h4>
				<input name="phone" type="number" value={patientDetail.phone} onChange={handleInputChange} />
				<h4>Patient Email</h4>
				<input name="email" type="email" value={patientDetail.email} onChange={handleInputChange} />
				
				<h4>Patient DAte</h4>
				<input name="date" type="number" value={patientDetail.date} onChange={handleInputChange} />
				<br />
				<br />
				<br />

				<button type="submit">Register</button>
			</form>
			<form onSubmit={handleGetPatient}>
				<input name="patientId" type="number" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
				<button type="submit">Submit</button>
			</form>
			{
				patientInfo &&
				<>
				{/* <p>ID: </p><span>{patientInfo[0]}</span>
				<p>NAme: </p><span>{patientInfo[1]}</span>
				<p>Age: </p><span>{patientInfo[2]}</span>
				<p>Gender: </p><span>{patientInfo[3]}</span>
				<p>Height: </p><span>{patientInfo[4]}</span> */}
				</>
			}
		</>
	)
}
export default Home
