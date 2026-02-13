import React from "react";

function AboutAccordion() {
  const accordionData = [
    {
      title: "B2B Outbound Marketing",
      description:
        "If you are considering a telemarketing firm for B2B outbound marketing solutions, look no further. Eight Bacus Call Centers LLC is your premier choice for B2B outbound marketing.",
    },
    {
      title: "B2C Outbound Marketing",
      description:
        "Using outbound marketing has become a cost-effective solution for organizations looking to increase sales with the help of outside expertise.",
    },
    {
      title: "TCPA Call Center Consulting",
      description:
        "Our compliance consulting team will help you navigate the Telemarketing Laws at both the federal and state level.",
    },
    {
      title: "Outsourced Telemarketing QA",
      description:
        "As call center experts, we can quickly and cost effectively help you solve your most challenging problems.",
    },
  ];

  return (
    <div className="accordion" id="aboutAccordion">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button custom-accordion-btn ${
                index !== 0 ? "collapsed" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
            >
              {item.title}
            </button>
          </h2>

          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutAccordion;
