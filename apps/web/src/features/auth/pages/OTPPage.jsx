import React, { useState } from "react";
import OTPForm from "../components/OTPForm";
import OTPVerify from "../components/OTPVerify";

const OTPPage = () => {
  const [verifyOtp, setVerifyOtp] = useState(false);
  return (
    <div className="otp">
      {verifyOtp ? <OTPVerify /> : <OTPForm setVerifyOtp={setVerifyOtp} />}
    </div>
  );
};

export default OTPPage;
