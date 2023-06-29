import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import Usernav from './Usernav'

const ViewJobs = () => {
  const headings = ['Unlock endless career possibilities with our job portal - where dreams meet opportunities', 
  'Discover your next adventure. Find the perfect job with our powerful job portal', 
  'Your gateway to success. Let our job portal open doors to your dreamcareer', 
  'Our cutting-edge job portal revolutionizes the way you find employment'];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 5000); // Change the interval duration (in milliseconds) as per your needs

    return () => clearInterval(interval);
  }, []);

  return (
    <>
   <Usernav/>
     <div className="container">
     <h1>{headings[currentHeadingIndex]}</h1>
</div> 
    <div className="container">
    <div className="row justify-content-center mb-5">
    <div className="col-md-4">
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search Jobs"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-primary">
          Search 
        </button>
      </div>
    </div>
  </div>
      <div className="row">
      <div className="col-md-4 mb-5">
          <div className="card"  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="card-header">IT JOBSs</div>
            <div className="card-body">
              <div>
              <h5 className="card-title">14 MNC Companies Hiring you..</h5>
              <p className="card-text">
                1000+ Vaccancies
              </p>
              <div>
              </div>
                   
        <a href="searchvacancy" className="btn btn-primary  d-flex justify-content-end"><i class="fa fa-arrow-right"></i></a>
         
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card"  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="card-header">ENGINEERING JOBS</div>
            <div className="card-body">
              <div>
              <h5 className="card-title">200 International Companies</h5>
              <p className="card-text">
                540+ Vaccancies
              </p>
              <div>

              </div>
                       
        <a href="searchvacancy" className="btn btn-primary  d-flex justify-content-end"><i class="fa fa-arrow-right"></i></a>
         
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card"  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="card-header">Sales and marketing JOBSs</div>
            <div className="card-body">
              <div>
              <h5 className="card-title">110 Companies</h5>
              <p className="card-text">
                1000+ Vaccancies
              </p>
              <div>
              </div>
                   
        <a href="searchvacancy" className="btn btn-primary  d-flex justify-content-end"><i class="fa fa-arrow-right"></i></a>
         
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="card-header">Digital Marketing</div>
            <div className="card-body">
            <div>
              <h5 className="card-title">54 Companies Started Hiring</h5>
              <p className="card-text">
                540+ Vaccancies
              </p>
              <div>
              </div>
              
        <a href="searchvacancy" className="btn btn-primary  d-flex justify-content-end"><i class="fa fa-arrow-right"></i></a>
             </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <div className="card-header">ENGINEERING JOBS</div>
            <div className="card-body">
            <div>
              <h5 className="card-title">200 International Companies</h5>
              <p className="card-text">
                540+ Vaccancies
              </p>
        
              <div>
              </div>
               
        <a href="searchvacancy" className="btn btn-primary  d-flex justify-content-end"><i class="fa fa-arrow-right"></i></a>
             </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card">
            <div className="card-header">Sales and marketing JOBSs</div>
            <div className="card-body"  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
              <h5 className="card-title">110 Companies</h5>
              <p className="card-text">
                1000+ Vaccancies
              </p>
              
              <div>
              </div>  
        <a href="searchvacancy" className="btn btn-primary  d-flex justify-content-end"><i class="fa fa-arrow-right"></i></a>
        
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  
    <PublicUserFooter/>
  </>
  
  )
}

export default ViewJobs

