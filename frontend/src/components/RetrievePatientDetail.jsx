import React, { useEffect, useState } from 'react'
import abi from "../utils/Patient.json";
import { ethers } from "ethers";
import './RetrievePatientDetail.css'
import { Link } from 'react-router-dom';

const RetrievePatientDetail = () => {
    const contractAddress = "0x3493d33058499Ed9250bB3b4E8C7053269d21487";
	const contractABI = abi.abi

	const [patientId, setPatientId] = useState('')
	const [patientInfo, setPatientInfo] = useState('')
	const [regDate, setRegDate] = useState('')

	const handleGetPatient = (e) => {
		e.preventDefault()
		if (patientId > 0)
		retrievePatientDetails()
	}
	useEffect(() => {
		console.log(patientId);
	  }, [patientId]);

	const retrievePatientDetails = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
					const provider = new ethers.providers.Web3Provider(ethereum);
					const signer = provider.getSigner();
					const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
					const patientDetail = await wavePortalContract.retreive_patient_details(parseInt(patientId))
					setPatientInfo(patientDetail)
					if (patientDetail[8]) setRegDate(new Date(patientDetail[8].toNumber()))
					console.log(patientInfo)
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error);
		}
	}
    return (
        <div className='container'>
            <form className="form-wrapper cf" onSubmit={handleGetPatient}>				<Link to="/">Register New Patient</Link>

                <input type="text" placeholder="Enter Patient ID..." required onChange={(e) => setPatientId(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
			{patientInfo && patientInfo[0] &&
				<div className="wrapper">
					<div className="blog_post">
						<div className="container_copy">
							<h1>Patient Information</h1>
							 <p><b>Name: </b>{patientInfo[0]}</p>
							 <p><b>Age: </b>{patientInfo[1].toNumber( )}</p>
							 <p><b>Gender: </b>{patientInfo[2]}</p>
							 <p><b>Height: </b>{patientInfo[3]}</p>
							 <p><b>Weight: </b>{patientInfo[4].toNumber( )} kgs</p>
							 <p><b>Address: </b>{patientInfo[5]}</p>
							 <p><b>Phone Number: </b>{patientInfo[6].toNumber( )}</p>
							 <p><b>Email Address: </b>{patientInfo[7]}</p>
							 <p><b>Date of registration: </b>{regDate.toLocaleString('en-GB', { timeZone: 'UTC' })}</p>
							{/* <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p> */}
						</div>
					</div>
				</div>
			}
            
        </div>
    )
}

export default RetrievePatientDetail 