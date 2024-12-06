import React, { useState } from 'react';

const RegisterPage = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // Add this for role selection
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setSuccess("Registration successful! Please log in.");
        setError('');
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center relative"
  style={{
    backgroundImage: "url('src/assets/login_bg_1.jpg')",
  }}>

  {/* Overlay for Contrast */}
  <div className="absolute inset-0 bg-green-900 min-h-full bg-opacity-40"></div>

  {/* Form Container */}
  <div className="min-h-screen  flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg transform transition hover:scale-105 w-full max-w-md">
    <h2 className="text-3xl font-extrabold text-green-700 text-center mb-8">
      Create Your Account
    </h2>

    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    {success && <p className="text-green-500 text-center mb-4">{success}</p>}

    <form onSubmit={handleRegister} className="space-y-6">
      
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
    
      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-gray-700">
          Select Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="" disabled>
            Select your Role 
          </option>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
      </div>
      <div></div>

      <div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-md font-semibold hover:shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300"
        >
          Register
        </button>
      </div>
    </form>

    <p className="text-center text-sm text-gray-500 mt-6">
      Already have an account?{" "}
      <a href="/login" className="text-green-600 font-medium hover:underline">
        Login
      </a>
    </p>
  </div>
</div>
</div>

  );
};

export default RegisterPage;
