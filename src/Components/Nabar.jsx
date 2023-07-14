import React from "react";
import "../Assets/Style.css";
import $ from "jquery";
import { Nav, Navbar } from "react-bootstrap";
import {  Link } from "react-router-dom";

const Nabar = () => {
  const prams = window.location.pathname;

  $(window).scroll(function () {
    var $w = $(this),
      st = $w.scrollTop(),
      navbar = $(".ftco_navbar"),
      sd = $(".js-scroll-wrap");

    if (st > 150) {
      if (!navbar.hasClass("scrolled")) {
        navbar.addClass("scrolled");
      }
    }
    if (st < 150) {
      if (navbar.hasClass("scrolled")) {
        navbar.removeClass("scrolled sleep");
      }
    }
    if (st > 350) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }

      if (sd.length > 0) {
        sd.addClass("sleep");
      }
    }
    if (st < 350) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
      if (sd.length > 0) {
        sd.removeClass("sleep");
      }
    }
  });
  return (
    <>
       <Navbar
          collapseOnSelect
          expand="lg"
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
        >
        <div className="container">
          <Navbar.Brand className="navbar-brand" as={Link} to="/">
            <img src={"img/Logo.png"} style={{width:"100px"}} />
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <Navbar.Collapse className="collapse navbar-collapse" id="ftco-nav">
            <div className="navbar-nav ml-auto">
                <Nav.Link
                className="nav-item nav-link"
                as={Link}
                eventKey={1}
                to="/"
                style={{
                  color:prams== "/"?"#01d28e":"white",
              borderBottom:
                prams == "/" ? "1px solid #01d28e" : "none",
            }}
                >
                  Home
                </Nav.Link>
              <Nav.Link
               as={Link}
                eventKey={2}
                to="/about"
               className="nav-item"
               style={{
                  color:prams== "/about"?"#01d28e":"white",
              borderBottom:
                prams == "/about" ? "1px solid #01d28e" : "none",
            }}>
                  About
              </Nav.Link>
              <Nav.Link
              as={Link}
                eventKey={3}
                to="/services"
               className="nav-item"
               style={{
                  color:prams== "/services"?"#01d28e":"white",
              borderBottom:
                prams == "/services" ? "1px solid #01d28e" : "none",
            }}>
                  Services
              </Nav.Link>
              {/* <Nav.Link
              as={Link}
                eventKey={4}
                to="/"
               className="nav-item"
               style={{
                  color:prams== "/blog"?"#01d28e":"white",
              borderBottom:
                prams == "/blog" ? "1px solid #01d28e" : "none",
            }}>
                  Blog
              </Nav.Link> */}
              <Nav.Link
              as={Link}
                eventKey={5}
                to="/contact"
               className="nav-item"
               style={{
                  color:prams== "/contact"?"#01d28e":"white",
              borderBottom:
                prams == "/contact" ? "1px solid #01d28e" : "none",
            }}>
                  Contact
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </div>
        </Navbar>
    </>
  );
};

export default Nabar;
