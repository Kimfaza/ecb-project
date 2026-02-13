import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer-section text-white py-5">
      <div className="container">

        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-6 mb-4">

            <div className="mb-4">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "60px" }}
              />
            </div>

            <hr className="footer-divider" />

            <p className="footer-text mt-4">
              These Terms will be applied fully and affect to your use of this Website.
              By using this Website, you agreed to accept all terms and conditions written
              in here. You must not use this Website if you disagree with any of these
              Website Standard Terms and Conditions.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="row">

              <div className="col-6">
                <ul className="footer-links">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Service</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div className="col-6">
                <ul className="footer-links">
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
