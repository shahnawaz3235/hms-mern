import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={imageUrl}
            alt="about"
            className="w-full h-auto rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </div>
        {/* Biography Text */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          <p className="text-lg font-semibold text-yellow-300">Biography</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Who We Are</h2>
          <p className="text-lg opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolorum, cum labore ut quos iusto molestias nam enim excepturi eos
            sapiente laboriosam consequatur, modi doloribus, animi aut? Odit
            cumque impedit alias. Debitis quia autem porro vel impedit repellat?
          </p>
          <p className="text-lg opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            voluptate, facilis eum maiores in quae dicta repudiandae labore
            exercitationem sint debitis distinctio inventore temporibus
            voluptatibus commodi unde incidunt ad odio.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            cumque.
          </p>
          <p className="text-lg opacity-70">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
