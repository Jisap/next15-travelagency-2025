"use client";

import { blogPage01, blogPage02, blogPage03 } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// 1. Importa `register` para inicializar Swiper Elements
import { register } from "swiper/element/bundle";

const blog = [
  { img: blogPage01, title: "Tropical Bliss: Rejuvenate in Asia", desc: "Discover tropical vibes and rejuvenating landscapes filled with adventure & culture.", date: "Feb 12, 2025", category: "Travel" },
  { img: blogPage02, title: "Asia's Thrilling Adventure", desc: "From mountains to beaches, experience Asia's diversity and thrilling escapes.", date: "Mar 05, 2025", category: "Adventure" },
  { img: blogPage03, title: "Unforgettable Experience", desc: "Make memories that last forever with breathtaking destinations around the globe.", date: "Apr 10, 2025", category: "Lifestyle" },
  { img: blogPage01, title: "Secrets of the Kyoto Temples", desc: "A journey through the serene and historic temples of Kyoto, Japan.", date: "May 21, 2025", category: "Culture" },
  { img: blogPage02, title: "Exploring the Amalfi Coast", desc: "Coastal drives, delicious food, and stunning views in Italy's famous coastline.", date: "Jun 08, 2025", category: "Food & Travel" },
  { img: blogPage03, title: "Hiking the Swiss Alps", desc: "An adventurer's guide to the most scenic hiking trails in Switzerland, with breathtaking views and unforgettable experiences.", date: "Jul 15, 2025", category: "Adventure" },
];

const BlogComponent = () => {
  
  const swiperElRef = useRef(null);                             // Creamos una referencia (`ref`) para obtener acceso directo al elemento del DOM del carrusel.
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  useEffect(() => { 
    register();                                                 // Es necesario registrar los "Swiper Elements" para que el navegador los reconozca como custom elements.
 
    const swiperEl = swiperElRef.current;                       // Obtenemos la instancia del elemento Swiper una vez que el componente se ha montado.

    
    
    
    const swiperParams = {                                      
      navigation: {                                             // Definimos las referencias a los botones de navegación                                           
        prevEl: prevRef.current,                                
        nextEl: nextRef.current,
      },
      breakpoints: {                                            // Definimos los parámetros complejos (como `breakpoints`) en un objeto JavaScript.
        768: { slidesPerView: 2 },                              // Esto evita errores de parseo que pueden ocurrir al pasar objetos como strings en JSX,
        1024: { slidesPerView: 3 },                             // especialmente al navegar entre páginas en Next.js.
      },
    };
    
    
    
    Object.assign(swiperEl, swiperParams);                      // Usamos `Object.assign` para 'inyectar' los parámetros de configuración directamente en el elemento del carrusel.
    swiperEl.initialize?.();                                    // Es una forma robusta de aplicar la configuración después de que el componente se haya montado.
  }, []);
  
  return (
    <div className='blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]'>
      <div className='w-full pb-5'>
        <h1 className='unbounded-font text-4xl font-semibold pb-5'>
          our Latest Blog Post
        </h1>

        <p className='text-[#193555] pb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Doloremque, voluptas, doloremque, quos, dolores, consequatur, ipsa, autem, voluptate, asperiores, fugiat, laborum, eaque.
        </p>
      </div>

      <div className="relative">

        {/* Flechas externas */}
        <button ref={prevRef} aria-label="Prev" className="blog-prev" />
        <button ref={nextRef} aria-label="Next" className="blog-next" />

        <swiper-container
          // Vinculamos la referencia al elemento para poder manipularlo desde el `useEffect`.
          ref={swiperElRef}
          class="blog-slider"
          init="false"
          slides-per-view="1"
          space-between="30"
          loop="true"
        >
          {blog.map((blog, i) => (
            <swiper-slide key={i} class="h-full">
              <div className="blog-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 relative h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    className="rounded-t-2xl w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badge (Category + Date) */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-[#193555] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {blog.category}
                    </span>

                    <span className="bg-white text-[#193555] text-xs font-medium px-3 py-1 rounded-full shadow">
                      {blog.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <h2 className="font-bold text-lg sm:text-xl lg:text-2xl group-hover:text-[#193555] transition-colors duration-300">
                    {blog.title}
                  </h2>
                  <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
                    {blog.desc}
                  </p>

                  {/* Button */}
                  <a
                    href="#"
                    className="mt-auto inline-block text-sm font-semibold text-[#193555] group-hover:underline tracking-wide"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  )
}

export default BlogComponent