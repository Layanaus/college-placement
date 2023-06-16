import React from 'react'
import { useState } from 'react';

const PlacementOfficerReg = () => {
  const [inputs,setinputs]=useState([]);
  const setRegister =(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});

  };
  const Registersubmit =(event)=>{
    event.preventDefault();

    console.log("data",inputs);
  }
  console.log(inputs);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setinputs({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('data', inputs);
    // Perform additional actions here, such as making API requests or updating the database
  }

  return (
    <>
   
    {/* Navbar End */}
    <div className="page-content" style={{ textAlign: "center" }}>
      <div className="form-v10-content">
        <form className="form-detail" action="#" method="post" id="myform"onSubmit={Registersubmit}>
          <div className="form-left">
            <center>
              <h2>College Registration</h2>
            </center>
            <div className="form-row">
              <input
                type="text"
                name="college"
               
               
                placeholder="College Name"
                value={inputs.college ||""}
                  onChange={setRegister}
                  style={{ textAlign: "left" }}
                
              />
            </div>
            <div className="form-row  form-row-3">
              <input
                type="text"
                name="address"
                placeholder="College Address"
                value={inputs.address ||""}
                  onChange={setRegister}
                
                style={{ textAlign: "left" }}
              />
            </div>
  
            <div className="form-row">
              <input
                type="email"
                name="email"
                
                placeholder="E-mail"
                value={inputs.email ||""}
                onChange={setRegister}
              
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                
                
                placeholder="phone"
                value={inputs.phone ||""}
                onChange={setRegister}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="username"
                
                
                placeholder="Username"
                value={inputs.username ||""}
                onChange={setRegister}
                style={{ textAlign: "left" }}
              />
            </div>
            
        
            <div className="form-row">
              <input
                type="password"
                name="password"
               
               
                placeholder="Password"
                value={inputs.password ||""}
                  onChange={setRegister}
                
              />
            </div>
            <div className="form-row">
              <input
                type="password"
                name="cnf_password"
                
               
                placeholder="Confirm-Password"
                value={inputs.cnf_password ||""}
                  onChange={setRegister}
                
              />
            </div>
            <center>
            <div className="register d-flex gap-3">
                <input
                  type="submit"
                  name="register"
                  className="btn btn-primary flex-grow-1"
                  value="Register"
                />
                <input
                  type="reset"
                  name="reset"
                  className="btn btn-secondary"
                  value="Reset"
                  onClick={handleReset}
                />
              </div>
             
            </center>
          </div>
        </form>
      </div>
    </div>
  </>
  
  )
}

export default PlacementOfficerReg