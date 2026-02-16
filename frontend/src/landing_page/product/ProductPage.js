import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
 

function ProductPage() {
    return (  
        <>
        <Hero/>
        <LeftSection 
         ImageUrl="Media/Images/HomeHero.png"
         PlayStore="Media/Images/googlePlayBadge.svg" 
         AppStore="Media/Images/appstoreBadge.svg"
         ProductName="RiNivesh Trade"
         ProductDescptn="A fast, modern trading platform built for serious investors.
          Get live market updates, intelligent insights, advanced charting tools, 
          and an elegant, distraction-free experience — all in one place."
         />
        <RightSection
        ImageUrl="Media/Images/insight.png"
         PlayStore="Media/Images/googlePlayBadge.svg" 
         AppStore="Media/Images/appstoreBadge.svg"
         ProductName="RiNivesh Insights"
        ProductDescptn="A powerful analytics and reporting dashboard to track P&L, 
         taxes, statements, and your complete investment journey."
        />
        <LeftSection 
         ImageUrl="Media/Images/coin.png"
         PlayStore="Media/Images/googlePlayBadge.svg" 
         AppStore="Media/Images/appstoreBadge.svg"
         ProductName="RiNivesh MF"
        ProductDescptn="Invest in direct mutual funds with ease. 
         Start SIPs, track performance, and grow your wealth long-term."
         />
        <Universe/>
     
        </>
    );
}

export default ProductPage;