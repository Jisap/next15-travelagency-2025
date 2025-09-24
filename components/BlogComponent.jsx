import { blogPage01, blogPage02, blogPage03 } from '@/assets'
import Image from 'next/image'
import React from 'react'

const blog = [
  { img: blogPage01, title: "Tropical Bliss: Rejuvenate in Asia", desc: "Discover tropical vibes and rejuvenating landscapes filled with adventure & culture.", date: "Feb 12, 2025", category: "Travel" },
  { img: blogPage02, title: "Asia's Thrilling Adventure", desc: "From mountains to beaches, experience Asia's diversity and thrilling escapes.", date: "Mar 05, 2025", category: "Adventure" },
  { img: blogPage03, title: "Unforgettable Experience", desc: "Make memories that last forever with breathtaking destinations around the globe.", date: "Apr 10, 2025", category: "Lifestyle" }
]

const BlogComponent = () => {
  return (
    <div className='blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]'>
      <div className='w-full pb-5'>
        <h1 className='unbounded-font text-4xl font-semibold pb-3'>
          our Latest Blog Post
        </h1>

        <p className='text-[#193555]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Doloremque, voluptas, doloremque, quos, dolores, consequatur, ipsa, autem, voluptate, asperiores, fugiat, laborum, eaque.
        </p>
      </div>

      <div className='blog-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {blog.map((blog, i) => (
          <div
            key={i}
            className="blog-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 relative"
          >
            <div className="relative overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                className="rounded-t-2xl w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Badge (Category + Date) */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[#193555] text-white text-xs font-medium px-3 py-1 rounded-full">
                  {blog.category}
                </span>

                <span className="bg-white text-[#193555] text-xs font-medium px-3 py-1 rounded-full shadow">
                  {blog.date}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-bold text-lg sm:text-xl lg:text-2xl group-hover:text-[#193555] transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
                {blog.desc}
              </p>

              {/* Button */}
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-[#193555] group-hover:underline tracking-wide"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogComponent