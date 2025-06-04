import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <main className="font-sans bg-white text-[#212121]">
      {/* Hero Section */}
      <section className="bg-[#1A237E] text-white pb-16">
        <Hero
          title={"Schedule Your Appointment | ZeeCare Medical Institute"}
          imageUrl={"/signin.png"}
        />
      </section>

      {/* Appointment Form Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 lg:px-20 bg-[#F5F5F5] mt-12 rounded-md shadow-md">
        <AppointmentForm />
      </section>
    </main>
  );
};

export default Appointment;
