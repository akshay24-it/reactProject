import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
const Common=(props)=>{

    return(
        <section id="header" className="">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 pt-5 pt-sm-0 order-2 order-lg-1">
                            <h1>{props.title}</h1><h1><strong className="brand-name">{props.brandname}</strong></h1>
                            <p className="my-3">
                                We are the team of talented expert which has knowledge of mobile
                            </p>
                            <div className="mt-3">
                                <NavLink exact to={props.navlink} className="text-decoration-none"><Button className="started">{props.bname}</Button></NavLink>
                            </div>

                        </div>

                        <div className="col-md-6 pt-0 pt-sm-0 order-1 order-lg-2">
                            <img className="img-fluid pl-5 ima" alt="img" src={props.imgsrc}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </section>
    );
}

export default Common;