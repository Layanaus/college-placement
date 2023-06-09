import React from 'react'
import { useState } from 'react';

const UserReg = () => {
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
  return (
    <>

    {/* Navbar End */}
    <div className="page-content" style={{ textAlign: "center" }}>
      <div className="form-v10-content">
        <form className="form-detail" onSubmit={Registersubmit} method="post" id="myform">
          <div className="form-left">
            <center>
              <h2>Student Registration</h2>
            </center>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={inputs.first_name ||""}
                  onChange={setRegister}
                  
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="username"
                  
                
                  placeholder=" username"
                  value={inputs.username ||""}
                  onChange={setRegister}
                  
                />
              </div>
            </div>
            <div className="form-row  form-row-3">
              <input
                type="text"
                name="address"
               
                
                placeholder="Address"
                value={inputs.address ||""}
                  onChange={setRegister}
                
                style={{ textAlign: "left" }}
              />
            </div>
            <div className="form-row">
              <select name="position" onChange={setRegister}>
                <option value="qualification">Qualitfication</option>
                <option value="Post Graduated">Post Graduated</option>
                <option value="Graduated">Graduated</option>
                <option value="Higher Studies">Higher Studies </option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
            </div>
            <div className="form-row">
              <input
                type="date"
                name="dob"
              
                placeholder="DOB"
                value={inputs.dob ||""}
                  onChange={setRegister}
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
            <div class="form-row">
  <label className="labels">Applicant Image</label>
  <input type="file" class="form-control-file" name="file4"/>
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
              <select name="position" onChange={setRegister}>
                <option value="choose college">Choose College</option>
                <option >College name1 </option>
                <option >College name2 </option>
                <option >College name2  </option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
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
                
                
                placeholder="Confirm-Passoword"
                value={inputs.cnf_password ||""}
                  onChange={setRegister}
              />
            </div>
            <center>
              <div className="register">
                <input
                  type="submit"
                  name="register"
                  className="btn-primary"
                  defaultValue="Register Badge"
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

export default UserReg