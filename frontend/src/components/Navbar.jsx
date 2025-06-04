import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1A237E] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold hover:text-[#4FC3F7] transition-colors">
          ZeeCare
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="hover:text-[#4FC3F7] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#4FC3F7] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/appointment"
              className="hover:text-[#4FC3F7] transition-colors"
            >
              Appointment
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-[#4FC3F7] text-[#1A237E] font-semibold px-4 py-2 rounded hover:bg-[#1A237E] hover:text-white transition-colors"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
