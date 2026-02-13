// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/HeroSection.jsx";
import About from "./components/About/About";
import PCISection from "./components/PCISection/PCISection";
import CompanySection from "./components/CompanySection/CompanySection";
import ServicesSection from "./components/ServicesSection/ServicesSection.jsx";
// import StepsSection from "./components/Steps/StepsSection";
import TestimonialSection from "./components/Testimonial/TestimonialSection";


import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {

  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <PCISection />
      <CompanySection />
      <ServicesSection />
      {/* <StepsSection /> */}
      <TestimonialSection />
      
      <Contact />
      <Footer />
      
      

    </>
  )
}

export default App;
