import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [docDepartment, setDocDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");
  const [role, setRole] = useState("Doctor");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("docDepartment", docDepartment);
      formData.append("docAvatar", docAvatar);
      formData.append("role", role);
      
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/doctor/addnew", 
        formData, 
        { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setPassword("");
      setRole("Doctor");

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <img src="/logo.png" alt="logo" className="mx-auto mb-6" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Register a New Doctor
        </h1>
        
        <form onSubmit={handleAddNewDoctor} encType="multipart/form-data">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <img
                src={docAvatarPreview ? docAvatarPreview : "/docHolder.jpg"}
                alt="Doctor Avatar"
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <input
                type="file"
                onChange={handleAvatar}
                className="px-4 py-2 bg-gray-100 rounded-md border border-gray-300 mb-4"
              />
            </div>
            <div className="w-full md:w-2/3">
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <select
                value={docDepartment}
                onChange={(e) => setDocDepartment(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>
              <input
                type="hidden"
                value={role}
                onChange={() => setRole(role)}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Register New Doctor
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewDoctor;
