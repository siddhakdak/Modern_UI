// components/DemoSection.js
import React from "react";
import { TbBrandTelegram } from "react-icons/tb";

const DemoSection = () => {
  return (


    <section className="py-16 p-16 flex flex-row mx-auto rounded-2xl bg-gradient-to-r from-blue-300 to-pink-300 text-center text-black w-[70%] relative -mb-[120px] z-20">
      <div className="w-[60%] flex items-center justify-start gap-9">
        <h2 className="text-6xl font-bold mb-4 ">Book a Demo</h2>
        <div className="bg-gray-200 p-2 rounded-lg">
        <TbBrandTelegram className="h-[1.2rem] w-[1.2rem] z-3" />
        </div>
      </div>

      <div className="w-[40%] flex flex-col px-9 items-center justify-center">
        <p className="mb-6 w-[400px]">
          Our video output beats the likes of Google Vlogger and is on par with
          Microsoft's VASA-1 & Alibaba's EMO.
        </p>
        <div className="flex flex-row w-[400px] justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-1"
          />
          <button className="bg-black text-white px-6 py-1 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
