import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        <div className="col-md-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href='/' className='mt-5' style={{textDecoration:"none"  }}>See pricing &#10230; </a>
        </div>

        <div className="col-md-2"></div>

        <div className="col-md-6">
            <div className="row">
                <div className="col">
                    <div className="card p-3">
                        <div className="row">
                            <h1 style={{color:"orange"}}>&#8377;0</h1>
                            <p>Free account
                              opening</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-3">
                        <div className="row">
                            <h1 style={{color:"orange"}}>&#8377;20</h1>
                            <p>Intraday and
                               F&O</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
