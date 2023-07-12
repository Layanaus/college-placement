import React, { useEffect } from 'react'
import { useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companynav from './Companynav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateJob = () => {
  const navigate = useNavigate()
  const [jobcategory, setjobCategory] = useState([]);

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
    axios.post('http://localhost:5000/register/create_job',inputs).then((response)=>{
      console.log(response.data);
        toast.success('job successfully added');
        setinputs({});
     
    })
    .catch((error) =>{
    console.log('Error:', error);
        toast.error('Failed to add job');
      });
  }
  const jobcategory_id = inputs.jobcategory; 
  const updatedInputs = { ...inputs, jobcategory_id };

  useEffect(() => {
    axios.get('http://localhost:5000/jobcategory/view-jobcategory')
      .then((response) => {
        setjobCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
    <Companynav/>
    <div className="container">
      <ToastContainer/>
      <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
        <i className="fa fa-book-reader" />
        Open Job Vaccancy Announcement
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
                    htmlFor="jobname"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Company name
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="email_address"
                      className="form-control"
                      name="companyname"
                      value={inputs.companyname || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="jobname"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Company location
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="email_address"
                      className="form-control"
                      name="companylocation"
                      value={inputs.companylocation || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="jobname"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Job name
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="email_address"
                      className="form-control"
                      name="jobname"
                      value={inputs.jobname || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                {/* <div className="form-group row">
                  <label
                    htmlFor="description"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Job decription
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="email_address"
                      className="form-control"
                      name="jobdescription"
                      value={inputs.jobdescription || ""}
                      onChange={setRegister}
                    />
                  </div>
                </div> */}
                <div className="form-group row">
  <label
    htmlFor="jobname"
    className="col-md-4 col-form-label text-md-right"
  >
    Job description
  </label>
  <div className="col-md-6">
    <textarea
      // id="email_address"
      className="form-control"
      name="jobdescription"
      rows='5'
      value={inputs.jobdescription|| ""}
      onChange={setRegister}
      required
    ></textarea>
  </div>
</div>

                <div className="form-group row">
  <label htmlFor="category" className="col-md-4 col-form-label text-md-right">
    Job Category
  </label>
  <div className="col-md-6" >
    <select id="category" className="form-control" name="jobcategory" value={inputs.jobcategory || ""}
    onChange={setRegister}>
      required
      <option value="">Select job category</option>
                {jobcategory.map((data)=>(
                  <option value={data._id}>{data.jobcategory}</option>
                ))}

    </select>
  </div>
</div>
                <div className="form-group row">
                  <label
                    htmlFor="vaccancy"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Vaccancy
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="full_name"
                      className="form-control"
                      name="vaccancy"
                      value={inputs.vaccancy || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="qualification"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Qualification
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="user_name"
                      className="form-control"
                      name="qualification"
                      value={inputs.qualification || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="salary"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Expected Salary
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="phone_number"
                      className="form-control"
                      name="expectedsalary"
                      value={inputs.expectedsalary || ""}
                      onChange={setRegister}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="branch"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Location
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      // id="present_address"
                      className="form-control"
                      name="branch"
                      value={inputs.branch || ""}
                      onChange={setRegister}
                      required
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
                    required
                  />
                </div>
              </div>
                <div className="col-md-6 offset-md-4">
                  <button type="submit" className="btn btn-primary">
                    Send Job Alert
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    {/* <div className="container">
      <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
        <i className="fa fa-book-reader" /> Opened Job Announcements
      </h3>
      <div className="row justify-content-center">
        <div className="col-md-8 mb-5">
          <div className="card">
          <div className="card-header text text-center d-flex justify-content-between">
            

            <div>Python Developer</div>
            <div className="dropdown">
 <button className="dropbtn">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={16}
     height={16}
     fill="currentColor"
     className="bi bi-three-dots-vertical"
     viewBox="0 0 16 16"
   >
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
   </svg>
 </button>
 <div className="dropdown-content">
 <a href="#">Edit</a>
   <a href="#">Remove</a>
 </div>
</div> 
             </div>
            <div className="card-body text-center">
              <h5 className="card-title">1400 Applications Recieved</h5>
              <p className="card-text">
              Aptitude Test in Ongoing..
              </p>
              <a href="Application" className="btn btn-primary mr-2">
  View Applicants
</a>

<a href="Notifyinterview" className="btn btn-primary">
  Notify Interview
</a>

            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 mb-5">
          <div className="card">
          <div className="card-header text text-center d-flex justify-content-between">
            

            <div>Python Developer</div>
            <div className="dropdown">
 <button className="dropbtn">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={16}
     height={16}
     fill="currentColor"
     className="bi bi-three-dots-vertical"
     viewBox="0 0 16 16"
   >
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
   </svg>
 </button>
 <div className="dropdown-content">
 <a href="#">Edit</a>
   <a href="#">Remove</a>
 </div>
</div> 
             </div>
            <div className="card-body text-center">
              <h5 className="card-title">Total 700 Applicatioons received</h5>


              <p className="card-text">
          <b style={{color:'red'}}>   Invite Them to Attend a Aptitude Test</b> 
              </p>
              <a href="Application" className="btn btn-primary mr-2">
  View Applicants
</a>

     
<a href="Notifyinterview" className="btn btn-primary">
  Notify Interview
</a>

            </div>
          </div>
        </div>
        
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 mb-5">
          <div className="card">
          <div className="card-header text text-center d-flex justify-content-between">
            

            <div>Python Developer</div>
            <div className="dropdown">
 <button className="dropbtn">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={16}
     height={16}
     fill="currentColor"
     className="bi bi-three-dots-vertical"
     viewBox="0 0 16 16"
   >
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
   </svg>
 </button>
 <div className="dropdown-content">
 <a href="#">Edit</a>
   <a href="#">Remove</a>
 </div>
</div> 
             </div>
            <div className="card-body text-center">
              <h5 className="card-title">700 Applicants</h5>


              <p className="card-text">
              Recieving Applicants still 12/09/2022
              </p>
              <a href="Application" className="btn btn-primary mr-2">
  View Applicants
</a>
   
<a href="Notifyinterview" className="btn btn-primary">
  Notify Interview
</a>

            </div>
          </div>
        </div>
        
      </div>
      <div className="row justify-content-center">
    <nav aria-label="Page navigation justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
    </div>
    <div id="overlay" className="overlay" style={{ display: "none" }}>
      <div className="message-box">
        <h3>Pop-up Message</h3>
        <p>
          You have already Notified your interview schedulings!Dou you want to
          Upadate?
        </p>
        <button onclick="redirectToPage()" className="btn btn-primary">
          Yes
        </button>
        <button onclick="hidenotifyalert()" className="btn btn-primary">
          No
        </button>
      </div>
      
    </div> */}
    <PublicUserFooter/>

  </>
  
  )
}

export default CreateJob