import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../assets/navbar.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm fixed-top">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Bacus Logo"
            className="me-2"
            style={{ height: "45px" }}
          />
          
        </a>

        {/* TOGGLER (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div id="navbarNav" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item mx-3">
              <a className="nav-link fw-medium" href="#">Home</a>
            </li>

            <li className="nav-item mx-3">
              <a className="nav-link fw-medium" href="#about">About Us</a>
            </li>

            <li className="nav-item mx-3">
              <a className="nav-link fw-medium" href="#service">Service</a>
            </li>

            <li className="nav-item ms-3">
              <a className="btn contact-btn px-4 py-2" href="#contact">
                Contact Us
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
