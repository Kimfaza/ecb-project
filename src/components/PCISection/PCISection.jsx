import React from "react";
import "./PCISection.css";
import certifiedImg from "../../assets/logo-certified.avif";

function PCISection() {
  return (
    <section className="pci-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 text-white">
            <p className="fw-bold">PCI Level 1 Call Center</p>

            <h2 className="pci-title">
              A PCI Level 1 Call Center Ensures <br />
              <span>Credit Card Data is Secure</span>
            </h2>

            <p className="mt-4">
              As a company, if you accept or process payment cards, the PCI Data Security Standards apply to you. If you take credit cards via inbound telemarketing, customer 
              service or outbound telemarketing, you will need a PCI compliant call center, preferably a PCI Certified Level 1 call center.
            </p>

            <p>
              It’s in the news continuously – consumer credit card data is hacked and stolen. In an effort to combat these threats, Visa, MasterCard, American Express, Discover and JCB created a set of standards known as the Payment Card Industry Data Security Standards (PCI DSS). PCI DSS is required for all 
              entities that store, process, or transmit cardholder data, including call center vendors and outsourcers.
            </p>

            <p>
              These standards include technical and operational requirements for organizations accepting or processing payment transactions. PCI DSS helps a company to avoid potential severe penalties/fines or 
              even lose their credit card processing arrangement if a breach were to occur.
            </p>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="pci-card">
              <div className="pci-badge">
                <img src={certifiedImg} alt="Certified" />
              </div>

              <p>
                8Bacus has been a PCI Certified Level 1 Call Center since May 2013. Over the years, the PCI Security Standards Council continues to add requirements and controls to make cardholder data more secure. Even though these requirements, and therefore the recertification process, becomes more difficult to obtain, 
                8Bacus has successfully made the adjustments necessary to continue to be PCI Level 1 certified.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PCISection;
