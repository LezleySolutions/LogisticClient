import React, { useState } from "react";
import "../Assets/Style.css";
import "./Assets/Header.css";
import { useNavigate } from "react-router-dom";

const NavDash = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand navbar-primary bg-white topbar mb-4 shadow d-flex justify-content-between">
        <div className="ms-5 mt-2 d-flex">
          <div className="navbar-brand">
            <img src={"img/Logo.png"} style={{ width: "80px" }} />
          </div>
          <h5 className="font-weight-bold text-primary mt-2">
            Welcome to Dice Logistic Dashboard
          </h5>
        </div>
        <ul className="navbar-nav me-5">
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item me-5">
            <div className="nav-link">
              <span className="mr-2 d-none d-lg-inline text-dark small me-2">
                Tajamal Malik
              </span>
              <img
                className="img-profile rounded-circle"
                src="img/person_1.jpg"
              />
            </div>
          </li>
        </ul>
        <div
          className="nav-item ml-auto position-absolute border p-2 rounded-2"
          style={{
            right: "15px",
            backgroundColor: "#ECECEC",
            cursor: "pointer",
          }}
          onClick={() => {
            localStorage.clear();
            navigate("/admin");
          }}
        >
          Logout
        </div>
      </nav>
    </>
  );
};

export default NavDash;
