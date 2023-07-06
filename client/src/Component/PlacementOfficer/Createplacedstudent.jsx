import React from 'react'
import { useState } from 'react';
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createplacedstudent = () => {

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
    axios.post('http://localhost:5000/create/create_placedstudent',inputs).then((response)=>{
      navigate('/placementofficer')
    })
      
  }
  return (
    <>
    <Placementofficernav/>
    <div className="container">
    <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
      <i className="fa fa-book-reader" />
      Create Placed Students in Our College
    </h3>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Add Placed Students in Our College</div>
          <div className="card-body">
            <form
              onSubmit={Registersubmit}
            >
           
              <div className="form-group row">
                <label
                  htmlFor="studentname"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Student Name
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="studentname"
                    value={inputs.studentname ||""}
                    onChange={setRegister}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="description"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Description
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={inputs.description ||""}
                    onChange={setRegister}
                  />
                </div>
              </div>
              <div className="form-group row">
  <label htmlFor="image" className="col-md-4 col-form-label text-md-right">
    Upload Image
  </label>
  <div className="col-md-6">
    <input
      type="file"
      className="form-control-file"
      name="image"
      value={inputs.image ||""}
      onChange={setRegister}
    />
  </div>
</div>

              
        
           
              
              
              <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Submit
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

export default Createplacedstudent