"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Counter from './Counter'
import Image from 'next/image'
import { tourCompany01, tourCompany02 } from '@/public/Images'

const TourCompany = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Ralentiza el escalonamiento entre elementos
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8, // Aumenta la duración para una animación más suave
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="tour-company px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.div variants={itemVariants} className="tour-content max-w-3xl text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-snug">
          We are The Most Popukar Travel & Tour Company
        </h1>
        <p className="text-[#6b6b6b] text-[15px]">
          The most popular travel agency in the world, offering a wide range of, and the best travel packages for every traveler.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-15 w-full">
        {/* Cada tarjeta de estadística podría tener su propia animación, pero animar el contenedor es más simple */}
        {/* ... (contenido de las tarjetas de estadísticas sin cambios) ... */}
        {/* ... */}
        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="tour-icons w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-4">
            <i className="ri-map-2-line text-2xl"></i>
          </div>
          <h2 className="font-bold text-2xl">
            <Counter to={928} />+
          </h2>
          <span className="text-[#6b6b6b]">Travel Destinations</span>
        </div>

        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="tour-icons w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white mb-4">
            <i className="ri-group-line text-2xl"></i>
          </div>
          <h2 className="font-bold text-2xl">
            <Counter to={1020} />+
          </h2>
          <span className="text-[#6b6b6b]">Tour Partners</span>
        </div>

        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="tour-icons w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
            <i className="ri-hotel-line text-2xl"></i>
          </div>
          <h2 className="font-bold text-2xl">
            <Counter to={540} />+
          </h2>
          <span className="text-[#6b6b6b]">Hotels & Accommodations</span>
        </div>
      </motion.div>

      {/* Images Section */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-4 mt-10 w-full">
        <div className="w-full lg:w-2/3">
          <Image
            src={tourCompany01}
            alt="TourCompany01"
            className="rounded-2xl"
          />
        </div>

        <div className="w-full lg:w-1/3">
          <Image
            src={tourCompany02}
            alt="TourCompany02"
            className="rounded-2xl h-[100%] object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TourCompany