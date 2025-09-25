'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroComponent = () => {

  useGSAP(() => {
    // Animar desde un estado inicial (opacity 0, desplazado en Y) a su estado final
    gsap.from('.hero-content > *', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2, // Añade un pequeño retraso entre la animación de cada elemento
      delay: 0.5    // Un pequeño retardo inicial para que la animación no sea tan brusca al cargar
    });
  });

  return (
    <div className='hero min-h-screen flex justify-center items-center z-10'>
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