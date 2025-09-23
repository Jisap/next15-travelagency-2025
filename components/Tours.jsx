
import ToursData from "@/data/ToursData.json"
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
          <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
            <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
              <Image
                src={tour.Images}
                alt={tour.title}
                height={300}
                width={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
         

              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tours