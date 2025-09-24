"use client"

import AboutComponent from "@/components/AboutComponent"
import BlogComponent from "@/components/BlogComponent"
import HeroComponent from "@/components/HeroComponent"
import TestimonialsComponent from "@/components/TestimonialsComponent"
import ToursComponent from "@/components/ToursComponent"

const Index = () => {
  return (
    <>
      <HeroComponent />
      <ToursComponent />
      <AboutComponent />
      <TestimonialsComponent />
      <BlogComponent />
    </>
  )
}

export default Index