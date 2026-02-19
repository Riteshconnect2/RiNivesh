import React from 'react';
// import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container text-center mt-5  '>
            <div className='row '>
                <h1>Open a<b> <span style={{color:'darkblue'}}> RiNivesh</span></b> account</h1>
                <p className='mt-3 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                {/* <Link to="/signUp">
                 <button type="button" className="btn btn-outline-primary mt-3 " style={{width:"180px", margin:"auto"}}>Sign up for free</button>
                </Link> */}
            </div>
        </div>
     );
}

export default OpenAccount;