import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="flex-1">
        <img
          src={imageUrl}
          alt="About Us"
          className="rounded-xl shadow-md w-full max-w-md mx-auto"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
          About ZeeCare
        </h2>
        <p className="text-[#757575] text-lg leading-relaxed mb-4">
          ZeeCare Medical Institute is committed to delivering exceptional
          patient care through cutting-edge medical services and compassionate
          healthcare professionals. Our mission is to ensure your well-being
          with personalized attention and world-class standards.
        </p>
        <p className="text-[#757575] text-lg leading-relaxed">
          Our team of doctors and staff work diligently to provide timely,
          trustworthy, and tailored treatment — because your health is our top
          priority.
        </p>
      </div>
    </div>
  );
};

export default Biography;
