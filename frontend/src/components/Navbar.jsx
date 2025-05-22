import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [show, setShow] = useState(false);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const gotoLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 bg-blue-500 text-white shadow-md">
        <div className="text-2xl font-bold">ZeeCare</div>
        <div
          className={`${
            show ? "flex" : "hidden"
          } flex-col md:flex-row md:flex md:items-center md:space-x-6 absolute md:static bg-blue-500 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 z-10`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6">
            <Link
              to="/"
              className="px-4 py-2 text-white hover:text-gray-200 hover:bg-blue-600 rounded-md transition"
            >
              Home
            </Link>
            <Link
              to="/appointment"
              className="px-4 py-2 text-white hover:text-gray-200 hover:bg-blue-600 rounded-md transition"
            >
              Appointment
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-white hover:text-gray-200 hover:bg-blue-600 rounded-md transition"
            >
              About
            </Link>
          </div>
          {isAuthenticated ? (
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white transition mt-4 md:mt-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white transition mt-4 md:mt-0"
              onClick={gotoLogin}
            >
              Login
            </button>
          )}
        </div>
        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setShow(!show)}
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
