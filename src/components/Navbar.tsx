import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center justify-between backdrop-blur-lg bg-white/30 shadow-lg rounded-full px-8 py-3 w-[90%] max-w-6xl border border-white/40">
        
        {/* Left side links */}
        <div className="flex items-center justify-center space-x-6 flex-1 font-semibold text-gray-800">
          <a href="#" className="hover:text-green-600">Forest Fire</a>
          <a href="#" className="hover:text-green-600">Flood Map</a>
        </div>

        {/* Center logo */}
        <div className="flex justify-center w-[104px]"> {}
          <Image
            src="/logo.png"
            alt="Logo"
            width={52}
            height={52}
            className="object-contain"
          />
        </div>

        {/* Right side links */}
        <div className="flex items-center justify-center space-x-6 flex-1 font-semibold text-gray-800">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Contact</a>
          <a href="#" className="hover:text-green-600">About Us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
