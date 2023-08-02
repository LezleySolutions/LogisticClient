import React from 'react'
import Navbar from '../Components/Nabar'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id="map-container-section" className="container" style={{ width:"100%" , margin:"20px auto"}}>
          <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?q=Seattle&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            className="w-100"
            style={{height:"400px" ,  borderRadius:"8px"}}
          />
        </div>
         <Footer />
    </>
  )
}

export default ContactUs
