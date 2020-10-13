import React from 'react';
import Common from './Common';
import Img from './image/people.webp';
const About=()=>{
    
    return(
        <Common 
            title="Welcome to about page"
            imgsrc={Img}
            navlink='/contactus'
            bname="Contact Us"
            brandname="Mobile Guru"
        />
    );
}

export default About;