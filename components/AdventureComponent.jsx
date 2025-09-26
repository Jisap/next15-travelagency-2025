

function AdventureComponent() {
  return (
    <div className="adventure flex flex-col-reverse lg:flex-row items-center gap-12 px-[2%] sm:px-[8%] lg:px-[12%] py-[60px] lg:py-[100px]">
      {/* Image Section */}
      <div className="w-full lg:w-[50%] relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={adventure01}
          alt="Adventure"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[50%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
          Experience The <span className="text-[#193555]">New Adventure</span>
        </h1>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          We try to make your travel experience as comfortable as possible. We
          offer a wide range of accommodations, from budget-friendly to luxurious
          options, to suit every traveler's needs.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-white bg-[#193555] p-3 rounded-full text-lg"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">Safe Traveling</h3>
              <p className="text-gray-600 text-sm">
                Your safety is our priority, ensuring worry-free journeys.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-white bg-[#193555] p-3 rounded-full text-lg"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">Affordable Price</h3>
              <p className="text-gray-600 text-sm">
                Best packages at affordable rates for every traveler.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition sm:col-span-2">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-white bg-[#193555] p-3 rounded-full text-lg"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">Comfort Accommodation</h3>
              <p className="text-gray-600 text-sm">
                Enjoy premium stays with comfort and luxury included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdventureComponent