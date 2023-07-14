import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Feedback = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Clients</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <OwlCarousel className="owl-carousel" {...options}>
                  <div className="item mx-3 rounded-5">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{ backgroundImage: "url(img/person_1.jpg)" }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          They have the knowledge to choose the best loads for
                          my drivers. I've worked with many truck dispatch
                          service companies before, but Dice Logistic stands out
                          because they genuinely care about my company. They
                          have reduced my stress and headaches significantly
                        </p>
                        <p className="name">Roger Scott</p>
                        <span className="position">Los Angeles, CA</span>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3 rounded-5">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{ backgroundImage: "url(img/person_2.jpg)" }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Their involvement has significantly alleviated stress
                          and challenges for me. My drivers express satisfaction
                          with their services, as they consistently secure
                          outstanding rates and desirable lanes. I regret not
                          having discovered them earlier.
                        </p>
                        <p className="name">Jonh Maqueda</p>
                        <span className="position">San Francisco , US</span>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3 rounded-5">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{ backgroundImage: "url(img/person_3.jpg)" }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Dice Logistic has played a vital role in the success
                          of my trucking business. Their exceptional truck
                          dispatch service has greatly contributed to the smooth
                          operation of my business. I wholeheartedly recommend
                          their services to anyone seeking to outsource their
                          dispatching needs.
                        </p>
                        <p className="name">Casey Rowan</p>
                        <span className="position">Phoenix , US</span>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3 rounded-5">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{ backgroundImage: "url(img/person_4.jpg)" }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          I can confidently say that Dice Logistic
                          consistently provides the finest dispatching service.
                          I can always count on having loads lined up
                          immediately after completing my morning deliveries.
                          Without their assistance, I would still be
                          overwhelmed, trying to secure my own loads. I highly
                          recommend their services!
                        </p>
                        <p className="name">Justice Robin</p>
                        <span className="position">Las Vegas , US</span>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3 rounded-5">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{ backgroundImage: "url(img/person_5.png)" }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          The team at Dice Logistic does an exceptional job
                          handling the dispatching for my fleet of three trucks.
                          Both my drivers and I are highly satisfied with their
                          services. Since partnering with them, my profit
                          margins have seen a noticeable improvement.
                        </p>
                        <p className="name">Parker Murphy</p>
                        <span className="position">Oklahoma City , US</span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
