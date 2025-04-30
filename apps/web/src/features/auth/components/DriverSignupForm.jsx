import React, { useState } from "react";
import { images } from "../../../assets/images";

const DriverSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.verifyPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await AuthenticateApi.register({ formData });
      console.log("Signup successful:", response);
    } catch (error) {
      setMessage("An error occurred during signup. Please try again.");
      return;
    }
  };

  return (
    <form className="signup-form-container" onSubmit={handleSubmit}>
      <img src={images.logo.src} alt={images.logo.seo} className="logo" />
      <h2>Shophr Drive Signup</h2>
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
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Choose a password"
        />
      </div>

      <div>
        <label>Verify Password:</label>
        <input
          type="password"
          name="verifyPassword"
          value={formData.verifyPassword}
          onChange={handleChange}
          required
          placeholder="Re-enter your password"
        />
      </div>

      <button type="submit">Sign Up</button>
      {message && <p className="error-message">{message}</p>}
    </form>
  );
};

export default DriverSignupForm;
