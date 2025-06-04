import React, { useContext } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://hms-mern-backend.vercel.app/api/v1/user/logout",
        {},
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        ZeeCare
      </Link>

      <div>
        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-blue-500 hover:text-blue-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-blue-500 hover:text-blue-700"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
