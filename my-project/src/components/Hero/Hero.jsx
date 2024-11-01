import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className=" bg-lala2 dark:bg-black overflow-hidden relative" >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[500px]">
            <p className="text-gray-500 uppercase font-semibold">Discover the skills to shape your future</p>         <h1 className="text-3xl lg:text-5xl font-bold !leading-snug">
  Unlock the Secrets of{" "}
  <span className="text-secondary">AI & Cyber security</span> and Start Your Journey to Success
</h1>


            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                <FaArrowRight className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* Hero Info */}
      </div>
    </section>
  );
};

export default Hero;
