import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"

const AboutUs = () => {
  return (
    <div>
      <Hero title={"Learn More About Us | ZeeCare Medical Institute" }
      imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"}/>
    </div>
  )
}

export default AboutUs
