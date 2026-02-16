import React from 'react';

function Educations() {
    return ( 
         <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src='Media/Images/education.svg' alt='education image'/>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-3'>Free and open market education</h1>
                     <div>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='/' className='mt-2' style={{textDecoration:"none"  }}>Varsity &#10230; </a>
                     </div>
                     <div>
                        <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='/' className='mt-2' style={{textDecoration:"none"  }}>TradingQ&A  &#10230; </a>
                     </div>
                </div>
            </div>
         </div>
     );
}

export default Educations;