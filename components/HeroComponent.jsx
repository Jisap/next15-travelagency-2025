import React from 'react'

const HeroComponent = () => {
  return (
    <div className='hero h-screen min-h-screen flex justify-center items-center z-10'>
      <div className='hero-content realtive text-center'>
        <h1 className='xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white'>
          Find Your Best <br /> Travels Package
        </h1>

        <p className='pt-3 text-[#ffffffb3] md:pb-10 pb-5'>
          Palnning for a trip? We will organize your trip with the best places and within best budget!
        </p>

        <button className='btn bg-white group text-[193555] hover:bg-[#193555] font-bold px-6 py-4 rounded-full cursor-pointer transition-colors duration-300'>
          <a href="#" className='unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider'>
            View All Tours
          </a>
        </button>
      </div>
    </div>
  )
}

export default HeroComponent