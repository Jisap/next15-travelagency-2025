
import ToursData from "@/data/ToursData.json"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"



const Tours = () => {

  const [selectedTour, setSelectedTour] = useState(null);  

  return (
    <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14">
      <div className="travel-content text-center">
        <h1 className="unbounded-font text-4xl font-semibold pb-3">
          Find Out The Best Travel Choice
        </h1>

        <p className="w-[60%] mx-auto text-[#193555]">
          The best places to travel to and from. We have curated the best places for you to travel to and from.
        </p>
      </div>

      <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ToursData.map((tour) => (
          <Link href={`/ToursDetails/${tour.id}`} key={tour.id}>
            <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
              <Image
                src={tour.mainImage}
                alt={tour.title}
                height={300}
                width={300}
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
                  <br/>
                  {tour.price}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tours