import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-green-100 min-h-screen py-10 text-gray-900">
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">

        {/* Vision & Mission Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-4">About GreenRoots Mart</h1>
          <p className="text-lg text-gray-700">
            GreenRoots Mart is dedicated to revolutionizing the agricultural marketplace with a mission to create fair, direct connections between farmers, retailers, and consumers. Our vision is to build a more sustainable, transparent, and eco-friendly future in agriculture.
          </p>
        </section>

        {/* Sustainability Goals Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Sustainability Goals</h2>
          <p className="text-gray-700 mb-4">
            We’re committed to promoting sustainable practices that benefit farmers, consumers, and the environment. Through fair-trade practices, reduced food miles, and eco-friendly products, GreenRoots Mart aims to reshape agriculture as a green, sustainable ecosystem.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Providing fair prices to farmers and supporting sustainable income.</li>
            <li>Reducing the carbon footprint by promoting locally sourced products.</li>
            <li>Encouraging eco-friendly farming practices and minimizing waste.</li>
            <li>Educating the community about the importance of sustainable agriculture.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Meet Our Team</h2>
          <p className="text-gray-700 mb-6">
            Our passionate team is dedicated to empowering farmers and fostering a sustainable agricultural ecosystem. Meet some of the faces behind GreenRoots Mart!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-green-700">Aasif Ahmad</h3>
              <p className="text-sm text-gray-600">FOUNDER & CEO</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-green-700">Aakash Kumar</h3>
              <p className="text-sm text-gray-600">CO-FOUNDER</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-green-700">Abhishek Kumar</h3>
              <p className="text-sm text-gray-600">OPERATION-MANAGER</p>
            </div>
             <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-green-700">Vijay Prakash</h3>
              <p className="text-sm text-gray-600">ASSISTANT-MANAGER</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-green-700">Prasun Kushwaha</h3>
              <p className="text-sm text-gray-600">SALES-MANAGER</p>
            </div> <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-green-700">Mohan Naudiyal</h3>
              <p className="text-sm text-gray-600">MARKETING-MANAGER</p>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Partnerships</h2>
          <p className="text-gray-700 mb-4">
            We collaborate with several local and international partners who share our commitment to sustainable agriculture. Together, we aim to support farmers, empower communities, and promote eco-friendly practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-700">Farmers United</h3>
              <p className="text-sm text-gray-600">Partnering to ensure fair prices and access to markets.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-700">EcoAgro Solutions</h3>
              <p className="text-sm text-gray-600">Supporting sustainable farming practices globally.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-700">Green Earth Foundation</h3>
              <p className="text-sm text-gray-600">Promoting environmental stewardship through agriculture.</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Join the GreenRoots Mart Community</h2>
          <p className="text-gray-700 mb-6">
            Whether you’re a farmer, retailer, or consumer, GreenRoots Mart invites you to be a part of our community. Together, we can create a more sustainable and transparent agricultural marketplace.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="px-4 py-2 bg-green-300 text-white rounded-md hover:bg-green-600 transition">
              Register as Farmer
            </Link>
            <Link to="/register" className="px-4 py-2 bg-green-300 text-white rounded-md hover:bg-green-600 transition">
              Register as Retailer
            </Link>
            <Link to="/register" className="px-4 py-2 bg-green-300 text-white rounded-md hover:bg-green-600 transition">
              Join as Consumer
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
