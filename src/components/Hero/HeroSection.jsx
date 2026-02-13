import React from "react";
import "./HeroSection.css";
import heroBg from "../../assets/bg-hero.jpg";
import supportImg from "../../assets/sales.jpg";

function HeroSection() {
  return (
    <section className="hero">

      {/* TOP HERO */}
      <div
        className="hero-top"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="fade-up">
            Your Trusted Partner in <br />
            <span>Customer Support Excellence</span>
          </h1>

          <p className="fade-up delay-1 fw-semibold">
            We specialize in outbound calls that connect, engage, and convert.
            With proven telemarketing strategies and skilled agents, we help
            your business generate leads, close deals, and grow faster — one
            call at a time.
          </p>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="hero-card fade-up delay-3">
        <h2 className="bold">
          Hitting Your Sales Goals Should Feel <span>Effortless</span>
          <br /> — With the Right Support.
        </h2>

        <div className="card-content">
          <div className="card-image">
            <img src={supportImg} alt="Customer Support" />
          </div>

          <div className="card-text">
            <p>
                Achieving your sales and service targets takes more than just effort — it 
                demands strategy, focus, and the right team behind you. We know your time is valuable, and chasing quotas or 
                solving every operational hiccup shouldn't pull you away from leading your business forward.
            </p>

            <p className="bold">That’s where we come in.</p>

            <p>
                With our expert telemarketing services, you’ll turn every customer interaction 
                into real opportunities — without spreading your team thin. Let us handle the outreach, follow-ups, and lead generation, so you can stay 
                focused on what truly matters: growing your business with confidence.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
