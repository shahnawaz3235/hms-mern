import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="text-lg md:text-xl opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ullam,
            exercitationem omnis, natus aut consequuntur cupiditate veniam iure
            aspernatur quod sit debitis, quia dolor neque nam alias. Deleniti,
            voluptatum voluptas.
          </p>
        </div>
        {/* Image Content */}
        <div className="relative w-full md:w-1/2">
          <img
            src={imageUrl}
            alt="hero"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          />
          <span className="absolute bottom-0 right-0 mb-4 mr-4 transform scale-75 opacity-70 hover:scale-100 transition-all duration-300">
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
