import React from "react";

function Hero() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(135deg, #0a1230, #0d1b3f)",
          padding: "60px 15px",
          color: "#ffffff",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold display-6 display-md-4">
            RiNivesh Pricing
          </h2>
          <p className="fs-5 text-light">
            Simple, transparent & investor-first charges
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row border-bottom pb-5 gy-5">

          <div className="col-12 col-md-4 text-center">
            <img
              src="Media/Images/pricingEquity.svg"
              alt="Equity"
              className="img-fluid mb-3"
              style={{ maxWidth: "90px" }}
            />
            <h3>Free Equity Delivery</h3>
            <p className="text-muted px-3">
              All equity delivery investments (NSE, BSE) are completely free —
              ₹0 brokerage.
            </p>

            <img
              src="Media/Images/pricingEquity.svg"
              alt="MF"
              className="img-fluid mt-4 mb-3"
              style={{ maxWidth: "90px" }}
            />
            <h3>Free Mutual Funds</h3>
            <p className="text-muted px-3">
              Direct mutual funds with zero commission and full transparency.
            </p>
          </div>

          <div className="d-none d-md-block col-md-2"></div>

          <div className="col-12 col-md-6 text-center text-md-start ">
            <img 
              src="Media/Images/intradayTrades.svg"
              alt="Intraday"
              className="img-fluid mb-3 mt-5"
              style={{ maxWidth: "90px" }}
            />
            <h3>Intraday & F&O Trades</h3>
            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across:
            </p>
            <ul className="text-muted list-unstyled">
              <li>• Equity</li>
              <li>• Currency</li>
              <li>• Commodity</li>
            </ul>
            <p className="text-muted">
              ₹20 per order on all Options trades.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
