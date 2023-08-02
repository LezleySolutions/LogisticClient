import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="ftco-footer ftco-bg-dark">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-6 col-12">
              <div className="ftco-footer-widget mb-4">
                <div className="ftco-heading-2 mb-4" onClick={() => {}}>
                  <img src={"img/Logo.png"} style={{ width: "120px" }} />
                </div>
                <p>
                  Forget about everything that makes you feel uncomfortable in
                  truck Distapching and deeling with any annoying trucking
                  environment
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-2">
                  <li className="me-3">
                    <span className="icon-instagram"><FaGoogle size ={25} /></span>
                  </li>
                  <li className="me-3">
                    <span className="icon-facebook"><FaFacebook size ={25} /></span>
                  </li>
                  <li className="me-3">
                    <span className="icon-twitter"><FaTwitter size ={25} /></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-12"></div>

            <div className="col-md-4 col-lg-4 col-12">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon ">
                        {" "}
                        <IoLocation color="white" size={20} />
                      </span>
                      <span className="text">
                      1317 EDGEWATER DR #7476, ORLANDO, FLORIDA 32804
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon ">
                          <BsFillTelephoneFill color="white" size={20} />{" "}
                        </span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon ">
                          <IoMdMail color="white" size={20} />{" "}
                        </span>
                        <span className="text">info@dicefreight.org</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
