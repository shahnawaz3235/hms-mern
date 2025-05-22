import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-500 py-12 text-white mt-10">
      <div className="container mx-auto px-6 md:flex justify-between space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="logo" className="w-32 mb-4" />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/appointment"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Appointment
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4">Hours</h4>
          <ul className="space-y-2">
            {hours.map((element) => (
              <li key={element.id} className="flex justify-between w-full">
                <span>{element.day}</span>
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <div className="flex items-center space-x-2 mb-3">
            <FaPhone className="text-yellow-300" />
            <span>999-999-9999</span>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <MdEmail className="text-yellow-300" />
            <span>sn@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationArrow className="text-yellow-300" />
            <span>Sargodha, Pakistan</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm opacity-75">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
