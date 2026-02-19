import React from 'react';

function RightSection({ImageUrl, PlayStore, AppStore , ProductName, ProductDescptn}) {
    return (  
       <>
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <h2> {ProductName}</h2>
                    <p className='fs-5 mt-3 text-muted'> {ProductDescptn}
                    </p>
                     <div className='p-2'>
                        <img src={PlayStore} alt='img' className='p-3'/>
                        <img src={AppStore} alt='img'/>
                     </div>
                </div>
                
                <div className='col-4'>
                    <img src={ImageUrl} alt='img' height={400} width={600}/>
                </div>
                 
            </div>
         </div>
         </>
    );
}

export default RightSection;