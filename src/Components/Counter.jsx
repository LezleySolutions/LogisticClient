import React from "react";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <>
      <section
        className="ftco-counter ftco-section img bg-light my-3 container rounded"
        id="section-counter"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="d-inline-block d-lg-flex ">
            <div className="col-md-6 col-lg-3 d-flex justify-content-around counter-wrap mt-lg-0 mt-5">
              <div className="block-18">
                <div className="text text-border d-flex align-items-center">
                <strong className="number">
                  <CountUp
                    start={0}
                    end={5}
                    duration={2.75}
                    style={{fontSize:"50px" , color:"#1089ff"}}
                  />
                </strong>
                  <span style={{fontSize:"25px" , color:"#1089ff" , marginLeft:'-13px'}}>+</span>
                  <span  style={{fontSize:"25px", color:"black" , fontWeight:"400" }}>
                    Year <br />
                    Experienced
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-around counter-wrap mt-lg-0 mt-5">
              <div className="block-18">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number">
                  <CountUp
                    start={0}
                    end={100}
                    duration={2.75}
                    style={{fontSize:"50px" , color:"#1089ff"}}
                  />
                  </strong>
                  <span style={{fontSize:"25px" , color:"#1089ff" , marginLeft:'-13px'}}>+</span>
                  <span style={{fontSize:"23px", color:"black" , fontWeight:"400" }}>
                    Total <br />
                    Trucks
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-around counter-wrap mt-lg-0 mt-5">
              <div className="block-18">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number">
                  <CountUp
                    start={0}
                    end={5000}
                    duration={2.75}
                    style={{fontSize:"50px" , color:"#1089ff"}}
                  />
                  </strong>
                  <span style={{fontSize:"25px" , color:"#1089ff" , marginLeft:'-13px'}}>+</span>
                  <span style={{fontSize:"23px", color:"black" , fontWeight:"400" }}>
                    Happy <br />
                    Customers
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-around counter-wrap mt-lg-0 mt-5 ">
              <div className="block-18">
                <div className="text d-flex align-items-center">
                  <strong className="number">
                  <CountUp
                    start={0}
                    end={24}
                    duration={2.75}
                    style={{fontSize:"50px" , color:"#1089ff"}}
                  />
                  </strong>
                  <span style={{fontSize:"50px" ,fontWeight:"300", color:"#1089ff" , marginLeft:'-13px'}}>/7</span>
                  <span style={{fontSize:"23px", color:"black" , fontWeight:"400" }}>
                    Customers <br />
                    Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
