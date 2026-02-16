import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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
      const res = await axios.post("http://localhost:3002/login", formData);

      // JWT token save
      localStorage.setItem("token", res.data.token);

      alert("Login successful");
      navigate("/"); // dashboard / home
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
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
        <div className="container">
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
                  Login to{" "}
                  <span>
                    <img src="Icon.png" height={80} width={300} alt="logo" />
                  </span>
                </h2>

                <p className="text-center mb-4 text-muted">
                  Welcome back. Please login to continue.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
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
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{
                        backgroundColor: "#1c2541",
                        color: "#ffffff",
                      }}
                    >
                      Login
                    </button>
                  </div>

                  <p className="text-center mt-4 text-muted">
                    Don’t have an account?{" "}
                    <Link to="/signUp">
                      <span style={{ color: "#1c2541", cursor: "pointer" }}>
                        Sign up
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

export default Login;
