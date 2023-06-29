import React from 'react'
import { useState } from 'react';
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateJobportal = () => {
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
    axios.post('http://localhost:5000/register/create_jobportal',inputs).then((response)=>{
      navigate('/placementofficer')
    })
      
  }
  return (
    <>
    <Placementofficernav/>
    <div className="container">
    <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
      <i className="fa fa-book-reader" />
      Create job portal
    </h3>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Add latest job vaccancies</div>
          <div className="card-body">
            <form
              name="my-form"
              onSubmit={Registersubmit}
             
            >
              <div className="form-group row">
                <label
                  htmlFor="full_name"
                  className="col-md-4 col-form-label text-md-right"
                  
                >
                  Company Name
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="companyname"
                    value={inputs.companyname || ""}
                    onChange={setRegister}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="location"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Company Location
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="companylocation"
                    value={inputs.companylocation || ""}
                    onChange={setRegister}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="jobtype"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Job Name
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="jobname"
                    value={inputs.jobname || ""}
                    onChange={setRegister}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="description"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Job Description
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="jobdescription"
                    value={inputs.jobdescription || ""}
                    onChange={setRegister}
                  />
                </div>
              </div>
              {/* <div className="form-group row">
                <label
                  htmlFor="category"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Job Category
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="category"
                    className="form-control"
                    name="category"
                  />
                </div>
              </div> */}
              <div className="form-group row">
  <label htmlFor="category" className="col-md-4 col-form-label text-md-right">
    Job Category
  </label>
  <div className="col-md-6" >
    <select id="category" className="form-control" name="jobcategory" value={inputs.jobcategory || ""}
    onChange={setRegister}>
      <option value="">Select Job Category</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
    </select>
  </div>
</div>

              {/* <div className="form-group row">
                <label
                  htmlFor="email_address"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Experience
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="email_address"
                    className="form-control"
                    name="email-address"
                  />
                </div>
              </div> */}
              <div className="form-group row">
                <label
                  htmlFor="user_name"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Required Qualification
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="qualification"
                    value={inputs.qualification || ""}
                    onChange={setRegister}
                  />
                </div>
              </div>
             
              <div className="form-group row">
                <label
                  htmlFor="salaryrange"
                  className="col-md-4 col-form-label text-md-right"
                >
                   Salary Range
                </label>
                <div className="col-md-6">
                  <input  id="salaryrange" className="form-control" name="salaryrange" value={inputs.salaryrange || ""}
                    onChange={setRegister}/>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="contact"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Company contact
                </label>
                <div className="col-md-6">
                  <input
                    type="number"
                    name="companycontact"
                    className="form-control"
                    value={inputs.companycontact || ""}
                    onChange={setRegister}
                    
                  />
                </div>
              </div>
              
              <div className="form-group row">
                <label
                  htmlFor="lastdate"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Last Date
                </label>
                <div className="col-md-6">
                  <input
                    type="date"
                   name="lastdate"
                    className="form-control"
                    value={inputs.lastdate || ""}
                    onChange={setRegister}
                  />
                </div>
              </div>
              <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Create Job 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <PublicUserFooter/>
  </>
  )
}

export default CreateJobportal