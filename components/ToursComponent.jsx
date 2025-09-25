'use client';

import { motion } from 'framer-motion';
import ToursData from "@/data/ToursData.json"
import { tourImage011, tourImage021, tourImage031, tourImage041, tourImage051, tourImage061, tourImage071, tourImage081 } from '@/public/Images';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

// Mapa para resolver las rutas de las imágenes del JSON
const tourImagesMap = {
  "/Images/tour-image-01-1.avif": tourImage011,
  "/Images/tour-image-02-1.jpg": tourImage021,
  "/Images/tour-image-03-1.jpeg": tourImage031,
  "/Images/tour-image-04-1.jpg": tourImage041,
  "/Images/tour-image-05-1.jpg": tourImage051,
  "/Images/tour-image-06-1.jpg": tourImage061,
  "/Images/tour-image-07-1.jpg": tourImage071,
  "/Images/tour-image-08-1.jpeg": tourImage081,
};

// Variantes de animación para Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Retraso entre la animación de cada hijo
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const ToursComponent = () => {
  return (
    <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14 overflow-hidden">
      <motion.div
        className="travel-content text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="unbounded-font text-4xl font-semibold pb-3">
          Find Out The Best Travel Choice
        </h1>

        <p className="w-[60%] mx-auto text-[#193555]">
          The best places to travel to and from. We have curated the best places for you to travel to and from.
        </p>
      </motion.div>

      <motion.div
        className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {ToursData.map((tour) => (
          // Envolvemos el Link en un motion.div para que sea el hijo directo del grid y se anime
          <motion.div key={tour.id} variants={itemVariants}>
            <Link href={`/ToursDetails/${tour.id}`}>
              <div className="rounded-xl overflow-hidden relative group transition-all duration-300 h-[300px]">
                <Image
                  src={tourImagesMap[tour.mainImage]}
                  alt={tour.title}
                  height={300}
                  width={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <div>
                    <h2 className="text-xl font-semibold unbounded-font pb-1">
                      {tour.title}
                    </h2>

                    <p className="text-[#ffffff91] text-xs flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} />
                      {tour.location}
                    </p>
                  </div>

                  <h4 className="text-xl font-semibold unbounded-font text-right">
                    <span className="text-[#ffffff91] text-xs font-normal">
                      Start From
                    </span>{" "}
                    <br />
                    {tour.price}
                  </h4>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ToursComponent