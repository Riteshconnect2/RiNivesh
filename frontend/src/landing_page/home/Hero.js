import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
  };

  return (
    <div className="container mt-2">
      <div className="row text-center align-items-start">
        <div className={isLoggedIn ? "col-12 mb-5" : "col-8 mb-5"}>
          <Link to="/">
            <img
              src="Media/Images/Home.png"
              alt="heroImage"
              width={1000}
              className="img-fluid"
            />
          </Link>
          <h1 className="mt-4">Invest in everything</h1>
          <p>Online platform to invest in stocks</p>
        </div>

        {!isLoggedIn && (
          <div className="col-4 mt-4">
            <div
              className="p-5 rounded-4 shadow-lg"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h2 className="fw-bold mb-3 text-center">
                Login to{" "}
                <span>
                  <img src="Icon.png" height={80} width={300} alt="logo" />
                </span>
              </h2>

              <p className="text-center mb-4 text-muted">
                Welcome back. Please login to continue.
              </p>

              <form onSubmit={handleLogin}>
                <div className="mb-3 text-start">
                  <label className="form-label">Email or Mobile</label>
                  <input type="text" className="form-control" required />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" required />
                </div>

                <div className="d-flex justify-content-end mb-3">
                  <span
                    style={{
                      color: "#1c2541",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    Forgot password?
                  </span>
                </div>

                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-outline-primary">
                    Login
                  </button>
                </div>

                <p className="text-center mt-4 text-muted">
                  Don’t have an account?{" "}
                  <Link to="/signUp" style={{ color: "#1c2541" }}>
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
