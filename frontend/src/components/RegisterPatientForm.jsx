import React, { useState } from 'react'
import abi from "../utils/Patient.json";
import { ethers } from "ethers";
import "./RegisterPatientForm.css"

const RegisterPatientForm = () => {
	const contractAddress = "0x3493d33058499Ed9250bB3b4E8C7053269d21487";
	const contractABI = abi.abi

	const [patientDetail, setPatientDetail] = useState({
		id: '',
		name: '',
		age: '',
		gender: '',
		weight: '',
		height: '',
		address: '',
		phone: '',
		email: '',
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
				var current = new Date();
				const patientRecord = await wavePortalContract.store_patient_details(
					parseInt(patientDetail.id),
					patientDetail.name,
					parseInt(patientDetail.age),
					patientDetail.gender,
					patientDetail.height,
					parseInt(patientDetail.weight),
					patientDetail.address,
					parseInt(patientDetail.phone),
					patientDetail.email,
					Date.parse(current),
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
    <div>
      <div id="bg">
        <b><h1 >PATIENT REGISTRATION FORM</h1></b>
        <div id="form" onSubmit={handleSetPatient}>
          <form>
            <table id="table">
              <tbody>
                <tr>
                  <td>PATIENT ID :
                  </td>
                  <td><input onChange={handleInputChange} type="number" name="id" value={patientDetail.id}
                    placeholder="Enter the patient ID" />
                  </td>
                </tr>
                <tr>
                  <td>PATIENT NAME:</td>
                  <td>
                    <input onChange={handleInputChange} type="text" name="name" value={patientDetail.name}
                      placeholder="Enter the patient Name" />
                  </td>
                </tr>
                <tr>
                  <td>EMAIL ID:
                  </td>
                  <td><input onChange={handleInputChange} id="email" type="email" name="email" value={patientDetail.email} maxLength="100" placeholder="Enter the email address" />
                  </td>
                </tr>
                <tr>
                  <td>
                    MOBILE NO:
                  </td>
                  <td><input onChange={handleInputChange} type="tel" name="phone" value={patientDetail.phone} maxLength="12" placeholder="Enter the Mobile no" />
                  </td>
                </tr>
				<tr>
                  <td>
                    Age:
                  </td>
                  <td><input onChange={handleInputChange} type="number" name="age" value={patientDetail.age} maxLength="3" placeholder="Enter the age of patient" />
                  </td>
                </tr>
                <tr>
                  <td>
                    Height:
                  </td>
                  <td><input onChange={handleInputChange} type="text" name="height" value={patientDetail.height} maxLength="12" placeholder="Enter the height (in fts)" />
                  </td>
                </tr>
                <tr>
                  <td>
                    Weight:
                  </td>
                  <td><input onChange={handleInputChange} type="number" name="weight" value={patientDetail.weight} maxLength="12" placeholder="Enter the weight (in kgs)" />
                  </td>
                </tr>
                <tr>
                  <td>GENDER:</td>
                  <td>
                    <select id="gender" name="gender" value={patientDetail.gender} onChange={handleInputChange}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </td>
                </tr>
                <tr><td>ADDRESS:</td>
				<td><input onChange={handleInputChange} type="text" name="address" value={patientDetail.address} maxLength="100" placeholder="Enter the address" />
</td></tr>
                <tr>
                  <td>
                    <button type="submit" className='submitButton'>Submit</button>
                    {/* <button type="reset" className='resetButton'>Reset</button> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
		</>
	)
}
export default RegisterPatientForm
