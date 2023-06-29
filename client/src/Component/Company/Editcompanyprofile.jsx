// import React from 'react';
import { useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Editcompanyprofile = () => {
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
      <Companynav />
      <div className="container">
        <h1 className="text-center"> Company Profile</h1>
        <form>
          <div className="form-group row" onSubmit={Registersubmit}>
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Company Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="companyname"
                placeholder="Companyname"
                value={inputs.companyname ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Location:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="location"
                placeholder="Location"
                value={inputs.location ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="e-mail" className="col-sm-2 col-form-label">E-mail:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="email"
                placeholder="E-mail"
                value={inputs.email ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
            <div className="col-sm-10">
              <input
                type="text"
                pattern="[0-9]*"
                className="form-control custom-input"
                name="phone"
                placeholder="Phone"
                value={inputs.phone ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="website" className="col-sm-2 col-form-label">Website Address:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="website"
                placeholder="Website Address"
                value={inputs.website ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                name="username"
                placeholder="Username"
                value={inputs.username ||""}
                onChange={setRegister}
              />
            </div>
          </div>
          
          <div className="form-group row" style={{marginLeft:'385px'}}>
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default Editcompanyprofile;
