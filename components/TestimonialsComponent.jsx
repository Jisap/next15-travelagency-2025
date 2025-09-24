"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { author01, author02, author03, author04 } from "@/public/Images";

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

const TestimonialsComponent = () => {
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
  }, []);

  return (
    <div className="testimonial bg-[#0e0700] px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] ">
      <div className="pb-10 testimonials-content flex justify-between lg:flex-row gap-3 lg:gap-0 items-start w-full">
        <h2 className="xl:w-[50%] w-full text-white text-4xl leading-tight unbounded-font">
          Discover A Mesmerizing Nature Landscape & Stunning Culture
        </h2>

        <div className="xl:w-[50%] w-full">
          <p className="text-[#ffffff91] pb-5 text-sm">
            Our curated travel experiences are designed to inspire and delight. But don't just take our word for it see what our happy travelers have to say.
          </p>

          <button className="btn bg-white group text-[#192555] hover:bg-[#192555] hover:text-white font-bold px-6 py-4 rounded-full cursor-pointer transition-colors duration-300">
            <a href="#" className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
              Learn More 
            </a>
          </button>
        </div>
      </div>
     
      

      {/* ---- Swiper Slider ---- */}
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        space-between="30"
        loop="true"
      >
        {testimonialsData.map((testimonial) => (
          <swiper-slide key={testimonial.id} class="h-full">
            {/* Card */}
            <div className="bg-gradient-to-br from-[#1e1e1e] to-[#111] border border-white/10 rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-lg hover:shadow-black/50 transition-all duration-500">
              <p className="text-[#ffffffb3] text-sm sm:text-base leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              {/* User Info */}
              <div className="flex items-center gap-4 mt-8">
                <Image
                  src={testimonial.image}
                  width={55}
                  height={55}
                  className="rounded-full border-2 border-white/20"
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#ffffff91] text-xs sm:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default TestimonialsComponent;