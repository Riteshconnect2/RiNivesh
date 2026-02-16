import React from 'react';

function Brokerage() {
    return (  <>
    <div className='container'>
        <div className='row text-center mt-5'>
            <h2>Simple. Transparent. Investor-friendly.</h2>
            <p className='text-muted'>RiNivesh follows a flat & low-cost brokerage model, so you always know what you pay before you trade.</p>
        </div>
        <div className='row mt-5'>
            <div className='col-4 border p-4'>
                <h2 className='border-bottom'>Mutual Funds</h2>
                <p  className='text-muted'>₹0 Brokerage</p>
                <ul>
                    <li>Invest in Direct Mutual Funds</li>
                    <li>No commissions</li> 
                     <li>No DP charges</li>
                </ul>
            </div>
            <div className='col-4 border p-4'>
                <h2 className='border-bottom'>Equity Delivery</h2>
                <p  className='text-muted'>₹0 Brokerage</p>
                <ul>
                    <li>Buy & hold stocks for the long term</li>
                    <li>No hidden charges</li> 
                     <li>Zero brokerage on NSE & BSE delivery trades</li>
                </ul>
            </div>
            <div className='col-4 border p-4'>
                <h2 className='border-bottom'>Equity Intraday</h2>
                <p className='text-muted'>₹20 or 0.03% per order (whichever is lower)</p>
                <ul>
                    <li>Charged per executed order</li>
                    <li>Applicable on buy & sell</li> 
                     <li>Ideal for active traders</li>
                </ul>
            </div>
        </div>
        <div className='row text-center mt-5 border'>
            <h3>Account-Related Charges</h3>
            <div className='col-4'></div>
            <div className='col-2 mt-3 mb-2'>
                 <h4>Charge Type</h4>
                 <p>Account Opening</p>
                 <p>Annual Maintenance (AMC)</p>
                 <p>Mutual Fund Investments</p>
                 <p>Inactive Account</p>
            </div>
             
             <div className='col-1 mt-3 mb-2  '>
                <h4>Amount</h4>
                <p>₹0</p>
                <p>₹0</p>
                <p>₹0</p>
                <p>₹0</p>
             </div>
        </div>
    </div>
    </>);
}

export default Brokerage;