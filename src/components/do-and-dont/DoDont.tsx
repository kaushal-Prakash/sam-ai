import React from 'react';

const DoDont = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-hidden hero">
      <img
        src="/sam ai hkthn/half.png"
        alt="forest background"
        className="absolute w-full h-full z-[-2] object-cover object-center"
      />

      <div className="bg-[#000814]/45 mt-20 md:mt-0 md:absolute md:top-28 px-4 py-2 md:px-6 md:py-3 rounded-xl border-[1px] border-[#FFD60A] shadow-lg shadow-[#000814] mx-4">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A] tracking-widest text-xl md:text-2xl lg:text-[32px] font-extrabold text-center"
        >
          Do&#39;s & Don&#39;ts to Prevent Forest Fires
        </h1>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20 my-10 md:my-0 md:absolute md:bottom-10 px-4'>
        {/* Do's Card */}
        <div className='bg-[#000814]/10 backdrop-blur-md backdrop-brightness-90 rounded-xl w-full max-w-md md:w-[28rem] lg:w-[30rem] md:h-[28rem] lg:h-[30rem] px-4 py-6 border-[1px] border-[#FFD60A] shadow-lg shadow-[#000814] overflow-auto'>
          <h1 className='text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4'>Do&#39;s:</h1>
          <ul className='list-disc pl-6 space-y-2 text-white text-base md:text-lg lg:text-xl font-medium'>
            <li className='break-words'>Properly dispose of cigarette butts</li>
            <li className='break-words'>Follow fire safety guidelines in camping areas</li>
            <li className='break-words'>Keep water or fire extinguishers ready when lighting outdoor fires</li>
            <li className='break-words'>Report any signs of fire immediately</li>
          </ul>
        </div>

        {/* Don'ts Card */}
        <div className='bg-[#000814]/10 backdrop-blur-md backdrop-brightness-90 rounded-xl w-full max-w-md md:w-[28rem] lg:w-[30rem] md:h-[28rem] lg:h-[30rem] px-4 py-6 border-[1px] border-[#FFD60A] shadow-lg shadow-[#000814] overflow-auto'>
          <h1 className='text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4'>Don&#39;ts:</h1>
          <ul className='list-disc pl-6 space-y-2 text-white text-base md:text-lg lg:text-xl font-medium'>
            <li className='break-words'>Leave campfires unattended</li>
            <li className='break-words'>Burn trash or debris in dry, windy conditions</li>
            <li className='break-words'>Use fireworks near forested areas</li>
            <li className='break-words'>Park vehicles on dry grass (hot engines can ignite fires)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DoDont;