"use client"

import { faFacebook, faFlickr, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars, faEnvelope, faPhone, faTimes, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';


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
  }, [])

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
        <div className={`
          w-full px-[12%] sm:px-[8%] lg:px-[12%] text-start lg:text-center relative flex justify-between lg:justify-center nav-menu-container transition-all duration-500 ease-in-out
          ${isScrolled ? "bg-white" : "bg-transparent"}
        `}>
          {/* Logo For Mobile */}
          <div className="lg:hidden flex log text-2xl uppercase font-semibold">
            <a href="#" className="unbounded-font">
              Sky<span className="unbounded-font">Fare</span>
            </a>
          </div>

          {/* Desktop menu */}
          <ul className="nav-menu hidden lg:flex w-full justify-center items-center gap-14 py-5 relative">
            <li>
              <Link href="/" className="active font-[500] hover:text-black transition-colors duration-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/Tour" className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">
                Tour
              </Link>
            </li>
            <div className="logo text-3xl uppercase font-semibold">
              <Link href="#" className="unbounded-font">
                Sky<span className="unbounded-font">Fare</span>
              </Link>
            </div>
            <li>
              <Link href="/Faq" className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">
                Faq
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div className="flex justify-center items-center">
            <div
              className="toggle-btn lg:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? 'times' : 'bars'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="inline-flex"
                >
                  <FontAwesomeIcon
                    icon={isOpen ? faTimes : faBars}
                    className="text-[#193555] text-xlt"
                  />
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Mennu Dropdown */}
          <div className={`
            lg:hidden flex flex-col items-stretch px-0 gap-1 bg-[#f7f7f7] shadow-md absolute left-0 w-full overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-[500px] top-full mt-3 opacity-100" : "max-h-0 opacity-0 py-0 top-full"}
          `}>
            <li className="group w-full hover:bg-gray-200 transition-colors duration-200">
              <a href="#" className="block w-full px-6 py-4 font-[500] text-[#697e8a] transition-colors duration-200 group-hover:text-black">
                Home
              </a>
            </li>
            <li className="group w-full hover:bg-gray-200 transition-colors duration-200">
              <a href="#" className="block w-full px-6 py-4 font-[500] text-[#697e8a] transition-colors duration-200 group-hover:text-black">
                About
              </a>
            </li>
            <li className="group w-full hover:bg-gray-200 transition-colors duration-200">
              <a href="#" className="block w-full px-6 py-4 font-[500] text-[#697e8a] transition-colors duration-200 group-hover:text-black">
                Home
              </a>
            </li>
            <li className="group w-full hover:bg-gray-200 transition-colors duration-200">
              <a href="#" className="block w-full px-6 py-4 font-[500] text-[#697e8a] transition-colors duration-200 group-hover:text-black">
                Tours
              </a>
            </li>
            <li className="group w-full hover:bg-gray-200 transition-colors duration-200">
              <a href="#" className="block w-full px-6 py-4 font-[500] text-[#697e8a] transition-colors duration-200 group-hover:text-black">
                Faqs
              </a>
            </li>
            <li className="group w-full hover:bg-gray-200 transition-colors duration-200">
              <a href="#" className="block w-full px-6 py-4 font-[500] text-[#697e8a] transition-colors duration-200 group-hover:text-black">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav