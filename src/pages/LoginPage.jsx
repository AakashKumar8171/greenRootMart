import React, { useState } from 'react';
import axios from "axios";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate(); // Use the useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const response = await axios.post("http://localhost:8080/Home/users/login", {
                email,
                password,
            });

            setSuccessMessage(response.data.message);

            // Save token to localStorage/sessionStorage if needed
            localStorage.setItem("userToken", response.data.token);

            // Redirect to the home page
            navigate("/");
        } catch (error) {
            setErrorMessage("Invalid User Name or Password");
        }
    };


  return (
    <div
  className="min-h-screen bg-cover bg-center relative"
  style={{
    backgroundImage: "url('src/assets/login_bg_1.jpg')",
  }}
>
  {/* Overlay for Contrast */}
  <div className="absolute inset-0 bg-green-900 min-h-full bg-opacity-40"></div>

  {/* Form Container */}
  <div className="min-h-screen  flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg transform transition hover:scale-105 w-full max-w-md">
    <h2 className="text-3xl font-extrabold text-green-700 text-center mb-6">
        Login to GreenRoots Mart
      </h2>

      {errorMessage && (
        <p className="text-center text-red-600 font-semibold mb-4">
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p className="text-center text-green-600 font-semibold mb-4">
          {successMessage}
        </p>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z"
              />
            </svg>
          </div>
        </div>

        {/* Password Field */}
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16M4 12a4 4 0 104 4m8-4a4 4 0 11-8 0"
              />
            </svg>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition relative overflow-hidden"
          >
            Login
          </button>
        </div>
      </form>

      {/* Register and Forgot Links */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Register
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Forgot your password?{" "}
          <a href="/reset" className="text-green-600 hover:underline">
            Forgot
          </a>
        </p>
      </div>
    </div>
  </div>
</div>


  );
};

export default LoginPage;
