import React from "react";

function StepCard({ number, title, description, bgClass, textWhite }) {
  return (
    <div
      className={`p-4 rounded-4 mb-3 d-flex align-items-center ${bgClass} ${
        textWhite ? "text-white" : ""
      }`}
      style={{ transition: "0.3s ease" }}
    >
      <div
        className="me-4 fw-bold"
        style={{
          fontSize: "60px",
          opacity: 0.2,
          lineHeight: 1,
        }}
      >
        {number}
      </div>

      <div>
        <h5 className="fw-bold mb-1">{title}</h5>
        <p className="mb-0 small">{description}</p>
      </div>
    </div>
  );
}

export default StepCard;
