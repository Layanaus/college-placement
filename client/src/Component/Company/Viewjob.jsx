import React, { useEffect, useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import { Link, useParams } from 'react-router-dom';

const Viewjob = () => {
  const { cid } = useParams();
  const id = localStorage.getItem('login_id');
  const [category, setCategory] = useState([]);
  const [job, setJob] = useState([]);
  const type = 'college';
  const type2 = 'company';

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-jobs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/register/viewjobportal-jobs`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJob(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const [numMatches, setNumMatches] = useState({});
  const [numMatchesForJob, setNumMatchesForJob] = useState({}); // State to store the application count for the jobs in the 'job' list

  useEffect(() => {
    // Fetch the number of applications for each job in the 'category' list
    category.forEach((job) => {
      fetch(`http://localhost:5000/register/get-applications/${job._id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setNumMatches((prevNumMatches) => ({
              ...prevNumMatches,
              [job._id]: data.numMatches,
            }));
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    });

    // Fetch the number of applications for each job in the 'job' list
    job.forEach((job) => {
      fetch(`http://localhost:5000/register/get-applicant/${job._id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setNumMatchesForJob((prevNumMatches) => ({
              ...prevNumMatches,
              [job._id]: data.num,
            }));
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    });
  }, [category, job]);
 
  const handleDeleteJob = (jobId) => {
    fetch(`http://localhost:5000/register/job/${jobId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // If the job was deleted successfully, you can update the job list
          setJob((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
          console.log('Job deleted successfully');
        } else {
          console.log('Failed to delete job:', data.message);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <>
      <Companynav />
      <div className="container">
        <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
          <i className="fa fa-book-reader" /> Opened Job Announcements
        </h3>
        <div className="row justify-content-center">
          {category.map((job) => (
            <div className="col-md-8 mb-5" key={job._id}>
              <div className="card">
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
                      <Link to={`/editcreatejob/${job._id}`}>Edit</Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteJob(job._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {numMatches[job._id]} Applications Received
                  </h5>
                  <p className="card-text">Created On: {job.date}</p>
                  <p className="card-text">{job.status}</p>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/Application/${job._id}/${type2}`}
                  >
                    View Applicants
                  </Link>
                  <Link
                    className="btn btn-primary"
                    to={`/Notifyinterview/${job._id}`}
                  >
                    Notify Interview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          {job
            .filter((job) => job.company_id === id)
            .map((jobs) => (
              <div className="col-md-8 mb-5" key={jobs._id}>
                <div className="card">
                  <div className="card-header text text-center d-flex justify-content-between">
                    <div>{jobs.jobname}</div>
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
                        <button
                          onClick={() => handleDeleteJob(jobs._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {numMatchesForJob[jobs._id]} Applications Received
                    </h5>
                    <p className="card-text">Created On: {jobs.date}</p>
                    <p className="card-text">Created by: {jobs.collegename}</p>
                    <p className="card-text">{jobs.status}</p>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/Application/${jobs._id}/${type}`}
                    >
                      View Applicants
                    </Link>
                    <Link
                      className="btn btn-primary"
                      to={`/Notifyinterview/${jobs._id}`}
                    >
                      Notify Interview
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default Viewjob;
