// import React from 'react'
// import PublicUserFooter from '../Footer/PublicUserFooter'
// import Usernav from './Usernav'

// const Jobdetails = () => {
//   return (
    
//     <>
//     <Usernav/>
//   <div className="container">
//     <h2>Job Details</h2>
//     <ul>
//       <li>
//         A Python developer might work as a Software Engineer, Data Analyst, Data
//         Scientist, Machine Learning Engineer, or Web developer. Python
//         programmers help businesses with their technology infrastructure. They
//         keep an eye on how data moves between servers and users. Python
//         developers use the Python programming language to carry out tasks or
//         respond to inquiries. They are able to crunch data, create the back ends
//         of online applications, and automate processes. Python programmers can
//         work as independent contractors for an organisation.
//       </li>
//       <li>
//         Python Developer Skills And Qualifications Python developer should have
//         in-depth knowledge of the programming language.
//       </li>
//       <li>
//         Python Developer Salary Expectations Python developers salaries in India
//         have increased dramatically after Data Science came into the picture. A
//         Python developer’s average annual salary in India is ₹8,15,153.
//         According to the years of experience, the salary ranges between ₹2 Lakhs
//         to ₹9 Lakhs.
//       </li>
//     </ul>
//   </div>
//   <center>
//     <button className="btn-primary">Apply Now</button>
//   </center>
//   <div className="container">
//     <div className="row justify-content-center">
//       <div className="col-md-8 text-center">
//         <form
//           method="POST"
//           className="w-100 rounded p-4 border bg-dark"
//           action="https://herotofu.com/start"
//           encType="multipart/form-data"
//         >
//           <label className="d-block mb-4">
//             <span className="d-block mb-2">Your name</span>
//             <input
//               required=""
//               name="name"
//               type="text"
//               className="form-control"
//               placeholder="Type your full name"
//             />
//           </label>
//           <label className="d-block mb-4">
//             <span className="d-block mb-2">Email address</span>
//             <input
//               required=""
//               name="email"
//               type="email"
//               className="form-control"
//               placeholder="Enter your Email"
//             />
//           </label>
//           <label className="d-block mb-4">
//             <span className="d-block mb-2">Years of experience</span>
//             <select name="experience" className="custom-select">
//               <option>Less than a year</option>
//               <option>1 - 2 years</option>
//               <option>2 - 4 years</option>
//               <option>4 - 7 years</option>
//               <option>7 - 10 years</option>
//               <option>10+ years</option>
//             </select>
//           </label>
//           <label className="d-block mb-4">
//             <span className="d-block mb-2">Tell us more about yourself</span>
//             <textarea
//               name="message"
//               className="form-control"
//               rows={3}
//               placeholder="What motivates you?"
//               defaultValue={""}
//             />
//           </label>
//           <div className="mb-4">
//             <label className="d-block mb-2">Your CV</label>
//             <div className="form-control h-auto">
//               <input
//                 required=""
//                 name="cv"
//                 type="file"
//                 className="form-control-file"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <div>
//               <label className="custom-control custom-radio">
//                 <input
//                   name="remote"
//                   defaultValue="yes"
//                   type="radio"
//                   className="custom-control-input"
//                   defaultChecked=""
//                 />
//                 <span className="d-inline-block mt-1 custom-control-label">
//                   You'd like to work remotely
//                 </span>
//               </label>
//             </div>
//             <div>
//               <label className="custom-control custom-radio">
//                 <input
//                   name="remote"
//                   defaultValue="no"
//                   type="radio"
//                   className="custom-control-input"
//                 />
//                 <span className="d-inline-block mt-1 custom-control-label">
//                   You'd prefer to work onsite
//                 </span>
//               </label>
//             </div>
//           </div>
//           <div className="d-block text-right">
//             <div className="mb-3">
//               <button type="submit" className="btn btn-primary px-3">
//                 Apply
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   <PublicUserFooter/>
// </>

//   )
// }

// export default Jobdetails


import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Usernav from './Usernav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';


