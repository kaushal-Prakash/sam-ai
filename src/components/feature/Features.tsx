"use client";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center flex-col items-center overflow-hidden hero z-[0]">
      <img
        src="/feature/rtdfg.png"
        alt="trees 1"
        className="absolute w-full h-full object-cover object-top"
      />

      <div className="bg-[#000814]/45 z-10 top-28 px-6 py-3 rounded-xl border-[1px] border-[#FFD60A] shadow-lg shadow-black">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A]  md:text-[32px] text-lg tracking-wider font-extrabold"
        >
          VARUN AI FEATURES
        </h1>
      </div>

      <Image src={"/sam ai hkthn/sf.png"} height={500} width={500} className="md:h-40 md:w-40 h-20 w-20 z-10 mt-4 rotate-[135deg]" alt=""/>

      <div className="border-2 z-10 w-full h-max md:w-max bg-(--cs-darker-blue)/70  border-(--cs-yellow) mx-auto px-4 py-4 lg:px-20 md:py-10 rounded-2xl">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-(--cs-yellow) text-center  md:text-[32px] text-xl  tracking-wider font-extrabold mb-4"
        >
          Fire Prediction & Trends
        </h1>


        <div className="grid md:grid-cols-3 place-items-center grid-cols-1 gap-3 lg:gap-20">
          <div className="bg-gradient-to-b from-(--cs-blue) to-(--cs-dark-blue) md:h-[293px] w-[240px] p-2 md:p-5 border rounded-2xl border-(--cs-yellow)">
            <Image
              src={"/sam ai hkthn/fire.png"}
              height={500}
              width={500}
              className="lg:h-20 lg:w-20 h-10 w-8 mx-auto mb-4"
              alt=""
            />
            <h1
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="text-(--cs-yellow) text-center  md:text-xl tracking-wider text-sm font-extrabold mb-1 md:mb-4"
            >
              AI-Powered Fire Prediction
            </h1>

            <p
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="text-white text-xs md:text-base tracking-widest text-center">Enter your location and get instant fire risk analysis.</p>
          </div>

          <div className="bg-gradient-to-b from-(--cs-blue) to-(--cs-dark-blue) w-[240px] md:h-[293px]  p-5 border rounded-2xl border-(--cs-yellow)">
            <Image
              src={"/sam ai hkthn/graph.png"}
              height={500}
              width={500}
              className="lg:h-24 lg:w-20 h-10 w-8 mx-auto mb-4"
              alt=""
            />
            <h1
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="text-(--cs-yellow) text-center  md:text-xl tracking-wider text-sm font-extrabold mb-1 md:mb-4"
            >
              Seasonal Trends
            </h1>

            <p
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="text-white text-xs md:text-base tracking-widest text-center">View historical fire patterns and upcoming risk forecasts.</p>
          </div>

          <div className="bg-gradient-to-b from-(--cs-blue) to-(--cs-dark-blue) w-[240px] md:h-[293px] p-5 border rounded-2xl border-(--cs-yellow)">
            <Image
              src={"/sam ai hkthn/radar.png"}
              height={500}
              width={500}
              className="lg:h-24 lg:w-20 h-10 w-8 mx-auto mb-4"
              alt=""
            />
            <h1
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="text-(--cs-yellow) text-center  md:text-xl tracking-wider text-sm font-extrabold mb-1 md:mb-4"
            > Heat Map            </h1>

            <p
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="text-white text-xs md:text-base tracking-widest text-center">Identify high-risk areas with color-coded alerts.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
