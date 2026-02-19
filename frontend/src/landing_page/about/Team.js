import React from "react";
// import { Link } from "react-router-dom";

function Team() {
  return (
    <><div className="container my-5">
      <h2 className="mb-4">Team at RiNivesh</h2>
      <p className="mb-5">
        We are building RiNivesh with a strong focus on transparency, technology,
        and long-term value creation.
      </p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <h5>Ritesh Yadav</h5>
          <p className="text-muted">Founder</p>
          <p>
            Founded RiNivesh to simplify investing and build a trustworthy,
            technology-driven platform for Indian investors.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <h5>Head of Technology</h5>
          <p className="text-muted">Engineering & Platform</p>
          <p>
            Responsible for building and scaling RiNivesh’s core investment
            systems.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <h5>Head of Operations</h5>
          <p className="text-muted">Operations & Compliance</p>
          <p>
            Manages operations, compliance, and internal processes.
          </p>
        </div>
      </div>
      {/* <Link to='/signUp'><button className="btn btn-primary">Signup now</button></Link> */}
    </div>
    
    </>
  );
}

export default Team;
