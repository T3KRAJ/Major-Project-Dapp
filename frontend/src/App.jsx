import { useState } from 'react'
import './App.css'
import ConnectWallet from './components/ConnectWallet'
import RegisterPatientForm from './components/RegisterPatientForm'

function App() {
  return (
    <div className="App">
      <ConnectWallet />
      <RegisterPatientForm />
    </div>
  )
}

export default App
