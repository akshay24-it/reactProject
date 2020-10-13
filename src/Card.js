import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Card=(props)=>{
    return(
        
        <div className="col-md-3 col-10 mx-auto ">
            <div className="card mx-2">
                <img className="card-img-top img-fluid img-s cardimg mx-4 mt-3" src={props.imgsrc} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the
                     card title and make up the bulk of the card's content.</p>
                    <NavLink to="" exact className="text-capitalize text-decoration-none">
                        <Button className="bdetail">
                            Get more detail
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
        
    );
}

export default Card;