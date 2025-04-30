import React, { useState } from "react";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(formData);
      console.log(user);
    } catch (error) {
      setError("There was an error logging you in. Please try again.");
      console.log(error);
    }
  };

  return (
    <section className="login-container">
      <div className="login-header">
        <img src={images.logo.src} alt={images.logo.seo} className="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="input"
          type="text"
          placeholder="Username"
          autoComplete="username"
          name="email"
          value={formData.email}
          required
        />
        <input
          onChange={handleChange}
          className="input"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          name="password"
          value={formData.password}
          required
        />
        {error && <p className="error-message">{error}</p>}{" "}
        <button className="button" type="submit">
          Login
        </button>
      </form>
      <p>
        Don’t have an account? <Link to="/otp">Sign Up</Link>
      </p>
    </section>
  );
};

export default LoginForm;
