import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <div className='footer bg-black px-[2%] sm:px-[8%] pt-[50px] lg:pt-[90px]'>
        <div className='footer-content'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
            <div className='lg:col-span-3'>
              <div className='text-white logo text-wxl uppercase font-semibold'>
                <a href="#" className='unbounded-font'>
                  Sky<span className='unbounded-font'>Fare</span>
                </a>
              </div>

              <p className='mt-4 text-[#ffffffb3]'>
                Badung, Bali-J1. Desa Sawangan, No. 11 Nusa Dua, 87869
              </p>

              <div className='footer-icons flex gap-3 mt-5'>
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-gray-400 hover:text-pink-400 transition duration-300 cursor-pointer" />
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 text-gray-400 hover:text-blue-400 transition duration-300 cursor-pointer" />
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer" />
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 text-gray-400 hover:text-red-500 transition duration-300 cursor-pointer" />
              </div>
            </div>

            <div className='lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-10'>
              <div className='md:col-span-3 space-y-3'>
                <h2 className='text-white text-2xl unbounded-font mb-6'>
                  Pages
                </h2>

                <ul className='space-y-2 list-none'>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Faq
                    </a>
                  </li>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className='md:col-span-3 space-y-3'>
                <h2 className='text-white text-2xl unbounded-font mb-6'>
                  Links
                </h2>

                <ul className='space-y-2 list-none'>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Privacy Policy 
                    </a>
                  </li>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className='text-[#ffffffb3] hover:text-white transition-colors duration-300'>
                      Term & 
                    </a>
                  </li>
                </ul>
              </div>

              <div className='md:col-span-6 space-y-3 max-w-md'>
                <h2 className='text-white text-2xl unbounded-font mb-6'>
                  Our Newletter
                </h2>

                <p className='text-[#ffffffb3] text-sm'>
                  Subscribe to our newsletter to get the latest updates from us.
                </p>

                <form className='flex items-center border border-[#ffffff4d] rounded-full mt-4 overflow-hidden'>
                  <input 
                    type='email' 
                    placeholder='Enter your email' 
                    className='flex-1 px-4 py-3 text-sm bg-transparent text-white placeholder-[#ffffff80] focus:outline-none'
                  />

                  <button className="bg-white text-black font-semibold px-6 py-3 hover:bg-[#ffffff80] transition">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>  
        </div>

        <div className="border-t border-[#ffffff33] mt-12 py-8 text-center text-gray-500 text-sm">
          <p>
            © 2025. All Rights Reserved by <a href="#" className="font-bold text-white hover:text-red-400">jisapdev</a>
          </p>
        </div>

      </div>
    </>  
  )
}

export default Footer