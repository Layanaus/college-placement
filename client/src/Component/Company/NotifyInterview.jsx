import React from 'react';
import { useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NotifyInterview = () => {
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
    axios.post('http://localhost:5000/notify/create_interview',inputs).then((response)=>{
      navigate('/placementofficer')
    })
      
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
