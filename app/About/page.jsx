"use client"

import AboutComponent from "@/components/AboutComponent"
import Counter from "@/components/Counter"
import ExperienceComponent from "@/components/ExperienceComponent"
import TourCompany from "@/components/TourCompany"
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

      {/* About Component */}
      <AboutComponent />

      {/* Tour Company */}
      <TourCompany />

      {/* Experience Component */}
      <ExperienceComponent />

      {/* banner */}
      <div className="banner mx-0 w-[100%] lg:mx-auto lg:w-[80%] mb-12">
        <FontAwesomeIcon icon={faPlay} className="play-btn" />
      </div>    
    </>
  )
}

export default page