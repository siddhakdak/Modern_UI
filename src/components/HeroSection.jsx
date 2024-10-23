// components/HeroSection.js
import React from 'react';
import hero1 from "../assets/hero1.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-white-500 to-white-100 py-16 text-center">
      <h1 className="text-[55px] leading-[60px] font-bold mb-7">
        Create <span className="text-blue-600">Professional Videos</span> <br /> in Minutes with AI Avatars
      </h1>
      <p className="text-sm mb-6">Transform your text into engaging video content instantly, while saving time and cutting costs.</p>
      <div className="flex justify-center items-center space-x-4">
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-4 py-1"
        />
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-1 rounded">Get a Demo</button>
      </div>
      <div className="mt-10 w-[1022px] mx-auto">
        <img
          src={hero1}
          alt="Unscript logo"
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
