import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Usernav from './Usernav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const InterviewStatus = () => {
  const  id  = localStorage.getItem('login_id');
  const [jobList, setJobList] = useState([]);
  const [List, setList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-applicants-chinnu/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJobList(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/apply/view-applicants-vishnu/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setList(data.data);
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
        <div
          className="row justify-content-start mb-5"
          style={{ marginTop: 50, backgroundColor: 'lightblue', color: 'white' }}
        >
          <div className="col-md-4">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="Usernotification">
                  Job vacancies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Interview Statuses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div id="w">
          <div id="content">
            {jobList.map((applicant) => (
              <div key={applicant._id} className="notify successbox">
                <h4>Company Name: {applicant.companyname}</h4>
                <p>
                  {applicant.jobname} <br />
                  Job Description:{applicant.jobdescription}
                </p>
                <button className="btn btn-primary">
                  <Link  to={`/noticeboard/${applicant._id}`}>Checkout Status</Link>
                 
                </button>
              </div>
            ))}
          </div>
          <div id="content">
            {List.map((shamliya) => (
              <div key={shamliya._id} className="notify successbox">
                <h4>Company Name: {shamliya.companyname}</h4>
                <h6> jobportal applied job</h6>
                <p>
                  {shamliya.jobname} <br />
                  Job Description:{shamliya.jobdescription}
                </p>
                <button className="btn btn-primary">
                  <Link  to={`/noticeboard/${shamliya._id}`}>Checkout Status</Link>
                 
                </button>
              </div>
            ))}
          </div>
          {/* @end #content */}
        </div>
        {/* @end #w */}
      </div>
      <PublicUserFooter />
    </>
  );
};

export default InterviewStatus;
