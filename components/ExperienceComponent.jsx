"use client"
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

const faqData = [
  { question: "1. What to prepare to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
  { question: "2. What document you need before go to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
  { question: "3. How to scheduling Asia trip itinerary", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
  { question: "4. 8 website must read before your trip", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
  { question: "5. This is the Best budget you need to prepare", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
  { question: "6. This site give you the information about travel to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
]

// 1. Se crea un componente `FaqItem` para encapsular la lógica de cada elemento del acordeón.
const FaqItem = ({ faq, isOpen, toggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // 2. El hook `useEffect` ahora se ejecuta dentro de su propio componente,
  //    lo que es correcto según las reglas de los hooks.
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className='border-b border-gray-700'>
      <button onClick={toggle} className='w-full cursor-pointer text-left flex justify-between items-center py-4 font-semibold text-white'>
        <span>{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='ml-2' />
      </button>
      <div style={{ maxHeight: `${height}px` }} className='transition-all duration-500 ease-in-out overflow-hidden'>
        <div ref={contentRef}>
          <p className='text-gray-400 px-2 pb-4'>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceComponent = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]'> 
      <div className='experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 items-start w-full'>
        <h2 className='xl:w-[50%] w-full text-white text-2xl md:text-5xl leading-tight unbounded-font'>
          Enjoy Our best Quality Tour & Experience
        </h2>

        <div className='xl:w-[40%] w-full'>
          <p className='text-[#ffffff91] pt-2 pb-5 text-sm'>
            Our curated travel experiences are designed to inspire and delight. But don't just take our word for it see what our happy travelers have to say
          </p>
          
          <div className="flex justify-end">
            <button className="bg-white text-[#193555] hover:bg-[#193555] hover:text-white px-6 py-3 rounded-full text-sm font-semibold uppercase transition duration-300 shadow-md hover:shadow-lg">
              <a href="#" className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 mt-10 mx-auto w-[100%] lg:mx-auto lg:w-[80%]'>
        {faqData.map((faq, index) => {
          // 3. Se renderiza el nuevo componente `FaqItem` en el bucle,
          //    pasándole las props necesarias.
          return (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ExperienceComponent