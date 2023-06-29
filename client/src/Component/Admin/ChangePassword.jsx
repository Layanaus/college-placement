import React from 'react'
import { useState } from 'react';

const ChangePassword = () => {
  const[inputs, setinputs]=useState({});
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);

  }
  return (
   <>
  
   <div className="container">
  <div className="changecard">
    <h1 className="card-title" style={{textAlign:'center'}}>Change Password</h1>
    <form onSubmit={registersubmit}>
   
      <div className="form-group">
        <label htmlFor="currentPassword" style={{fontWeight:'bold'}}>Current Password:</label>
        <input
          type="password"
          name="currentpassword"
          className="form-control"
          id="currentPassword"
          placeholder="Enter current password"
          value={inputs.currentpassword || ""}
          onChange={setRegister}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword" style={{fontWeight:'bold'}}>New Password:</label>
        <input
          type="password"
          name="newPassword"
          className="form-control"
          id="newPassword"
          placeholder="Enter new password"
          value={inputs.newPassword || ""}
          onChange={setRegister}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword" style={{fontWeight:'bold'}}>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirm new password"
          value={inputs.confirmPassword || ""}
          onChange={setRegister}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Change Password
      </button>
    </form>
  </div>
</div>

   </>
  )
}

export default ChangePassword