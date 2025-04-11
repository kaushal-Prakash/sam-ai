import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="relative w-screen h-screen flex justify-center flex-col items-center overflow-hidden hero">
      {/* Background images */}
      <img
        src="/hero/trees-2.png"
        alt="trees 1"
        className="absolute w-full h-full object-cover object-center scale-[1.07] tree-1"
      />
      <img
        src="/hero/mountain-2.png"
        alt="trees 2"
        className="absolute w-screen h-full object-cover object-center scale-[1.07] tree-2"
      />
      <img
        src="/hero/flame-2.png"
        alt="flame 2"
        className="absolute opacity-70 w-full h-full object-cover object-center flame-2"
      />

      {/* Main title */}
      <div className="relative mb-4 md:mb-8">
        <h1 className="relative font-extrabold bg-gradient-to-r from-[#FFFCFC] via-[#FFFCFC] to-[#FFC300] bg-clip-text text-transparent text-[40px] sm:text-[70px] md:text-[150px] hero__text">
          VARUN AI
        </h1>
      </div>

      {/* Description box */}
      <div className="bg-[#000814]/67 p-4 sm:p-6 rounded-xl border-[1px] border-[#FFD60A] z-10 mx-4 md:mx-0 text-center max-w-[90%] md:max-w-none">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A] text-[14px] sm:text-[16px] md:text-[32px] tracking-wider font-semibold"
        >
          Real-time risk analysis, heat maps, and safety insights to protect our forests.
        </h1>
      </div>

      {/* Button */}
      <div className="bg-[#000814]/67 absolute bottom-10 sm:bottom-40 px-4 sm:px-6 py-2 sm:py-3 rounded-[100px] border-[1px] border-[#FFD60A] z-10 hero__button">
        <Link
          href="/prediction"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A] text-[20px] sm:text-[24px] md:text-[32px] tracking-wider font-extrabold"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;