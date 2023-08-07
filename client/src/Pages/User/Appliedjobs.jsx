import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Usernav from '../../Component/User/Usernav';
import PublicUserFooter from '../../Component/Footer/PublicUserFooter';

const Appliedjobs = () => {
  const login_id = localStorage.getItem('login_id');
  const [appliedjobs, setAppliedjobs] = useState([]);
  const [jobportal, setJobportal] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-applicants-chinnu/${login_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setAppliedjobs(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/apply/view-applicants-vishnu/${login_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJobportal(data.data);
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
        <div className="row justify-content-center mb-5">
          <div className="btn-group" style={{ width: '50%' }}>
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Search by status of application
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button" onClick={() => setSelectedStatus('Eligible for aptitudetest')}>
                Eligible for Aptitude test
              </button>
              <button className="dropdown-item" type="button" onClick={() => setSelectedStatus('Not Eligible')}>
                Ineligible for Aptitude test
              </button>
              <button className="dropdown-item" type="button" onClick={() => setSelectedStatus('Applied')}>
               Applied jobs
              </button>
              <button className="dropdown-item" type="button" onClick={() => setSelectedStatus('All')}>
               All
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {jobportal
            .filter((jobs) => jobs.login_id === login_id)
            .filter((jobs) => selectedStatus === 'All' || jobs.application_status === selectedStatus)
            .map((jobs) => (
              <div className="col-md-8 mb-5" key={jobs._id}>
                <div className="card">
                  <div className="card-header text text-center">{jobs.jobname}</div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{jobs.companyname}</h5>
                    <p className="card-text">Applied on: {jobs.date}</p>
                    {jobs.application_status === 'Eligible for aptitudetest' ? (
                      <Link className="btn btn-primary" to={`/collegeaptitudetst/${jobs._id}/${jobs.company_id}/${jobs.job_id}`}>
                        Attend Aptitude Test
                      </Link>
                    ) : (
                      <button className="btn btn-primary" disabled>
                        {jobs.application_status}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="row justify-content-center">
          {appliedjobs
            .filter((job) => job.login_id === login_id)
            .filter((job) => selectedStatus === 'All' || job.application_status === selectedStatus)
            .map((job) => (
              <div className="col-md-8 mb-5" key={job._id}>
                <div className="card">
                  <div className="card-header text text-center">{job.jobname}</div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{job.companyname}</h5>
                    <p className="card-text">Applied on: {job.date}</p>
                    {job.application_status === 'Eligible for aptitudetest' ? (
                      <Link className="btn btn-primary" to={`/aptitudetst/${job._id}/${job.company_id}/${job.job_id}`}>
                        Attend Aptitude Test
                      </Link>
                    ) : (
                      <button className="btn btn-primary" disabled>
                        {job.application_status}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="row justify-content-center" style={{ marginTop: '30px' }}>
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
      <PublicUserFooter />
    </>
  );
};

export default Appliedjobs;
