import React from "react";
import { FaStethoscope, FaHeartbeat, FaXRay, FaUserNurse } from "react-icons/fa";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    description: "Advanced cardiac care and diagnostics with compassionate support.",
    icon: <FaHeartbeat className="text-[#43A047] text-3xl" />,
  },
  {
    id: 2,
    name: "Radiology",
    description: "Modern imaging technology for accurate and fast diagnosis.",
    icon: <FaXRay className="text-[#4682B4] text-3xl" />,
  },
  {
    id: 3,
    name: "General Medicine",
    description: "Comprehensive internal medicine care for all age groups.",
    icon: <FaStethoscope className="text-[#1A237E] text-3xl" />,
  },
  {
    id: 4,
    name: "Nursing",
    description: "Professional nursing staff providing 24/7 patient support.",
    icon: <FaUserNurse className="text-[#FFA000] text-3xl" />,
  },
];

const Departments = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-10">
        Our Departments
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{dept.icon}</div>
            <h3 className="text-xl font-semibold text-[#212121] mb-2">
              {dept.name}
            </h3>
            <p className="text-[#757575] text-sm">{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
