import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Nabar'
import AboutCom from '../Components/AboutCom'
import Services from '../Components/Services'
import TruckCarsole from '../Components/TruckCarsole'
import Counter from '../Components/Counter'
import Footer from '../Components/Footer'
import Feedback from '../Components/Feedback'

const Home = () => {
  return (
    <>
    <Navbar />
     <HeroSection />
     <AboutCom />
     <Services />
     <TruckCarsole />
     <Counter />
     <Feedback />
     <Footer />
    </>
  )
}

export default Home
