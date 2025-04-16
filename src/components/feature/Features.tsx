"use client"; 
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  const tiltRef1 = useRef<HTMLDivElement>(null);
  const tiltRef2 = useRef<HTMLDivElement>(null);
  const tiltRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // Calculate mouse position relative to container center
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Slight movement factor (adjusted for less movement)
      const moveFactorBg = 0.02;  // A very small factor to make the background move slightly

      // Apply transform to background image
      if (bgImageRef.current) {
        bgImageRef.current.style.transform = `translate(${x * moveFactorBg}px, ${y * moveFactorBg}px)`;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (tiltRef1.current) {
      VanillaTilt.init(tiltRef1.current, {
        max: 15,  // Max tilt in degrees for the first div
        speed: 200,  // Speed of the tilt effect for the first div
        glare: true,  // Enable glare effect for the first div
        "max-glare": 0.3,  // Max glare intensity for the first div
      });
    }

    if (tiltRef2.current) {
      VanillaTilt.init(tiltRef2.current, {
        max: 20,  // Max tilt in degrees for the second div
        speed: 200,  // Speed of the tilt effect for the second div
        glare: true,  // Enable glare effect for the second div
        "max-glare": 0.4,  // Max glare intensity for the second div
      });
    }

    if (tiltRef3.current) {
      VanillaTilt.init(tiltRef3.current, {
        max: 25,  // Max tilt in degrees for the third div
        speed: 200,  // Speed of the tilt effect for the third div
        glare: true,  // Enable glare effect for the third div
        "max-glare": 0.5,  // Max glare intensity for the third div
      });
    }
  }, []);

  return (
    <div className="relative w-screen h-screen flex justify-center flex-col items-center overflow-hidden hero z-[0]" ref={containerRef}>
      {/* Background image with parallax effect */}
      <img
        ref={bgImageRef}
        src="/feature/rtdfg.png"
        alt="trees 1"
        className="absolute w-full h-full object-cover object-top scale-[1.2]"
        loading="eager"
        style={{ willChange: 'transform' }}
      />
      
      <div className="bg-[#000814]/45 z-10 top-28 px-6 py-3 rounded-xl border-[1px] border-[#FFD60A] shadow-lg shadow-black">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A]  md:text-[32px] text-lg tracking-wider font-extrabold"
        >
          VARUN AI FEATURES
        </h1>
      </div>

      <Image
        src={"/sam ai hkthn/sf.png"}
        height={500}
        width={500}
        className="md:h-40 md:w-40 h-20 w-20 z-10 mt-4 rotate-[135deg]"
        alt=""
      />

      <div className="border-2 z-10 w-full h-max md:w-max bg-(--cs-darker-blue)/70  border-(--cs-yellow) mx-auto px-4 py-4 lg:px-20 md:py-10 rounded-2xl">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-(--cs-yellow) text-center  md:text-[32px] text-xl  tracking-wider font-extrabold mb-4"
        >
          Fire Prediction & Trends
        </h1>

        <div className="grid md:grid-cols-3 place-items-center grid-cols-1 gap-3 lg:gap-20">
          <div ref={tiltRef1} className="bg-gradient-to-b from-(--cs-blue) to-(--cs-dark-blue) md:h-[293px] w-[240px] p-2 md:p-5 border rounded-2xl border-(--cs-yellow)">
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
              className="text-white text-xs md:text-base tracking-widest text-center"
            >
              Enter your location and get instant fire risk analysis.
            </p>
          </div>

          <div ref={tiltRef2} className="bg-gradient-to-b from-(--cs-blue) to-(--cs-dark-blue) w-[240px] md:h-[293px]  p-5 border rounded-2xl border-(--cs-yellow)">
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
              className="text-white text-xs md:text-base tracking-widest text-center"
            >
              View historical fire patterns and upcoming risk forecasts.
            </p>
          </div>

          <div ref={tiltRef3} className="bg-gradient-to-b from-(--cs-blue) to-(--cs-dark-blue) w-[240px] md:h-[293px] p-5 border rounded-2xl border-(--cs-yellow)">
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
            >
              Heat Map
            </h1>

            <p
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="text-white text-xs md:text-base tracking-widest text-center"
            >
              Identify high-risk areas with color-coded alerts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
