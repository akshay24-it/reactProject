import React from 'react';

const Footer =()=>{
    const year=new Date().getFullYear();
    return(
        <footer className="bg-light text-center">
            <p>
                &copy; {year} MobileGuru. All Rights Reserved 
            </p>
        </footer>
    );
}

export default Footer;