
import PublicUserNav from '../Component/Navbar/PublicUserNav'
import PublicUserTop from '../Component/Topbar/PublicUserTop'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const PublicUserContact = () => {
  const[inputs, setinputs]=useState({});
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);          
  }
  const handleReset = () => {
    setinputs({});
  };

  const Registersubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/contact/createchinnu',inputs).then((response)=>{
      console.log(response.data);
        toast.success('successfully send');
        setinputs({});
     
    })
    .catch((error) =>{
    console.log('Error:', error);
        toast.error('Failed to send');
      });
  }
 
  return (
    <div>
      <PublicUserTop/>
   <PublicUserNav/>
   
   <>
   <div className='container'>
 
  <section className="mb-4">
    {/*Section heading*/}
    <h2 className="h1-responsive font-weight-bold text-center my-4">
      Contact us
    </h2>
   
    <p className="text-center w-responsive mx-auto mb-5">
      Do you have any questions? Please do not hesitate to contact us directly.
      Our team will come back to you within a matter of hours to help you.
    </p>
    <div className="row">
    
      <div className="col-md-9 mb-md-0 mb-5">
        <form
           onSubmit={Registersubmit}  
        >
        
          <div className="row">
           
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={inputs.name || ""}
                      onChange={setRegister}
                />
                <label htmlFor="name" className="">
                  Your name
                </label>
              </div>
            </div>
         
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  name="email"
                  className="form-control"
                  value={inputs.email || ""}
                  onChange={setRegister}
                />
                <label htmlFor="email" className="">
                  Your email
                </label>
              </div>
            </div>
      
          </div>
          
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <input
                  type="text"
                  name="contactsubject"
                  className="form-control"
                  value={inputs.contactsubject || ""}
                  onChange={setRegister}
                />
                <label htmlFor="subject" className="">
                  Subject
                </label>
              </div>
            </div>
          </div>
        
          <div className="row">
        
            <div className="col-md-12">
              <div className="md-form">
                <textarea
                  type="text"
                  name="contactmessage"
                  rows={2}
                  className="form-control md-textarea"
                  value={inputs.contactmessage || ""}
                  onChange={setRegister}
                />
                <label htmlFor="message">Your message</label>
              </div>
            </div>
          </div>
          {/*Grid row*/}
        
        <div className="text-center text-md-left">
          <button
          type='submit'
            className="btn btn-primary"
          >
            Send
          </button>
        </div>
        </form>
        <div className="status" />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
          <li>
            <i className="fas fa-map-marker-alt fa-2x" />
            <p>San Francisco, CA 94126, USA</p>
          </li>
          <li>
            <i className="fas fa-phone mt-4 fa-2x" />
            <p>+ 01 234 567 89</p>
          </li>
          <li>
            <i className="fas fa-envelope mt-4 fa-2x" />
            <p>contact@mdbootstrap.com</p>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
    </div>
  </section>
  {/*Section: Contact v.2*/}
  </div>
</>




    </div>
  )
}

export default PublicUserContact