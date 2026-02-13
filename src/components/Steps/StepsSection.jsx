import React from "react";
import StepCard from "./StepCard";

function StepsSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="card border-0 shadow-lg p-4 rounded-4">

          <p className="text-uppercase fw-bold small text-muted">
            Three Steps to Success
          </p>

          <h2 className="fw-bold mb-3">
            Improve Your Bottom Line
          </h2>

          <p className="text-muted mb-4">
            We have the tools and expertise needed to reduce your operating
            costs while improving key performance metrics important to your
            organization.
          </p>

          <StepCard
            number="01"
            title="Request a Quote"
            description="Let us know the challenges you're facing and looking to address."
            bgClass="bg-warning"
            textWhite
          />

          <StepCard
            number="02"
            title="Get a Customized Plan"
            description="With the information we learn from you, we'll craft a plan that addresses your business needs."
            bgClass="bg-light"
          />

          <StepCard
            number="03"
            title="Sit back & relax!"
            description="Have peace of mind knowing that we'll work tirelessly to achieve your business goals."
            bgClass="bg-dark"
            textWhite
          />

        </div>
      </div>
    </section>
  );
}

export default StepsSection;
