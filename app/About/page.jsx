"use client"

import AboutComponent from "@/components/AboutComponent"
import Counter from "@/components/Counter"
import ExperienceComponent from "@/components/ExperienceComponent"
import TourCompany from "@/components/TourCompany"
import { about01, about02, about03, adventure01, author01, author02, author03, author04, tourCompany01, tourCompany02 } from "@/public/Images"
import { faAngleDown, faAngleRight, faAngleUp, faDoorClosed, faMoneyBillWave, faPlay, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import AdventureComponent from "@/components/AdventureComponent"


const page = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "1. What to prepare to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "2. What document you need before go to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "3. How to scheduling Asia trip itinerary", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "4. 8 website must read before your trip", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "5. This is the Best budget you need to prepare", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "6. This site give you the information about travel to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
  ]

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

  // Variantes para el banner con el botón de play
  const videoBannerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variante para el botón de play
  const playButtonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut", delay: 0.3 },
    },
  };

  return (
    <>
      {/* Page Title */}
      <motion.div
        className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={titleVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white text-center w-full unbounded-font z-22">
          About Us
        </motion.h2>

        <motion.ul variants={breadcrumbVariants} className="text-white z-10 flex items-center gap-8 section-list">
          <li className="text-sm relative">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
            <Link href="/About">About</Link>
          </li>
        </motion.ul>
      </motion.div>

      {/* About Component */}
      <AboutComponent />

      {/* Tour Company Component */}
      <TourCompany />

      {/* Experience Component */}
      <ExperienceComponent />

      {/* banner */}
      <motion.div
        className="banner mx-0 w-[100%] lg:mx-auto lg:w-[80%] mb-12"
        variants={videoBannerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.div variants={playButtonVariants}>
          <FontAwesomeIcon icon={faPlay} className="play-btn" />
        </motion.div>
      </motion.div>

      {/* Adventure Component */}
      <AdventureComponent />    
    </>
  )
}

export default page