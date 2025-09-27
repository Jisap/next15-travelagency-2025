"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { author01, author02, author03, author04 } from "@/public/Images";

import { motion } from "framer-motion";
// 1. Importa `register` para inicializar Swiper Elements
import { register } from "swiper/element/bundle";

// Array de datos para los testimonios
const testimonialsData = [
  {
    id: 1,
    quote: "The trip was absolutely amazing! Every detail was perfectly planned, and the sights were breathtaking. I can't wait to book my next adventure with them.",
    name: "Jessica Miller",
    title: "Seasoned Traveler",
    image: author01,
  },
  {
    id: 2,
    quote: "A truly unforgettable experience. The guides were knowledgeable and friendly, and the accommodations exceeded our expectations. Highly recommended!",
    name: "Michael Chen",
    title: "First-time Explorer",
    image: author02,
  },
  {
    id: 3,
    quote: "From start to finish, the service was impeccable. They took care of everything, allowing us to just relax and enjoy the journey. Best travel agency ever!",
    name: "Sarah Johnson",
    title: "Adventure Seeker",
    image: author03,
  },
  {
    id: 4,
    quote: "I was blown away by the cultural immersion and the stunning landscapes. This was more than a vacation; it was a life-changing experience. Thank you!",
    name: "David Rodriguez",
    title: "Photography Enthusiast",
    image: author04,
  },
];

const TestimonialsComponent = ({ theme = "dark" }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();

    const swiperEl = swiperElRef.current;

    // Configuración de Swiper
    const swiperParams = {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize?.();
  }, []);

  return (
    <div className={`testimonial px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] ${
      theme === 'dark' ? 'bg-[#0e0700]' : 'bg-white'
    }`}>
      <motion.div 
        className="pb-10 testimonials-content flex justify-between lg:flex-row gap-3 lg:gap-0 items-start w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }} // Aumentamos a 50% para que se vea mejor
        transition={{ duration: 1, ease: 'easeOut' }} // Aumentamos la duración
      >
        <h2 className={`xl:w-[50%] w-full text-4xl leading-tight unbounded-font ${
          theme === 'dark' ? 'text-white' : 'text-[var(--heading-color)]'
        }`}>
          Discover A Mesmerizing Nature Landscape & Stunning Culture
        </h2>

        <div className="xl:w-[50%] w-full hidden md:flex flex-col gap-5">
          <p className={`pt-2 text-sm ${
            theme === 'dark' ? 'text-[#ffffff91]' : 'text-[var(--text-color)]'
          }`}>
            Our curated travel experiences are designed to inspire and delight. But don't just take our word for it see what our happy travelers have to say.
          </p>

          <div className="self-end">
            <button className={`btn group font-bold px-6 py-3 rounded-full cursor-pointer transition-colors duration-300 ${
              theme === 'dark' ? 'bg-white text-[#192555] hover:bg-[#192555] hover:text-white' : 'bg-[#192555] text-white hover:bg-[#0e0700]'
            }`}>
              <a href="#" className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
                Learn More 
              </a>
            </button>
          </div>
        </div>
      </motion.div>
     
      

      {/* ---- Swiper Slider ---- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} // Aumentamos a 40%
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} // Aumentamos duración y delay
      >
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          init="false"
          space-between="30"
          loop="true"
        >
          {testimonialsData.map((testimonial) => (
            <swiper-slide key={testimonial.id} class="h-full">
              {/* Card */}
              <div className={`rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-lg transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#1e1e1e] to-[#111] border border-white/10 hover:shadow-black/50' 
                  : 'bg-white border border-gray-200/80 shadow-gray-200/80 hover:shadow-xl'
              }`}>
                <p className={`text-sm sm:text-base leading-relaxed italic ${
                  theme === 'dark' ? 'text-[#ffffffb3]' : 'text-[var(--text-color)]'
                }`}>
                  "{testimonial.quote}"
                </p>
                {/* User Info */}
                <div className="flex items-center gap-4 mt-8">
                  <Image
                    src={testimonial.image}
                    width={55}
                    height={55}
                    className={`rounded-full border-2 ${
                      theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                    }`}
                    alt={testimonial.name}
                  />
                  <div>
                    <h4 className={`font-semibold text-sm sm:text-base ${
                      theme === 'dark' ? 'text-white' : 'text-[var(--heading-color)]'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-[#ffffff91]' : 'text-gray-500'}`}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </motion.div>
    </div>
  );
};

export default TestimonialsComponent;