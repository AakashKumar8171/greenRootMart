import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-green-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">GreenRoots Mart</h3>
          <p className="text-sm mt-2">
            Promoting sustainable agriculture and eco-friendly products.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-yellow-300 transition duration-300"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition duration-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Contact Us: <a href="mailto:support@greenrootsmart.com" className="underline">support@greenrootsmart.com</a>
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} <span className="font-bold">GreenRoots Mart</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
