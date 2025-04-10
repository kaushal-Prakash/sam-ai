import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen w-full'>
        <Image
          src="/hero/trees-1.png"
          alt="trees 1"
          width={1000}
          height={1000}
          className="object-cover w-full h-[400px] md:h-[600px] lg:h-[800px] xl:h-[900px]"
        />
    </div>
  )
}

export default Hero