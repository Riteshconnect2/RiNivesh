import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/signup", formData);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <section
        className="container-fluid"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0b132b, #1c2541)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div
                className="p-5 rounded-4 shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <h2
                  className="fw-bold mb-3 text-center"
                  style={{ color: "#0b132b" }}
                >
                  Create your{" "}
                  <span>
                    <img src="Icon.png" height={80} width={300} alt="logo" />
                  </span>
                  <br />
                  account
                </h2>

                <p className="text-center mb-4 text-muted">
                  Start your investment journey with a secure and simple signup
                  process.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-grid mt-4">
                    <button
                       className="btn btn-outline-primary"
                    >
                      Sign up
                    </button>
                  </div>

                  <p className="text-center mt-4 text-muted">
                    Already have an account?{" "}
                    <Link to="/">
                      <span style={{ color: "#1c2541", cursor: "pointer" }}>
                        Login
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
