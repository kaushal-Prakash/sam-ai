import React from "react";

function Hero() {
  return (
    <div className="relative w-screen h-screen flex justify-center flex-col items-center overflow-hidden hero">
      <img
        src="/hero/trees-2.png"
        alt="trees 1"
        className="absolute w-full h-full object-cover object-center scale-[1.07] tree-1"
      />
      <img
        src="/hero/mountain-2.png"
        alt="trees 2"
        className="absolute w-screen h-full object-cover object-center scale-[1.07]  tree-2"
      />
      <img
        src="/hero/flame-2.png"
        alt="flame 2"
        className="absolute opacity-70 w-full h-full object-cover object-center flame-2"
      />

      <div className="relative">
        {" "}
        <h1
          className="absolute top-0 left-0 text-[150px] font-extrabold text-[#000814]"
          style={{ filter: "blur(6px)" }}
        >
          VARUN AI
        </h1>
        <h1 className="relative text-[150px] font-extrabold bg-gradient-to-r from-[#FFFCFC] via-[#FFFCFC] to-[#FFC300] bg-clip-text text-transparent">
          VARUN AI
        </h1>
      </div>

      <div className="bg-[#000814]/67 p-6  rounded-xl border-[1px] border-[#FFD60A]">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A]  text-[32px] tracking-wider font-semibold"
        >
          Real-time risk analysis, heat maps, and safety insights to protect our
          forests.
        </h1>
      </div>

      <div className="bg-[#000814]/67 absolute bottom-20 px-6 py-3 rounded-xl border-[1px] border-[#FFD60A]">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A]  text-[32px] tracking-wider font-extrabold"
        >
          Explore Now
        </h1>
      </div>
    </div>
  );
}

export default Hero;
