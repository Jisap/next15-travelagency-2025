"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faClose, faLocation, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"
import toursData from "@/data/ToursData.json"
import { notFound } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react"



const BookingSidebar = ({ tour }) => {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="xl:w-[30%] lg:w-[40%] w-full h-full sticky top-0 right-0 border-2 border-gray-100 rounded-md py-5 px-3">
        <h4 className="text-lg font-semibold pb-1">
          Date :
        </h4>

        <form method="post">
          <div className="flex items-center gap-3 mt-5">
            <label className="text-md font-[500]">Adult: </label>
            <div className="relative flex-grow">
              <FontAwesomeIcon icon={faUser} className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 pointer-events-none" />
              <input type="number" placeholder="5" className="w-full rounded-md border-2 border-gray-100 py-2 pl-9 pr-3" />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <label className="text-md font-[500]">Child: </label>
            <div className="relative flex-grow">
              <FontAwesomeIcon icon={faUsers} className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 pointer-events-none" />
              <input type="number" placeholder="2" className="w-full rounded-md border-2 border-gray-100 py-2 pl-9 pr-3" />
            </div>
          </div>
        </form>

        <button 
          type="button" 
          className="btn text-white bg-[#193555] font-bold py-4 rounded-md cursor-pointer transition-colors duration-300 mt-5"
          onClick={() => setShowForm(true)} 
        >
          <a href="#" className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
            Book Now
          </a>
        </button>
      </div>
    </>
  )
}

export default BookingSidebar