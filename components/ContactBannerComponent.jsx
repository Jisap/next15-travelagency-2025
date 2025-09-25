import React from 'react'

const ContactBannerComponent = () => {
  return (
    <div className='contact-banner flex justify-between items-center'>
      <div className='contact-banner-content relative text-center mx-auto md:ml-8 lg:ml-12 xl:ml-14'>
        <h1 className="xl:text-6xl lg:text-5xl text-4xl font-bold text-white">
          Get Closer With Us & <br /> Get Special Promo
        </h1>
        <p className="pt-6 text-[#ffffffb3] pb-10 text-center px-5">
          We are here to help you plan your dream trip. <br /> Contact us today and let's make it happen.
        </p>
        <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
          <a href="#" className='unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider'>Contact Us</a>
        </button>
      </div>
    </div>
  )
}

export default ContactBannerComponent