import React, { useState } from 'react';

const ContactUs=()=>{

    const [data,setData]=useState({
        fn:'',
        mob:'',
        email:'',
        mes:'',
    });

    const changehandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData((preData)=>{
            return{
                ...preData,
                [name]:value,
            };
        });
    }

    const submitbtn=(event)=>{
        event.preventDefault();
        alert(`My name is ${data.fn}\nMy mobile no is ${data.mob}\nMy email is ${data.email}\nMy message is ${data.mes}`)
    }
    return(
        <div>
            <div className="my-5">
                <h1 className="text-center service">Contact Us</h1>
            </div>
            <div className="container-fluid contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={submitbtn}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input type="text" value={data.fn} onChange={changehandler} name="fn" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your name"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Mobile No</label>
                            <input type="number" value={data.mob} onChange={changehandler} name="mob" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile no"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={data.email} onChange={changehandler} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                            
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" value={data.mes} onChange={changehandler} name='mes' id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                       
                        <button type="submit"  className="btn btn-primary">Primary</button>
                    </form>
                    </div>
                </div>
 
            </div>
        

        </div>
    );
}

export default ContactUs;