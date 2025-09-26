"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  about01,
  about02,
  about03,
  author01,
  author02,
  author03,
  author04,
} from "@/public/Images";

const AboutComponent = () => {

  // Variante para el contenedor del grid (orquesta la animación de los hijos)
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Aumentamos ligeramente el retraso para apreciar mejor las animaciones individuales
      },
    },
  };

  return (
    <div className="about-section py-16 lg:py-24 px-[5%] lg:px-[12%] overflow-hidden">
      {/* Bento Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="show"                      // El padre controla cuándo se muestra todo
        viewport={{ once: false, amount: 0.2 }} // La animación se dispara  cuando el 20% del componente es visible
      >
        {/* 2. Main About Text (Large) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="lg:col-span-2 p-8 border border-gray-200/80 rounded-2xl shadow-sm bg-white flex flex-col justify-center"
        >
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-5 text-gray-900 unbounded-font">
            Begin Your New Life Experience <br /> with Exploring New Destination
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            We believe that traveling is more than just visiting a new place;
            it's about creating unforgettable memories and discovering new
            perspectives. From breathtaking natural wonders to vibrant cultural
            hubs, our team of experts handles every detail to ensure a seamless
            and enriching experience.
          </p>
        </motion.div>

        {/* Image 1 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="rounded-2xl overflow-hidden shadow-sm group h-full">
          <Image
            src={about01}
            alt="About01"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Customer Love Section */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="bg-gradient-to-r from-[#1a1a1a] to-[#111] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center h-full">
          <div className="flex items-center gap-6 mb-6">
            <div className="flex -space-x-3">
              <Image src={author01} alt="Author1" className="w-12 h-12 rounded-full border-2 border-white/80" />
              <Image src={author02} alt="Author2" className="w-12 h-12 rounded-full border-2 border-white/80" />
              <Image src={author03} alt="Author3" className="w-12 h-12 rounded-full border-2 border-white/80" />
            </div>
            <h2 className="text-3xl font-bold unbounded-font">1.2k+</h2>
          </div>
          <h3 className="text-xl font-semibold mb-3">Happy Customers</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Join thousands of travelers who have trusted us.
          </p>
        </motion.div>

        {/* Image 2 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="rounded-2xl overflow-hidden shadow-sm group h-full">
          <Image
            src={about02}
            alt="About02"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="lg:col-span-2 bg-gradient-to-r from-[#193555] to-[#0f1c2e] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center h-full">
          <h3 className="text-xl font-semibold mb-3">Join Our Next Adventure</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Explore our curated trips and find the perfect getaway. Your next story begins here.
          </p>
        </motion.div>

        {/* Image 3 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="rounded-2xl overflow-hidden shadow-sm group h-full">
          <Image
            src={about03}
            alt="About03"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutComponent;