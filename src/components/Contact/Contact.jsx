import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <div
              className="h-100 p-5 rounded-4"
              style={{ backgroundColor: "#e9e9e9" }}
            >
              <h5 className="fw-bold">Have a project in mind?</h5>
              <h1 className="fw-bold display-5 mb-3">
                Let’s connect
              </h1>

              <p className="text-dark mb-5">
                We have three projects with this template and that is
                because we love the design, the large number of possibilities.
              </p>

              <div className="mt-5">
                <p className="mb-3 fw-semibold">
                  🌐 ebcclic.com
                </p>
                <p className="fw-semibold">
                  📞 +971 5434 76408
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">
            <div
              className="h-100 p-5 rounded-4 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #1f1f1f, #2a2a2a)",
              }}
            >
              <h3 className="fw-bold">Send a message</h3>
              <p className="text-light mb-4">
                We’re here to answer any question you may have.
              </p>

              <form>
                <div className="mb-4">
                    <label>Your name</label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white border-0 border-bottom rounded-0"/>
                </div>

                <div className="mb-4">
                    <label>Your email</label>
                  <input
                    type="email"
                    className="form-control bg-transparent text-white border-0 border-bottom rounded-0"/>
                </div>

                <div className="mb-4">
                    <label>Subject</label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white border-0 border-bottom rounded-0"/>
                </div>

                <div className="mb-4">
                    <label>Your message (optional)</label>
                    <textarea
                        rows="4"
                        className="form-control bg-transparent text-white border-0 border-bottom rounded-0">
                    </textarea>
                </div>

                <button
                  type="submit"
                  className="btn w-100 rounded-pill mt-3"
                  style={{
                    border: "1px solid #ff6600",
                    color: "#ff6600",
                  }}
                >
                  Submit
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
