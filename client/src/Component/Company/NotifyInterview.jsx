import React from 'react';
import { useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const NotifyInterview = () => {
  const {id}=useParams();
  const login_id=localStorage.getItem('login_id');
  const navigate = useNavigate()
  const[inputs, setinputs]=useState({
    login_id:login_id,
    job_id:id,
  });
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
      
    })
      
  }
  return (
    <>
      <Companynav />
      <div className="container">
        <h3>Notify Interview Date</h3>
        <form onSubmit={Registersubmit}>
         
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              value={inputs.message ||""}
              onChange={setRegister}
              required
              rows={5}

            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewDate">Date:</label>
            <input type="date" className="form-control"  name="interviewdate"  value={inputs.interviewdate ||""}
            onChange={setRegister} required />
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