import React from 'react';
import Feature1 from "../assets/feature1.png";
import Vector5 from "../assets/Vector5.png";
import Vector6 from "../assets/vector6.png";
import Vector7 from "../assets/Vector7.png";
import Vector8 from "../assets/3d.png";
import Vector2 from "../assets/Vector2.png";
import Last from "../assets/last.png";
import time from "../assets/time.png";
import money from "../assets/money.png";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <section className=" bg-white px-[180px]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* First Feature Pair (Text + Image) */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Text Section */}
          <div className="p-4 flex flex-col justify-center md:w-[40%]">
            <img className='h-7 w-7 mb-4' src={Vector5} alt="Vector Icon" />
            <h3 className="text-4xl pb-3 font-bold">
              <span className='text-blue-600'>Minutes</span>, not Hours.
            </h3>
            <p className="mt-2 w-[290px] text-gray-500">
              No need for lengthy processes like filming, editing, or storyboarding. Content can be created in minutes by simply providing a script.
            </p>
            <p className='text-blue-500 flex items-center gap-5 mt-9 font-normal'>
              Discover More <FaArrowRightLong className='align-middle' />
            </p>
          </div>
          
          {/* Image Section */}
          <div className="p- flex justify-center items-center w-full md:w-[70%] ">
            <img src={time} alt="" className='relative w-[180px] top-[-180px] left-[170px]' />
            <img src={Feature1} alt="Feature Image" className="w-full h-[600px]" />
          </div>
        </div>

        {/* Second Feature Pair (Image + Text) */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center">
          
          {/* Text Section */}
          <div className="p-4 flex flex-col justify-center w-full md:w-[40%]">
          <img className='h-9 w-7 mb-4' src={Vector6} alt="Vector Icon" />
            <h3 className="text-4xl font-bold"><span className='text-blue-600'>80%</span> Cost Reduction</h3>
            <p className="mt-2 text-gray-500">
              Eliminate the need for expensive equipment, location rentals, and professional videographers.
            </p>
            <p className='text-blue-500 flex items-center gap-5 mt-9 font-normal'>
              Discover More <FaArrowRightLong className='align-middle' />
            </p>
          </div>

          {/* Image Section */}
          <div className=" pl-0 flex justify-center items-center w-full md:w-[70%]">
            <img src={money} alt="Cost Reduction" className="w-full h-[500px] pl-0 ml-0" />
          </div>
        </div>

        {/* third Feature Pair (Text + Image) */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Text Section */}
          <div className="p-4 flex flex-col justify-center md:w-[40%]">
            <img className='h-7 w-7 mb-4' src={Vector2} alt="Vector Icon" />
            <h3 className="text-4xl pb-3 font-bold"> A crew of
              <span className='text-blue-600'> 15 vs 1 AI tool</span>.
            </h3>
            <p className="mt-2 w-[290px] text-gray-500">
            Video production coordination involves managing schedules and equipment. AI videos streamline this, reducing labor and
            management efforts.
            </p>
            <p className='text-blue-500 flex items-center gap-5 mt-9 font-normal'>
              Discover More <FaArrowRightLong className='align-middle' />
            </p>
          </div>
          
          {/* Image Section */}
          <div className=" flex  items-center w-full md:w-[60%] justify-end">
            <img src={time} alt="" className='relative w-[180px] top-[-150px] left-[120px]' />
            <img src={Vector8} alt="Feature Image" className="w-full h-[500px]" />
          </div>
        </div>

        {/* Fourth Feature Pair (Image + Text) */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center">
          
          {/* Text Section */}
          <div className="p-4 flex flex-col justify-center w-full md:w-[40%]">
          <img className='h-9 w-9 mb-4' src={Vector7} alt="Vector Icon" />
            <h3 className="text-4xl font-bold"><span className='text-blue-600'>140+</span> Languages</h3>
            <p className="mt-2 text-gray-500">
            Engage non-English speaking audiences by automating dubbing and translation to create and distribute multilingual videos quickly.
            </p>
            <p className='text-blue-500 flex items-center gap-5 mt-9 font-normal'>
              Discover More <FaArrowRightLong className='align-middle' />
            </p>
          </div>

          {/* Image Section */}
          <div className=" pl-0 flex justify-center items-center w-full md:w-[70%]">
            <img src={Last} alt="Cost Reduction" className="w-full h-[500px] pl-0 ml-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