const Jobdetails = () => {
  const login_id=localStorage.getItem('login_id');
 
  const [viewJobs, setViewJobs] = useState([]);
  const [category, setCategory] = useState([]);
  const {id,company_id} = useParams()
  const navigate = useNavigate()
  const[inputs, setinputs]=useState({
    login_id:login_id,
 
  });
  console.log(login_id);
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

  const job_id = category.length > 0 ? category[0]._id : null;
  const updatedInputs = { ...inputs, job_id , company_id};
  axios.post('http://localhost:5000/register/job_application',updatedInputs).then((response)=>{
    navigate('/user')
  })
    
}


 

  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const handleApplyClick = () => {
    setShowForm(true);
    setShowDetails(false);

  };
  useEffect(() => {
    fetch(`http://localhost:5000/register/view-jobdescription/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.users);
        if (data.success) {
          setCategory(data.data);
          
         
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <Usernav />
      <div className="container">
  {showDetails && (
    <>
     <h1>Job Details</h1>
        <ul>
          {category.map((job, index) => (
            <li key={index}>{job.jobdescription}</li>
          ))}
        </ul>
        <ul>
         
          
          <li>
            {/* <table>
              <tr>
                <td>Job Location</td>
                <td>calicut</td>
              </tr>
              <tr>
                <td>Job Type</td>
                <td>python Developer</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>12 hrs</td>
              </tr>
              <tr>
                <td>Qualifications</td>
                <td>bca</td>
              </tr>
              <tr>
                <td>Benefits</td>
                <td>high demosation</td>
              </tr>
              <tr>
                <td>Salary or Compensation</td>
                <td>50 k</td>
              </tr>
              <tr>
                <td>Application Deadline</td>
                <td>12/25/2022</td>
              </tr>
            </table> */}
          </li>
        </ul>
     
      
    </>
  )}
</div>

      <center>
        {!showForm && (
          <button className="btn-primary" onClick={handleApplyClick}>
            Apply Now
          </button>
        )}
      </center>
      {showForm && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
            <form
          method="POST"
          className="w-100 rounded p-4 border bg-light"
          onSubmit={Registersubmit}
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
          <h3>Application Form</h3>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Your Name</span>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={inputs.name || ""}
              onChange={setRegister}
              required
            />
          </label>
          <label className="d-block mb-4">
  <span className="d-block mb-2">Date Of Birth</span>
  <input
    name="dateofbirth"
    type="date"
    className="form-control"
    placeholder="Enter your Date of Birth"
    value={inputs.dateofbirth || ""}
    onChange={setRegister}
    required
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
    required
  />
</label>
<label className="d-block mb-4">
            <span className="d-block mb-2">Phone No</span>
            <input
              name="phonenumber"
              type="number"
              className="form-control"
              placeholder="Enter your Phone No"
              value={inputs. phonenumber || ""}
              onChange={setRegister}
              required
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Email address</span>
            <input
              required=""
              name="emailaddress"
              type="email"
              className="form-control"
              placeholder="Enter your Email"
              value={inputs.emailaddress || ""}
              onChange={setRegister}
              
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2"> Education</span>
            <input
              required=""
              name="education"
              type="text"
              className="form-control"
              placeholder="Type your current educational level"
              value={inputs.education || ""}
              onChange={setRegister}
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Skills</span>
            <input
              name="skills"
              type="text"
              className="form-control"
              placeholder="Type your Skills"
              value={inputs.skills || ""}
              onChange={setRegister}
              required
            />
          </label>
          {/* <label className="d-block mb-4">
            <span className="d-block mb-2">Years of experience</span>
            <select name="experience" className="custom-select">
              <option>Less than a year</option>
              <option>1 - 2 years</option>
              <option>2 - 4 years</option>
              <option>4 - 7 years</option>
              <option>7 - 10 years</option>
              <option>10+ years</option>
            </select>
          </label> */}
          <label className="d-block mb-4">
            <span className="d-block mb-2">Tell us more about yourself</span>
            <textarea
              name="aboutyourself"
              className="form-control"
              rows={3}
              placeholder="What motivates you?"
              value={inputs.aboutyourself|| ""}
              onChange={setRegister}
              required
            />
          </label>
          
          
              
          {/* <div className="d-block text-right">
            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3" >
                Apply
              </button>
            </div>
          </div> */}
          <div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-primary px-3">
    Apply
  </button>
</div>

        </form>
            </div>
          </div>
        </div>
      )}
      <PublicUserFooter />
    </>
  );
};

export default Jobdetails;
