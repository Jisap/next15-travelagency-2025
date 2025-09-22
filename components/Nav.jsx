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
          <ul >
            <li>
              <FontAwesomeIcon icon={faPhone} className="pr-1 text-[#727272]" />
              <span>+91 54 0352 3524</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav