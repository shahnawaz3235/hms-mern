import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';

const Home = () => {
  return (
    <main className="font-sans bg-[#F5F5F5] text-[#212121]">
      {/* Hero Section */}
      <section className="bg-white">
        <Hero
          title="ZeeCare Medical Institute"
          subtitle="Your Trusted Partner in Healthcare Excellence"
          imageUrl="/hero.png"
        />
      </section>

      {/* Biography Section */}
      <section className="bg-[#FFFFFF] text-[#212121] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-[#1A237E] text-center">
            About Us
          </h2>
          <Biography imageUrl="/about.png" />
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-[#1A237E] text-center">
            Our Departments
          </h2>
          <Departments />
        </div>
      </section>

      {/* Contact / Message Section */}
      <section className="bg-[#1A237E] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Contact Us
          </h2>
          <MessageForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
