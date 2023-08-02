import React, { useState } from "react";
import "../Assets/Style.css";
import { MotionAnimate } from "react-motion-animate";
import { BsFillPlayFill, BsTruckFlatbed } from "react-icons/bs";
import { FaRoute, FaHandshake } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios'

const HeroSection = () => {
  const prams = window.location.pathname;
  const [Mail, setMail] = useState('')
  const [Name, setName] = useState('')
  const [Message, setMessage] = useState('')
  const [Number, setNumber] = useState('')
  const [error, setError] = useState('')
  const Submit = () => {
    if (!Number.trim()) {
      setError("Num");
    } else {
      const data = {
        from: Name,
        email: Mail,
        number: Number,
        message: Message
      }
      const config = {
        method: "POST",
        url: "https://api.dicelogistic.tech/con/contacting",
        data: data,
        headers: {
          'Content-Type': 'application/json'
        },
      }
      axios(config)
        .then((response) => {
          console.log(response, "res")
          alert("Thank you for getting in touch, we will get back to you as soon as possible")
          setMail('')
          setMessage('')
          setName('')
          setNumber('')
        })
        .catch((err) => {
          console.log(err, "i am error")
        })
    }
  }
  return (
    <>
      <div
        className="hero-wrap ftco-degree-bg"
        style={{ backgroundImage: prams == "/" ?
         "url('img/truck.jpg')"
          : prams == "/about" ? 
          "url('img/aboutTrucks.jpg')" :
          prams == "/services" ?
           "url('img/ServicesBg.jpg')" :
           "url('img/ContactUs.jpg')" }}
      >
        <div className="overlay"></div>
        <MotionAnimate animation="fadeInUp" reset={true}>
          <div className="container">
            <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
              <div className="col-lg-8">
                {prams == "/" ?
                  <div className="text w-100 text-center mb-md-5 pb-md-5">
                    <h1 className="mb-4">
                      We Provide One Stop Logistic & Freight Services.
                    </h1>
                    <p style={{ fontSize: "18px" }}>
                      Ready to join Dice Freight family? Submit your application.
                    </p>
                    <div className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <BsFillPlayFill color="white" size={26} />
                      </div>
                      <div className="heading-title ml-5">
                        <span>Register Your Self Now</span>
                      </div>
                    </div>
                  </div>
                  : prams == "/about" ? <div className="text w-100 text-center mb-md-5 pb-md-5">
                    <h1 className="mb-4">
                      About Us
                    </h1>
                    <p style={{ fontSize: "18px", lineHeight: "29px", }}>
                      Dice Freight offers comprehensive dispatching and load management services designed
                      to make your life easier while you’re on the road. <br />
                      It offers exceptional support, which can help you build quality relationships
                      with clients and set the stage for ongoing growth.
                      <br />
                      Dice Freight provides services for owner-operators, large fleets and any size business in between.
                    </p>
                  </div>
                    :prams == "/services" ? <div className="text w-100 text-center mb-md-5 pb-md-5">
                      <h1 className="mb-4">
                        Services
                      </h1>
                      <p style={{ fontSize: "18px", lineHeight: "29px", }}>
                        Help you with Rate Negotiations, Truck Dispatching, Customer Service, and more.
                        <br />
                        Dice Freight provides services for owner-operators, large fleets and any size business in between.
                      </p>
                    </div> : <div className="text w-100 text-center mb-md-5 pb-md-5">
                      <h1 className="mb-4">
                        Contact Us
                      </h1>
                      <p style={{ fontSize: "25px", lineHeight: "29px", }}>
                      If you require any further information, please feel free to contact us.
                          <br /> <br />
                          We’ll be pleased to answer any further queries you might have.
                      </p>
                    </div>
                }
              </div>
            </div>
          </div>
        </MotionAnimate>
      </div>
      {/* Form Start */}
      {prams == "/" || prams == "/contact"  ?
        <MotionAnimate animation="fadeInUp" reset={true}>
          <section className="ftco-section ftco-no-pt bg-light">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-md-12	featured-top">
                  <div className="row no-gutters">
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="request-form bg-primary" >
                        <h2 className="text-light text-center">
                          TRUCK DRIVERS - APPLY NOW
                        </h2>
                        <p
                          className="text-light text-center"
                          style={{ fontSize: "12px" }}
                        >
                          We will get back to you within 24 hours.
                        </p>
                        <div className="form-group">
                          <label className="label">Full Name</label>
                          <input
                            name="fname"
                            id="fname"
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            onChange={(e) => setName(e.target.value)}
                            value={Name}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="label">Email</label>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => setMail(e.target.value)}
                            value={Mail}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="label">Phone </label>
                          <PhoneInput
                            name="Phone"
                            specialLabel={""}
                            country={"us"}
                            inputClass={"form-control"}
                            placeholder="201-555-0123"
                            value="phone"
                            required
                            onChange={(value, data) => setNumber(value)}
                            style={{
                              border: Number.length > 0
                                ? "1px solid rgba(255, 255, 255, 0.1)"
                                : error == "Num"
                                  ? "1px soild red"
                                  : "1px solid rgba(255, 255, 255, 0.1)"
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label className="label">Message</label>
                          <textarea
                            name="message"
                            id="textarea"
                            type="text"
                            className="form-control"
                            rows={3}
                            placeholder="Message"
                            minLength={10}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            value={Message}

                          />
                        </div>
                        <div className="form-group">
                          <button className="btn btn-secondary py-3 px-4" onClick={Submit}>
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <div className="services-wrap rounded-right w-100">
                        <h3 className="heading-section mb-4 text-center">
                          Better Way to Rent Your Perfect Cars
                        </h3>
                        <div className="row d-flex mb-4">
                          <div className="col-md-4 d-flex align-self-stretch ">
                            <div className="services w-100 text-center">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <FaRoute size={30} color="#1089ff" />
                              </div>
                              <div className="text w-100">
                                <h3 className="heading mb-2">
                                  Choose Your Pickup Location
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 d-flex align-self-stretch ">
                            <div className="services w-100 text-center">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <FaHandshake size={30} color="#1089ff" />
                              </div>
                              <div className="text w-100">
                                <h3 className="heading mb-2">
                                  Select the Best Deal
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 d-flex align-self-stretch ">
                            <div className="services w-100 text-center">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <BsTruckFlatbed size={30} color="#1089ff" />
                              </div>
                              <div className="text w-100">
                                <h3 className="heading mb-2">
                                  Reserve Your Freight
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button className="btn btn-primary py-3 px-4">
                            REGISTER YOUR SELF NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </MotionAnimate>
        : null
      }
    </>
  );
};

export default HeroSection;
