import React from "react";

const Features = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center flex-col items-center overflow-hidden hero">
      <img
        src="/feature/rtdfg.png"
        alt="trees 1"
        className="absolute w-full h-full object-cover object-top"
      />

      <div className="bg-[#000814]/45 absolute top-28 px-6 py-3 rounded-xl border-[1px] border-[#FFD60A] shadow-lg shadow-black">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A]  text-[32px] tracking-wider font-extrabold"
        >
          VARUN AI FEATURES
        </h1>
      </div>
    </div>
  );
};

export default Features;
