import React, { useState } from 'react';
import Usernav from './Usernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Applyjobportal = () => {
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
          <label className="d-block mb-4">
            <span className="d-block mb-2">Enter Your Name</span>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Type your full name"
              value={inputs.name || ""}
              onChange={setRegister}
            />
          </label>
          <label className="d-block mb-4">
  <span className="d-block mb-2">Date Of Birth</span>
  <input
    name="dob"
    type="date"
    className="form-control"
    placeholder="Enter your Date of Birth"
    value={inputs.dob || ""}
    onChange={setRegister}
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
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Phone Number</span>
            <input
              name="phone"
              type="number"
              className="form-control"
              placeholder="Enter your Phone Number"
              value={inputs.phone || ""}
              onChange={setRegister}
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Email address</span>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your Email"
              value={inputs.email || ""}
              onChange={setRegister}
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Enter Your Education</span>
            <input
             
              name="education"
              type="text"
              className="form-control"
              placeholder="Type your Current Education Level"
              value={inputs.education || ""}
              onChange={setRegister}
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Enter Your Skills</span>
            <input
              name="skills"
              type="text"
              className="form-control"
              placeholder="Type your Skills"
              value={inputs.skills || ""}
              onChange={setRegister}
            />
          </label>

          <label className="d-block mb-4">
            <span className="d-block mb-2">Tell us more about yourself</span>
            <textarea
              name="message"
              className="form-control"
              rows={3}
              placeholder="What motivates you?"
              value={inputs.message || ""}
              onChange={setRegister}
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