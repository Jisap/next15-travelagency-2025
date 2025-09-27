"use client"

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion"
import toursData from "../../data/ToursData.json"
import ToursComponent from '@/components/ToursComponent';
import ContactBannerComponent from '@/components/ContactBannerComponent';


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
            <Link href="/">Contact</Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
            <Link href="/Contact">Contact</Link>
          </li>
        </motion.ul>
      </motion.div>

      <ContactBannerComponent />
    </>
  )
}

export default page