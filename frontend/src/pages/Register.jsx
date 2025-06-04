import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [nic, setNic] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://hms-mern-backend.vercel.app/api/v1/user/patient/register",
        { firstname, lastname, email, phone, gender, dob, password, nic, role: "Patient" },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-6 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#1A237E] text-center mb-6">
          Sign Up
        </h2>
        <p className="text-center text-[#757575] mb-8">
          Please sign up to continue.
        </p>
        <form onSubmit={handleRegister} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* First Name */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="firstname">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="lastname">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            />
          </div>

          {/* NIC */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="nic">
              NIC
            </label>
            <input
              id="nic"
              type="text"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              placeholder="NIC"
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="dob">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Password */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-semibold text-[#212121]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-3 border border-[#1A237E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
              required
            />
          </div>

          {/* Already Registered Link and Button - full width */}
          <div className="sm:col-span-2 flex justify-between items-center text-[#757575]">
            <p>Already registered?</p>
            <Link
              to="/login"
              className="text-[#4FC3F7] hover:text-[#1A237E] font-semibold transition-colors"
            >
              Login
            </Link>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#1A237E] text-white rounded-md hover:bg-[#4FC3F7] transition-colors duration-200 font-semibold"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
