import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';
import Placementofficernav from '../PlacementOfficer/Placementofficernav';

const Adsearchvacancy = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-vaccancy`)
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = category.filter(
    (job) =>
      job.jobcategory === id &&
      job.jobname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminNav />
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
                value={searchQuery}
                onChange={handleSearch}
              />
              <button type="button" className="btn btn-outline-primary">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {filteredJobs.map((job) => (
            <div className="col-md-8 mb-5" key={job._id}>
              <div className="card">
                <div className="card-header text text-center">{job.jobname}</div>
                <div className="card-body text-center">
                  <h5 className="card-title">{job.companyname}</h5>
                  <h6 className="card-title">{job.companylocation}</h6>
                  <h6 className="card-title">{job.vaccancy}+vaccancy</h6>
                  <h6 className="card-title">Required qualification: {job.qualification}</h6>
                  <h6 className="card-title">Expected salary: {job.expectedsalary}</h6>
                  <h6 className="card-title">Location: {job.branch}</h6>
                  <h6 className="card-title">Last date: {job.lastdate}</h6>
                  <p className="card-text"></p>
                  <Link to={`/adminjobdetails/${job._id}`} className="btn btn-primary">
                    View salary & More info
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

export default Adsearchvacancy;
