import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../shared/styles/otp.css";
import { AuthenticateApi } from "../api/auth";

const OTPForm = ({ setVerifyOtp }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleRedirectToLogin = () => {
    navigate("/login");
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("Form data:", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { country_code, phone_number } = formData;
    try {
      const phoneNumberWithCode = `${country_code}${phone_number}`;
      const response = await AuthenticateApi.sendOtpRequest(
        phoneNumberWithCode
      );
      if (response.status !== 200) {
        console.error("Error sending OTP:", response);
        return;
      }
      console.log("OTP sent successfully");
      setVerifyOtp(true);
      console.log("OTP sent successfully");
    } catch (error) {
      console.error("Error submitting OTP form:", error);
    }
  };

  return (
    <div className="otp-form-container">
      <h1>Let's start with your phone number</h1>
      <h2>
        We will send you a text with a verification code. Messages and data
        rates may apply!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="country-code-container">
          <label htmlFor="country-code">Country Code:</label>
          <select
            onChange={handleOnChange}
            id="country_code"
            name="country_code"
            required
            defaultValue="-Select-"
          >
            <option value="-Select-" disabled>
              ---Select---
            </option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (India)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+81">+81 (Japan)</option>
          </select>
        </div>

        <div className="phone-number-container">
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            onChange={handleOnChange}
            type="tel"
            id="phone_number"
            name="phone_number"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <button>Submit</button>
      </form>
      <h3 className="login-redirect" onClick={handleRedirectToLogin}>
        Log in with your email and password?
      </h3>
    </div>
  );
};

export default OTPForm;
