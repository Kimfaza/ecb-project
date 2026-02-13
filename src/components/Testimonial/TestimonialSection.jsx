import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testimonial-wrapper">

      {/* THREE STEPS (OVERLAP) */}
      <div className="steps-wrapper">
        <div className="container">
          <div className="steps-card p-4 p-md-5">

            <p className="small-title">THREE STEPS TO SUCCESS</p>
            <h2 className="fw-bold mb-3">Improve Your Bottom Line</h2>
            <p className="text-muted mb-4">
              We have the tools and expertise needed to reduce your operating costs
              while improving key performance metrics important to your organization.
            </p>

            {/* STEP 01 */}
            <div className="step-item step-orange d-flex align-items-center p-4 mb-3">
              <h1 className="step-number me-4">01</h1>
              <div>
                <h6 className="fw-bold text-white">Request a Quote</h6>
                <p className="text-white mb-0 small">
                  Let us know the challenges you're facing and looking to address.
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="step-item step-light d-flex align-items-center p-4 mb-3">
              <h1 className="step-number me-4 text-secondary">02</h1>
              <div>
                <h6 className="fw-bold">Get a Customized Plan</h6>
                <p className="mb-0 small">
                  With the information we learn from you, we'll craft a plan that
                  addresses your business needs.
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="step-item step-dark d-flex align-items-center p-4">
              <h1 className="step-number me-4 text-light">03</h1>
              <div>
                <h6 className="fw-bold text-white">Sit back & relax!</h6>
                <p className="text-white mb-0 small">
                  Have peace of mind knowing that we'll work tirelessly to achieve
                  your business goals. We are driven to succeed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* HAPPY CUSTOMERS */}
      <div className="customers-section py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT TEXT */}
            <div className="col-md-5 text-white mb-4 mb-md-0">
              <h3 className="fw-bold">
                Hear from <br />
                <span className="text-orange">happy customers.</span>
              </h3>
              <p className="small">What People Say About Us.</p>

              <div className="d-flex gap-3 mt-4">
                <button className="nav-btn">←</button>
                <button className="nav-btn">→</button>
              </div>
            </div>

            {/* TESTIMONIAL CARD */}
            <div className="col-md-7">
              <div className="testimonial-card p-4 p-md-5">
                <p>
                  We are very pleased with the performance of the company and look
                  forward to a long and prosperous relationship. Based on their
                  outstanding performance, we are currently expanding our program
                  to target larger commercial roofs.
                </p>

                <div className="d-flex align-items-center mt-4">
                  <img
                    src="https://i.pravatar.cc/60"
                    alt="customer"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold text-orange">
                      KELVIN TAN WEI JIE
                    </h6>
                    <small>Customer Operations Leader</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default TestimonialSection;
