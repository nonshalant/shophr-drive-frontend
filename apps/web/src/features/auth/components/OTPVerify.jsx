import React, { useRef } from "react";
import "../../../shared/styles/otpVerify.css";
import AuthServices from "../services/authServices";
import { useNavigate } from "react-router-dom";

export default function OTPVerify() {
  const inputs = useRef([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    } else if (
      value.length === 0 &&
      index > 0 &&
      e.inputType === "deleteContentBackward"
    ) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = inputs.current.map((input) => input.value).join("");

    try {
      const phoneNumber = localStorage.getItem("phone_number");
      const response = await AuthServices.verifyOtp(phoneNumber, otp);
      if (response !== "VERIFIED") {
        setMessage("Invalid OTP. Please try again.");
      }
      navigate("/home");
    } catch (error) {
      console.error("Error submitting OTP:", error);
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>Verify OTP</h2>
        <p>Enter the 6-digit code sent to your phone</p>
        <form onSubmit={handleSubmit} className="otp-form">
          <div className="otp-inputs">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  onInput={(e) => handleInput(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                />
              ))}
          </div>
          <button type="submit">Verify</button>
          <p className="resend">
            Didn't receive the code? <a href="#">Resend</a>
          </p>
        </form>
      </div>
    </div>
  );
}
