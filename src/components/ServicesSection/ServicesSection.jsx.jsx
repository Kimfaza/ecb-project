import React, { useState, useEffect } from "react";
import "./ServicesSection.css";
import { FaUserTie, FaBriefcase, FaUsers } from "react-icons/fa";

function ServicesSection() {
  const services = [
    {
      icon: <FaUserTie size={40} />,
      title: "Telemarketing Services",
      text: "With Telemarketing as a core competency, we understand how to successfully outsource part of your business.",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "B2B Outbound Marketing",
      text: "Looking for B2B outbound marketing solutions? We are your premier choice.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "B2C Outbound Marketing",
      text: "Using outbound marketing to increase sales with the help of outside expertise.",
    },

    {
      icon: <FaUserTie size={40} />,
      title: "Telemarketing Services",
      text: "With Telemarketing as a core competency, we understand how to successfully outsource part of your business.",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "B2B Outbound Marketing",
      text: "Looking for B2B outbound marketing solutions? We are your premier choice.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "B2C Outbound Marketing",
      text: "Using outbound marketing to increase sales with the help of outside expertise.",
    },

    {
      icon: <FaUsers size={40} />,
      title: "B2C Outbound Marketing",
      text: "Using outbound marketing to increase sales with the help of outside expertise.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "B2C Outbound Marketing",
      text: "Using outbound marketing to increase sales with the help of outside expertise.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "B2C Outbound Marketing",
      text: "Using outbound marketing to increase sales with the help of outside expertise.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "B2C Outbound Marketing",
      text: "Using outbound marketing to increase sales with the help of outside expertise.",
    },

  ];

  const [visibleItems, setVisibleItems] = useState(3);
  const total = services.length;
  const [current, setCurrent] = useState(0);

// RESPONSIVE BREAKPOINT
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setVisibleItems(1); // HP
    } else if (window.innerWidth < 992) {
      setVisibleItems(2); // Tablet
    } else {
      setVisibleItems(3); // Desktop
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // AUTO SLIDE
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev >= total - visibleItems ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [total, visibleItems]);

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
    <section id="service" className="services-section py-5 text-center">
      <div className="container">
        <p className="services-subtitle">SERVICES</p>

        <h2 className="services-title">
          Business Call Center & Telemarketing Services
          <br />
          <span>that achieve results</span>
        </h2>

        <p className="services-description text-black">
          <span className="fw-bold">
            We exist because the world is driven by sales.
          </span>{" "}
          We offer business call center & telemarketing services to make the most of your contact center dollars.
        </p>

        {/* SLIDER */}
        <div className="slider-container mt-5">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${current * (100 / visibleItems)}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {services.map((service, index) => (
              <div className="slide" key={index} style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h5>{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="services-nav mt-4 d-flex justify-content-center align-items-center gap-4">
          <button onClick={prevSlide} className="nav-btn">
            ←
          </button>

          <div className="dots d-flex gap-2">
            {services.map((_, index) => (
              <span
                key={index}
                className={`dot ${current === index ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>

          <button onClick={nextSlide} className="nav-btn">
            →
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
