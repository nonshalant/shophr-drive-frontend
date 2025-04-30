import React from "react";
import "../shared/styles/App.css";
import LoginPage from "../features/auth/pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../features/landingPage/pages/LandingPage";
import OTPPage from "../features/auth/pages/OTPPage";
import DriverRegisterPage from "../features/auth/pages/DriverRegisterPage";
import Home from "../features/home/pages/Home";
import Account from "../features/account/pages/Account";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/otp" element={<OTPPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<DriverRegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
