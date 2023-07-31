import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Usernav from './Usernav';
import { Link, useParams } from 'react-router-dom';

const SearchVacancy = () => {
  const [viewJobs, setViewJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:5000/register/view-vaccancy')
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
      <Usernav />
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchQuery} // Bind input value to the searchQuery state
                onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state on input change
              />
              <button type="button" className="btn btn-outline-primary">
                search
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {viewJobs
            .filter((job) => job.jobcategory === id) // Filter based on job category
            .filter((job) =>
              job.jobname.toLowerCase().includes(searchQuery.toLowerCase()) ||
              job.companyname.toLowerCase().includes(searchQuery.toLowerCase()) ||
              job.companylocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
              job.qualification.toLowerCase().includes(searchQuery.toLowerCase())
            ) // Filter based on search query (case-insensitive)
            .map((job) => (
              <div className="col-md-8 mb-5" key={job._id}>
                <div className="card">
                  <div className="card-header text text-center">{job.jobname}</div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{job.companyname}</h5>
                    <h6 className="card-title">{job.companylocation}</h6>
                    <h6 className="card-title">{job.vaccancy}+vaccancy</h6>
                    <h6 className="card-title">Required Qualification: {job.qualification}</h6>
                    <h5 className="card-title">Expected Salary: {job.expectedsalary}</h5>
                    <h6 className="card-title">Last date: {job.lastdate}</h6>
                    <Link to={`/Jobdetails/${job._id}/${job.company_id}`} className="btn btn-primary">
                      View Salary &amp; More Info
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

export default SearchVacancy;
