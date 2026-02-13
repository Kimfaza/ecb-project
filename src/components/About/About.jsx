import React from "react";
import "./About.css";
import AboutAccordion from "./AboutAccordion";
import ValuesSection from "./ValuesSection";

function About() {
    return (
        <>
        {/* SECTION ABOUT */}
        <section className="about-section py-5" id="about">
            <div className="container">

                {/* TITLE CENTER */}
                <div className="about-header text-center text-white mb-5">
                <p className="fw-bold">ABOUT US</p>
                <h2 className="fw-bold">
                    We deliver{" "}
                    <span className="text-orange">
                    exceptional call center sales
                    </span>{" "}
                    results
                </h2>
                </div>

                {/* CONTENT ROW */}
                <div className="row align-items-center">

                {/* Left Content */}
                <div className="col-lg-6 text-white">
                    <p>
                    Eight Bacus Call Centers LLC provides quality call center solutions that achieve sales results. We exist 
                    because the world is driven by sales. We deliver exceptional results because our company culture is vibrant and alive.
                    </p>
                    <p>
                    We offer the solutions and services to make the most of your contact center dollars. We specialize in:
                    </p>
                </div>

                {/* Right Accordion */}
                <div className="col-lg-6 mt-4 mt-lg-0">
                    <AboutAccordion />
                </div>

                </div>
            </div>
        </section>


        {/* VALUES SECTION */}
        <ValuesSection />
        </>
    );
}

export default About;
