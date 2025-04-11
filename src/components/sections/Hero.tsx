import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden hero">
      {/* Background images - Added priority to critical images and better alt text */}
      <img
        src="/hero/trees-2.png"
        alt="Forest background layer"
        className="absolute w-full h-full object-cover object-center scale-[1.07] tree-1"
        loading="eager"
      />
      <img
        src="/hero/mountain-2.png"
        alt="Mountain layer"
        className="absolute w-full h-full object-cover object-center scale-[1.07] tree-2"
        loading="lazy"
      />
      <img
        src="/hero/flame-2.png"
        alt="Flame effect layer"
        className="absolute opacity-70 w-full h-full object-cover object-center flame-2"
        loading="lazy"
      />

      {/* Main content container for better vertical spacing */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 space-y-8 md:space-y-12 z-10 -translate-y-[5rem] md:translate-y-0">
        {/* Main title with improved responsive sizing */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="font-extrabold bg-gradient-to-r from-[#FFFCFC] via-[#FFFCFC] to-[#FFC300] bg-clip-text text-transparent text-5xl sm:text-7xl md:text-9xl lg:text-[150px] hero__text leading-tight">
            VARUN AI
          </h1>
        </div>

        {/* Description box with better max-width control */}
        <div className="bg-[#000814]/67 p-4 sm:p-6 rounded-xl border border-[#FFD60A] text-center w-full max-w-3xl">
          <h2 className="text-[#FFD60A] text-sm sm:text-base md:text-2xl lg:text-3xl tracking-wider font-semibold font-poppins">
            Real-time risk analysis, heat maps, and safety insights to protect our forests.
          </h2>
        </div>

        {/* Button with better positioning and hover effects */}
        <div className="mt-8 md:mt-16">
          <div className="bg-[#000814]/67 px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-[#FFD60A] hover:bg-[#FFD60A]/20 transition-colors duration-300 hero__button relative">
            <Link
              href="/prediction"
              className="text-[#FFD60A] hover:text-[#FFEE99] text-xl sm:text-2xl md:text-3xl tracking-wider font-extrabold font-poppins"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;