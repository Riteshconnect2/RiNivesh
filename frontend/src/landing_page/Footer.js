import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="rinivesh-footer mt-5">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            <Link to="/">
              <span>
                <img
                  src="/Icon.png"
                  height={60}
                  width={260}
                  alt="RiNivesh logo"
                />
              </span>
            </Link>
          </h2>
          <p>Do better with money.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/careers">Careers</Link>
          </div>

          <div>
            <h4>Support</h4>
            <Link to="/help">Help Center</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faqs">FAQs</Link>
          </div>

          <div>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RiNivesh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
