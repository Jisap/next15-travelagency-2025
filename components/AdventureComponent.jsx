"use client";

import { adventure01 } from "@/public/Images"
import { faBed, faMoneyBillWave, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { motion } from "framer-motion";


function AdventureComponent() {

  // Variantes para la animación escalonada del contenedor principal
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // Retraso entre la animación de la imagen y el contenido
        delayChildren: 0.2,
      },
    },
  };

  // Variante para la imagen (aparece desde la izquierda)
  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variante para el contenedor de contenido (orquesta a sus hijos)
  const contentContainerVariant = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Retraso entre título, párrafo y características
      },
    },
  };

  // Variante para los items de texto y la rejilla de características
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="adventure flex flex-col-reverse lg:flex-row items-center gap-12 px-[2%] sm:px-[8%] lg:px-[12%] py-[60px] lg:py-[100px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Image Section */}
      <motion.div variants={imageVariant} className="w-full lg:w-[50%] relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={adventure01}
          alt="Adventure"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </motion.div>

      {/* Content Section */}
      <motion.div variants={contentContainerVariant} className="w-full lg:w-[50%]">
        <motion.h1 variants={itemVariant} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
          Experience The <span className="text-[#193555]">New Adventure</span>
        </motion.h1>
        <motion.p variants={itemVariant} className="text-gray-600 mb-8 text-sm md:text-base">
          We try to make your travel experience as comfortable as possible. We
          offer a wide range of accommodations, from budget-friendly to luxurious
          options, to suit every traveler's needs.
        </motion.p>

        {/* Features Grid */}
        <motion.div variants={itemVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
            <FontAwesomeIcon icon={faShieldHalved} className="text-white bg-[#193555] p-3 rounded-full text-lg mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Safe Traveling</h3>
              <p className="text-gray-600 text-sm">Your safety is our priority, ensuring worry-free journeys.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-white bg-[#193555] p-3 rounded-full text-lg mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Affordable Price</h3>
              <p className="text-gray-600 text-sm">Best packages at affordable rates for every traveler.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition sm:col-span-2">
            <FontAwesomeIcon icon={faBed} className="text-white bg-[#193555] p-3 rounded-full text-lg mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Comfort Accommodation</h3>
              <p className="text-gray-600 text-sm">Enjoy premium stays with comfort and luxury included.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AdventureComponent