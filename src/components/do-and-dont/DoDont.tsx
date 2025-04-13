import React from 'react'

const DoDont = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center flex-col items-center overflow-hidden hero">
      <img
        src="/sam ai hkthn/half.png"
        alt="trees 1"
        className="absolute w-full h-full z-[-2] object-cover object-center"
      />

      <div className="bg-[#000814]/45 mb-6 absolute top-28 px-6 py-3 rounded-xl border-[1px] border-[#FFD60A] shadow-lg shadow-[#000814]">
        <h1
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#FFD60A] tracking-widest text-[32px]  font-extrabold"
        >
          Do's & Dont's to Prevent Forest Fires
        </h1>
      </div>

      <div className='absolute bottom-10 flex gap-40 text-white text-[32px] font-semibold'>
        <div className='bg-[#000814]/10 backdrop-blur-md backdrop-brightness-90 rounded-xl  w-[35rem] h-[34rem]  px-4 py-6 border-[1px] border-(--cs-yellow) shadow-lg shadow-[#000814]'>
        <h1>Do's:</h1>
        <ul className='list-disc pl-16'>
            <li>Properly dispose of cigarette butts.</li>
            <li>Follow fire safety guidelines in camping areas.</li>
            <li>Keep water or fire extinguishers ready when lighting outdoor fires.</li>
            <li>Report any signs of fire immediately.</li>
        </ul>

        </div>

        <div className='bg-[#000814]/10 backdrop-blur-md backdrop-brightness-90 rounded-xl w-[35rem] h-[34rem] border-[1px] p-4 border-[#FFD60A] shadow-lg shadow-[#000814]'>
        <h1>Dont's:</h1>
        <ul className='list-disc pl-16'>
            <li>Leave campfires unattended.</li>
            <li>Burn trash or debris in dry, windy conditions.</li>
            <li>Use fireworks near forested areas.</li>
            <li>Park vehicles on dry grass (hot engines can ignite fires).</li>
        </ul>

        </div>
      </div>
    </div>
  )
}

export default DoDont
