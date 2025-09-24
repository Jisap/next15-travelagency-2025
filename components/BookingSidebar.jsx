"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faClose, faLocation, faLocationDot, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"
import toursData from "@/data/ToursData.json"
import { useEffect, useState } from "react"
// 1. Importa `register` para inicializar Swiper Elements
import { register } from "swiper/element/bundle";

const BookingSidebar = ({ tour }) => {
  const [showForm, setShowForm] = useState(false);

  // 2. Registra los Swiper elements cuando el componente se monte
  useEffect(() => {
    register();
  }, []);

  return (
    <>
      {/* 1. Se quita `h-fit` para que el contenedor pueda estirarse y ocupar toda la altura */}
      <div className="xl:w-[30%] lg:w-[40%] w-full sticky top-5 border-2 border-gray-100 rounded-md py-5 px-3 flex flex-col">
        <div className="flex-shrink-0"> {/* Este div no crecerá, manteniendo su tamaño */}
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
            className="btn text-white bg-[#193555] font-bold py-4 rounded-md cursor-pointer transition-colors duration-300 mt-5 w-full"
            onClick={() => setShowForm(true)}
          >
            <a href="#" className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
              Book Now
            </a>
          </button>
        </div>

        {/* 2. Se quita el `style` y se añade `min-h-0` para que flexbox funcione correctamente */}
        <div className="flex-grow flex flex-col mt-5 min-h-0">
          <h4 className="text-lg font-semibold pb-2 flex-shrink-0">
            Recommendation Tours:
          </h4>

          {/* 3. `flex-grow` hará que el carrusel ocupe todo el espacio vertical restante */}
          <swiper-container
            space-between="20"
            slides-per-view="1"
            pagination-clickable="false"
            navigation="false"
            class="travel-wrapper recommendation-slider flex-grow"
          >
            {toursData.map((tour) => (
              <swiper-slide key={tour.id} class="h-full">
                <Link href={`/ToursDetails/${tour.id}`}>
                  <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300 h-full">
                    <Image
                      src={tour.mainImage}
                      alt={tour.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-gradient-to-t from-black/70 to-transparent">
                      <div>
                        <h2 className="text-xl font-semibold unbounded-font pb-1">
                          {tour.title}
                        </h2>

                        <p className="text-[#ffffff91] text-xs flex items-center gap-1">
                          <FontAwesomeIcon icon={faLocationDot} />
                          {tour.location}
                        </p>
                      </div>

                      <h4 className="text-xl font-semibold unbounded-font text-right">
                        <span className="text-[#ffffff91] text-xs font-normal">
                          Start From
                        </span> {" "}
                        <br />
                        {tour.price}
                      </h4>
                    </div>
                  </div>
                </Link>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
            onClick={() => setShowForm(false)}
          ></div>

          <FontAwesomeIcon icon={faClose} onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-white cursor-pointer" />

          <div className="bg-white w-full max-w-[60vw] h-auto max-h-[90vh] overflow-y-auto z-10 relative rounded-2xl p-5 flex flex-col">
            <h2 className="text-center unbounded-font pt-5 text-2xl lg:text-4xl font-semibold">
              Booking Details
            </h2>

            <form method="post" className="p-5 lg:p-10">
              {/* Name Fields */}
              <div className="w-full gap-3 flex flex-col lg:flex-row">
                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-bold">First Name:</label>
                  <input type="text" placeholder="First Name" className="border-2 border-gray-100 outline-0 rounded-md p-2" required />
                </div>
                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-bold">Last Name:</label>
                  <input type="text" placeholder="Last Name" className="border-2 border-gray-100 outline-0 rounded-md p-2" required />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="w-full gap-3 flex flex-col lg:flex-row mt-4">
                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-bold">Email:</label>
                  <input type="email" placeholder="email@example.com" className="border-2 border-gray-100 outline-0 rounded-md p-2" required />
                </div>
                <div className="flex flex-col w-full">
                  <label className="pb-1 text-md font-bold">Phone:</label>
                  <input type="tel" placeholder="Phone Number" className="border-2 border-gray-100 outline-0 rounded-md p-2" required />
                </div>
              </div>

              {/* How many people */}
              <div className="w-full flex flex-col mt-4">
                <label className="pb-1 text-md font-bold">How many people are in your group?</label>
                <input type="number" placeholder="Number of people" min="1" className="border-2 border-gray-100 outline-0 rounded-md p-2" required />
              </div>

              {/* Best way to contact you */}
              <div className="w-full flex flex-col mt-4">
                <label className="pb-1 text-md font-bold">Best way to contact you?</label>
                <div className="pl-3">
                  <div className="flex flex-col gap-4 mt-2">
                    <label className="flex items-center gap-1">
                      <input type="radio" name="contact_method" value="phone" className="form-radio" /> Phone
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="contact_method" value="email" className="form-radio" /> Email
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="contact_method" value="either" className="form-radio" /> Either
                    </label>
                  </div>
                </div>
              </div>

              {/* Best time to contact you */}
              <div className="w-full flex flex-col mt-4">
                <label className="pb-1 text-md font-bold">Best time to contact you</label>
                <div className="pl-3">
                  <div className="flex flex-col gap-4 mt-2">
                    <label className="flex items-center gap-1">
                      <input type="radio" name="contact_time" value="morning" className="form-radio" /> Morning
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="contact_time" value="afternoon" /> Afternoon
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="contact_time" value="evening" className="form-radio" /> Evening
                    </label>
                  </div>
                </div>
              </div>

              {/* Textareas */}
              <div className="w-full flex flex-col mt-4">
                <label className="pb-1 text-md font-bold">Anything else we should know?</label>
                <textarea placeholder="Your message..." rows="3" className="border-2 border-gray-100 outline-0 rounded-md p-2"></textarea>
              </div>

              <div className="w-full flex flex-col mt-4">
                <label className="pb-1 text-md font-bold">How did you hear about us?</label>
                <textarea placeholder="How did you hear about us?" rows="3" className="border-2 border-gray-100 outline-0 rounded-md p-2"></textarea>
              </div>

              <button type="submit" className="btn text-white bg-[#193555] font-bold py-3 rounded-md cursor-pointer transition-colors duration-300 mt-5 w-full">
                <span className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
                  Submit Booking
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default BookingSidebar
