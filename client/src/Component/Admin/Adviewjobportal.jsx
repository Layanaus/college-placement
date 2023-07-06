import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import AdminNav from './AdminNav';
import axios from 'axios';

const Adviewjobportal = () => {
  const [viewJobs, setViewJobs] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [college, setCollege] = useState([]);

  const handleButtonClick = () => {
    setShowCards(true);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/register/view-college')
      .then((response) => {
        setCollege(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/register/view-jobportal')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setViewJobs(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <AdminNav />
      <div className="container">
        <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
          <i className="fa fa-book-reader" /> View Job Portal
        </h3>
        <div className="row justify-content-center">
          <div className="col-md-8 mb-5">
            <div className="form-group">
              <label htmlFor="job1">University Colleges:</label>
              <select className="form-control" id="job1">
                {college.map((data) => (
                  <option value={data._id}>{data.collegename}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <div className="text-center">
                <input
                  type="button"
                  value="Submit"
                  onClick={handleButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
        {showCards && (
          <>
            <div className="row justify-content-center">
              {viewJobs.map((job) => (
                <div className="col-md-8 mb-5" key={job._id}>
                  <div className="card job-card">
                    <div className="card-header text-center">{job.jobname}</div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            <strong>Company Location:</strong> {job.companylocation}
                          </p>
                          <p>
                            <strong>Job Category:</strong> {job.jobcategory}
                          </p>
                          <p>
                            <strong>Required Qualification:</strong> {job.qualification}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            <strong>Salary Range:</strong> {job.salaryrange} (per month)
                          </p>
                          <p>
                            <strong>Company Contact:</strong> {job.companycontact}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5>Job Description:</h5>
                        <p>{job.jobdescription}</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
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
      <PublicUserFooter />
    </>
  );
};

export default Adviewjobportal;
