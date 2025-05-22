import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    { name: "Pediatrics", imageUrl: "/departments/pedia.jpg" },
    { name: "Orthopedics", imageUrl: "/departments/ortho.jpg" },
    { name: "Cardiology", imageUrl: "/departments/cardio.jpg" },
    { name: "Neurology", imageUrl: "/departments/neuro.jpg" },
    { name: "Oncology", imageUrl: "/departments/onco.jpg" },
    { name: "Radiology", imageUrl: "/departments/radio.jpg" },
    { name: "Physical Therapy", imageUrl: "/departments/therapy.jpg" },
    { name: "Dermatology", imageUrl: "/departments/derma.jpg" },
    { name: "ENT", imageUrl: "/departments/ent.jpg" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Our Departments</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="space-y-6"
      >
        {departmentsArray.map((depart, index) => (
          <div key={index} className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="relative">
              <img
                src={depart.imageUrl}
                alt={`${depart.name}-image`}
                className="w-full h-64 object-cover transform transition duration-500 hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-md">
                <p className="text-xl font-semibold">{depart.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Departments;
