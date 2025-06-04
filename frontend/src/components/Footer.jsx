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
    <footer className="bg-[#1A237E] text-white py-12 mt-10 font-sans">
      <div className="container mx-auto px-6 md:flex justify-between space-y-8 md:space-y-0">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="logo" className="w-32 mb-4" />
          <p className="text-[#4FC3F7] text-sm font-semibold">ZeeCare Medical Institute</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4 text-[#4FC3F7]">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Appointment", "About"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                  className="hover:text-[#4FC3F7] transition-colors duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4 text-[#4FC3F7]">Hours</h4>
          <ul className="space-y-2 w-44">
            {hours.map(({ id, day, time }) => (
              <li key={id} className="flex justify-between text-sm text-[#B3C7F9]">
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4 text-[#4FC3F7]">Contact</h4>
          <div className="flex items-center space-x-2 mb-3 text-sm text-[#B3C7F9]">
            <FaPhone className="text-[#4FC3F7]" />
            <span>999-999-9999</span>
          </div>
          <div className="flex items-center space-x-2 mb-3 text-sm text-[#B3C7F9]">
            <MdEmail className="text-[#4FC3F7]" />
            <span>sn@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[#B3C7F9]">
            <FaLocationArrow className="text-[#4FC3F7]" />
            <span>Sargodha, Pakistan</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-[#90CAF9] opacity-80">
        &copy; 2025 ZeeCare Medical Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
