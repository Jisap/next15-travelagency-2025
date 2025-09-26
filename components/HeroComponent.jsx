'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Registramos el plugin ScrollTrigger para poder usarlo
gsap.registerPlugin(ScrollTrigger);

const HeroComponent = () => {
  // 2. Creamos una referencia para el contenedor principal del Hero
  const heroRef = useRef(null);

  useGSAP(() => {
    // 3. La animación ahora está vinculada al ScrollTrigger
    gsap.from('.hero-content > *', {
      // Configuración de ScrollTrigger
      scrollTrigger: {
        trigger: heroRef.current, // El elemento que dispara la animación
        start: 'top 80%',         // La animación empieza cuando el 80% superior del elemento es visible
        toggleActions: 'restart none restart reset' // Controla cómo se comporta la animación:
                                                 // onEnter: restart (reinicia la animación)
                                                 // onLeave: none (no hace nada)
                                                 // onEnterBack: restart (reinicia al volver desde arriba)
                                                 // onLeaveBack: reset (resetea la animación al salir por arriba)
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.6,
    });
  }, { scope: heroRef }); // 4. Usamos el ref como el "scope" para que GSAP busque los selectores dentro de este contenedor

  return (
    <div ref={heroRef} className='hero min-h-screen flex justify-center items-center z-10'>
      <div className='hero-content relative text-center'>
        <h1 className='xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white'>
          Find Your Best <br /> Travels Package
        </h1>

        <p className='pt-3 text-[#ffffffb3] md:pb-10 pb-5'>
          Palnning for a trip? We will organize your trip with the best places and within best budget!
        </p>

        <button className='btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 py-4 rounded-full cursor-pointer transition-colors duration-300'>
          <a href="#" className='unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider'>
            View All Tours
          </a>
        </button>
      </div>
    </div>
  )
}

export default HeroComponent