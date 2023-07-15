import React, { useState, useEffect } from 'react';
import Usernav from './Usernav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import { Link, useParams } from 'react-router-dom';




const Applyjobs = () => {
  const {id}=useParams()
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-jobportal/${id}`)
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

  return (
    <>
      <Usernav />
      <div className="container">
      <div className="row">
  <div className="col-lg-10 mx-auto">
    <div className="career-search mb-60">
      <form action="#" className="career-form mb-60">
        {/* Search form code */}
        <div className="row">
          <div className="col-md-6 col-lg-3 my-3">
            <div className="select-container" style={{marginLeft:'50px',width:'250px'}}>
              <select className="custom-select">
                <option selected="">Location</option>
                <option value={1}>Jaipur</option>
                <option value={2}>Pune</option>
                <option value={3}>Bangalore</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-3">
            <div className="select-container">
              <select className="custom-select" style={{marginLeft:'150px',width:'250px'}}>
                <option selected="">Select Job Type</option>
                <option value={1}>Ui designer</option>
                <option value={2}>JS developer</option>
                <option value={3}>Web developer</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-3"  style={{marginLeft:'200px',width:'200px'}}>
            <button
              type="button"
              className="btn btn-lg btn-block btn-light btn-custom"
              id="contact-submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    
 
             
              <div className="filter-result">
                <p className="mb-30 ff-montserrat">
                  Total Job Openings: {jobList.length}
                </p>
                {jobList.map((job) => (
                  <div
                    className="job-box d-md-flex align-items-center justify-content-between mb-30"
                    key={job._id}
                  >
                    <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                      <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                        FD
                      </div>
                      <div className="job-content">
                        <h5 className="text-center text-md-left">
                          {job.jobname}
                        </h5>
                        <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                          <li className="mr-md-4">
                            <i className="zmdi zmdi-pin mr-2" />{' '}
                            Location:{job.companylocation}
                          </li>
                          <li className="mr-md-4">
                            <i className="zmdi zmdi-money mr-2" />{' '}
                           Salary Range:{job.salaryrange}
                          </li>
                          <li className="mr-md-4">
                            <i className="zmdi zmdi-time mr-2" /> Full Time
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="job-right my-4 flex-shrink-0">
                      <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li>
                       {/* <a
                            href="PJobdetails"
                            className="btn btn-light"
                          >
                            More Details
                          </a> */}
                           
<Link className='btn btn-light' to ={`/PJobdetails/${job._id} `}>More Details</Link>
                        </li>
                        <li>
                          <Link
                           to={`/applyjobportal/${job._id} `}
                            className="btn d-block w-100 d-sm-inline-block btn-primary ml-4"
                          >
                            Apply now
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
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
        </div>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default Applyjobs;
