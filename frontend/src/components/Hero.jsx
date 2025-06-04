import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A237E] leading-tight mb-6">
            {title}
          </h1>
          <p className="text-[#757575] text-lg mb-6">
            Delivering compassionate and advanced healthcare through innovation
            and care. Your health, our mission.
          </p>
          <button className="bg-[#4FC3F7] hover:bg-[#1A237E] text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Book Appointment
          </button>
        </div>

        {/* Hero Image */}
        <div className="mb-10 md:mb-0">
          <img
            src={imageUrl}
            alt="Hospital"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
