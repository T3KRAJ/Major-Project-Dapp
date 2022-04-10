import React from "react";
import "./App.css";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./hoc/Layout";
import Home from "./components/Home";
import Manufacturer from "./components/Manufacturer";
import CheckProduct from "./components/CheckProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/checkproduct" element={<CheckProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;