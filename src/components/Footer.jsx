import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link to="/home">Home</Link>
          <Link to="/#">Destination</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="text-sm">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="https://www.twitter.com" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="https://www.instagram.com" className="hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center mt-3">
          <div class="flex px-4 py-6 bg-gray-200 w-[50%] md:flex md:items-center md:justify-center">
            <span class="flex justify-center items-center text-sm text-black dark:text-gray-300 sm:text-center">
              &copy; 2024 FlightApp. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
