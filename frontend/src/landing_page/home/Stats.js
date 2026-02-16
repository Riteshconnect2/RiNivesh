import React from 'react';

function Stats() {
    return (  
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <h1 className='mb-4'>Trust with confidence</h1>
                    <h3 className='mt-3'>Customer-first always</h3>
                     <p className='text-muted'>Everything we build at RiNivesh starts with you. Your goals, safety, and experience
                      come first—always.
                    </p>
                    <h3  className='mt-3'>No spam or gimmicks</h3>
                    <p className='text-muted'>
                        We believe in transparency and honesty. No hidden charges, no unnecessary notifications,
                        and no marketing noise.
                    </p>
                    <h3  className='mt-3'>The RiNivesh universe</h3>
                    <p className='text-muted'>
                        A growing ecosystem of simple, powerful tools designed to help you invest, track,
                        and manage your money effortlessly.
                    </p>
                    <h3  className='mt-2'>Do better with money</h3>
                    <p className='text-muted'>
                        Make smarter financial decisions with insights, education, and tools that help you
                         grow wealth with confidence.
                    </p>
                    <div>
                        <a href='/' className='mt-5' style={{textDecoration:"none",paddingLeft:"450px" }}>Explore our product &#10230; </a>
                         
                    </div> 
                     
                </div>
                <div className='col-6'>
                    <img src='Media/Images/ecosystem.png' width={700} height={580} className='mt-5'/>

                </div>
            </div>
            
         </div>
    );
}

export default Stats;