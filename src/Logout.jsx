import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored user data (e.g., tokens, user info)
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');

    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-bold text-green-700">You have been logged out.</h1>
    </div>
  );
};

export default Logout;
