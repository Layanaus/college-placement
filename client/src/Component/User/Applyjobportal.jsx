import React, { useState } from 'react';
import Usernav from './Usernav'
import PublicUserFooter from '../Footer/PublicUserFooter'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Applyjobportal = () => {
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
    axios.post('http://localhost:5000/apply/jobportal_application',inputs).then((response)=>{
      navigate('/user')
    })
      
  }
  return (
    <>
    <Usernav/>
    <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
            <form 
          method="POST"
          className="w-100 rounded p-4 border bg-light"
          onSubmit={Registersubmit}
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
          <h3>Application Form</h3>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Your Name</span>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Type your full name"
              value={inputs.name || ""}
              onChange={setRegister}
              required
            />
          </label>
          <label className="d-block mb-4">
  <span className="d-block mb-2">Date Of Birth</span>
  <input
    name="dateofbirth"
    type="date"
    className="form-control"
    placeholder="Enter your Date of Birth"
    value={inputs.dateofbirth || ""}
    onChange={setRegister}
    required
  />
</label>

          <label className="d-block mb-4">
            <span className="d-block mb-2">Address</span>
            <textarea
              name="address"
              type="text"
              className="form-control"
              placeholder="Enter your Address"
              value={inputs.address || ""}
              onChange={setRegister}
              required
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Phone Number</span>
            <input
              name="phonenumber"
              type="number"
              className="form-control"
              placeholder="Enter your Phone Number"
              value={inputs.phonenumber|| ""}
              onChange={setRegister}
              required
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Email address</span>
            <input
              name="emailaddress"
              type="email"
              className="form-control"
              placeholder="Enter your Email"
              value={inputs.emailaddress || ""}
              onChange={setRegister}
              required
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Education</span>
            <input
             
              name="education"
              type="text"
              className="form-control"
              placeholder="Type your Current Education Level"
              value={inputs.education || ""}
              onChange={setRegister}
              required
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Skills</span>
            <input
              name="skills"
              type="text"
              className="form-control"
              placeholder="Type your Skills"
              value={inputs.skills || ""}
              onChange={setRegister}
              required
            />
          </label>

          <label className="d-block mb-4">
            <span className="d-block mb-2">Tell us more about yourself</span>
            <textarea
              name="aboutyourself"
              className="form-control"
              rows={3}
              placeholder="What motivates you?"
              value={inputs.aboutyourself || ""}
              onChange={setRegister}
              required
            />
          </label>
          
          <div className="d-flex justify-content-center">
            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3">
                Apply
              </button>
            </div>
          </div>
        </form>
            </div>
          </div>
        </div>
        <PublicUserFooter/>
        </>
  )
}

export default Applyjobportal