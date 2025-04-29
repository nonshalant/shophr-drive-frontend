import React, { useState } from "react";
import { images } from "../../../assets/images";

const DriverSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    driverLicense: "",
    licenseExpiration: "",
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleColor: "",
    insuranceProof: null,
    backgroundCheckConsent: false,
    bankAccountNumber: "",
    bankRoutingNumber: "",
    ssn: "",
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would submit the formData to your backend or API
  };

  return (
    <form className="signup-form-container" onSubmit={handleSubmit}>
      <img src={images.logo.src} alt={images.logo.seo} className="logo" />
      <h2>Dasher Signup</h2>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          placeholder="MM/DD/YYYY"
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label>Driver's License Number:</label>
        <input
          type="text"
          name="driverLicense"
          value={formData.driverLicense}
          onChange={handleChange}
          required
          placeholder="Enter your driver's license number"
        />
      </div>

      <div>
        <label>License Expiration Date:</label>
        <input
          type="date"
          name="licenseExpiration"
          value={formData.licenseExpiration}
          onChange={handleChange}
          required
          placeholder="MM/DD/YYYY"
        />
      </div>

      <div>
        <label>Vehicle Type:</label>
        <input
          type="text"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          required
          placeholder="Enter your vehicle type"
        />
      </div>

      <div>
        <label>Vehicle Make:</label>
        <input
          type="text"
          name="vehicleMake"
          value={formData.vehicleMake}
          onChange={handleChange}
          required
          placeholder="Enter your vehicle make"
        />
      </div>

      <div>
        <label>Vehicle Model:</label>
        <input
          type="text"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleChange}
          required
          placeholder="Enter your vehicle model"
        />
      </div>

      <div>
        <label>Vehicle Year:</label>
        <input
          type="number"
          name="vehicleYear"
          value={formData.vehicleYear}
          onChange={handleChange}
          required
          placeholder="Enter your vehicle year"
        />
      </div>

      <div>
        <label>Vehicle Color:</label>
        <input
          type="text"
          name="vehicleColor"
          value={formData.vehicleColor}
          onChange={handleChange}
          required
          placeholder="Enter your vehicle color"
        />
      </div>

      <div>
        <label>Proof of Vehicle Insurance:</label>
        <input
          type="file"
          name="insuranceProof"
          onChange={handleFileChange}
          required
        />
      </div>

      <div>
        <label>
          Consent for Background Check:
          <input
            type="checkbox"
            name="backgroundCheckConsent"
            checked={formData.backgroundCheckConsent}
            onChange={handleCheckboxChange}
            required
          />
        </label>
      </div>

      <div>
        <label>Bank Account Number:</label>
        <input
          type="text"
          name="bankAccountNumber"
          value={formData.bankAccountNumber}
          onChange={handleChange}
          required
          placeholder="Enter your bank account number"
        />
      </div>

      <div>
        <label>Bank Routing Number:</label>
        <input
          type="text"
          name="bankRoutingNumber"
          value={formData.bankRoutingNumber}
          onChange={handleChange}
          required
          placeholder="Enter your bank routing number"
        />
      </div>

      <div>
        <label>Social Security Number (SSN):</label>
        <input
          type="text"
          name="ssn"
          value={formData.ssn}
          onChange={handleChange}
          required
          placeholder="Enter your SSN"
        />
      </div>

      <div>
        <label>Profile Photo:</label>
        <input
          type="file"
          name="profilePhoto"
          onChange={handleFileChange}
          required
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default DriverSignupForm;
