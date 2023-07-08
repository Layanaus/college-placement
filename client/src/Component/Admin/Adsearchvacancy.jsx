import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import { Link, useParams } from 'react-router-dom';
import Placementofficernav from '../PlacementOfficer/Placementofficernav';



const Adsearchvacancy = () => {
  const [category, setCategory] = useState([]);
  const {id} = useParams()

  useEffect(() => {
   
    fetch(`http://localhost:5000/register/view-companyjobs/${id}`)
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
  return (
    <>
    <Placementofficernav/>
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
        />
        <button type="button" className="btn btn-outline-primary">
          search
        </button>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
  {category.map((job) => (
    <div className="col-md-8 mb-5" key={job._id}>
      <div className="card">
        <div className="card-header text text-center">{job.jobname}</div>
        <div className="card-body text-center">
          <h5 className="card-title">Company Name</h5>
          <h6 className="card-title">Company Location</h6>
          <h6 className="card-title">{job.vaccancy}+vaccancy</h6>
          <h6 className="card-title">Required qualification:{job.qualification}</h6>
          <h6 className="card-title">Expected salary:{job.expectedsalary}</h6>
          <h6 className="card-title">Location:{job.branch}</h6>
          <h6 className="card-title">Last date:{job.lastdate}</h6>
          <p className="card-text">
           
          </p>
          <Link to={`/adminjobdetails/${job._id}`} className="btn btn-primary">
              View salary & More info
              </Link>
          
        </div>
      </div>
    </div>
     ))}
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default Adsearchvacancy