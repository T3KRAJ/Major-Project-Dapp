import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ConnectWallet from './components/ConnectWallet'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ConnectWallet />
      <Home />
    </div>
  )
}

export default App
