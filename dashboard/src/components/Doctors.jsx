import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load doctors.");
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 ml-20">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Doctors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors && doctors.length > 0 ? (
            doctors.map((element) => {
              return (
                <div
                  className="bg-white border rounded-lg shadow-sm p-6 flex flex-col items-center"
                  key={element._id}
                >
                  <img
                    className="w-24 h-24 rounded-full object-cover mb-4"
                    src={element.docAvatar?.url || "/default-avatar.png"}
                    alt="doctor avatar"
                  />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {`${element.firstname} ${element.lastname}`}
                  </h4>
                  <div className="w-full text-sm text-gray-600 space-y-2">
                    <p>
                      <strong>Email:</strong> <span>{element.email}</span>
                    </p>
                    <p>
                      <strong>Phone:</strong> <span>{element.phone}</span>
                    </p>
                    <p>
                      <strong>DOB:</strong> <span>{element.dob.substring(0, 10)}</span>
                    </p>
                    <p>
                      <strong>Department:</strong> <span>{element.docDepartment}</span>
                    </p>
                    <p>
                      <strong>NIC:</strong> <span>{element.nic}</span>
                    </p>
                    <p>
                      <strong>Gender:</strong> <span>{element.gender}</span>
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="col-span-full text-center text-gray-600">No Registered Doctors Found!</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
