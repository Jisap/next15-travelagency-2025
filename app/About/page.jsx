"use client"

import AboutComponent from "@/components/AboutComponent"
import Counter from "@/components/Counter"
import { about01, about02, about03, adventure01, author01, author02, author03, author04, tourCompany01, tourCompany02 } from "@/public/Images"
import { faAngleDown, faAngleRight, faAngleUp, faDoorClosed, faMoneyBillWave, faPlay, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const page = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "1. What to prepare to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "2. What document you need before go to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "3. How to scheduling Asia trip itinerary", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "4. 8 website must read before your trip", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "5. This is the Best budget you need to prepare", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
    { question: "6. This site give you the information about travel to Asia", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
  ]

  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal text-white text-center w-full unbounded-font z-22">
          About Us
        </h2>

        <ul className="text-white z-10 flex items-center gap-8 section-list">
          <li className="text-sm relative">
            <Link href="#">
              Home
            </Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
            <Link href="#">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* About Page */}
      <AboutComponent />

      {/* Tour Company */}
      <div className="tour-company px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="tour-content max-w-3xl text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-snug">
            We are The Most Popukar Travel & Tour Company
          </h1>
          <p className="text-[#6b6b6b] text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ipsa sit
            commodi tempore veritatis itaque architecto.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-4">
              <i className="ri-map-2-line text-2xl"></i>
            </div>
            <h2 className="font-bold text-2xl">
              <Counter to={928} />+
            </h2>
            <span className="text-[#6b6b6b]">Travel Destinations</span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white mb-4">
              <i className="ri-group-line text-2xl"></i>
            </div>
            <h2 className="font-bold text-2xl">
              <Counter to={1020} />+
            </h2>
            <span className="text-[#6b6b6b]">Tour Partners</span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
              <i className="ri-hotel-line text-2xl"></i>
            </div>
            <h2 className="font-bold text-2xl">
              <Counter to={540} />+
            </h2>
            <span className="text-[#6b6b6b]">Hotels & Accommodations</span>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          <div className="w-full lg:w-2/3">
            <Image
              src={tourCompany01}
              alt="TourCompany01"
              className="rounded-2xl"
            />
          </div>

          <div className="w-full lg:w-1/3">
            <Image 
              src={tourCompany02}
              alt="TourCompany02"
              className="rounded-2xl h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page