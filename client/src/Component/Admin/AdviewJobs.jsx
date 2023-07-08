import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom';


const Adviewjobs = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobcategory/view-jobcategory')
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
   <AdminNav/>
     <div className="container">
    <div
  id="carouselExampleControls"
  className="carousel2 slide2 mb-5"
  data-ride="carousel2"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-caption">
        <h3>
          "Unlock endless career possibilities with our job portal - where
          dreams meet opportunities!"
        </h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        <h3>
          "Discover your next adventure. Find the perfect job with our powerful
          job portal."
        </h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        <h3>
          "Your gateway to success. Let our job portal open doors to your dream
          career."
        </h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        <h3>""Navigate your career path with confidence""</h3>
      </div>
    </div>
    <div className="carousel2-item">
      <div className="carousel2-caption">
        <h3>
          "Our cutting-edge job portal revolutionizes the way you find
          employment."
        </h3>
      </div>
    </div>
  </div>
</div>
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
      {category.map((job) => (
        <div className="col-md-4 mb-5" key={job._id}>
          <div className="card">
            <div className="card-header">{job.jobcategory}</div>
            <div className="card-body">
            
              <p className="card-text">
             + Vaccancies
              </p>
              <Link to={`/adsearchjob/${job._id}`} className="btn btn-primary">
              View vaccancies
              </Link>
              
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
    <div className="row justify-content-center" style={{marginTop:'30px'}}>
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
  
  
    <PublicUserFooter/>
  </>
  
  )
}

export default Adviewjobs

