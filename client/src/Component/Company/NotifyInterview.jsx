import React from 'react';
import { useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const NotifyInterview = () => {
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
        <h2>Notify Interview Date</h2>
        <form onSubmit={Registersubmit}>
         
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              value={inputs.message ||""}
              onChange={setRegister}
              rows={5}

            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewDate">Date:</label>
            <input type="date" className="form-control"  name="interviewdate"  value={inputs.interviewdate ||""}
            onChange={setRegister} />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default NotifyInterview;
