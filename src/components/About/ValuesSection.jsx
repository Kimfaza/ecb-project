import React, { useState, useEffect, useRef } from "react";
import "./ValuesSection.css";
import { FaBullseye, FaThumbsUp, FaGem, FaHandshake, FaStar } from "react-icons/fa";
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
    {
      icon: <FaGem size={70} />,
      title: "Conducting worthwhile work",
      active: true,
    },
    {
      icon: <FaHandshake size={70} />,
      title: "Being easy to work with",
      active: true,
    },
    {
      icon: <FaStar size={70} />,
      title: "Quality",
      active: true,
    },
  ];

  const total = values.length;
  const visibleItems = 4; 

  // clone depan & belakang
  const extended = [
    ...values.slice(-visibleItems),
    ...values,
    ...values.slice(0, visibleItems),
  ];

  const [current, setCurrent] = useState(visibleItems);
  const trackRef = useRef();

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // HANDLE INFINITE RESET
  useEffect(() => {
    if (current === total + visibleItems) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setCurrent(visibleItems);
      }, 500);
    }

    if (current === 0) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setCurrent(total);
      }, 500);
    }
  }, [current, total, visibleItems]);

const nextSlide = () => {
  setCurrent((prev) =>
    prev >= total - visibleItems ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrent((prev) =>
    prev === 0 ? total - visibleItems : prev - 1
  );
};

  return (
    <section id="values" className="values-section py-5 text-center">
      <div className="container">
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
        <div className="slider-container mt-5">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${current * (100 / visibleItems)}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {extended.map((value, index) => (
              <div className="slide" style={{ flex: `0 0 ${100 / visibleItems}%` }} key={index}>
                <div className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h5 className="mt-3">{value.title}</h5>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="values-nav mt-4">
          <button className="nav-btn" onClick={prevSlide}>←</button>

          <div className="dots d-flex gap-2">
            {values.map((_, index) => (
              <span
                key={index}
                className={`dot ${current === index ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>

          <button className="nav-btn" onClick={nextSlide}>→</button>
        </div>

      </div>
    </section>
  );
}

export default ValuesSection;
