import axios from "axios";

export const AuthenticateApi =  {
  async login(data) {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/login`,
      data
    );
    return response.data;
  },

  async register(data) {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/register`,
      data
    );
    return response.data;
  },

  async sendOtpRequest(phoneNumber) {
    console.log(phoneNumber)
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/otp-send`,
      { phoneNumber },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  },

  async verifyOtpRequest(data) {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/verify-otp`,
      data
    );
    return response.data;
  },

  async forgotPassword(data) {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/forgot-password`,
      data
    );
    return response.data;
  },

  async resetPassword(data) {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/reset-password`,
      data
    );
    return response.data;
  },

  async logout() {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/logout`
    );
    return response.data;
  },
};
