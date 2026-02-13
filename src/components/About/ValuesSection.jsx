import React from "react";
import "./ValuesSection.css";
import { FaBullseye, FaThumbsUp } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdOutlinePriorityHigh } from "react-icons/md";

function ValuesSection() {
  const values = [
    {
      icon: <MdOutlinePriorityHigh size={70} />,
      title: "Urgency",
      active: false,
    },
    {
      icon: <GiGearHammer size={70} />,
      title: "Service",
      active: true,
    },
    {
      icon: <FaBullseye size={70} />,
      title: "Achieving Goals",
      active: false,
    },
    {
      icon: <FaThumbsUp size={70} />,
      title: "Being Positive",
      active: true,
    },
  ];


  return (
    <section className="values-section py-5">
      <div className="container text-center">
        <p className="fw-bold">WHAT WE ACHIEVE</p>

        <h2 className="values-title">
          Our <span>Values</span>
        </h2>

        <p className="values-description fw-semibold">
          Eight Bacus Call Centers LLC serves an array of verticals and offers solutions that apply to each customer, market and industry. 
          We are known for being a world class telesales organization and for providing exceptional results through our expertise in the industry. 
          Eight Bacus Call Centers LLC is solution focused. Our goal is to provide an excellent customer experience for each one of our clients and customers. We make it easy to do business with us.
        </p>

        {/* CAROUSEL */}
        <div className="row mt-5">
          {values.map((value, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="value-card p-4 animate">
                <div
                  className={`value-icon ${
                    value.active ? "active-icon" : ""
                  }`}
                >
                  {value.icon}
                </div>
                <h5>{value.title}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="values-nav mt-4">
          <button className="nav-btn">←</button>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="nav-btn">→</button>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
