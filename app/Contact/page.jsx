"use client"

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion"
import toursData from "../../data/ToursData.json"
import ToursComponent from '@/components/ToursComponent';
import ContactBannerComponent from '@/components/ContactBannerComponent';
import { faFacebookSquare, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


// Variantes de animación para el banner
const bannerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Retraso entre la animación del título y el breadcrumb
      delayChildren: 0.2,   // Retraso inicial antes de que comiencen las animaciones de los hijos
    },
  },
};

// Variante para el título (deslizamiento hacia abajo)
const titleVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Variante para el breadcrumb (deslizamiento hacia arriba)
const breadcrumbVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Variantes para la sección de contacto
const contactContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const infoVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const page = () => {
  return (
    <>
      <motion.div
        className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={titleVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white text-center w-full unbounded-font z-22">
          Contact
        </motion.h2>

        <motion.ul variants={breadcrumbVariants} className="text-white z-10 flex items-center gap-8 section-list">
          <li className="text-sm relative">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
            <Link href="/Contact">Contact</Link>
          </li>
        </motion.ul>
      </motion.div>

      {/* Contact Page */}
      <div className="contact-page px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <motion.div 
          className="contact-section p-8 sm:p-12 rounded-2xl bg-[#0e0700] flex flex-col lg:flex-row gap-10 lg:gap-0"
          variants={contactContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="w-full lg:w-[40%]" variants={infoVariants}>
            <div className="contact-content mb-6">
              <span className="uppercase text-[#7a7a7a]">Office Address</span>
              <p className="text-white mt-3 text-xl md:text-[24px] leading-relaxed">
                Camino Mt.Rey Nº 45 <br /> 20987 Madrid, Spain
              </p>
            </div>
            <div className="contact-content mb-8">
              <span className="uppercase text-[#7a7a7a]">Office Phone Number</span>
              <p className="text-white mt-3 text-xl md:text-[24px]">(+91) 830 2290 182</p>
            </div>
            <div className="contact-content mb-8">
              <span className="uppercase text-[#7a7a7a]">Email Address</span>
              <p className="text-white mt-3 text-xl md:text-[24px]">Example@gmail.com</p>
            </div>
            <div className="contact-content">
              <p className="text-white mt-3 text-xl md:text-[24px]">Follow Our Social Media</p>
              <div className="contact-icons flex gap-4 mt-4">
                <FontAwesomeIcon icon={faInstagram} className='text-white text-xl md:text-[22px] hover:text-pink-400 transition-colors' />
                <FontAwesomeIcon icon={faXTwitter} className='text-white text-xl md:text-[22px] hover:text-blue-400 transition-colors' />
                <FontAwesomeIcon icon={faFacebookSquare} className='text-white text-xl md:text-[22px] hover:text-blue-500 transition-colors' />
                <FontAwesomeIcon icon={faYoutube} className='text-white text-xl md:text-[22px] hover:text-red-500 transition-colors' />
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-[60%] mt-10 lg:mt-0" variants={formVariants}>
            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="w-full gap-6 flex flex-col sm:flex-row">
                <div className="flex flex-col w-full">
                  <label htmlFor="contact-name" className="pb-2 text-sm font-bold text-white uppercase tracking-wider">Full Name</label>
                  <input id="contact-name" type="text" placeholder="John Doe" className="bg-[#1c1c1c] border-2 border-gray-700/80 text-gray-300 outline-none rounded-lg p-3 focus:border-[var(--btn-color)] transition-colors" required />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="contact-email" className="pb-2 text-sm font-bold text-white uppercase tracking-wider">Email Address</label>
                  <input id="contact-email" type="email" placeholder="email@example.com" className="bg-[#1c1c1c] border-2 border-gray-700/80 text-gray-300 outline-none rounded-lg p-3 focus:border-[var(--btn-color)] transition-colors" required />
                </div>
              </div>

              {/* Subject Field */}
              <div className="flex flex-col w-full">
                <label htmlFor="contact-subject" className="pb-2 text-sm font-bold text-white uppercase tracking-wider">Subject</label>
                <input id="contact-subject" type="text" placeholder="Booking Inquiry" className="bg-[#1c1c1c] border-2 border-gray-700/80 text-gray-300 outline-none rounded-lg p-3 focus:border-[var(--btn-color)] transition-colors" required />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col w-full">
                <label htmlFor="contact-message" className="pb-2 text-sm font-bold text-white uppercase tracking-wider">Comments / Questions</label>
                <textarea id="contact-message" placeholder="Your message here..." rows="6" className="bg-[#1c1c1c] border-2 border-gray-700/80 text-gray-300 outline-none rounded-lg p-3 focus:border-[var(--btn-color)] transition-colors"></textarea>
              </div>

              <button 
                type="submit" 
                className="
                  btn text-[#193555] bg-white hover:bg-gray-200 
                  font-bold py-4 rounded-full cursor-pointer 
                  transition-colors duration-300 w-full
                  uppercase tracking-wider text-sm
                "
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="px-[2%] sm:px-[8%] lg:px-[12%] pb-[50px] lg:pb-[90px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <iframe 
          className="w-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5257.162133270204!2d-3.6855039537205165!3d40.43236632291734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1758972674956!5m2!1ses!2ses" 
          height="450" 
          style={{ border:0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </>
  )
}

export default page