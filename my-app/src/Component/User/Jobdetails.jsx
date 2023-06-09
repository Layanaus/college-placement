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


import React, { useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Usernav from './Usernav';

const Jobdetails = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <Usernav />
      <div className="container">
        <h2>Job Details</h2>
        <ul>
      <li>
        A Python developer might work as a Software Engineer, Data Analyst, Data
        Scientist, Machine Learning Engineer, or Web developer. Python
        programmers help businesses with their technology infrastructure. They
        keep an eye on how data moves between servers and users. Python
        developers use the Python programming language to carry out tasks or
        respond to inquiries. They are able to crunch data, create the back ends
        of online applications, and automate processes. Python programmers can
        work as independent contractors for an organisation.
      </li>
      <li>
        Python Developer Skills And Qualifications Python developer should have
        in-depth knowledge of the programming language.
      </li>
      <li>
        Python Developer Salary Expectations Python developers salaries in India
        have increased dramatically after Data Science came into the picture. A
        Python developer’s average annual salary in India is ₹8,15,153.
        According to the years of experience, the salary ranges between ₹2 Lakhs
        to ₹9 Lakhs.
      </li>
    </ul>
      </div>
      <center>
        {!showForm && (
          <button className="btn-primary" onClick={handleApplyClick}>
            Apply Now
          </button>
        )}
      </center>
      {showForm && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
            <form
          method="POST"
          className="w-100 rounded p-4 border bg-dark"
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
          <label className="d-block mb-4">
            <span className="d-block mb-2">Your name</span>
            <input
              required=""
              name="name"
              type="text"
              className="form-control"
              placeholder="Type your full name"
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Email address</span>
            <input
              required=""
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your Email"
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Years of experience</span>
            <select name="experience" className="custom-select">
              <option>Less than a year</option>
              <option>1 - 2 years</option>
              <option>2 - 4 years</option>
              <option>4 - 7 years</option>
              <option>7 - 10 years</option>
              <option>10+ years</option>
            </select>
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Tell us more about yourself</span>
            <textarea
              name="message"
              className="form-control"
              rows={3}
              placeholder="What motivates you?"
              defaultValue={""}
            />
          </label>
          <div className="mb-4">
            <label className="d-block mb-2">Your CV</label>
            <div className="form-control h-auto">
              <input
                required=""
                name="cv"
                type="file"
                className="form-control-file"
              />
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="custom-control custom-radio">
                <input
                  name="remote"
                  defaultValue="yes"
                  type="radio"
                  className="custom-control-input"
                  defaultChecked=""
                />
                <span className="d-inline-block mt-1 custom-control-label">
                  You'd like to work remotely
                </span>
              </label>
            </div>
            <div>
              <label className="custom-control custom-radio">
                <input
                  name="remote"
                  defaultValue="no"
                  type="radio"
                  className="custom-control-input"
                />
                <span className="d-inline-block mt-1 custom-control-label">
                  You'd prefer to work onsite
                </span>
              </label>
            </div>
          </div>
          <div className="d-block text-right">
            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3">
                Apply
              </button>
            </div>
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
