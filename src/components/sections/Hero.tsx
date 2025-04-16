"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tree1Ref = useRef<HTMLImageElement>(null);
  const tree2Ref = useRef<HTMLImageElement>(null);
  const flameRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // Calculate mouse position relative to container center
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Calculate movement factors (adjust these values to control sensitivity)
      const moveFactorTree1 = 0.05;
      const moveFactorTree2 = 0.03;
      const moveFactorFlame = 0.02;

      // Apply transform to each layer
      if (tree1Ref.current) {
        tree1Ref.current.style.transform = `translate(${x * moveFactorTree1}px, ${y * moveFactorTree1}px) scale(1.07)`;
      }
      if (tree2Ref.current) {
        tree2Ref.current.style.transform = `translate(${x * moveFactorTree2}px, ${y * moveFactorTree2}px) scale(1.07)`;
      }
      if (flameRef.current) {
        flameRef.current.style.transform = `translate(${x * moveFactorFlame}px, ${y * moveFactorFlame}px)`;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden hero"
      ref={containerRef}
    >
      {/* Background images with parallax effect */}
      <img
        ref={tree1Ref}
        src="/hero/trees-2.png"
        alt="Forest background layer"
        className="absolute w-full h-full object-cover object-center scale-[1.07] tree-1 transition-transform duration-300 ease-out"
        loading="eager"
        style={{ willChange: 'transform' }}
      />
      <img
        ref={tree2Ref}
        src="/hero/mountain-2.png"
        alt="Mountain layer"
        className="absolute w-full h-full object-cover object-center scale-[1.07] tree-2 transition-transform duration-300 ease-out"
        loading="lazy"
        style={{ willChange: 'transform' }}
      />
      <img
        ref={flameRef}
        src="/hero/flame-2.png"
        alt="Flame effect layer"
        className="absolute opacity-70 w-full h-full object-cover object-center flame-2 transition-transform duration-300 ease-out"
        loading="lazy"
        style={{ willChange: 'transform' }}
      />

      {/* Main content container */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 space-y-8 md:space-y-12 z-10 -translate-y-[5rem] md:translate-y-0">
        <div className="text-center mb-4 md:mb-8">
          <h1 className="font-extrabold bg-gradient-to-r from-[#FFFCFC] via-[#FFFCFC] to-[#FFC300] bg-clip-text text-transparent text-5xl sm:text-7xl md:text-9xl lg:text-[150px] hero__text leading-tight">
            VARUN AI
          </h1>
        </div>

        <div className="bg-[#000814]/67 p-4 sm:p-6 rounded-xl border border-[#FFD60A] text-center w-full max-w-3xl">
          <h2 className="text-[#FFD60A] text-sm sm:text-base md:text-2xl lg:text-3xl tracking-wider font-semibold font-poppins">
            Real-time risk analysis, heat maps, and safety insights to protect our forests.
          </h2>
        </div>

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