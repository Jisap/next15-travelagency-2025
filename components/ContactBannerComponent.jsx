"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ContactBannerComponent = () => {
  const [showModal, setShowModal] = useState(false);

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
    <>
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
          <motion.button 
            variants={itemVariants} 
            className="btn bg-white group text-[#193555] hover:bg-[#193555] hover:text-white font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300"
            onClick={() => setShowModal(true)}
          >
            <span className='unbounded-font text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider'>Contact Us</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal con Formulario */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setShowModal(false)}
            ></div>

            <FontAwesomeIcon 
              icon={faClose} 
              onClick={() => setShowModal(false)} 
              className="absolute top-5 right-5 text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors" 
            />

            <motion.div
              className="bg-white w-full max-w-lg h-auto max-h-[90vh] overflow-y-auto z-10 relative rounded-2xl p-5 flex flex-col shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
            >
              <h2 className="text-center unbounded-font pt-5 text-2xl lg:text-3xl font-semibold text-[var(--heading-color)]">
                Contact Us
              </h2>
              <p className="text-center text-[var(--text-color)] mt-2 mb-6">
                Leave your details and we'll get back to you shortly.
              </p>

              <form method="post" className="p-5 lg:p-8 space-y-5">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="pb-1 text-md font-bold text-[var(--heading-color)]">Full Name:</label>
                  <input id="name" type="text" placeholder="John Doe" className="contact-form border-2 border-gray-200 outline-none rounded-md p-2 focus:border-[var(--btn-color)] transition-colors" required />
                </div>

                {/* Email and Phone Row */}
                <div className="w-full gap-4 flex flex-col sm:flex-row">
                  <div className="flex flex-col w-full">
                    <label htmlFor="email" className="pb-1 text-md font-bold text-[var(--heading-color)]">Email:</label>
                    <input id="email" type="email" placeholder="email@example.com" className="contact-form border-2 border-gray-200 outline-none rounded-md p-2 focus:border-[var(--btn-color)] transition-colors" required />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="phone" className="pb-1 text-md font-bold text-[var(--heading-color)]">Phone:</label>
                    <input id="phone" type="tel" placeholder="Phone Number" className="contact-form border-2 border-gray-200 outline-none rounded-md p-2 focus:border-[var(--btn-color)] transition-colors" />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="w-full flex flex-col">
                  <label htmlFor="message" className="pb-1 text-md font-bold text-[var(--heading-color)]">Your Message:</label>
                  <textarea id="message" placeholder="I'm interested in the special promo..." rows="4" className="contact-form border-2 border-gray-200 outline-none rounded-md p-2 focus:border-[var(--btn-color)] transition-colors"></textarea>
                </div>

                <button type="submit" className="btn text-white bg-[#193555] hover:bg-[#0f243d] font-bold py-3 rounded-md cursor-pointer transition-colors duration-300 mt-5 w-full">
                  <span className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
                    Send Inquiry
                  </span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ContactBannerComponent