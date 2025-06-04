import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <main className="font-sans bg-white text-[#212121]">
      {/* Hero Section */}
      <section className="bg-[#1A237E] text-white pb-16">  {/* added padding bottom */}
        <Hero 
          title="Learn More About Us | ZeeCare Medical Institute"
          imageUrl="/about.png"
        />
      </section>

      {/* Biography Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-20 bg-[#F5F5F5] text-[#212121] mt-12"> {/* added margin top */}
        <Biography imageUrl="/whoweare.png" />
      </section>
    </main>
  );
};

export default AboutUs;
