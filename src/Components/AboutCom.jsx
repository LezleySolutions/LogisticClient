import React from "react";
import "../Assets/Style.css";
import { IoDiamondSharp } from "react-icons/io5";

const AboutCom = () => {
  return (
    <>
      <section className="ftco-section ftco-about mb-5">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="col-md-6 d-flex justify-content-center align-items-center"
              //   style= {{backgroundImage: "url(img/aboutus.jpg)"}}
            >
              {" "}
              <img
                src={"img/aboutus.jpg"}
                alt="about"
                style={{ width: "100%", height: "110%" }}
              />{" "}
            </div>
            <div className="col-md-6 wrap-about">
              <div className="heading-section heading-section-white pl-md-5">
                <span className="subheading fs-3 text-center">About us</span>
                <h2 className="mb-4"></h2>
                <div>
                  <div className="d-flex mb-4 me-5 mt-5 pt-3">
                    <img
                      style={{ width: "60px", height: "60px" , marginRight:"30px" , marginTop:"15px" }}
                      src="https://img.icons8.com/ios/100/FFFFFF/broker.png"
                      alt="broker"
                    />
                    {/* <img style={{width:"70px"}} src={"img/building.png"} alt="icons" /> */}
                    <h4 className="text-white fw-bold text-white">
                      Experienced Brokers <br />{" "}
                      <span style={{fontSize:"15px" , fontWeight:"400" , color:"white"}}>
                        Our team consists of experienced brokers with a deep
                        understanding of the trucking industry.
                      </span>
                    </h4>
                  </div>
                  <div className="d-flex mb-4 me-5">
                    <img
                      style={{ width: "60px", height: "60px" , marginRight:"30px" , marginTop:"15px"}}
                      src="https://img.icons8.com/ios/100/FFFFFF/service--v1.png"
                      alt="service--v1"
                    />
                    {/* <img style={{width:"70px"}} src={"img/store.png"} alt="icons" /> */}
                    <h4 className="fw-bold text-white">
                      Reliable Service <br />{" "}
                      <span style={{fontSize:"15px" , fontWeight:"400" , color:"white"}}>
                        we work tirelessly to ensure that their freight is
                        delivered on time and in good condition.
                      </span>
                    </h4>
                  </div>
                  <div className="d-flex mb-4 me-5">
                    <img
                      style={{ width: "60px", height: "60px", marginRight:"30px" , marginTop:"15px" }}
                      src="https://img.icons8.com/ios/100/FFFFFF/customer-support--v1.png"
                      alt="customer-support--v1"
                    />
                    <h4 className="fw-bold text-white">
                      Customer Satisfaction <br />{" "}
                      <span style={{fontSize:"15px" , fontWeight:"400" , color:"white"}}>
                        Our ultimate goal is toensure customer satisfaction.
                        Our commitment to excellence has earned us a reputation
                        as a trusted partner in the trucking industry.
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCom;
