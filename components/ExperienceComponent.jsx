import React from 'react'

const ExperienceComponent = () => {
  return (
    <div className='experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]'> 
      <div className='experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 items-start w-full'>
        <h2 className='xl:w-[50%] w-full text-white text-2xl md:text-5xl leading-tight unbounded-font'>
          Enjoy Our best Quality Tour & Experience
        </h2>

        <div className='xl:w-[40%] w-full'>
          <p className='text-[#ffffff91] pb-5 text-sm'>
            Our curated travel experiences are designed to inspire and delight. But don't just take our word for it see what our happy travelers have to say
          </p>
          
          <button className='btn bg-white group text-[#193555] hover:bg-[#193555]font-bold px-6 w-auto'>
            <a href="#" className='unbounded-font text-sm xl:text-md uppercase group-hover:text-white'>
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExperienceComponent