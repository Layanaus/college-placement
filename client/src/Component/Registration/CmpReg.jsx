import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CmpReg = () => {
  const navigate = useNavigate()
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
  axios.post('http://localhost:5000/register/companyreg',inputs).then((response)=>{
    navigate('/')
  }).catch((error)=>{
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    
  })
}
 
  
  return (
    <div className="page-content" style={{ textAlign: "center" }}>
      <ToastContainer/>
      <div className="form-v10-content">
        <form className="form-detail" action="#" method="post" id="myform" onSubmit={Registersubmit}>
          <div className="form-left">
            <center>
              <h2>Company Registration</h2>
            </center>
              <div className="form-row" >
                <input
                  type="text"
                  name="companyname"
                  
              
                  placeholder="Company Name"
                  value={inputs.companyname ||""}
                  onChange={setRegister}
                  style={{ textAlign: "left" }}
                  
                />
              </div>
              <div className="form-row" >     
<select
  name="companycategory"
  style={{ textAlign: "left" }} value={inputs.companycategory ||""}
  onChange={setRegister}
>
  <option value="">Company Category</option>
  <option value="option1">IT Company</option>
  <option value="option2">Engineering</option>
  <option value="option3">Sales and Marketing</option>
</select>
</div>

            <div className="form-row  form-row-3">
              <input
                type="text"
                name="companylocation"
                placeholder="Company location"
                value={inputs.companylocation ||""}
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
              
                placeholder="Phone"
                value={inputs.phone ||""}
                onChange={setRegister}
                
              />
            </div>
            <div className="form-row">
              <input
                type="name"
                name="websiteaddress"
                
                placeholder="Website Addres(Optional)"
                value={inputs.websiteaddress ||""}
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
  )
}

export default CmpReg