import React from 'react';
import Common from './Common';
import Img from './image/lguru.png';

const Home=()=>{
    
    return(
        <Common 
            title="Check your mobile with"
            imgsrc={Img}
            navlink="/service"
            bname="Get Started"
            brandname="Mobile Guru"
        />
    );
}

export default Home;