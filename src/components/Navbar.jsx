import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-1 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src="src/assets/WhatsApp Image 2024-11-29 at 12.15.17_e531aec1.jpg" alt="Logo" />
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              Home
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              Register
            </button>
          </Link>

          <Link to="/browseProducts">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              Browse Products
            </button>
          </Link>

          <Link to="/aboutUs">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              AboutUs
            </button>
          </Link>

          <Link to="/Logout">
            <button
              className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition"
              onClick={() => alert('Logout Successful')}
            >
              Logout
            </button>
          </Link>

       

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
