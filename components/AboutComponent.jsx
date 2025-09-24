import React from "react";
import Image from "next/image";
import { about01, about02, about03, author01, author02, author03, author04 } from "@/public/Images";

const AboutComponent = () => {
  return (
    <div className="about-section py-16 lg:py-24 px-[5%] lg:px-[12%] flex flex-col gap-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-snug mb-5 text-gray-900 unbounded-font">
            Begin Your New Life Experience <br /> with Exploring New Destination
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            We believe that traveling is more than just visiting a new place; 
            it's about creating unforgettable memories and discovering new perspectives. 
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            From breathtaking natural wonders to vibrant cultural hubs, 
            our team of experts handles every detail to ensure a seamless and enriching experience. 
          </p>
        </div>

        <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          <Image
            src={about01} 
            alt="About01"
            className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          <Image
            src={about02}
            alt="About02"
            className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="lg:w-1/2 w-full bg-gradient-to-r from-[#1a1a1a] to-[#111] text-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center gap-6 mb-6">
            <div className="flex -space-x-3">
              <Image src={author01} alt="Author1" className="w-12 h-12 rounded-full border-2 border-white" />
              <Image src={author02} alt="Author2" className="w-12 h-12 rounded-full border-2 border-white" />
              <Image src={author03} alt="Author3" className="w-12 h-12 rounded-full border-2 border-white" />
              <Image src={author04} alt="Author4" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <h2 className="text-3xl font-bold">1234 +</h2>
          </div>

          <h1 className="text-xl sm:text-2xl font-semibold mb-3">
            Customers Love The Tour Experience
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo ipsum
            sapiente temporibus sint! Laborum sit veniam voluptatem repellat nostrum?
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 w-full bg-gradient-to-r from-[#193555] to-[#0f1c2e] text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-xl sm:text-2xl font-semibold mb-3">Join Our Asian Travel Trip</h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo ipsum
            sapiente temporibus sint! Laborum sit veniam voluptatem repellat nostrum?
          </p>
        </div>

        <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          <Image
            src={about03}
            alt="About03"
            className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutComponent