import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorId, setDoctorId] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

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

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "https://hms-mern-backend.vercel.app/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error("Failed to load doctors. Please try again later.");
      }
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://hms-mern-backend.vercel.app/api/v1/appointment/post",
        {
          firstname,
          lastname,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctorId,
          hasVisited,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorId("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to book appointment."
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#FFFFFF] rounded-lg shadow-md">
      <h2 className="text-[#1A237E] text-3xl font-semibold mb-6 text-center">
        Book an Appointment
      </h2>
      <form onSubmit={handleAppointment} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col text-[#212121] font-medium">
            First Name
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="John"
            />
          </label>
          <label className="flex flex-col text-[#212121] font-medium">
            Last Name
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Doe"
            />
          </label>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col text-[#212121] font-medium">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="email@example.com"
            />
          </label>
          <label className="flex flex-col text-[#212121] font-medium">
            Mobile Number
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="+1234567890"
            />
          </label>
        </div>

        {/* NIC and DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col text-[#212121] font-medium">
            NIC
            <input
              type="text"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="12345-6789012-3"
            />
          </label>
          <label className="flex flex-col text-[#212121] font-medium">
            Date of Birth
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
            />
          </label>
        </div>

        {/* Gender and Appointment Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col text-[#212121] font-medium">
            Gender
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label className="flex flex-col text-[#212121] font-medium">
            Appointment Date
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
            />
          </label>
        </div>

        {/* Department and Doctor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col text-[#212121] font-medium">
            Department
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorId("");
              }}
              required
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
            >
              {departmentsArray.map((depart, i) => (
                <option key={i} value={depart}>
                  {depart}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-[#212121] font-medium">
            Doctor
            <select
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
              disabled={!department}
              className="mt-2 px-4 py-3 border border-[#757575] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition disabled:bg-[#F5F5F5]"
            >
              <option value="" disabled>
                Select Doctor
              </option>
              {doctors
                .filter((doctor) => doctor.department === department)
                .map((doctor) => (
                  <option key={doctor._id} value={doctor._id}>
                    {doctor.firstname} {doctor.lastname}
                  </option>
                ))}
            </select>
          </label>
        </div>

        {/* Address */}
        <label className="flex flex-col text-[#212121] font-medium">
          Address
          <textarea
            rows="5"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your address here"
            className="mt-2 px-4 py-3 border border-[#757575] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
          />
        </label>

        {/* Visited Before */}
        <div className="flex items-center space-x-3 text-[#212121] font-medium">
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
            id="visited"
            className="w-5 h-5 border border-[#757575] rounded focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
          />
          <label htmlFor="visited">Have you visited before?</label>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-[#1A237E] text-[#FFFFFF] px-8 py-3 rounded-md font-semibold hover:bg-[#4FC3F7] hover:text-[#1A237E] transition-colors duration-300"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
