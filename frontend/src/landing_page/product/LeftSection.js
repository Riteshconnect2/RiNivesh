import React from 'react';

function LeftSection({ImageUrl, PlayStore, AppStore , ProductName,  ProductDescptn}) {
    return ( 
         <>
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <img src={ImageUrl} height={400} width={600}/>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-5'>
                    <h2> {ProductName}</h2>
                    <p className='fs-5 mt-3 text-muted'> { ProductDescptn}
                    </p>
                     <div className='p-2'>
                        <img src={PlayStore} className='p-3'/>
                        <img src={AppStore}/>
                     </div>

                </div>
            </div>
         </div>
         </>
     );
}

export default LeftSection;