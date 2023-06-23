import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import AdminNav from './AdminNav'

const Adsearchvacancy = () => {
  return (
    <>
    <AdminNav/>
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
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">Python Developer</div>
        <div className="card-body text-center">
          <h5 className="card-title">Tata Consultancy Services</h5>
          <p className="card-text">
            Looking for freshers
          </p>
          <a href="adminjobdetails" className="btn btn-primary">
            View Salary &amp; More Info
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">Python Developer</div>
        <div className="card-body text-center">
          <h5 className="card-title">IBM</h5>
          <p className="card-text">
            Minimum three year experience
          </p>
          <a href="adminjobdetails" className="btn btn-primary">
            View Salary &amp; More Info
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">Python Developer</div>
        <div className="card-body text-center">
          <h5 className="card-title">Ikea</h5>
          <p className="card-text">
            Both for freshers and experience
          </p>
          <a href="adminjobdetails" className="btn btn-primary">
            View Salary &amp; More Info
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-8 mb-5">
      <div className="card">
        <div className="card-header text text-center">Python Developer</div>
        <div className="card-body text-center">
          <h5 className="card-title">Thomson Industries</h5>
          <p className="card-text">
            Required much communication skill
          </p>
          <a href="adminjobdetails" className="btn btn-primary">
            View Salary &amp; More Info
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default Adsearchvacancy