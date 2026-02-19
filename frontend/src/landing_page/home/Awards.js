import React from 'react';

function Awards() {
    return (  
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/Images/largestbroker.png' width={680} height={550} alt='largestbroker'/>
                </div>
                <div className='col-6'>
                    <h1>Stock broker in India</h1>
                     <p><img src='Icon.png'alt='Icon' height={80} width={300}/></p>
                    <div className='row mt-5'>
                        <div className='col-6 '>
                            <ul>
                                <li>
                                    Futures and Options
                                </li>
                                <li>
                                    Commodity derivatives
                                </li>
                                <li>
                                    Currency derivatives
                                </li>
                            </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    Stocks & IPOs
                                </li>
                                <li>
                                    Direct mutual funds
                                </li>
                                <li>
                                    Bonds and Government securities
                                </li>
                                 
                            </ul>
                        </div>

                    </div>
                    <img src='Media/Images/pressLogos.png' alt='logo' className='mt-5'/>

                </div>

            </div>

         </div>
    );
}

export default Awards;