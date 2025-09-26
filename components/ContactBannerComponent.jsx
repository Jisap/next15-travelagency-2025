"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ContactBannerComponent = () => {

  // Variantes para el contenedor para orquestar la animación de los hijos
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Retraso entre cada elemento hijo
        ease: 'easeOut'
      }
    }
  };

  // Variantes para cada elemento hijo (título, párrafo, botón)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className='contact-banner flex justify-between items-center'>
      <motion.div 
        className='contact-banner-content relative text-center mx-auto md:ml-8 lg:ml-12 xl:ml-14'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h1 variants={itemVariants} className="xl:text-6xl lg:text-5xl text-4xl font-bold text-white">
          Get Closer With Us & <br /> Get Special Promo
        </motion.h1>
        <motion.p variants={itemVariants} className="pt-6 text-[#ffffffb3] pb-10 text-center px-5">
          We are here to help you plan your dream trip. <br /> Contact us today and let's make it happen.
        </motion.p>
        <motion.button variants={itemVariants} className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
          <span className='unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider'>Contact Us</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default ContactBannerComponent