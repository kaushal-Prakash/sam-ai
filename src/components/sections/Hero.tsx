import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden hero">
      <img
        src="/hero/trees-1.png"
        alt="trees 1"
        className="absolute w-full h-full object-cover object-center tree-1"
      />
      <img
        src="/hero/trees-2.png"
        alt="trees 2"
        className="absolute w-full h-full object-cover object-center tree-2"
      />
      <img
        src="/hero/flame-2.png"
        alt="flame 2"
        className="absolute w-full h-full object-cover object-center flame-2"
      />
    </div>
  );
}

export default Hero;