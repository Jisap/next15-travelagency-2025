"use client"

import { faFacebook, faFlickr, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars, faEnvelope, faPhone, faTimes, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"



const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  return (
    <>
      <nav className={`
        navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${isScrolled ? "bg-white shadow-md py-3 scrolled" : "py-0"}
      `}>
        {/* Nav Top (hidden on scroll with transition*/}
        <div className={`
          nav-top w-full flex justify-between items-center gap-3 px-[2%] sm:px-[8%] lg:px-[12%] overflow-hidden transtion-all duration-500 ease-in-out
          ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[200px] opacity-100 py-3"}
        `}>
          <ul className="hidden lg:flex items-center gap-3 text-[#727272]">
            <li className="text-sm">
              <FontAwesomeIcon icon={faPhone} className="pr-1 text-[#727272]" />
              <span>+91 54 0352 3524</span>
            </li>
            <li className="text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="pr-1 text-[#8192a0]" />
              <span>Booking@skyfare.com</span>
            </li>
          </ul>

          <div className="flex items-center justify-between gap-3 lg:justify-center text-[#727272] w-full lg:w-auto">
            <ul className="flex items-center gap-3">
              <li className="">
                <FontAwesomeIcon icon={faFacebook} className="text-[#8192a0]" />
              </li>
              <li className="">
                <FontAwesomeIcon icon={faFlickr} className="text-[#8192a0]" />
              </li>
              <li className="">
                <FontAwesomeIcon icon={faXTwitter} className="text-[#8192a0]" />
              </li>
            </ul>

            <ul className="flex items-center gap-3 ps-3">
              <li className="lg:text-md text-sm cursor-pointer">
                <i className="ri-lock-line pr-1 text-[#8192a0]" />
                <span>Login</span>
              </li>
              <li className="lg:text-md text-sm cursor-pointer">
                <FontAwesomeIcon icon={faUser} className="text-[#8192a0]" />
                <span>Sign Up</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Main nav menu */}
      </nav>
    </>
  )
}

export default Nav