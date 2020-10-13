import React from 'react';
import Card from './Card';
import Data from './Data';

const Service=()=>{

    const c=Data.map((d,i)=>{
        return <Card key={i} imgsrc={d.img} title={d.title} />
    });

    return(
        <div>
        <div className='mb-5'>
            <h1 className='text-center text-capitalize service'>Our services</h1>
        </div>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                      {c}
                    </div>
                    
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Service;