import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
    
      <Link className="navbar-brand" to="/">
        <img src="/Icon.png" height={50} width={250} alt="RiNivesh logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/product">Product</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>
 
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-primary ms-2" to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="btn btn-danger ms-2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
