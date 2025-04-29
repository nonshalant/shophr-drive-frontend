import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../shared/styles/landingPage.css";
import { images } from "../../../assets/images";

const DriverLanding = () => {
  const navigate = useNavigate();
 
  return (
    <div className="landing-container">
      <img className="logo" src={images.logo.src} alt={images.logo.seo} />
      <img src={images.deliveryDriver.src} alt="Delivery scooter" className="landing-image slide-in" />
      <h1 className="landing-title">Drive & Earn With Us</h1>
      <p className="landing-subtitle">
        Deliver with freedom. Earn on your terms.
      </p>
      <button className="landing-button" onClick={() => navigate("/otp")}>
        Get Started
      </button>
    </div>
  );
};

export default DriverLanding;
