import React from "react";

function Hero() {
  return (
    <>
      <section
        className="container-fluid"
        style={{ backgroundColor: "#0b132b", padding: "80px 0" }}
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h1 className="fw-bold mb-4 text-white">
                Products built for modern investors
              </h1>
              <p className="fs-5" style={{ color: "#c7d2fe" }}>
                RiNivesh products are designed to be simple, powerful, and
                reliable. Every tool we build focuses on clarity, speed, and a
                seamless investing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid"
        style={{ backgroundColor: "#eef2ff", padding: "70px 0" }}
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <h3 className="fw-semibold mb-3" style={{ color: "#1e293b" }}>
                Trading Platform
              </h3>
              <p className="fs-5 text-muted">
                A fast, intuitive trading platform built for reliability and
                ease of use across devices.
              </p>
            </div>

            <div className="col-md-4">
              <h3 className="fw-semibold mb-3" style={{ color: "#1e293b" }}>
                Investments & Wealth
              </h3>
              <p className="fs-5 text-muted">
                Simple tools to invest in equities and long-term wealth-building
                products with full transparency.
              </p>
            </div>

            <div className="col-md-4">
              <h3 className="fw-semibold mb-3" style={{ color: "#1e293b" }}>
                Insights & Tools
              </h3>
              <p className="fs-5 text-muted">
                Clear insights, calculators, and educational tools to help
                investors make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
