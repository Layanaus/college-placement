import React, { useState, useEffect } from 'react';
import Placementofficernav from './Placementofficernav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import { useParams } from 'react-router-dom';

const ManageJobportal = () => {
  
const id=localStorage.getItem('login_id')
  const [category, setCategory] = useState([]);
console.log(category);
  useEffect(() => {
    fetch(`http://localhost:5000/register/view-portal/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const handleDeleteJob = (jobId) => {
    fetch(`http://localhost:5000/register/delete-job/${jobId}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Job deleted successfully, update the state or perform any necessary actions
        } else {
          // Handle error case
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  return (
    <>
    <Placementofficernav/>
    <div className="container">
  <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
    <i className="fa fa-book-reader" />
   Manage Job Portal
  </h3>
  <div className="row justify-content-center">
  {category.map((job) => (
    <div className="col-md-8 mb-5"  key={job._id}>
      <div className="card" style={{borderRadius:'10PX'}}>
       
        <div className="card-header text text-center d-flex justify-content-between">
            

            <div>{job.jobname}</div>
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
    <button onClick={() => handleDeleteJob(job._id)}>Delete</button>
 </div>
</div> 
             </div>
        <div className="card-body text-center">
        <h5 className="companyhead">{job.companyname}</h5>
        <h5 className="card-title">
  <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;{job.companylocation}
</h5>

<h5 className="card-title">
  <span className="job-description-icon">&#8226;</span> {job.jobdescription}
</h5>


          <h5 className="card-title">
          Qualification:{job.Requiredqualification
         }
          </h5>
          <h5 className="card-title">
          Salary Range:{job.salaryrange}
          </h5>
          <h5 className="card-title">
         Company Contact:{job.companycontact}
          </h5>
          <h5 className="card-title">
         Lastdate:{job.lastdate}
          </h5>
          <a href="jobportalviewstudents" className="btn btn-primary mr-2">
  View Applied Students
</a>
        </div>
      </div>
    </div>    ))}
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
<PublicUserFooter/>
</>
  )
}

export default ManageJobportal