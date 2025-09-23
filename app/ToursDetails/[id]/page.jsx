import { faAngleRight, faClose, faLocation, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import toursData from "@/data/ToursData.json"
import { notFound } from "next/navigation"
import  BookingSidebar from "@/components/BookingSidebar"



const page = async({ params }) => {
  
  const { id } = await params;
  const tour = toursData.find((tour) => tour.id === id);
  if(!tour) return notFound();

  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal text-white text-center w-full unbounded-font">
          Wildness of Paris
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
              TourDetails
            </Link>
          </li>
        </ul>
      </div>

      <div className="tour-details-container w-full flex flex-col lg:flex-row justify-between lg:items-stretch px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] gap-5 relative">
        <div className="xl:w-[70%] lg:w-[60%] w-full relative">
          <div className="relative w-full h-[400px]">
            <Image 
              src={tour.mainImage}
              alt={tour.title}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="tour-details-content pt-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl sm:text-3xl font-[500] pb-1">
                  {tour.title}
                </h2>

                <span className="text-[#94a3b8] text-sm">
                  <FontAwesomeIcon icon={faLocation} />
                  {tour.location}
                </span>
              </div>

              <h4 className="text-xl font-semibold unbounded-font text-right">
                <span className="text-gray-500 text-sm font-normal">
                  Start From
                </span>
                <br />
                {tour.price}
              </h4>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold pb-3 pt-4"> 
              Tour Descriptions:
            </h4>

            <p className="text-[#94a3b8] text-sm pb-2">
              This is a wonderful trip to {tour.title}, located in {tour.location}.
              Enjoy the culture, food, and breathtaking sights. Price starts from {" "}
              {tour.price}.
            </p>   

            <p className="text-[#94a3b8] text-sm pb-2">
              The advantage of this trip is the best food and the best service. The staff is friendly and helpful.
            </p> 

            <h4 className="text-lg sm:text-xl font-semibold pb-4 pt-4">
              Leave A Comment:
            </h4>

            <form className="contact-form w-full flex flex-col gap-5">
              {/* Name and Email Row */}
              <div className="w-full flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col w-full lg:w-1/2">
                  <label className="pb-1 text-md font-[500]">Your Name:</label>
                  <input
                    type="text"
                    placeholder="Name: "
                    className="border-2 border-gray-100 outline-0 rounded-md p-2"
                    required
                  />
                </div>

                <div className="flex flex-col w-full lg:w-1/2">
                  <label className="pb-1 text-md font-[500]">Your Email:</label>
                  <input
                    type="email"
                    placeholder="example@email.com "
                    className="border-2 border-gray-100 outline-0 rounded-md p-2"
                    required
                  />
                </div>
              </div>

              {/* Comment Textarea */}
              <div className="flex flex-col w-full">
                <label className="pb-1 text-md font-[500]">Your Comment:</label>
                <textarea
                  placeholder="Message: "
                  className="border-2 border-gray-100 outline-0 rounded-md p-2 h-28"
                  required
                />
              </div>

              <button type="submit" className="btn text-white bg-[#193555] font-bold w-full py-3 rounded-md cursor-pointer transition-colors duration-300">
                <span className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>

        <BookingSidebar tour={tour} />
      </div>
    </>
  )
}

export default page