import React from "react";
import "./CompanySection.css";

// Import logo partner
import partner1 from "../../assets/partner-1.png";
import partner2 from "../../assets/partner-2.png";
import partner3 from "../../assets/partner-3.png";
import partner4 from "../../assets/partner-4.png";
import partner5 from "../../assets/partner-5.png";

function CompanySection() {
  const logos = [partner1, partner2, partner3, partner4, partner5];

  return (
    <section className="company-section py-5 text-center">
      <div className="container">
        <h3 className="fw-bold">The Company We Keep</h3>

        <p className="company-text mt-3">
          Our team is active in a large number of telemarketing, call center and professional trade organizations, including PACE, AA-ISP, and ASAE. 
          We are also affiliate members of the Energy Marketing and Customer Service (EMACS) group.
        </p>

        {/* SLIDER */}
        <div className="logo-slider mt-5">
          <div className="logo-track">
            {/* Duplicate logos biar infinite smooth */}
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo} alt={`partner-${index}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CompanySection;
