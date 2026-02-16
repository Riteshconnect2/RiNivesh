import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="rinivesh-footer mt-5">
      <div className="footer-container">

        <div className="footer-brand">
          <h2> <Link to='/' ><span><img src='Icon.png' height={60} width={260}/></span></Link></h2>
          <p>Do better with money.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Careers</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Disclaimer</a>
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
