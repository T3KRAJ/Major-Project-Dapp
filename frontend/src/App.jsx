import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectWallet from "./components/ConnectWallet";
import RegisterPatientForm from "./components/RegisterPatientForm";
import RetrievePatientDetail from "./components/RetrievePatientDetail";
import MainPage from "./components/MainPage";
// import Card from "./components/common/Card";

function App() {
  return (
    <MainPage />
    // <BrowserRouter>
    //   <ConnectWallet />
    //   <Routes>
    //     <Route path="/" element={<RegisterPatientForm />} />
    //     <Route path="/patient" element={<RetrievePatientDetail />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
