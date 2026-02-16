import React from "react";

function Hero() {
  return (
    <>
      <section className="container-fluid" style={{ backgroundColor: "#0f172a", padding: "80px 0" }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h1 className="fw-bold mb-4 text-white">
                We are building a modern investment platform for India.
              </h1>
              <p className="fs-5 text-light">
                RiNivesh was founded with a simple belief — investing should be
                simple, transparent, and affordable for everyone. In a market full
                of complexity, hidden costs, and outdated systems, we aim to remove
                barriers that stop people from growing their wealth with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid " style={{ backgroundColor: "#f8fafc", padding: "70px 0" }}>
        <div className="container border p-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h2 className="fw-semibold mb-3 text-dark">Our Mission</h2>
              <p className="fs-5 text-muted">
                To empower every Indian to do better with money by providing:
              </p>
              <ul className="fs-5 text-dark">
                <li>Simple and transparent investment products</li>
                <li>Fair and affordable pricing</li>
                <li>Reliable support and education</li>
                <li>Technology that works without complexity</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h2 className="fw-semibold mb-3 text-dark">What We Do</h2>
              <ul className="fs-5 text-dark">
                <li>Offer a clean, easy-to-use investment platform</li>
                <li>Eliminate unnecessary charges and hidden fees</li>
                <li>Educate investors through content and tools</li>
                <li>Build long-term trust instead of short-term hype</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
