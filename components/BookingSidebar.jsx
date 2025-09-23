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
            navigation="true"
            class="travel-wrapper recommendation-slider flex-grow" 
          >
            {toursData.map((tour) => (
              <swiper-slide key={tour.id}>
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
    </>
  )
}

export default BookingSidebar