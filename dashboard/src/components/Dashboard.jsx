import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "https://hms-mern-backend.vercel.app/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `https://hms-mern-backend.vercel.app/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="min-h-screen bg-gray-50 py-12 px-6 ml-20">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center space-x-6 mb-8">
            <img src="/doc.png" alt="docImg" className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-lg text-gray-600">Hello,</p>
              <h5 className="text-2xl font-semibold text-gray-800">
                {admin && `${admin.firstname} ${admin.lastname}`}
              </h5>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nam molestias. Eaque
            molestiae ipsam commodi neque. Assumenda repellendus necessitatibus itaque.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-700">Total Appointments</p>
              <h3 className="text-3xl font-bold text-gray-800">1500</h3>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-700">Registered Doctors</p>
              <h3 className="text-3xl font-bold text-gray-800">10</h3>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h5 className="text-2xl font-semibold text-gray-800 mb-6">Appointments</h5>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Patient</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Doctor</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Department</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id} className="border-b">
                    <td className="px-4 py-2 text-sm text-gray-700">{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {appointment.appointment_date.substring(0, 16)}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">{appointment.department}</td>
                    <td className="px-4 py-2 text-sm">
                      <select
                        className={`${
                          appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : appointment.status === "Accepted"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        } px-4 py-2 rounded-md`}
                        value={appointment.status}
                        onChange={(e) =>
                          handleUpdateStatus(appointment._id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      {appointment.hasVisited ? (
                        <GoCheckCircleFill className="text-green-600" />
                      ) : (
                        <AiFillCloseCircle className="text-red-600" />
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-600 py-4">
                    No Appointments Found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
