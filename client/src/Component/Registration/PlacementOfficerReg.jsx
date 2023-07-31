import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const PlacementOfficerReg = () => {
  const navigate = useNavigate()
  const[inputs, setinputs]=useState({
    collegename:"",
    collegeaddress:"",
    email:"",
    phone:"",
    username:"",
    password:"",
    cnf_password:"",
  });
  console.log("value==>",inputs);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const setRegister=(event)=>{      
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);  
  }
 
  const handleReset = () => {
    setinputs({});
  };
  useEffect(() => {
    console.log(formErrors);
    
    console.log("key", Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputs);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^[6-9]\d{9}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     
   
    if (!values.collegename) {
      errors.collegename= "College Name is required!";
    }
    if (!values.collegeaddress) {
      errors.collegeaddress = "College Address is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    
    if (!values.username) {
      errors.username = "User Name is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    
    if (!values.phone) {
      errors.phone = "Contact Number is required!";
    }else if(!phoneno.test(values.phone)){
      errors.phone = "Enter valid Contact Number !";
    }
    
    if (!values.email) {
      errors.email = "email is required!";
    }
     else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirmation Password is required";
    }
     
    if(values.password!==values.cpassword){
      errors.cpassword = "Enter same password";
    }
    return errors;
  };
  
  const Registersubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
    if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post('http://localhost:5000/register/collegereg',inputs).then((response)=>{
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
      
    })}
  }


  

  return (
    <>
   
    {/* Navbar End */}
    <div className="page-content" style={{ textAlign: "center" }}>
    <ToastContainer/>
      <div className="form-v10-content">
        <form className="form-detail" action="#" method="post" id="myform"onSubmit={Registersubmit}>
          <div className="form-left">
            <center>
              <h2>College Registration</h2>
            </center>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.collegename}</span>
              <input
                type="text"
                name="collegename"
               
               
                placeholder="College Name"
                value={inputs.collegename ||""}
                  onChange={setRegister}
                  style={{ textAlign: "left" }}
                
              />
            </div>
            <div className="form-row  form-row-3">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.collegeaddress}</span>
              <input
                type="text"
                name="collegeaddress"
                placeholder="College Address"
                value={inputs.collegeaddress ||""}
                  onChange={setRegister}
                
                style={{ textAlign: "left" }}
              />
            </div>
  
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.email}</span>
              <input
                type="email"
                name="email"
                
                placeholder="E-mail"
                value={inputs.email ||""}
                onChange={setRegister}
              
              />
            </div>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.phone}</span>
              <input
                type="tel"
                name="phone"
                 placeholder="phone"
                value={inputs.phone ||""}
                onChange={setRegister}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
                    event.preventDefault();
                  }
                }}
              
              />
            </div>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.username}</span>
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
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.password}</span>
              <input
                type="password"
                name="password"
               
               
                placeholder="Password"
                value={inputs.password ||""}
                  onChange={setRegister}
                
              />
            </div>
            <div className="form-row">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.cpassword}</span>
              <input
                type="password"
                name="cpassword"
                
               
                placeholder="Confirm-Password"
                value={inputs.cpassword ||""}
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